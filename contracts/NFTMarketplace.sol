// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct Offer {
        address buyer;
        uint256 price;
        uint256 amount;    // Number of tokens (usually 1 for ERC721)
        uint256 timestamp; // When the offer was created
    }

    struct Listing {
        address seller;
        uint256 price;
        uint256 amount;
        bool active;
    }

    // Mapping from NFT contract -> Token ID -> Offer
    mapping(address => mapping(uint256 => Offer)) public offers;

    // Mapping from NFT contract -> Token ID -> Listing
    mapping(address => mapping(uint256 => Listing)) public listings;

    uint256 public immutable refundPeriod;
    IERC20 public immutable paymentToken;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event RefundRequested(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 amount);
    event ListingCreated(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount);
    event ListingCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed seller);
    event ListingBought(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount);

    constructor(uint256 _refundPeriod, address _paymentToken) {
        refundPeriod = _refundPeriod;
        paymentToken = IERC20(_paymentToken);
    }

    /**
     * @notice Create an offer for an NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     * @param amount Number of tokens to buy (should be 1 for ERC721)
     * @param price Total price in payment tokens
     */
    function createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external nonReentrant {
        require(price > 0, "Offer price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");
        require(offers[nftContract][tokenId].buyer == address(0), "Offer already exists");

        // Transfer tokens from buyer to this contract
        paymentToken.safeTransferFrom(msg.sender, address(this), price);

        // Save the offer
        offers[nftContract][tokenId] = Offer({
            buyer: msg.sender,
            price: price,
            amount: amount,
            timestamp: block.timestamp
        });

        emit OfferCreated(nftContract, tokenId, msg.sender, price, amount);
    }

    /**
     * @notice Accept an offer for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being sold
     */
    function acceptOffer(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer != address(0), "No valid offer exists");

        // CEI: Clear the offer first
        delete offers[nftContract][tokenId];

        if (IERC165(nftContract).supportsInterface(0x80ac58cd)) { // IERC721
            require(offer.amount == 1, "ERC721 offer must have amount 1");
            IERC721 nft = IERC721(nftContract);
            require(nft.ownerOf(tokenId) == msg.sender, "You do not own this NFT");
            require(
                nft.isApprovedForAll(msg.sender, address(this)) || nft.getApproved(tokenId) == address(this),
                "Contract not approved to transfer NFT"
            );
            // Transfer the NFT to the buyer
            nft.safeTransferFrom(msg.sender, offer.buyer, tokenId);
        } else if (IERC165(nftContract).supportsInterface(0xd9b67a26)) { // IERC1155
            IERC1155 nft = IERC1155(nftContract);
            require(nft.balanceOf(msg.sender, tokenId) >= offer.amount, "Insufficient balance");
            require(nft.isApprovedForAll(msg.sender, address(this)), "Contract not approved to transfer NFT");
            // Transfer the NFT to the buyer
            nft.safeTransferFrom(msg.sender, offer.buyer, tokenId, offer.amount, "");
        } else {
            revert("Unsupported NFT type");
        }

        // Pay royalties if supported
        uint256 sellerAmount = offer.price;
        if (IERC165(nftContract).supportsInterface(type(IERC2981).interfaceId)) {
            (address receiver, uint256 royaltyAmount) = IERC2981(nftContract).royaltyInfo(tokenId, offer.price);
            if (receiver != address(0) && royaltyAmount > 0) {
                paymentToken.safeTransfer(receiver, royaltyAmount);
                sellerAmount -= royaltyAmount;
            }
        }

        // Pay the seller
        paymentToken.safeTransfer(msg.sender, sellerAmount);

        emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price, offer.amount);
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
        paymentToken.safeTransfer(msg.sender, offer.price);

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
        paymentToken.safeTransfer(msg.sender, offer.price);

        emit RefundRequested(nftContract, tokenId, msg.sender, offer.price);
    }

    /**
     * @notice Create a fixed-price listing for an NFT
     */
    function createListing(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external nonReentrant {
        require(price > 0, "Price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");

        if (IERC165(nftContract).supportsInterface(0x80ac58cd)) { // IERC721
            require(amount == 1, "ERC721 listing must have amount 1");
            require(IERC721(nftContract).ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        } else if (IERC165(nftContract).supportsInterface(0xd9b67a26)) { // IERC1155
            require(IERC1155(nftContract).balanceOf(msg.sender, tokenId) >= amount, "Insufficient balance");
        } else {
            revert("Unsupported NFT type");
        }

        listings[nftContract][tokenId] = Listing({
            seller: msg.sender,
            price: price,
            amount: amount,
            active: true
        });

        emit ListingCreated(nftContract, tokenId, msg.sender, price, amount);
    }

    /**
     * @notice Cancel a listing you created
     */
    function cancelListing(address nftContract, uint256 tokenId) external nonReentrant {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.seller == msg.sender, "You did not create this listing");
        require(listing.active, "Listing not active");

        delete listings[nftContract][tokenId];

        emit ListingCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @notice Buy an NFT from a listing
     */
    function buyNFT(address nftContract, uint256 tokenId) external nonReentrant {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.active, "Listing not active");

        // CEI: Clear listing first
        delete listings[nftContract][tokenId];

        // Transfer payment
        paymentToken.safeTransferFrom(msg.sender, address(this), listing.price);

        if (IERC165(nftContract).supportsInterface(0x80ac58cd)) { // IERC721
            IERC721 nft = IERC721(nftContract);
            // Transfer the NFT
            nft.safeTransferFrom(listing.seller, msg.sender, tokenId);
        } else if (IERC165(nftContract).supportsInterface(0xd9b67a26)) { // IERC1155
            IERC1155 nft = IERC1155(nftContract);
            // Transfer the NFT
            nft.safeTransferFrom(listing.seller, msg.sender, tokenId, listing.amount, "");
        }

        // Pay royalties if supported
        uint256 sellerAmount = listing.price;
        if (IERC165(nftContract).supportsInterface(type(IERC2981).interfaceId)) {
            (address receiver, uint256 royaltyAmount) = IERC2981(nftContract).royaltyInfo(tokenId, listing.price);
            if (receiver != address(0) && royaltyAmount > 0) {
                paymentToken.safeTransfer(receiver, royaltyAmount);
                sellerAmount -= royaltyAmount;
            }
        }

        // Pay the seller
        paymentToken.safeTransfer(listing.seller, sellerAmount);

        emit ListingBought(nftContract, tokenId, msg.sender, listing.price, listing.amount);
    }
}
