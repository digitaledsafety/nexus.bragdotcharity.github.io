// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
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

contract MyNFT is ERC721, Ownable
{
    // Reference to exhibition contract
    Exhibition public exhibitionContract;

    uint256 private _nextTokenId;

    // Track original owners to return NFT to correct address
    mapping(uint256 => address) public originalOwners;

    constructor(address _exhibitionContract) ERC721("MyNFT", "MNFT") Ownable(msg.sender) {
        exhibitionContract = Exhibition(_exhibitionContract);
    }

    function transferFrom(address from, address to, uint256 tokenId) public override {
        // Relaxed restriction: allow transfer to exhibition-related addresses or if not on exhibition
        if (isOnExhibition(tokenId)) {
             require(to == address(exhibitionContract) || to == address(this), "Transfer not allowed during exhibition");
        }
        super.transferFrom(from, to, tokenId);
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function doExhibition(uint256 tokenId, uint256 locationId) public {
        // Require ownership and non-exhibition status of the NFT
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(!isOnExhibition(tokenId), "Already on exhibition");

        originalOwners[tokenId] = msg.sender;
        exhibitionContract.exhibitNFT(tokenId, locationId);

        // Use _transfer to move the NFT to the contract for safekeeping during exhibition
        _transfer(msg.sender, address(this), tokenId);
    }

    function endExhibition(uint256 tokenId) public onlyOwner {
        // Contract owner or authorized personnel can end the exhibition
        exhibitionContract.endExhibition(tokenId);
    }

    function doRetrieve(uint256 tokenId) public {
        // Require exhibition to be ended
        require(!isOnExhibition(tokenId), "Exhibition still ongoing");
        require(originalOwners[tokenId] == msg.sender, "Not the original owner");

        exhibitionContract.retrieveNFT(tokenId);
        address owner = originalOwners[tokenId];
        delete originalOwners[tokenId];

        _transfer(address(this), owner, tokenId);
    }

    function isOnExhibition(uint256 tokenId) public view returns (bool) {
        // Check exhibition details mapping for flag
        return exhibitionContract.getExhibitionDetails(tokenId).active;
    }
}
