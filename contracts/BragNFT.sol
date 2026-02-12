// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IDonationReceipt {
    function mint(address to, uint256 amount, string calldata message) external returns (uint256);
}

interface IBragToken {
    function mint(address to, uint256 amount) external;
}

/**
 * @title BragNFT
 * @dev A transferable NFT that can be exhibited. Minted upon donation along with a soulbound receipt.
 */
contract BragNFT is ERC721URIStorage, Ownable, ReentrancyGuard {
    using Strings for uint256;

    uint256 private _nextTokenId;
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
        ERC721("BragNFT", "BNFT")
        Ownable(_initialOwner)
    {
        treasury = _treasury;
        minimumDonation = _minimumDonation;
    }

    function setTreasury(address _treasury) external onlyOwner {
        require(_treasury != address(0), "Invalid treasury address");
        treasury = _treasury;
    }

    function setMinimumDonation(uint256 _minimumDonation) external onlyOwner {
        minimumDonation = _minimumDonation;
    }

    function setReceiptContract(address _receiptContract) external onlyOwner {
        receiptContract = IDonationReceipt(_receiptContract);
    }

    function setBragToken(address _bragToken) external onlyOwner {
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
     * @dev Internal donation logic.
     */
    function _donate(address recipient, string calldata message, string calldata media, bool onChain) internal {
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
     * @dev Returns the metadata URI for a given token. Generates on-chain JSON if media is on-chain.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);

        string memory media = onChainMedia[tokenId];
        if (bytes(media).length == 0) {
            return super.tokenURI(tokenId);
        }

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "BragNFT #',
                        tokenId.toString(),
                        '", "description": "Brag.Charity Donation NFT", "image": "',
                        media,
                        '"}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }
}
