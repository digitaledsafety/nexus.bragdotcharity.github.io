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

interface ISummonRegistry {
    function isVerified(address vault) external view returns (bool);
}

/**
 * @title SummonVault
 * @dev A vault contract where NFTs are "summoned".
 * It tracks the original owner and allows them to unsummon (withdraw) or move the NFT.
 * Also compliant with ERC-4626 for an underlying ERC-20 asset.
 */
contract SummonVault is ERC4626, ERC721Holder, ERC1155Holder, Ownable, ReentrancyGuard {
    ISummonRegistry public registry;

    // Track original owner of ERC721 tokens
    // nftContract => tokenId => owner
    mapping(address => mapping(uint256 => address)) public owner721;

    // Track original owner of ERC1155 tokens
    // nftContract => tokenId => userAddress => amount
    mapping(address => mapping(uint256 => mapping(address => uint256))) public balances1155;

    event Summoned721(address indexed nftContract, uint256 indexed tokenId, address indexed owner);
    event Summoned1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount);
    event Unsummoned721(address indexed nftContract, uint256 indexed tokenId, address indexed owner);
    event Unsummoned1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount);
    event Moved721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, address destinationVault);
    event Moved1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, address destinationVault);

    constructor(
        address _initialOwner,
        address _registry,
        IERC20 _asset,
        string memory _name,
        string memory _symbol
    ) ERC4626(_asset) ERC20(_name, _symbol) Ownable(_initialOwner) {
        registry = ISummonRegistry(_registry);
    }

    /**
     * @dev ERC721 tokens are summoned by sending them to this contract via safeTransferFrom.
     */
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes memory data
    ) public override returns (bytes4) {
        address actualOwner = from;
        // If coming from another verified vault, the data will contain the original owner
        if (registry.isVerified(from) && data.length == 32) {
            actualOwner = abi.decode(data, (address));
        }

        owner721[msg.sender][tokenId] = actualOwner;
        emit Summoned721(msg.sender, tokenId, actualOwner);
        return super.onERC721Received(operator, from, tokenId, data);
    }

    /**
     * @dev ERC1155 tokens are summoned by sending them to this contract via safeTransferFrom.
     */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public override returns (bytes4) {
        address actualOwner = from;
        if (registry.isVerified(from) && data.length == 32) {
            actualOwner = abi.decode(data, (address));
        }

        balances1155[msg.sender][id][actualOwner] += value;
        emit Summoned1155(msg.sender, id, actualOwner, value);
        return super.onERC1155Received(operator, from, id, value, data);
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] memory ids,
        uint256[] memory values,
        bytes memory data
    ) public override returns (bytes4) {
        address actualOwner = from;
        if (registry.isVerified(from) && data.length == 32) {
            actualOwner = abi.decode(data, (address));
        }

        for (uint256 i = 0; i < ids.length; i++) {
            balances1155[msg.sender][ids[i]][actualOwner] += values[i];
            emit Summoned1155(msg.sender, ids[i], actualOwner, values[i]);
        }
        return super.onERC1155BatchReceived(operator, from, ids, values, data);
    }

    /**
     * @dev Unsummon (withdraw) an ERC721 token back to the owner's wallet.
     */
    function withdraw721(address nftContract, uint256 tokenId) external nonReentrant {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");

        owner721[nftContract][tokenId] = address(0);
        IERC721(nftContract).safeTransferFrom(address(this), msg.sender, tokenId);

        emit Unsummoned721(nftContract, tokenId, msg.sender);
    }

    /**
     * @dev Unsummon (withdraw) ERC1155 tokens back to the owner's wallet.
     */
    function withdraw1155(address nftContract, uint256 tokenId, uint256 amount) external nonReentrant {
        require(balances1155[nftContract][tokenId][msg.sender] >= amount, "Insufficient balance");

        balances1155[nftContract][tokenId][msg.sender] -= amount;
        IERC1155(nftContract).safeTransferFrom(address(this), msg.sender, tokenId, amount, "");

        emit Unsummoned1155(nftContract, tokenId, msg.sender, amount);
    }

    /**
     * @dev Move an ERC721 token directly to another verified vault.
     */
    function move721(address nftContract, uint256 tokenId, address destinationVault) external nonReentrant {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
        require(registry.isVerified(destinationVault), "Destination not verified");

        owner721[nftContract][tokenId] = address(0);
        IERC721(nftContract).safeTransferFrom(address(this), destinationVault, tokenId, abi.encode(msg.sender));

        emit Moved721(nftContract, tokenId, msg.sender, destinationVault);
    }

    /**
     * @dev Move ERC1155 tokens directly to another verified vault.
     */
    function move1155(address nftContract, uint256 tokenId, uint256 amount, address destinationVault) external nonReentrant {
        require(balances1155[nftContract][tokenId][msg.sender] >= amount, "Insufficient balance");
        require(registry.isVerified(destinationVault), "Destination not verified");

        balances1155[nftContract][tokenId][msg.sender] -= amount;
        IERC1155(nftContract).safeTransferFrom(address(this), destinationVault, tokenId, amount, abi.encode(msg.sender));

        emit Moved1155(nftContract, tokenId, msg.sender, amount, destinationVault);
    }

    /**
     * @dev Emergency force withdraw by admin.
     */
    function adminForceWithdraw721(address nftContract, uint256 tokenId, address to) external onlyOwner {
        owner721[nftContract][tokenId] = address(0);
        IERC721(nftContract).safeTransferFrom(address(this), to, tokenId);
    }

    function adminForceWithdraw1155(address nftContract, uint256 tokenId, uint256 amount, address fromUser, address to) external onlyOwner {
        require(balances1155[nftContract][tokenId][fromUser] >= amount, "Insufficient balance");
        balances1155[nftContract][tokenId][fromUser] -= amount;
        IERC1155(nftContract).safeTransferFrom(address(this), to, tokenId, amount, "");
    }

    /**
     * @dev Override decimals offset to protect against inflation attacks.
     */
    function _decimalsOffset() internal view virtual override returns (uint8) {
        return 3;
    }
}
