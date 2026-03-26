// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title Treasury
 * @dev A simple vault to hold ETH and NFTs. Implements receiver interfaces for compatibility.
 * Uses AccessControl for secure administrative control.
 */
contract Treasury is ERC721Holder, ERC1155Holder, AccessControl {
    using SafeERC20 for IERC20;

    bytes32 public constant TREASURY_ROLE = keccak256("TREASURY_ROLE");

    constructor(address _initialOwner) {
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
        _grantRole(TREASURY_ROLE, _initialOwner);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155Holder, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev Allows addresses with TREASURY_ROLE to withdraw ERC20 tokens.
     */
    function withdrawERC20(address token, address to, uint256 amount) external onlyRole(TREASURY_ROLE) {
        IERC20(token).safeTransfer(to, amount);
    }

    /**
     * @dev Allows the contract to receive ETH.
     */
    receive() external payable {}

    /**
     * @dev Allows addresses with TREASURY_ROLE to withdraw ETH.
     */
    function withdrawETH(address payable to, uint256 amount) external onlyRole(TREASURY_ROLE) {
        require(amount <= address(this).balance, "Insufficient balance");
        (bool success, ) = to.call{value: amount}("");
        require(success, "Transfer failed");
    }

    /**
     * @dev Emergency function to withdraw all ETH.
     */
    function withdrawAllETH(address payable to) external onlyRole(TREASURY_ROLE) {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        (bool success, ) = to.call{value: balance}("");
        require(success, "Transfer failed");
    }

    /**
     * @dev Allows addresses with TREASURY_ROLE to withdraw ERC721 tokens.
     */
    function withdrawERC721(address nftContract, uint256 tokenId, address to) external onlyRole(TREASURY_ROLE) {
        IERC721(nftContract).safeTransferFrom(address(this), to, tokenId);
    }

    /**
     * @dev Allows addresses with TREASURY_ROLE to withdraw ERC1155 tokens.
     */
    function withdrawERC1155(address nftContract, uint256 tokenId, uint256 amount, address to) external onlyRole(TREASURY_ROLE) {
        IERC1155(nftContract).safeTransferFrom(address(this), to, tokenId, amount, "");
    }

    /**
     * @dev Generic execute function to allow the treasury to interact with other contracts.
     */
    function execute(address target, uint256 value, bytes calldata data) external onlyRole(DEFAULT_ADMIN_ROLE) returns (bytes memory) {
        (bool success, bytes memory result) = target.call{value: value}(data);
        require(success, "External call failed");
        return result;
    }
}
