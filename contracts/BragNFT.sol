// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./IDonationReceipt.sol";

interface IBragToken {
    function mint(address to, uint256 amount) external;
}

/**
 * @title BragNFT
 * @dev A transferable NFT that can be exhibited. Minted upon donation along with a soulbound receipt.
 * Uses AccessControl for flexible permissions.
 */
contract BragNFT is ERC721URIStorage, AccessControl, ReentrancyGuard, IERC2981 {
    using Strings for uint256;

    uint256 private _nextTokenId;
    uint256 public maxSupply;
    address public treasury;
    uint256 public minimumDonation;
    IDonationReceipt public receiptContract;
    IBragToken public bragToken;

    // EIP-2981 Royalty Support
    uint96 public royaltyFeeNumerator = 500; // 5% by default

    // Link between BragNFT tokenId and DonationReceipt tokenId
    mapping(uint256 => uint256) public nftToReceipt;

    // Optional on-chain media storage
    mapping(uint256 => string) public onChainMedia;

    event Donated(address indexed donor, uint256 amount, uint256 nftTokenId, uint256 receiptTokenId, string message);

    constructor(address _initialOwner, address _treasury, uint256 _minimumDonation)
        ERC721("BragNFT", "BRAGNFT")
    {
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
        treasury = _treasury;
        minimumDonation = _minimumDonation;
        maxSupply = 100; // Default max supply
    }

    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }

    function setMaxSupply(uint256 _maxSupply) external onlyRole(DEFAULT_ADMIN_ROLE) {
        maxSupply = _maxSupply;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage, AccessControl, IERC165) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId);
    }

    function setRoyaltyFeeNumerator(uint96 _feeNumerator) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_feeNumerator <= 10000, "Fee cannot exceed 100%");
        royaltyFeeNumerator = _feeNumerator;
    }

    /**
     * @dev EIP-2981 royaltyInfo implementation.
     */
    function royaltyInfo(uint256, uint256 salePrice) external view override returns (address, uint256) {
        uint256 royaltyAmount = (salePrice * royaltyFeeNumerator) / 10000;
        return (treasury, royaltyAmount);
    }

    function setTreasury(address _treasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_treasury != address(0), "Invalid treasury address");
        treasury = _treasury;
    }

    function setMinimumDonation(uint256 _minimumDonation) external onlyRole(DEFAULT_ADMIN_ROLE) {
        minimumDonation = _minimumDonation;
    }

    function setReceiptContract(address _receiptContract) external onlyRole(DEFAULT_ADMIN_ROLE) {
        receiptContract = IDonationReceipt(_receiptContract);
    }

    function setBragToken(address _bragToken) external onlyRole(DEFAULT_ADMIN_ROLE) {
        bragToken = IBragToken(_bragToken);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH. Also mints a soulbound DonationReceipt.
     * @param message A message to include with the donation receipt.
     * @param tokenURI_ The URI for the NFT media.
     */
    function donate(string calldata message, string calldata tokenURI_) external payable nonReentrant {
        _donate(msg.sender, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH with optional on-chain media.
     * @param message A message to include with the donation receipt.
     * @param media The URI or raw media content.
     * @param onChain Whether to store the media directly on-chain.
     */
    function donate(string calldata message, string calldata media, bool onChain) external payable nonReentrant {
        _donate(msg.sender, message, media, onChain);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a specific recipient.
     * @param recipient The address to receive the transferable BragNFT.
     * @param message A message to include with the donation receipt.
     * @param tokenURI_ The URI for the NFT media.
     */
    function donateTo(address recipient, string calldata message, string calldata tokenURI_) external payable nonReentrant {
        _donate(recipient, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a recipient with optional on-chain media.
     */
    function donateTo(address recipient, string calldata message, string calldata media, bool onChain) external payable nonReentrant {
        _donate(recipient, message, media, onChain);
    }

    /**
     * @dev Fallback to handle raw ETH transfers.
     */
    receive() external payable nonReentrant {
        _donate(msg.sender, "Direct donation", "", false);
    }

    /**
     * @dev Internal donation logic.
     */
    function _donate(address recipient, string memory message, string memory media, bool onChain) internal {
        require(address(receiptContract) != address(0), "Receipt contract not set");
        require(msg.value >= minimumDonation, "Donation below minimum");
        require(_nextTokenId < maxSupply, "Max supply reached");

        uint256 nftTokenId = _nextTokenId++;

        // 1. Set metadata state first (CEI)
        if (onChain) {
            onChainMedia[nftTokenId] = media;
        } else if (bytes(media).length > 0) {
            _setTokenURI(nftTokenId, media);
        }

        // 2. Mint the soulbound receipt to the donor (always msg.sender)
        // Interaction with trusted contract
        uint256 receiptTokenId = receiptContract.mint(msg.sender, msg.value, message);

        // 3. Link them (Effect)
        nftToReceipt[nftTokenId] = receiptTokenId;

        // 4. Mint the transferable BragNFT to the specified recipient (Interaction - may call onERC721Received)
        _safeMint(recipient, nftTokenId);

        // 5. Mint Brag Tokens (Interaction - if token contract is set)
        if (address(bragToken) != address(0)) {
            bragToken.mint(msg.sender, msg.value);
        }

        // 6. Transfer to treasury (Interaction)
        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Transfer to treasury failed");

        emit Donated(msg.sender, msg.value, nftTokenId, receiptTokenId, message);
    }

    /**
     * @dev Returns the metadata URI for a given token. Generates on-chain JSON.
     * Includes message from DonationReceipt and uses SVG fallback if no media provided.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);

        // Get message from linked receipt
        uint256 receiptId = nftToReceipt[tokenId];
        string memory message = "";
        if (address(receiptContract) != address(0)) {
            try receiptContract.getReceipt(receiptId) returns (IDonationReceipt.Receipt memory receipt) {
                message = receipt.message;
            } catch {
                // Fallback if receipt not found or other error
            }
        }

        string memory imageURI;
        string memory animationURL;
        string memory media = onChainMedia[tokenId];

        if (bytes(media).length > 0) {
            if (_isMultimedia(media)) {
                animationURL = media;
                imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, message)))));
            } else {
                imageURI = media;
            }
        } else {
            string memory offChainURI = super.tokenURI(tokenId);
            if (bytes(offChainURI).length > 0) {
                if (_isMultimedia(offChainURI)) {
                    animationURL = offChainURI;
                    imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, message)))));
                } else {
                    imageURI = offChainURI;
                }
            } else {
                // SVG Fallback using the message
                imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, message)))));
            }
        }

        string memory animationPart = "";
        if (bytes(animationURL).length > 0) {
            animationPart = string(abi.encodePacked('", "animation_url": "', _escapeJSON(animationURL)));
        }

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "BragNFT #',
                        tokenId.toString(),
                        '", "description": "Brag.Charity Donation NFT',
                        bytes(message).length > 0 ? string(abi.encodePacked(": ", _escapeJSON(message))) : "",
                        '", "image": "',
                        _escapeJSON(imageURI),
                        animationPart,
                        '", "attributes": [{"trait_type": "Message", "value": "',
                        _escapeJSON(message),
                        '"}]}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    /**
     * @dev Detect if a media string is an audio/video data URI or has a common multimedia extension.
     */
    function _isMultimedia(string memory _media) internal pure returns (bool) {
        bytes memory b = bytes(_media);
        uint256 len = b.length;
        if (len < 4) return false;

        // Check for "data:audio/", "data:video/" or "data:image/gif" prefix
        if (len >= 11) {
            if (b[0] == 'd' && b[1] == 'a' && b[2] == 't' && b[3] == 'a' && b[4] == ':') {
                if (b[5] == 'a' && b[6] == 'u' && b[7] == 'd' && b[8] == 'i' && b[9] == 'o' && b[10] == '/') return true;
                if (b[5] == 'v' && b[6] == 'i' && b[7] == 'd' && b[8] == 'e' && b[9] == 'o' && b[10] == '/') return true;
                if (len >= 14 && b[5] == 'i' && b[6] == 'm' && b[7] == 'a' && b[8] == 'g' && b[9] == 'e' && b[10] == '/' && b[11] == 'g' && b[12] == 'i' && b[13] == 'f') return true;
            }
        }

        // Check for 3-letter extensions: .mp3, .wav, .ogg, .m4a, .aac, .mp4, .mov, .ogv, .m4v, .gif
        if (b[len - 4] == '.') {
            bytes1 b1 = b[len - 3];
            bytes1 b2 = b[len - 2];
            bytes1 b3 = b[len - 1];

            if (b1 == 'm' && b2 == 'p' && b3 == '3') return true;
            if (b1 == 'w' && b2 == 'a' && b3 == 'v') return true;
            if (b1 == 'o' && b2 == 'g' && b3 == 'g') return true;
            if (b1 == 'm' && b2 == '4' && b3 == 'a') return true;
            if (b1 == 'a' && b2 == 'a' && b3 == 'c') return true;
            if (b1 == 'm' && b2 == 'p' && b3 == '4') return true;
            if (b1 == 'm' && b2 == 'o' && b3 == 'v') return true;
            if (b1 == 'o' && b2 == 'g' && b3 == 'v') return true;
            if (b1 == 'm' && b2 == '4' && b3 == 'v') return true;
            if (b1 == 'g' && b2 == 'i' && b3 == 'f') return true;
        }

        // Check for 4-letter extensions: .webm
        if (len >= 5 && b[len - 5] == '.') {
            if (b[len - 4] == 'w' && b[len - 3] == 'e' && b[len - 2] == 'b' && b[len - 1] == 'm') return true;
        }

        return false;
    }

    /**
     * @dev Generates a simple SVG image with the donation message.
     */
    function _generateSVG(uint256 tokenId, string memory message) internal pure returns (string memory) {
        string memory displayText = bytes(message).length > 0 ? _escapeSVG(message) : string(abi.encodePacked("BragNFT #", tokenId.toString()));
        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: sans-serif; font-size: 20px; font-weight: bold; }</style>',
            '<rect width="100%" height="100%" fill="#6366f1" />',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">',
            displayText,
            '</text></svg>'
        ));
    }

    /**
     * @dev Escape special characters for SVG text.
     */
    function _escapeSVG(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '&') extraLength += 4; // &amp;
            else if (inputBytes[i] == '<') extraLength += 3; // &lt;
            else if (inputBytes[i] == '>') extraLength += 3; // &gt;
            else if (inputBytes[i] == '"') extraLength += 5; // &quot;
            else if (inputBytes[i] == '\'') extraLength += 5; // &apos;
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            bytes1 b = inputBytes[i];
            if (b == '&') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'm'; outputBytes[j++] = 'p'; outputBytes[j++] = ';';
            } else if (b == '<') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'l'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '>') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'g'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '"') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'q'; outputBytes[j++] = 'u'; outputBytes[j++] = 'o'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '\'') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'p'; outputBytes[j++] = 'o'; outputBytes[j++] = 's'; outputBytes[j++] = ';';
            } else {
                outputBytes[j++] = b;
            }
        }
        return string(outputBytes);
    }

    /**
     * @dev Escape double quotes, backslashes and control characters for JSON compatibility.
     */
    function _escapeJSON(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '"' || inputBytes[i] == '\\') {
                extraLength++;
            } else if (uint8(inputBytes[i]) < 0x20) {
                extraLength += 5; // \uXXXX
            }
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            uint8 b = uint8(inputBytes[i]);
            if (b == 0x22 || b == 0x5C) { // " or \
                outputBytes[j++] = '\\';
                outputBytes[j++] = bytes1(b);
            } else if (b < 0x20) {
                outputBytes[j++] = '\\';
                outputBytes[j++] = 'u';
                outputBytes[j++] = '0';
                outputBytes[j++] = '0';
                bytes memory hexAlphabet = "0123456789abcdef";
                outputBytes[j++] = hexAlphabet[b >> 4];
                outputBytes[j++] = hexAlphabet[b & 0x0f];
            } else {
                outputBytes[j++] = bytes1(b);
            }
        }
        return string(outputBytes);
    }
}
