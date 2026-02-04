// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Treasury
 * @dev A simple vault to hold ETH and NFTs. Implements receiver interfaces for compatibility.
 */
contract Treasury is ERC721Holder, ERC1155Holder, Ownable {
    constructor(address _initialOwner) Ownable(_initialOwner) {}

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
     * @dev Allows the owner to withdraw ERC721 tokens.
     */
    function withdrawERC721(address nftContract, uint256 tokenId, address to) external onlyOwner {
        IERC721(nftContract).safeTransferFrom(address(this), to, tokenId);
    }

    /**
     * @dev Allows the owner to withdraw ERC1155 tokens.
     */
    function withdrawERC1155(address nftContract, uint256 tokenId, uint256 amount, address to) external onlyOwner {
        IERC1155(nftContract).safeTransferFrom(address(this), to, tokenId, amount, "");
    }

    /**
     * @dev Generic execute function to allow the treasury to interact with other contracts.
     */
    function execute(address target, uint256 value, bytes calldata data) external onlyOwner returns (bytes memory) {
        (bool success, bytes memory result) = target.call{value: value}(data);
        require(success, "External call failed");
        return result;
    }
}
