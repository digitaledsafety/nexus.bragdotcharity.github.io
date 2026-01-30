// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IDonationReceipt {
    function mint(address to, uint256 amount, string calldata message) external returns (uint256);
}

/**
 * @title BragNFT
 * @dev A transferable NFT that can be exhibited. Minted upon donation along with a soulbound receipt.
 */
contract BragNFT is ERC721, Ownable {
    uint256 private _nextTokenId;
    address public treasury;
    uint256 public minimumDonation;
    IDonationReceipt public receiptContract;

    // Link between BragNFT tokenId and DonationReceipt tokenId
    mapping(uint256 => uint256) public nftToReceipt;

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
     */
    function donate(string calldata message) external payable {
        require(address(receiptContract) != address(0), "Receipt contract not set");
        require(msg.value >= minimumDonation, "Donation below minimum");

        uint256 nftTokenId = _nextTokenId++;

        // Mint the transferable BragNFT
        _safeMint(msg.sender, nftTokenId);

        // Mint the soulbound receipt
        uint256 receiptTokenId = receiptContract.mint(msg.sender, msg.value, message);

        // Link them
        nftToReceipt[nftTokenId] = receiptTokenId;

        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Transfer to treasury failed");

        emit Donated(msg.sender, msg.value, nftTokenId, receiptTokenId, message);
    }
}
