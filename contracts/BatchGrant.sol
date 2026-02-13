// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

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
}
