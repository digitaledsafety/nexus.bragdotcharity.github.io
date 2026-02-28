// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title BatchGrant
 * @dev A simple utility to distribute ERC20 tokens to multiple recipients in a single transaction.
 */
contract BatchGrant {
    using SafeERC20 for IERC20;

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
    function distributeETH(address payable[] calldata recipients, uint256[] calldata amounts) external payable {
        require(recipients.length == amounts.length, "Mismatched arrays");
        uint256 totalRequired = 0;
        for (uint256 i = 0; i < amounts.length; i++) {
            totalRequired += amounts[i];
        }
        require(msg.value >= totalRequired, "Insufficient ETH sent");

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "Transfer failed");
        }

        // Refund excess ETH
        if (msg.value > totalRequired) {
            (bool success, ) = msg.sender.call{value: msg.value - totalRequired}("");
            require(success, "Refund failed");
        }
    }
}
