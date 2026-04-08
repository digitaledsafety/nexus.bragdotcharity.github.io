// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
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
    using SafeERC20 for IERC20;
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
     * @dev Returns the metadata URI for a given token. Generates on-chain JSON.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        Receipt memory receipt = receipts[tokenId];

        string memory imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, receipt)))));

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Donation Receipt #',
                        tokenId.toString(),
                        '", "description": "Soulbound donation receipt for Brag.Charity", "image": "',
                        imageURI,
                        '", "attributes": [',
                        '{"trait_type": "Donor", "value": "',
                        Strings.toHexString(receipt.donor),
                        '"}, {"trait_type": "Amount", "value": "',
                        receipt.amount.toString(),
                        '"}, {"trait_type": "Timestamp", "display_type": "date", "value": ',
                        receipt.timestamp.toString(),
                        '}, {"trait_type": "Message", "value": "',
                        _escapeJSON(receipt.message),
                        '"}]}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    /**
     * @dev Generates a simple SVG image with the donation details.
     */
    function _generateSVG(uint256 tokenId, Receipt memory receipt) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: sans-serif; font-size: 14px; }</style>',
            '<rect width="100%" height="100%" fill="#4f46e5" />',
            '<text x="50%" y="40" class="base" dominant-baseline="middle" text-anchor="middle" style="font-size: 20px; font-weight: bold;">Receipt #', tokenId.toString(), '</text>',
            '<text x="20" y="100" class="base">Donor: ', Strings.toHexString(receipt.donor), '</text>',
            '<text x="20" y="130" class="base">Amount: ', receipt.amount.toString(), ' wei</text>',
            '<text x="20" y="160" class="base">Date: ', receipt.timestamp.toString(), '</text>',
            '<text x="20" y="200" class="base" style="font-weight: bold;">Message:</text>',
            '<text x="20" y="230" class="base">', _escapeSVG(receipt.message), '</text>',
            '</svg>'
        ));
    }

    /**
     * @dev Escape special characters for SVG text.
     */
    function _escapeSVG(string memory input) internal pure returns (string memory) {
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
            bytes1 b = inputBytes[i];
            if (b == '&') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'm'; outputBytes[j++] = 'p'; outputBytes[j++] = ';';
            } else if (b == '<') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'l'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '>') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'g'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '"') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'q'; outputBytes[j++] = 'u'; outputBytes[j++] = 'o'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '\'') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'p'; outputBytes[j++] = 'o'; outputBytes[j++] = 's'; outputBytes[j++] = ';';
            } else {
                outputBytes[j++] = b;
            }
        }
        return string(outputBytes);
    }

    /**
     * @dev Escape double quotes, backslashes and control characters for JSON compatibility.
     */
    function _escapeJSON(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; i++) {
            if (inputBytes[i] == '"' || inputBytes[i] == '\\') {
                extraLength++;
            } else if (uint8(inputBytes[i]) < 0x20) {
                extraLength += 5;
            }
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; i++) {
            uint8 b = uint8(inputBytes[i]);
            if (b == 0x22 || b == 0x5C) {
                outputBytes[j++] = '\\';
                outputBytes[j++] = bytes1(b);
            } else if (b < 0x20) {
                outputBytes[j++] = '\\';
                outputBytes[j++] = 'u';
                outputBytes[j++] = '0';
                outputBytes[j++] = '0';
                bytes memory hexAlphabet = "0123456789abcdef";
                outputBytes[j++] = hexAlphabet[b >> 4];
                outputBytes[j++] = hexAlphabet[b & 0x0f];
            } else {
                outputBytes[j++] = bytes1(b);
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

    /**
     * @dev Allows the admin to recover ERC20 tokens sent to the contract.
     */
    function withdrawERC20(address token, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        IERC20(token).safeTransfer(msg.sender, amount);
    }

    /**
     * @dev Allows the admin to recover ETH sent to the contract.
     */
    function withdrawETH(uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "ETH transfer failed");
    }

    receive() external payable {}
}
