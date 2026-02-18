// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./IDonationReceipt.sol";

/**
 * @title DonationReceipt
 * @dev A Soulbound NFT that serves as a permanent, non-transferable record of a donation.
 * Uses AccessControl to manage minters (e.g., BragNFT).
 */
contract DonationReceipt is ERC721, AccessControl, IDonationReceipt {
    using Strings for uint256;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId;
    mapping(uint256 => Receipt) public receipts;

    event ReceiptMinted(uint256 indexed tokenId, address indexed donor, uint256 amount);

    constructor(address _initialOwner)
        ERC721("DonationReceipt", "BRAGRECEIPT")
    {
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev Deprecated: Use grantRole(MINTER_ROLE, minter) instead.
     * Kept for backward compatibility during transition.
     */
    function setMinter(address minter, bool status) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (status) {
            _grantRole(MINTER_ROLE, minter);
        } else {
            _revokeRole(MINTER_ROLE, minter);
        }
    }

    /**
     * @dev Mint a new soulbound receipt. Only callable by authorized minters (e.g., BragNFT contract).
     */
    function mint(address to, uint256 amount, string calldata message) external onlyRole(MINTER_ROLE) returns (uint256) {
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
     * @dev Returns the metadata URI for a given token. Generates on-chain JSON receipt.
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireOwned(tokenId);
        Receipt memory receipt = receipts[tokenId];

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Donation Receipt #',
                        tokenId.toString(),
                        '", "description": "Official Brag.Charity Donation Record", ',
                        '"image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(_generateSVG(receipt))),
                        '", "attributes": [',
                        '{"trait_type": "Donor", "value": "',
                        Strings.toHexString(uint160(receipt.donor), 20),
                        '"}, {"trait_type": "Amount", "value": "',
                        receipt.amount.toString(),
                        '"}, {"trait_type": "Timestamp", "display_type": "date", "value": ',
                        receipt.timestamp.toString(),
                        '}]}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function _generateSVG(Receipt memory receipt) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" width="350" height="350">',
            '<rect width="100%" height="100%" fill="#1e293b" />',
            '<text x="50%" y="40" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">OFFICIAL RECEIPT</text>',
            '<text x="20" y="100" fill="#94a3b8" font-family="sans-serif" font-size="12">DONOR:</text>',
            '<text x="20" y="120" fill="white" font-family="sans-serif" font-size="10">', Strings.toHexString(uint160(receipt.donor), 20), '</text>',
            '<text x="20" y="160" fill="#94a3b8" font-family="sans-serif" font-size="12">AMOUNT:</text>',
            '<text x="20" y="180" fill="#6366f1" font-family="sans-serif" font-size="16" font-weight="bold">', receipt.amount.toString(), ' WEI</text>',
            '<text x="20" y="220" fill="#94a3b8" font-family="sans-serif" font-size="12">MESSAGE:</text>',
            '<text x="20" y="240" fill="white" font-family="sans-serif" font-size="12">', receipt.message, '</text>',
            '</svg>'
        ));
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
