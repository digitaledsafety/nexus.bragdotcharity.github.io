// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./BaseBragNFT.sol";

/**
 * @title BragNFT
 * @dev Concrete implementation of BragNFT for a specific campaign with a max supply.
 */
contract BragNFT is BaseBragNFT {
    uint256 public maxSupply;
    string public campaignId;

    event MaxSupplyUpdated(uint256 maxSupply);

    constructor(
        address _initialOwner,
        address _treasury,
        uint256 _minimumDonation,
        uint256 _maxSupply,
        string memory _campaignId
    )
        BaseBragNFT("BragNFT", "BRAGNFT", _initialOwner, _treasury, _minimumDonation)
    {
        maxSupply = _maxSupply;
        campaignId = _campaignId;
    }

    function setMaxSupply(uint256 _maxSupply) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_maxSupply >= _nextTokenId, "Max supply below current supply");
        maxSupply = _maxSupply;
        emit MaxSupplyUpdated(_maxSupply);
    }

    /**
     * @dev Overridden _donate to enforce max supply.
     */
    function _donate(address recipient, string calldata message, string calldata media, bool onChain) internal override {
        require(maxSupply == 0 || _nextTokenId < maxSupply, "Campaign max supply reached");
        super._donate(recipient, message, media, onChain);
    }
}
