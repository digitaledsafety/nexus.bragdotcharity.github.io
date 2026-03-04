// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFTMarketplace is ReentrancyGuard, AccessControl {
    using SafeERC20 for IERC20;

    bytes32 public constant FEE_MANAGER_ROLE = keccak256("FEE_MANAGER_ROLE");

    struct Offer {
        address buyer;
        uint256 price;
        uint256 amount;    // Number of tokens (usually 1 for ERC721)
        uint256 timestamp; // When the offer was created
    }

    // Mapping from NFT contract -> Token ID -> Offer
    mapping(address => mapping(uint256 => Offer)) public offers;

    IERC20 public immutable paymentToken;

    uint256 public feeBps;
    address public feeRecipient;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event OfferRejected(address indexed nftContract, uint256 indexed tokenId, address indexed seller, address buyer, uint256 amount);

    constructor(address _paymentToken, address _initialOwner) {
        paymentToken = IERC20(_paymentToken);
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
        _grantRole(FEE_MANAGER_ROLE, _initialOwner);
    }

    function setFeeBps(uint256 _feeBps) external onlyRole(FEE_MANAGER_ROLE) {
        require(_feeBps <= 1000, "Fee too high (max 10%)");
        feeBps = _feeBps;
    }

    function setFeeRecipient(address _feeRecipient) external onlyRole(FEE_MANAGER_ROLE) {
        require(_feeRecipient != address(0), "Invalid fee recipient");
        feeRecipient = _feeRecipient;
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

        // Calculate and pay protocol fee
        uint256 fee = 0;
        if (feeBps > 0 && feeRecipient != address(0)) {
            fee = (offer.price * feeBps) / 10000;
            if (fee > 0) {
                paymentToken.safeTransfer(feeRecipient, fee);
            }
        }

        // Pay the seller
        paymentToken.safeTransfer(msg.sender, offer.price - fee);

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
     * @notice Reject an offer for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being sold
     */
    function rejectOffer(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId];
        require(offer.buyer != address(0), "No valid offer exists");

        // Check ownership/access
        if (IERC165(nftContract).supportsInterface(0x80ac58cd)) { // IERC721
            require(IERC721(nftContract).ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        } else if (IERC165(nftContract).supportsInterface(0xd9b67a26)) { // IERC1155
            require(IERC1155(nftContract).balanceOf(msg.sender, tokenId) > 0, "You do not own this NFT");
        } else {
            revert("Unsupported NFT type");
        }

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId];

        // Refund the buyer
        paymentToken.safeTransfer(offer.buyer, offer.price);

        emit OfferRejected(nftContract, tokenId, msg.sender, offer.buyer, offer.price);
    }
}
