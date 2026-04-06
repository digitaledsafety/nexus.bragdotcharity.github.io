// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Treasury} from "./Treasury.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

/**
 * @title TreasuryFactory
 * @dev Factory for deploying upgradeable Treasury instances with predictable addresses.
 */
contract TreasuryFactory {
    address public immutable implementation;

    event TreasuryCreated(address indexed treasury, address[] owners, uint256 threshold);

    constructor(address _implementation) {
        implementation = _implementation;
    }

    /**
     * @dev Deploys a new upgradeable Treasury instance (Proxy) using CREATE2.
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
        bytes memory data = abi.encodeWithSelector(
            Treasury.initialize.selector,
            owners,
            threshold,
            entryPoint
        );
        address proxy = address(new ERC1967Proxy{salt: salt}(implementation, data));
        emit TreasuryCreated(proxy, owners, threshold);
        return proxy;
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
        bytes memory data = abi.encodeWithSelector(
            Treasury.initialize.selector,
            owners,
            threshold,
            entryPoint
        );
        bytes memory bytecode = abi.encodePacked(
            type(ERC1967Proxy).creationCode,
            abi.encode(implementation, data)
        );
        return Create2.computeAddress(salt, keccak256(bytecode));
    }
}
