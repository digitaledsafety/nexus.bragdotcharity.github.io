// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./IDonationReceipt.sol";

/**
 * @title DonationReceipt
 * @dev A Soulbound NFT that serves as a permanent, non-transferable record of a donation.
 * Uses AccessControl to manage minters (e.g., BragNFT).
 */
contract DonationReceipt is ERC721, AccessControl, IDonationReceipt {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId;
    mapping(uint256 => Receipt) public receipts;

    event ReceiptMinted(uint256 indexed tokenId, address indexed donor, uint256 amount);

    constructor(address _initialAdmin)
        ERC721("DonationReceipt", "BRAGRECEIPT")
    {
        _grantRole(DEFAULT_ADMIN_ROLE, _initialAdmin);
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
