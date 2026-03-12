// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BatchGrant
 * @dev A simple utility to distribute ERC20 tokens to multiple recipients in a single transaction.
 */
contract BatchGrant is Ownable {
    using SafeERC20 for IERC20;

    constructor() Ownable(msg.sender) {}

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
     * @dev Distributes any ERC20 token held by the contract to multiple recipients.
     * Only the owner can call this to prevent unauthorized drainage of held tokens.
     * @param token The ERC20 token to distribute.
     * @param recipients Array of recipient addresses.
     * @param amounts Array of amounts to transfer to each recipient.
     */
    function distributeFromBalance(IERC20 token, address[] calldata recipients, uint256[] calldata amounts) external onlyOwner {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.safeTransfer(recipients[i], amounts[i]);
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
        require(msg.value == total, "Incorrect ETH amount sent");

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "ETH transfer failed");
        }
    }
}
