// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BatchGrant
 * @dev A simple utility to distribute ERC20 tokens to multiple recipients in a single transaction.
 */
contract BatchGrant is Ownable {
    using SafeERC20 for IERC20;

    constructor(address initialOwner) Ownable(initialOwner) {}

    /**
     * @dev Allows the contract to receive ETH.
     */
    receive() external payable {}

    /**
     * @dev Distributes any ERC20 token to multiple recipients.
     * @param token The ERC20 token to distribute.
     * @param recipients Array of recipient addresses.
     * @param amounts Array of amounts to transfer to each recipient.
     */
    function distribute(IERC20 token, address[] calldata recipients, uint256[] calldata amounts) external {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.safeTransferFrom(msg.sender, recipients[i], amounts[i]);
        }
    }

    /**
     * @dev Distributes native ETH to multiple recipients.
     * @param recipients Array of recipient addresses.
     * @param amounts Array of amounts to transfer to each recipient.
     */
    function distributeETH(address[] calldata recipients, uint256[] calldata amounts) external payable {
        require(recipients.length == amounts.length, "Mismatched arrays");
        uint256 total = 0;
        for (uint256 i = 0; i < recipients.length; i++) {
            total += amounts[i];
        }
        // Explicitly check that msg.value matches total to avoid draining contract balance
        require(msg.value == total, "Incorrect ETH amount sent");

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "ETH transfer failed");
        }
    }

    /**
     * @dev Distributes ERC20 tokens already held by this contract to multiple recipients.
     * Restricted to the owner.
     */
    function distributeFromBalance(IERC20 token, address[] calldata recipients, uint256[] calldata amounts) external onlyOwner {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.safeTransfer(recipients[i], amounts[i]);
        }
    }

    /**
     * @dev Distributes ETH already held by this contract to multiple recipients.
     * Restricted to the owner.
     */
    function distributeETHFromBalance(address[] calldata recipients, uint256[] calldata amounts) external onlyOwner {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "ETH transfer failed");
        }
    }

    /**
     * @dev Distributes ERC721 tokens to multiple recipients.
     * @param token The ERC721 token to distribute.
     * @param recipients Array of recipient addresses.
     * @param tokenIds Array of token IDs to transfer to each recipient.
     */
    function distribute721(IERC721 token, address[] calldata recipients, uint256[] calldata tokenIds) external {
        require(recipients.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.transferFrom(msg.sender, recipients[i], tokenIds[i]);
        }
    }

    /**
     * @dev Distributes ERC1155 tokens to multiple recipients.
     * @param token The ERC1155 token to distribute.
     * @param recipients Array of recipient addresses.
     * @param ids Array of token IDs to transfer to each recipient.
     * @param amounts Array of amounts to transfer to each recipient.
     */
    function distribute1155(IERC1155 token, address[] calldata recipients, uint256[] calldata ids, uint256[] calldata amounts) external {
        require(recipients.length == ids.length && ids.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.safeTransferFrom(msg.sender, recipients[i], ids[i], amounts[i], "");
        }
    }
}
