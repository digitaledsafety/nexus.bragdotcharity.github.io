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
 * @title BaseBragNFT
 * @dev Abstract base contract for BragNFT campaigns.
 * Handles core donation logic, receipt linking, and BRAG token rewards.
 */
abstract contract BaseBragNFT is ERC721URIStorage, AccessControl, ReentrancyGuard {
    using Strings for uint256;

    uint256 internal _nextTokenId;
    address public treasury;
    uint256 public minimumDonation;
    IDonationReceipt public receiptContract;
    IBragToken public bragToken;

    // Link between BragNFT tokenId and DonationReceipt tokenId
    mapping(uint256 => uint256) public nftToReceipt;

    // Optional on-chain media storage
    mapping(uint256 => string) public onChainMedia;

    event Donated(address indexed donor, uint256 amount, uint256 nftTokenId, uint256 receiptTokenId, string message);
    event TreasuryUpdated(address indexed treasury);
    event MinimumDonationUpdated(uint256 minimumDonation);
    event ReceiptContractUpdated(address indexed receiptContract);
    event BragTokenUpdated(address indexed bragToken);

    constructor(string memory name, string memory symbol, address _initialOwner, address _treasury, uint256 _minimumDonation)
        ERC721(name, symbol)
    {
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
        treasury = _treasury;
        minimumDonation = _minimumDonation;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function setTreasury(address _treasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_treasury != address(0), "Invalid treasury address");
        treasury = _treasury;
        emit TreasuryUpdated(_treasury);
    }

    function setMinimumDonation(uint256 _minimumDonation) external onlyRole(DEFAULT_ADMIN_ROLE) {
        minimumDonation = _minimumDonation;
        emit MinimumDonationUpdated(_minimumDonation);
    }

    function setReceiptContract(address _receiptContract) external onlyRole(DEFAULT_ADMIN_ROLE) {
        receiptContract = IDonationReceipt(_receiptContract);
        emit ReceiptContractUpdated(_receiptContract);
    }

    function setBragToken(address _bragToken) external onlyRole(DEFAULT_ADMIN_ROLE) {
        bragToken = IBragToken(_bragToken);
        emit BragTokenUpdated(_bragToken);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH. Also mints a soulbound DonationReceipt.
     * @param message A message to include with the donation receipt.
     * @param tokenURI_ The URI for the NFT media.
     */
    function donate(string calldata message, string calldata tokenURI_) external payable virtual nonReentrant {
        _donate(msg.sender, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH with optional on-chain media.
     * @param message A message to include with the donation receipt.
     * @param media The URI or raw media content.
     * @param onChain Whether to store the media directly on-chain.
     */
    function donate(string calldata message, string calldata media, bool onChain) external payable virtual nonReentrant {
        _donate(msg.sender, message, media, onChain);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a specific recipient.
     * @param recipient The address to receive the transferable BragNFT.
     * @param message A message to include with the donation receipt.
     * @param tokenURI_ The URI for the NFT media.
     */
    function donateTo(address recipient, string calldata message, string calldata tokenURI_) external payable virtual nonReentrant {
        _donate(recipient, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a recipient with optional on-chain media.
     */
    function donateTo(address recipient, string calldata message, string calldata media, bool onChain) external payable virtual nonReentrant {
        _donate(recipient, message, media, onChain);
    }

    /**
     * @dev Internal donation logic.
     */
    function _donate(address recipient, string calldata message, string calldata media, bool onChain) internal virtual {
        require(address(receiptContract) != address(0), "Receipt contract not set");
        require(msg.value >= minimumDonation, "Donation below minimum");

        uint256 nftTokenId = _nextTokenId++;

        // 1. Set metadata state first (CEI)
        if (onChain) {
            onChainMedia[nftTokenId] = media;
        } else if (bytes(media).length > 0) {
            _setTokenURI(nftTokenId, media);
        }

        // 2. Mint the soulbound receipt to the donor (always msg.sender)
        uint256 receiptTokenId = receiptContract.mint(msg.sender, msg.value, message);

        // 3. Link them
        nftToReceipt[nftTokenId] = receiptTokenId;

        // 4. Mint the transferable BragNFT
        _safeMint(recipient, nftTokenId);

        // 5. Mint Brag Tokens
        if (address(bragToken) != address(0)) {
            bragToken.mint(msg.sender, msg.value);
        }

        // 6. Transfer to treasury
        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Transfer to treasury failed");

        emit Donated(msg.sender, msg.value, nftTokenId, receiptTokenId, message);
    }

    /**
     * @dev Returns the total number of tokens minted in this campaign.
     */
    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }

    /**
     * @dev Returns the metadata URI for a given token. Generates on-chain JSON.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);

        uint256 receiptId = nftToReceipt[tokenId];
        string memory message = "";
        if (address(receiptContract) != address(0)) {
            try receiptContract.getReceipt(receiptId) returns (IDonationReceipt.Receipt memory receipt) {
                message = receipt.message;
            } catch {}
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
                        '{"name": "', name(), ' #', tokenId.toString(),
                        '", "description": "Commemorative Donation NFT',
                        bytes(message).length > 0 ? string(abi.encodePacked(": ", _escapeJSON(message))) : "",
                        '", "image": "', imageURI,
                        animationPart,
                        '", "attributes": [{"trait_type": "Message", "value": "', _escapeJSON(message),
                        '"}]}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function _isAudio(string memory _media) internal pure returns (bool) {
        bytes memory b = bytes(_media);
        if (b.length < 11) return false;
        return (b[0] == 'd' && b[1] == 'a' && b[2] == 't' && b[3] == 'a' && b[4] == ':' &&
                b[5] == 'a' && b[6] == 'u' && b[7] == 'd' && b[8] == 'i' && b[9] == 'o' && b[10] == '/');
    }

    function _generateSVG(uint256 tokenId, string memory message) internal view virtual returns (string memory) {
        string memory displayText = bytes(message).length > 0 ? _escapeXML(message) : string(abi.encodePacked(name(), " #", tokenId.toString()));

        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: sans-serif; font-size: 20px; font-weight: bold; }</style>',
            '<rect width="100%" height="100%" fill="#6366f1" />',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">',
            displayText,
            '</text></svg>'
        ));
    }

    function _escapeXML(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;
        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '&') extraLength += 4;
            else if (inputBytes[i] == '<') extraLength += 3;
            else if (inputBytes[i] == '>') extraLength += 3;
            else if (inputBytes[i] == '"') extraLength += 5;
            else if (inputBytes[i] == '\'') extraLength += 5;
        }
        if (extraLength == 0) return input;
        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '&') { outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'm'; outputBytes[j++] = 'p'; outputBytes[j++] = ';'; }
            else if (inputBytes[i] == '<') { outputBytes[j++] = '&'; outputBytes[j++] = 'l'; outputBytes[j++] = 't'; outputBytes[j++] = ';'; }
            else if (inputBytes[i] == '>') { outputBytes[j++] = '&'; outputBytes[j++] = 'g'; outputBytes[j++] = 't'; outputBytes[j++] = ';'; }
            else if (inputBytes[i] == '"') { outputBytes[j++] = '&'; outputBytes[j++] = 'q'; outputBytes[j++] = 'u'; outputBytes[j++] = 'o'; outputBytes[j++] = 't'; outputBytes[j++] = ';'; }
            else if (inputBytes[i] == '\'') { outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'p'; outputBytes[j++] = 'o'; outputBytes[j++] = 's'; outputBytes[j++] = ';'; }
            else { outputBytes[j++] = inputBytes[i]; }
        }
        return string(outputBytes);
    }

    function _escapeJSON(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;
        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '"' || inputBytes[i] == '\\') extraLength++;
        }
        if (extraLength == 0) return input;
        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '"' || inputBytes[i] == '\\') outputBytes[j++] = '\\';
            outputBytes[j++] = inputBytes[i];
        }
        return string(outputBytes);
    }
}
