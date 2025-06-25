// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is Ownable {
    struct Offer {
        address buyer;
        uint256 price;
        uint256 timestamp; // When the offer was created
    }

    // Mapping from NFT contract -> Token ID -> Offer
    mapping(address => mapping(uint256 => Offer)) public offers;

    uint256 public refundPeriod = 7 days; // Refund allowed within 7 days

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event RefundRequested(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 amount);
    event RefundPeriodUpdated(uint256 newRefundPeriod, address indexed updater);

    constructor() Ownable(msg.sender) {}

    /**
     * @notice Create an offer for an NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     */
    function createOffer(address nftContract, uint256 tokenId) external payable {
        require(msg.value > 0, "Offer price must be greater than 0");
        require(offers[nftContract][tokenId].buyer == address(0), "Offer already exists");

        // Save the offer
        offers[nftContract][tokenId] = Offer({
            buyer: msg.sender,
            price: msg.value,
            timestamp: block.timestamp
        });

        emit OfferCreated(nftContract, tokenId, msg.sender, msg.value);
    }

    /**
     * @notice Accept an offer for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being sold
     */
    function acceptOffer(address nftContract, uint256 tokenId) external {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer != address(0), "No valid offer exists");

        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        require(
            nft.isApprovedForAll(msg.sender, address(this)) || nft.getApproved(tokenId) == address(this),
            "Contract not approved to transfer NFT"
        );

        // Checks-Effects-Interactions Pattern:
        // 1. Effects (update state)
        delete offers[nftContract][tokenId];

        // 2. Emit event before external interactions
        emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price);

        // 3. Interactions (external calls)
        // Transfer the NFT to the buyer
        nft.safeTransferFrom(msg.sender, offer.buyer, tokenId);

        // Pay the seller
        payable(msg.sender).transfer(offer.price);
    }

    /**
     * @notice Cancel an offer you made
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token for which the offer was made
     */
    function cancelOffer(address nftContract, uint256 tokenId) external {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer == msg.sender, "You did not make this offer");

        // Refund the buyer
        payable(msg.sender).transfer(offer.price);

        // Clear the offer
        delete offers[nftContract][tokenId];

        emit OfferCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @notice Request a refund for an offer within the refund period
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token for which the refund is requested
     */
    function requestRefund(address nftContract, uint256 tokenId) external {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer == msg.sender, "You did not make this offer");
        require(block.timestamp <= offer.timestamp + refundPeriod, "Refund period has expired");

        // Refund the buyer
        payable(msg.sender).transfer(offer.price);

        // Clear the offer
        delete offers[nftContract][tokenId];

        emit RefundRequested(nftContract, tokenId, msg.sender, offer.price);
    }

    /**
     * @notice Update the refund period (only by the contract owner)
     * @param newRefundPeriod The new refund period in seconds
     */
    function updateRefundPeriod(uint256 newRefundPeriod) external onlyOwner {
        refundPeriod = newRefundPeriod;
        emit RefundPeriodUpdated(newRefundPeriod, msg.sender);
    }
}
