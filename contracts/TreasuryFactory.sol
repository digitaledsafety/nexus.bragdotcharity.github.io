// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Treasury} from "./Treasury.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

/**
 * @title TreasuryFactory
 * @dev Factory for deploying Treasury instances with predictable addresses.
 */
contract TreasuryFactory {
    event TreasuryCreated(address indexed treasury, address[] owners, uint256 threshold);

    /**
     * @dev Deploys a new Treasury instance using CREATE2.
     * @param owners Initial owners of the treasury.
     * @param threshold Required number of approvals for the treasury.
     * @param entryPoint Address of the EIP-4337 EntryPoint.
     * @param salt Salt for deterministic deployment.
     */
    function createTreasury(
        address[] memory owners,
        uint256 threshold,
        address entryPoint,
        bytes32 salt
    ) external returns (address) {
        address treasury = address(new Treasury{salt: salt}(owners, threshold, entryPoint));
        emit TreasuryCreated(treasury, owners, threshold);
        return treasury;
    }

    /**
     * @dev Predicts the address of a Treasury instance.
     */
    function getAddress(
        address[] memory owners,
        uint256 threshold,
        address entryPoint,
        bytes32 salt
    ) external view returns (address) {
        bytes memory bytecode = abi.encodePacked(
            type(Treasury).creationCode,
            abi.encode(owners, threshold, entryPoint)
        );
        return Create2.computeAddress(salt, keccak256(bytecode));
    }
}
