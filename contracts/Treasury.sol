// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Treasury
 * @dev A simple vault to hold ETH and NFTs. Implements receiver interfaces for compatibility.
 * Also compliant with ERC-4626 for an underlying ERC-20 asset.
 */
contract Treasury is ERC4626, ERC721Holder, ERC1155Holder, Ownable {
    constructor(
        address _initialOwner,
        IERC20 _asset,
        string memory _name,
        string memory _symbol
    ) ERC4626(_asset) ERC20(_name, _symbol) Ownable(_initialOwner) {}

    /**
     * @dev Allows the contract to receive ETH.
     */
    receive() external payable {}

    /**
     * @dev Allows the owner to withdraw ETH.
     */
    function withdrawETH(address payable to, uint256 amount) external onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        (bool success, ) = to.call{value: amount}("");
        require(success, "Transfer failed");
    }

    /**
     * @dev Emergency function to withdraw all ETH.
     */
    function withdrawAllETH(address payable to) external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        (bool success, ) = to.call{value: balance}("");
        require(success, "Transfer failed");
    }

    /**
     * @dev Override decimals offset to protect against inflation attacks.
     */
    function _decimalsOffset() internal view virtual override returns (uint8) {
        return 3;
    }
}
