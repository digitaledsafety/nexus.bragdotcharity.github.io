// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    struct Offer {
        address buyer;
        uint256 price;
        uint256 timestamp; // When the offer was created
    }

    // Mapping from NFT contract -> Token ID -> Offer
    mapping(address => mapping(uint256 => Offer)) public offers;

    uint256 public immutable refundPeriod;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event RefundRequested(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 amount);

    constructor(uint256 _refundPeriod) {
        refundPeriod = _refundPeriod;
    }

    /**
     * @notice Create an offer for an NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     */
    function createOffer(address nftContract, uint256 tokenId) external payable nonReentrant {
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
    function acceptOffer(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer != address(0), "No valid offer exists");

        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        require(
            nft.isApprovedForAll(msg.sender, address(this)) || nft.getApproved(tokenId) == address(this),
            "Contract not approved to transfer NFT"
        );

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId];

        // Transfer the NFT to the buyer
        nft.safeTransferFrom(msg.sender, offer.buyer, tokenId);

        // Pay the seller
        (bool success, ) = payable(msg.sender).call{value: offer.price}("");
        require(success, "Transfer to seller failed");

        emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price);
    }

    /**
     * @notice Cancel an offer you made
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token for which the offer was made
     */
    function cancelOffer(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer == msg.sender, "You did not make this offer");

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId];

        // Refund the buyer
        (bool success, ) = payable(msg.sender).call{value: offer.price}("");
        require(success, "Refund to buyer failed");

        emit OfferCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @notice Request a refund for an offer within the refund period
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token for which the refund is requested
     */
    function requestRefund(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer == msg.sender, "You did not make this offer");
        require(block.timestamp <= offer.timestamp + refundPeriod, "Refund period has expired");

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId];

        // Refund the buyer
        (bool success, ) = payable(msg.sender).call{value: offer.price}("");
        require(success, "Refund to buyer failed");

        emit RefundRequested(nftContract, tokenId, msg.sender, offer.price);
    }
}
