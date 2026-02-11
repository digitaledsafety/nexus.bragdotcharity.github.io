// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title DonationReceipt
 * @dev A Soulbound NFT that serves as a permanent, non-transferable record of a donation.
 */
contract DonationReceipt is ERC721, Ownable {
    using Strings for uint256;
    using Strings for address;

    struct Receipt {
        address donor;
        uint256 amount;
        uint256 timestamp;
        string message;
    }

    uint256 private _nextTokenId;
    mapping(uint256 => Receipt) public receipts;
    mapping(address => bool) public minters;

    event ReceiptMinted(uint256 indexed tokenId, address indexed donor, uint256 amount);

    constructor(address _initialOwner)
        ERC721("DonationReceipt", "RECEIPT")
        Ownable(_initialOwner)
    {}

    modifier onlyMinter() {
        require(minters[msg.sender], "Not authorized to mint receipts");
        _;
    }

    function setMinter(address minter, bool status) external onlyOwner {
        minters[minter] = status;
    }

    /**
     * @dev Mint a new soulbound receipt. Only callable by authorized minters (e.g., BragNFT contract).
     */
    function mint(address to, uint256 amount, string calldata message) external onlyMinter returns (uint256) {
        uint256 tokenId = _nextTokenId++;

        receipts[tokenId] = Receipt({
            donor: to,
            amount: amount,
            timestamp: block.timestamp,
            message: message
        });

        _safeMint(to, tokenId);

        emit ReceiptMinted(tokenId, to, amount);
        return tokenId;
    }

    function getReceipt(uint256 tokenId) external view returns (Receipt memory) {
        _requireOwned(tokenId);
        return receipts[tokenId];
    }

    /**
     * @dev Returns a base64 encoded JSON with a generated SVG receipt.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        Receipt memory r = receipts[tokenId];

        string memory svg = string(
            abi.encodePacked(
                '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">',
                '<rect width="100%" height="100%" fill="#1e293b"/>',
                '<text x="20" y="40" fill="#6366f1" font-family="sans-serif" font-size="20" font-weight="bold">Donation Receipt</text>',
                '<text x="20" y="80" fill="#cbd5e1" font-family="monospace" font-size="12">Donor: ', r.donor.toHexString(), '</text>',
                '<text x="20" y="110" fill="#cbd5e1" font-family="monospace" font-size="12">Amount: ', (r.amount / 1e15).toString(), '.', (r.amount % 1e15 / 1e12).toString(), ' mETH</text>',
                '<text x="20" y="140" fill="#94a3b8" font-family="sans-serif" font-size="12">Message: ', r.message, '</text>',
                '<text x="20" y="170" fill="#475569" font-family="monospace" font-size="10">ID: #', tokenId.toString(), ' | ', r.timestamp.toString(), '</text>',
                '</svg>'
            )
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Donation Receipt #', tokenId.toString(), '",',
                        '"description": "Permanent record of donation to brag.charity",',
                        '"image": "data:image/svg+xml;base64,', Base64.encode(bytes(svg)), '"}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    /**
     * @dev Soulbound logic: Transfers are disabled.
     */
    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);
        if (from != address(0) && to != address(0)) {
            revert("DonationReceipt: Token is soulbound and cannot be transferred");
        }
        return super._update(to, tokenId, auth);
    }
}
