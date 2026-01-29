// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Exhibition is Ownable
{
    struct ExhibitionDetails {
        bool active;
        uint256 locationId;
    }

    // Mapping to store exhibition details (location, duration, etc.) for each NFT
    mapping(uint256 => ExhibitionDetails) public exhibitionDetails;
    address public nftContract;

    modifier onlyNFTContract() {
        require(msg.sender == nftContract, "Only NFT contract can call this");
        _;
    }

    constructor() Ownable(msg.sender) {}

    function setNFTContract(address _nftContract) public onlyOwner {
        require(nftContract == address(0), "NFT contract already set");
        nftContract = _nftContract;
    }

    function getExhibitionDetails(uint256 tokenId) public view returns (ExhibitionDetails memory) {
        return exhibitionDetails[tokenId];
    }

    function exhibitNFT(uint256 tokenId, uint256 locationId) public onlyNFTContract {
        // Set exhibition details
        exhibitionDetails[tokenId] = ExhibitionDetails(true, locationId);
    }

    function endExhibition(uint256 tokenId) public onlyNFTContract {
        exhibitionDetails[tokenId].active = false;
    }

    function retrieveNFT(uint256 tokenId) public onlyNFTContract {
        // Clear exhibition details
        delete exhibitionDetails[tokenId];
    }
}
