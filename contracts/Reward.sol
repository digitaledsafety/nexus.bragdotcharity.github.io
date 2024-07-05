// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Reward is ERC721 {
    // Replace with your non-profit's name
    string constant myName = "Digital Education & Safety Foundation Donation";

    // Replace with your non-profit's symbol
    string constant mySymbol = "DESF";

    // Address to withdraw donations
    address payable wallet;

    // Current NFT token ID
    uint256 private nextTokenId;

    // Minimum donation amount to receive NFT
    uint256 minimumDonation;

    // Maximum token supply
    uint256 public maxId; 

    // Event emitted when a donation is made
    event DonationMade(address donor, uint256 amount, uint256 tokenId);

    constructor(address payable _wallet, uint256 _minimumDonation, uint256 _maxId)
        ERC721(myName, mySymbol) {
        wallet = _wallet;
        minimumDonation = _minimumDonation;
        maxId = _maxId;
    }

    // Fallback function to handle donations sent directly to the contract
    fallback() external payable {
        donate();
    }

    receive() external payable {
        donate();
    }

    // Function to donate cryptocurrency with a message
    function donate() public payable {
        require(msg.value > 0, "Donation amount must be more than 0");
        require(msg.value >= minimumDonation, "Donation amount is below minimum");
        require(nextTokenId + 1 <= maxId, "Cannot exceed maximum supply of rewards");
        wallet.transfer(msg.value);

        _safeMint(msg.sender, nextTokenId++);

        emit DonationMade(msg.sender, msg.value, nextTokenId);
    }
}