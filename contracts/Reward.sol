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

    // Getter for testing purposes
    function getNextTokenId() public view returns (uint256) {
        return nextTokenId;
    }

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
        // Checks
        require(msg.value > 0, "Donation amount must be more than 0");
        require(msg.value >= minimumDonation, "Donation amount is below minimum");
        require(nextTokenId < maxId, "Cannot exceed maximum supply of rewards"); // If nextTokenId is 0-indexed and maxId is count

        // Effects
        uint256 tokenIdToMint = nextTokenId;
        nextTokenId++;

        // Emit event before interactions
        emit DonationMade(msg.sender, msg.value, tokenIdToMint);

        // Interactions
        _safeMint(msg.sender, tokenIdToMint);
        wallet.transfer(msg.value); // wallet.transfer should be last if it's to an external wallet
    }
}