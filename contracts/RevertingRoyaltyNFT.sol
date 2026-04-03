// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract RevertingRoyaltyNFT is ERC721, IERC2981 {
    address public reverter;

    constructor(address _reverter) ERC721("Reverting", "REV") {
        reverter = _reverter;
        _mint(msg.sender, 0);
    }

    function royaltyInfo(uint256, uint256 royaltyFee) external view override returns (address, uint256) {
        return (reverter, royaltyFee);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId);
    }
}

contract Reverter {
    receive() external payable {
        revert("I refuse money");
    }
}
