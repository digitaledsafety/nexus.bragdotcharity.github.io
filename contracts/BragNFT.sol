// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
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
contract BragNFT is ERC721URIStorage, AccessControl, ReentrancyGuard {
    using Strings for uint256;

    uint256 private _nextTokenId;
    uint256 public maxSupply;
    address public treasury;
    uint256 public minimumDonation;
    IDonationReceipt public receiptContract;
    IBragToken public bragToken;

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
        maxSupply = 10000; // Default max supply
    }

    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }

    function setMaxSupply(uint256 _maxSupply) external onlyRole(DEFAULT_ADMIN_ROLE) {
        maxSupply = _maxSupply;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
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
            if (_isAudio(media)) {
                animationURL = media;
                imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, message)))));
            } else {
                imageURI = media;
            }
        } else {
            string memory offChainURI = super.tokenURI(tokenId);
            if (bytes(offChainURI).length > 0) {
                if (_isAudio(offChainURI)) {
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
            animationPart = string(abi.encodePacked('", "animation_url": "', animationURL));
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
                        imageURI,
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
     * @dev Detect if a media string is an audio data URI.
     */
    function _isAudio(string memory _media) internal pure returns (bool) {
        bytes memory b = bytes(_media);
        if (b.length < 11) return false;
        // Check for "data:audio/"
        return (b[0] == 'd' && b[1] == 'a' && b[2] == 't' && b[3] == 'a' && b[4] == ':' &&
                b[5] == 'a' && b[6] == 'u' && b[7] == 'd' && b[8] == 'i' && b[9] == 'o' && b[10] == '/');
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
     * @dev Escape double quotes, backslashes, and control characters for JSON compatibility.
     */
    function _escapeJSON(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; i++) {
            bytes1 b = inputBytes[i];
            if (b == '"' || b == '\\') {
                extraLength++;
            } else if (b < 0x20) {
                extraLength += 5; // e.g., \u0001
            }
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        bytes memory hexChars = "0123456789abcdef";
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            bytes1 b = inputBytes[i];
            if (b == '"' || b == '\\') {
                outputBytes[j++] = '\\';
                outputBytes[j++] = b;
            } else if (b < 0x20) {
                outputBytes[j++] = '\\';
                outputBytes[j++] = 'u';
                outputBytes[j++] = '0';
                outputBytes[j++] = '0';
                outputBytes[j++] = hexChars[uint8(b) >> 4];
                outputBytes[j++] = hexChars[uint8(b) & 0x0f];
            } else {
                outputBytes[j++] = b;
            }
        }
        return string(outputBytes);
    }

    /**
     * @dev Escape special characters for SVG compatibility.
     */
    function _escapeSVG(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; i++) {
            bytes1 b = inputBytes[i];
            if (b == '<' || b == '>') {
                extraLength += 3; // &lt; or &gt;
            } else if (b == '&') {
                extraLength += 4; // &amp;
            }
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            bytes1 b = inputBytes[i];
            if (b == '<') {
                outputBytes[j++] = '&';
                outputBytes[j++] = 'l';
                outputBytes[j++] = 't';
                outputBytes[j++] = ';';
            } else if (b == '>') {
                outputBytes[j++] = '&';
                outputBytes[j++] = 'g';
                outputBytes[j++] = 't';
                outputBytes[j++] = ';';
            } else if (b == '&') {
                outputBytes[j++] = '&';
                outputBytes[j++] = 'a';
                outputBytes[j++] = 'm';
                outputBytes[j++] = 'p';
                outputBytes[j++] = ';';
            } else {
                outputBytes[j++] = b;
            }
        }
        return string(outputBytes);
    }
}
