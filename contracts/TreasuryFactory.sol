// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Treasury} from "./Treasury.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

/**
 * @title TreasuryFactory
 * @dev Factory for deploying Treasury instances as upgradeable proxies with predictable addresses.
 */
contract TreasuryFactory {
    event TreasuryCreated(address indexed proxy, address indexed implementation, address[] owners, uint256 threshold);

    address public immutable implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    /**
     * @dev Deploys a new Treasury proxy instance using CREATE2.
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
        bytes memory initData = abi.encodeWithSelector(
            Treasury.initialize.selector,
            owners,
            threshold,
            entryPoint
        );

        ERC1967Proxy proxy = new ERC1967Proxy{salt: salt}(implementation, initData);
        address proxyAddr = address(proxy);

        emit TreasuryCreated(proxyAddr, implementation, owners, threshold);
        return proxyAddr;
    }

    /**
     * @dev Predicts the address of a Treasury proxy instance.
     */
    function getAddress(
        address[] memory owners,
        uint256 threshold,
        address entryPoint,
        bytes32 salt
    ) external view returns (address) {
        bytes memory initData = abi.encodeWithSelector(
            Treasury.initialize.selector,
            owners,
            threshold,
            entryPoint
        );
        bytes memory bytecode = abi.encodePacked(
            type(ERC1967Proxy).creationCode,
            abi.encode(implementation, initData)
        );
        return Create2.computeAddress(salt, keccak256(bytecode));
    }
}
