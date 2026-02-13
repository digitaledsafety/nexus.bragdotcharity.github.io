// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Nonces.sol";

/**
 * @title BragToken
 * @dev The governance token for the brag.charity ecosystem.
 * Holders can vote on how treasury funds are spent.
 * Implements ERC20Burnable for token burning and ERC20Votes for governance.
 */
contract BragToken is ERC20, ERC20Burnable, ERC20Permit, ERC20Votes, Ownable {
    constructor(address initialOwner)
        ERC20("Brag Token", "BRAG")
        ERC20Permit("Brag Token")
        Ownable(initialOwner)
    {}

    /**
     * @dev Mints new tokens. Only the owner (initially the deployer, then the BragNFT contract) can call this.
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}
