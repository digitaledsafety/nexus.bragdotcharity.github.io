// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title Exhibition
 * @dev A generic vault for exhibiting ERC721 and ERC1155 tokens for a set duration.
 * Also compliant with ERC-4626 for an underlying ERC-20 asset.
 */
contract Exhibition is ERC4626, ERC721Holder, ERC1155Holder, Ownable, ReentrancyGuard {
    struct ExhibitionInfo {
        address owner;
        address nftContract;
        uint256 tokenId;
        uint256 amount; // 1 for ERC721
        uint256 expiry;
        bool isERC1155;
        bool active;
    }

    uint256 private _nextExhibitionId;
    mapping(uint256 => ExhibitionInfo) public exhibitions;

    event Exhibited(
        uint256 indexed exhibitionId,
        address indexed owner,
        address indexed nftContract,
        uint256 tokenId,
        uint256 expiry
    );

    event Reclaimed(
        uint256 indexed exhibitionId,
        address indexed owner
    );

    constructor(
        address _initialOwner,
        IERC20 _asset,
        string memory _name,
        string memory _symbol
    ) ERC4626(_asset) ERC20(_name, _symbol) Ownable(_initialOwner) {}

    /**
     * @dev Deposit an ERC721 token for exhibition.
     * @param nftContract The address of the ERC721 contract.
     * @param tokenId The ID of the token to exhibit.
     * @param duration The duration of the exhibition in seconds.
     */
    function exhibit721(address nftContract, uint256 tokenId, uint256 duration) external nonReentrant returns (uint256) {
        require(duration > 0, "Duration must be positive");

        // Transfer the NFT to this vault
        IERC721(nftContract).safeTransferFrom(msg.sender, address(this), tokenId);

        uint256 exhibitionId = _nextExhibitionId++;
        exhibitions[exhibitionId] = ExhibitionInfo({
            owner: msg.sender,
            nftContract: nftContract,
            tokenId: tokenId,
            amount: 1,
            expiry: block.timestamp + duration,
            isERC1155: false,
            active: true
        });

        emit Exhibited(exhibitionId, msg.sender, nftContract, tokenId, exhibitions[exhibitionId].expiry);
        return exhibitionId;
    }

    /**
     * @dev Deposit ERC1155 tokens for exhibition.
     * @param nftContract The address of the ERC1155 contract.
     * @param tokenId The ID of the token to exhibit.
     * @param amount The number of tokens to exhibit.
     * @param duration The duration of the exhibition in seconds.
     */
    function exhibit1155(address nftContract, uint256 tokenId, uint256 amount, uint256 duration) external nonReentrant returns (uint256) {
        require(duration > 0, "Duration must be positive");
        require(amount > 0, "Amount must be positive");

        // Transfer the tokens to this vault
        IERC1155(nftContract).safeTransferFrom(msg.sender, address(this), tokenId, amount, "");

        uint256 exhibitionId = _nextExhibitionId++;
        exhibitions[exhibitionId] = ExhibitionInfo({
            owner: msg.sender,
            nftContract: nftContract,
            tokenId: tokenId,
            amount: amount,
            expiry: block.timestamp + duration,
            isERC1155: true,
            active: true
        });

        emit Exhibited(exhibitionId, msg.sender, nftContract, tokenId, exhibitions[exhibitionId].expiry);
        return exhibitionId;
    }

    /**
     * @dev Reclaim a token after the exhibition period has expired.
     * Uses a "Pull" pattern for safety.
     * @param exhibitionId The ID of the exhibition record.
     */
    function reclaim(uint256 exhibitionId) external nonReentrant {
        ExhibitionInfo storage info = exhibitions[exhibitionId];
        require(info.active, "Exhibition not active");
        require(block.timestamp >= info.expiry, "Exhibition period not yet expired");
        require(msg.sender == info.owner || msg.sender == owner(), "Only owner or admin can reclaim");

        info.active = false;

        if (info.isERC1155) {
            IERC1155(info.nftContract).safeTransferFrom(address(this), info.owner, info.tokenId, info.amount, "");
        } else {
            IERC721(info.nftContract).safeTransferFrom(address(this), info.owner, info.tokenId);
        }

        emit Reclaimed(exhibitionId, info.owner);
    }

    /**
     * @dev Get details of an exhibition.
     */
    function getExhibition(uint256 exhibitionId) external view returns (ExhibitionInfo memory) {
        return exhibitions[exhibitionId];
    }

    /**
     * @dev Override decimals offset to protect against inflation attacks.
     */
    function _decimalsOffset() internal view virtual override returns (uint8) {
        return 3;
    }
}
