// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

interface IDonationReceipt {
    function mint(address to, uint256 amount, string calldata message) external returns (uint256);
}

/**
 * @title BragNFT
 * @dev A transferable NFT that can be exhibited. Minted upon donation along with a soulbound receipt.
 */
contract BragNFT is ERC721URIStorage, Ownable {
    using Strings for uint256;

    uint256 private _nextTokenId;
    address public treasury;
    uint256 public minimumDonation;
    IDonationReceipt public receiptContract;

    // Link between BragNFT tokenId and DonationReceipt tokenId
    mapping(uint256 => uint256) public nftToReceipt;

    // Optional on-chain media storage
    mapping(uint256 => string) public onChainMedia;

    event Donated(address indexed donor, uint256 amount, uint256 nftTokenId, uint256 receiptTokenId, string message);

    constructor(address _initialOwner, address _treasury, uint256 _minimumDonation)
        ERC721("BragNFT", "BRAG")
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

    /**
     * @dev Mint a new BragNFT by donating ETH. Also mints a soulbound DonationReceipt.
     * @param message A message to include with the donation receipt.
     * @param tokenURI_ The URI for the NFT media.
     */
    function donate(string calldata message, string calldata tokenURI_) external payable {
        _donate(msg.sender, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH with optional on-chain media.
     * @param message A message to include with the donation receipt.
     * @param media The URI or raw media content.
     * @param onChain Whether to store the media directly on-chain.
     */
    function donate(string calldata message, string calldata media, bool onChain) external payable {
        _donate(msg.sender, message, media, onChain);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a specific recipient.
     * @param recipient The address to receive the transferable BragNFT.
     * @param message A message to include with the donation receipt.
     * @param tokenURI_ The URI for the NFT media.
     */
    function donateTo(address recipient, string calldata message, string calldata tokenURI_) external payable {
        _donate(recipient, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a recipient with optional on-chain media.
     */
    function donateTo(address recipient, string calldata message, string calldata media, bool onChain) external payable {
        _donate(recipient, message, media, onChain);
    }

    /**
     * @dev Internal donation logic.
     */
    function _donate(address recipient, string calldata message, string calldata media, bool onChain) internal {
        require(address(receiptContract) != address(0), "Receipt contract not set");
        require(msg.value >= minimumDonation, "Donation below minimum");

        uint256 nftTokenId = _nextTokenId++;

        // Mint the transferable BragNFT to the specified recipient
        _safeMint(recipient, nftTokenId);
        if (onChain) {
            onChainMedia[nftTokenId] = media;
        } else if (bytes(media).length > 0) {
            _setTokenURI(nftTokenId, media);
        }

        // Mint the soulbound receipt to the donor (always msg.sender)
        uint256 receiptTokenId = receiptContract.mint(msg.sender, msg.value, message);

        // Link them
        nftToReceipt[nftTokenId] = receiptTokenId;

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

        // If media doesn't look like a URI, assume it's raw SVG and wrap it
        string memory imageVal = media;
        bytes memory bMedia = bytes(media);
        if (bMedia.length > 4 && bMedia[0] == '<' && bMedia[1] == 's' && bMedia[2] == 'v' && bMedia[3] == 'g') {
            imageVal = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bMedia)));
        }

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "BragNFT #',
                        tokenId.toString(),
                        '", "description": "Brag.Charity Donation NFT", "image": "',
                        imageVal,
                        '"}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }
}
