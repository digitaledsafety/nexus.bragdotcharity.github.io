// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract BatchGrant {
    using SafeERC20 for IERC20;
    IERC20 public immutable USDC;

    constructor(address _usdc) {
        USDC = IERC20(_usdc);
    }

    function distributeUSDC(address[] calldata recipients, uint256[] calldata amounts) external {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            USDC.safeTransferFrom(msg.sender, recipients[i], amounts[i]);
        }
    }
}
