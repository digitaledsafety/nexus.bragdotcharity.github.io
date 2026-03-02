// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
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

    // Mapping from NFT contract -> Token ID -> Buyer -> Offer
    mapping(address => mapping(uint256 => mapping(address => Offer))) public offers;

    IERC20 public immutable paymentToken;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller, uint256 price, uint256 amount);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);

    constructor(address _paymentToken) {
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
        require(offers[nftContract][tokenId][msg.sender].buyer == address(0), "Offer already exists");

        // Verify NFT type
        require(
            IERC165(nftContract).supportsInterface(0x80ac58cd) || // IERC721
            IERC165(nftContract).supportsInterface(0xd9b67a26),   // IERC1155
            "Unsupported NFT type"
        );

        // Transfer tokens from buyer to this contract
        paymentToken.safeTransferFrom(msg.sender, address(this), price);

        // Save the offer
        offers[nftContract][tokenId][msg.sender] = Offer({
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
     * @param buyer Address of the buyer whose offer is being accepted
     */
    function acceptOffer(address nftContract, uint256 tokenId, address buyer) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId][buyer];
        require(offer.buyer != address(0), "No valid offer exists");

        // CEI: Clear the offer first
        delete offers[nftContract][tokenId][buyer];

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

        // Pay the seller
        paymentToken.safeTransfer(msg.sender, offer.price);

        emit OfferAccepted(nftContract, tokenId, offer.buyer, msg.sender, offer.price, offer.amount);
    }

    /**
     * @notice Cancel an offer you made
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token for which the offer was made
     */
    function cancelOffer(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId][msg.sender];
        require(offer.buyer == msg.sender, "You did not make this offer");

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId][msg.sender];

        // Refund the buyer
        paymentToken.safeTransfer(msg.sender, offer.price);

        emit OfferCanceled(nftContract, tokenId, msg.sender);
    }
}
