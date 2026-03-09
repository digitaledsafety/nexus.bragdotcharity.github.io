// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MockERC1155 is ERC1155, AccessControl {
    constructor(address _initialOwner) ERC1155("") {
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mint(address to, uint256 id, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _mint(to, id, amount, "");
    }
}
