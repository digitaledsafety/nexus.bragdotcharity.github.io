// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract MockRoyaltyNFT is ERC721, IERC2981 {
    constructor() ERC721("MockRoyalty", "MR") {}
    function mint(address to, uint256 tokenId) external { _mint(to, tokenId); }
    function royaltyInfo(uint256, uint256 salePrice) external pure override returns (address, uint256) {
        return (address(0), salePrice / 10); // 10% royalty to address(0)
    }
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId);
    }
}
