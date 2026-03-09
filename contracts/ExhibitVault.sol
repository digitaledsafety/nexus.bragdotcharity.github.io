// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IExhibitRegistry {
    struct VaultInfo {
        bool verified;
        uint8 locationType;
        string name;
        string description;
    }
    function isVerified(address vault) external view returns (bool);
    function getVaultInfo(address vault) external view returns (VaultInfo memory);
}

/**
 * @title ExhibitVault
 * @dev A vault contract where NFTs are "exhibited".
 * It tracks the original owner and allows them to withdraw or move the NFT,
 * with optional time-gating (duration).
 */
contract ExhibitVault is ERC721Holder, ERC1155Holder, ReentrancyGuard {
    IExhibitRegistry public registry;

    // Track original owner of ERC721 tokens
    // nftContract => tokenId => owner
    mapping(address => mapping(uint256 => address)) public owner721;

    // Track original owner of ERC1155 tokens
    // nftContract => tokenId => userAddress => amount
    mapping(address => mapping(uint256 => mapping(address => uint256))) public balances1155;

    // Optional expiries
    mapping(address => mapping(uint256 => uint256)) public expiry721;
    mapping(address => mapping(uint256 => mapping(address => uint256))) public expiry1155;

    event Exhibited721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, string location, uint256 expiry);
    event Exhibited1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, string location, uint256 expiry);
    event Withdrawn721(address indexed nftContract, uint256 indexed tokenId, address indexed owner);
    event Withdrawn1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount);
    event Moved721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, address destinationVault);
    event Moved1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, address destinationVault);

    constructor(address _registry) {
        registry = IExhibitRegistry(_registry);
    }

    /**
     * @dev ERC721 tokens are exhibited by sending them to this contract via safeTransferFrom.
     */
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes memory data
    ) public override nonReentrant returns (bytes4) {
        address actualOwner = from;
        uint256 duration = 0;

        if (data.length == 32) {
            if (registry.isVerified(from)) {
                actualOwner = abi.decode(data, (address));
            } else {
                duration = abi.decode(data, (uint256));
            }
        } else if (data.length == 64) {
            if (registry.isVerified(from)) {
                (actualOwner, duration) = abi.decode(data, (address, uint256));
            } else {
                duration = abi.decode(data, (uint256));
            }
        }

        owner721[msg.sender][tokenId] = actualOwner;
        uint256 expiry = duration > 0 ? block.timestamp + duration : 0;
        expiry721[msg.sender][tokenId] = expiry;

        string memory location = registry.getVaultInfo(address(this)).name;
        emit Exhibited721(msg.sender, tokenId, actualOwner, location, expiry);

        return super.onERC721Received(operator, from, tokenId, data);
    }

    /**
     * @dev ERC1155 tokens are exhibited by sending them to this contract via safeTransferFrom.
     */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public override nonReentrant returns (bytes4) {
        address actualOwner = from;
        uint256 duration = 0;

        if (data.length == 32) {
            if (registry.isVerified(from)) {
                actualOwner = abi.decode(data, (address));
            } else {
                duration = abi.decode(data, (uint256));
            }
        } else if (data.length == 64) {
            if (registry.isVerified(from)) {
                (actualOwner, duration) = abi.decode(data, (address, uint256));
            } else {
                duration = abi.decode(data, (uint256));
            }
        }

        balances1155[msg.sender][id][actualOwner] += value;
        uint256 expiry = duration > 0 ? block.timestamp + duration : 0;
        expiry1155[msg.sender][id][actualOwner] = expiry;

        string memory location = registry.getVaultInfo(address(this)).name;
        emit Exhibited1155(msg.sender, id, actualOwner, value, location, expiry);

        return super.onERC1155Received(operator, from, id, value, data);
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] memory ids,
        uint256[] memory values,
        bytes memory data
    ) public override nonReentrant returns (bytes4) {
        address actualOwner = from;
        uint256 duration = 0;

        if (data.length == 32) {
            if (registry.isVerified(from)) {
                actualOwner = abi.decode(data, (address));
            } else {
                duration = abi.decode(data, (uint256));
            }
        } else if (data.length == 64) {
            if (registry.isVerified(from)) {
                (actualOwner, duration) = abi.decode(data, (address, uint256));
            } else {
                duration = abi.decode(data, (uint256));
            }
        }

        uint256 expiry = duration > 0 ? block.timestamp + duration : 0;
        string memory location = registry.getVaultInfo(address(this)).name;

        for (uint256 i = 0; i < ids.length; i++) {
            balances1155[msg.sender][ids[i]][actualOwner] += values[i];
            expiry1155[msg.sender][ids[i]][actualOwner] = expiry;
            emit Exhibited1155(msg.sender, ids[i], actualOwner, values[i], location, expiry);
        }
        return super.onERC1155BatchReceived(operator, from, ids, values, data);
    }

    /**
     * @dev Withdraw an ERC721 token back to the owner's wallet.
     */
    function withdraw721(address nftContract, uint256 tokenId) external nonReentrant {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
        require(block.timestamp >= expiry721[nftContract][tokenId], "Exhibition not yet expired");

        owner721[nftContract][tokenId] = address(0);
        expiry721[nftContract][tokenId] = 0;
        IERC721(nftContract).safeTransferFrom(address(this), msg.sender, tokenId);

        emit Withdrawn721(nftContract, tokenId, msg.sender);
    }

    /**
     * @dev Withdraw ERC1155 tokens back to the owner's wallet.
     */
    function withdraw1155(address nftContract, uint256 tokenId, uint256 amount) external nonReentrant {
        require(balances1155[nftContract][tokenId][msg.sender] >= amount, "Insufficient balance");
        require(block.timestamp >= expiry1155[nftContract][tokenId][msg.sender], "Exhibition not yet expired");

        balances1155[nftContract][tokenId][msg.sender] -= amount;
        if (balances1155[nftContract][tokenId][msg.sender] == 0) {
            expiry1155[nftContract][tokenId][msg.sender] = 0;
        }
        IERC1155(nftContract).safeTransferFrom(address(this), msg.sender, tokenId, amount, "");

        emit Withdrawn1155(nftContract, tokenId, msg.sender, amount);
    }

    /**
     * @dev Move an ERC721 token directly to another verified vault.
     */
    function move721(address nftContract, uint256 tokenId, address destinationVault) external nonReentrant {
        _move721(nftContract, tokenId, destinationVault, 0);
    }

    function move721WithDuration(address nftContract, uint256 tokenId, address destinationVault, uint256 duration) public nonReentrant {
        _move721(nftContract, tokenId, destinationVault, duration);
    }

    function _move721(address nftContract, uint256 tokenId, address destinationVault, uint256 duration) internal {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
        require(registry.isVerified(destinationVault), "Destination not verified");
        require(block.timestamp >= expiry721[nftContract][tokenId], "Exhibition not yet expired");

        owner721[nftContract][tokenId] = address(0);
        expiry721[nftContract][tokenId] = 0;

        bytes memory data;
        if (duration > 0) {
            data = abi.encode(msg.sender, duration);
        } else {
            data = abi.encode(msg.sender);
        }

        IERC721(nftContract).safeTransferFrom(address(this), destinationVault, tokenId, data);

        emit Moved721(nftContract, tokenId, msg.sender, destinationVault);
    }

    /**
     * @dev Move ERC1155 tokens directly to another verified vault.
     */
    function move1155(address nftContract, uint256 tokenId, uint256 amount, address destinationVault) external nonReentrant {
        _move1155(nftContract, tokenId, amount, destinationVault, 0);
    }

    function move1155WithDuration(address nftContract, uint256 tokenId, uint256 amount, address destinationVault, uint256 duration) public nonReentrant {
        _move1155(nftContract, tokenId, amount, destinationVault, duration);
    }

    function _move1155(address nftContract, uint256 tokenId, uint256 amount, address destinationVault, uint256 duration) internal {
        require(balances1155[nftContract][tokenId][msg.sender] >= amount, "Insufficient balance");
        require(registry.isVerified(destinationVault), "Destination not verified");
        require(block.timestamp >= expiry1155[nftContract][tokenId][msg.sender], "Exhibition not yet expired");

        balances1155[nftContract][tokenId][msg.sender] -= amount;
        if (balances1155[nftContract][tokenId][msg.sender] == 0) {
            expiry1155[nftContract][tokenId][msg.sender] = 0;
        }

        bytes memory data;
        if (duration > 0) {
            data = abi.encode(msg.sender, duration);
        } else {
            data = abi.encode(msg.sender);
        }

        IERC1155(nftContract).safeTransferFrom(address(this), destinationVault, tokenId, amount, data);

        emit Moved1155(nftContract, tokenId, msg.sender, amount, destinationVault);
    }

}
