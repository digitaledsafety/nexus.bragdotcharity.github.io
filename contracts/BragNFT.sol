// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BragNFT
 * @dev A Soulbound NFT that acts as a donation receipt.
 * Can be "loaned" to authorized exhibition contracts.
 */
contract BragNFT is ERC721, Ownable {
    struct Donation {
        address donor;
        uint256 amount;
        uint256 timestamp;
        string message;
    }

    uint256 private _nextTokenId;
    address public treasury;
    uint256 public minimumDonation;

    mapping(uint256 => Donation) public donations;
    mapping(address => bool) public authorizedExhibitions;

    event Donated(address indexed donor, uint256 amount, uint256 tokenId, string message);
    event ExhibitionAuthorized(address indexed exhibition, bool status);

    constructor(address _initialOwner, address _treasury, uint256 _minimumDonation)
        ERC721("BragNFT", "BRAG")
        Ownable(_initialOwner)
    {
        treasury = _treasury;
        minimumDonation = _minimumDonation;
    }

    function setTreasury(address _treasury) external onlyOwner {
        require(_treasury != address(0), "Invalid treasury address");
        treasury = _treasury;
    }

    function setMinimumDonation(uint256 _minimumDonation) external onlyOwner {
        minimumDonation = _minimumDonation;
    }

    function setAuthorizedExhibition(address exhibition, bool status) external onlyOwner {
        authorizedExhibitions[exhibition] = status;
        emit ExhibitionAuthorized(exhibition, status);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH.
     * @param message A message to include with the donation receipt.
     */
    function donate(string calldata message) external payable {
        require(msg.value >= minimumDonation, "Donation below minimum");

        uint256 tokenId = _nextTokenId++;

        donations[tokenId] = Donation({
            donor: msg.sender,
            amount: msg.value,
            timestamp: block.timestamp,
            message: message
        });

        _safeMint(msg.sender, tokenId);

        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Transfer to treasury failed");

        emit Donated(msg.sender, msg.value, tokenId, message);
    }

    /**
     * @dev Returns the donation receipt details for a given token.
     */
    function getDonation(uint256 tokenId) external view returns (Donation memory) {
        _requireOwned(tokenId);
        return donations[tokenId];
    }

    /**
     * @dev Soulbound logic: Transfers are only allowed to or from authorized exhibition contracts.
     * Minting and burning are always allowed.
     */
    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);

        // If it's not a mint or burn
        if (from != address(0) && to != address(0)) {
            // Allow transfer if either 'from' or 'to' is an authorized exhibition
            if (!authorizedExhibitions[from] && !authorizedExhibitions[to]) {
                revert("BragNFT: Soulbound token cannot be transferred to non-exhibition addresses");
            }
        }

        return super._update(to, tokenId, auth);
    }
}
