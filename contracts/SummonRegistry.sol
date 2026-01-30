// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SummonRegistry
 * @dev A central registry for verified "Summon Vaults".
 * Each vault represents a location (Game, Gallery, Website, etc.) where an NFT can be "summoned".
 */
contract SummonRegistry is Ownable {
    enum LocationType { Game, Physical, Website, Gallery, Other }

    struct VaultInfo {
        bool verified;
        LocationType locationType;
        string name;
        string description;
    }

    mapping(address => VaultInfo) public vaults;
    address[] public vaultAddresses;

    event VaultVerified(address indexed vault, LocationType locationType, string name);
    event VaultRemoved(address indexed vault);

    constructor(address initialOwner) Ownable(initialOwner) {}

    /**
     * @dev Register and verify a vault address.
     */
    function verifyVault(
        address vault,
        LocationType locationType,
        string calldata name,
        string calldata description
    ) external onlyOwner {
        require(vault != address(0), "Invalid address");
        if (!vaults[vault].verified) {
            vaultAddresses.push(vault);
        }
        vaults[vault] = VaultInfo({
            verified: true,
            locationType: locationType,
            name: name,
            description: description
        });

        emit VaultVerified(vault, locationType, name);
    }

    /**
     * @dev Remove a vault from the verified list.
     */
    function removeVault(address vault) external onlyOwner {
        require(vaults[vault].verified, "Vault not verified");
        vaults[vault].verified = false;

        // Note: We don't remove from vaultAddresses array to keep indices stable,
        // but we could if needed. The 'verified' flag is the source of truth.
        emit VaultRemoved(vault);
    }

    function isVerified(address vault) external view returns (bool) {
        return vaults[vault].verified;
    }

    function getVaultCount() external view returns (uint256) {
        return vaultAddresses.length;
    }
}
