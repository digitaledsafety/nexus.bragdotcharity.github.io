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
 * Generates dynamic on-chain SVG artwork for every receipt.
 */
contract DonationReceipt is ERC721, AccessControl, IDonationReceipt {
    using Strings for uint256;
    using Strings for address;

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
     * @dev Generate on-chain metadata URI with dynamic SVG artwork.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        Receipt memory r = receipts[tokenId];

        string memory svg = _generateSVG(r);
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Donation Receipt #',
                        tokenId.toString(),
                        '", "description": "Official on-chain receipt for a contribution to Brag.Charity.", ',
                        '"image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(svg)),
                        '", "attributes": [',
                        '{"trait_type": "Donor", "value": "',
                        r.donor.toHexString(),
                        '"}, {"trait_type": "Amount (Wei)", "value": "',
                        r.amount.toString(),
                        '"}, {"trait_type": "Timestamp", "display_type": "date", "value": ',
                        r.timestamp.toString(),
                        '}]}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function _generateSVG(Receipt memory r) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: serif; font-size: 14px; } .header { font-size: 20px; font-weight: bold; }</style>',
            '<rect width="100%" height="100%" fill="#4f46e5" />',
            '<text x="20" y="40" class="base header">Donation Receipt</text>',
            '<text x="20" y="80" class="base">Donor: ', r.donor.toHexString(), '</text>',
            '<text x="20" y="110" class="base">Amount: ', r.amount.toString(), ' Wei</text>',
            '<text x="20" y="140" class="base">Date: ', r.timestamp.toString(), '</text>',
            '<text x="20" y="180" class="base">Message:</text>',
            '<text x="20" y="200" class="base">', _escapeXML(r.message), '</text>',
            '<text x="20" y="320" class="base" style="font-size: 10px;">Verified by Brag.Charity</text>',
            '</svg>'
        ));
    }

    function _escapeXML(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '&') extraLength += 4;
            else if (inputBytes[i] == '<') extraLength += 3;
            else if (inputBytes[i] == '>') extraLength += 3;
            else if (inputBytes[i] == '"') extraLength += 5;
            else if (inputBytes[i] == '\'') extraLength += 5;
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '&') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'm'; outputBytes[j++] = 'p'; outputBytes[j++] = ';';
            } else if (inputBytes[i] == '<') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'l'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (inputBytes[i] == '>') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'g'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (inputBytes[i] == '"') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'q'; outputBytes[j++] = 'u'; outputBytes[j++] = 'o'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (inputBytes[i] == '\'') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'p'; outputBytes[j++] = 'o'; outputBytes[j++] = 's'; outputBytes[j++] = ';';
            } else {
                outputBytes[j++] = inputBytes[i];
            }
        }
        return string(outputBytes);
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
