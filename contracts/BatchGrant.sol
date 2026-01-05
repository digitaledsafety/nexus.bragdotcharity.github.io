// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract BatchGrant {
    address public immutable USDC;

    constructor(address _usdc) {
        USDC = _usdc;
    }

    function distributeUSDC(address[] calldata recipients, uint256[] calldata amounts) external {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            require(IERC20(USDC).transferFrom(msg.sender, recipients[i], amounts[i]), "Transfer failed");
        }
    }
}
