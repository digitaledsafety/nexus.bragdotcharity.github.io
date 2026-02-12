// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IDonationReceipt {
    struct Receipt {
        address donor;
        uint256 amount;
        uint256 timestamp;
        string message;
    }
    function mint(address to, uint256 amount, string calldata message) external returns (uint256);
    function getReceipt(uint256 tokenId) external view returns (Receipt memory);
}
