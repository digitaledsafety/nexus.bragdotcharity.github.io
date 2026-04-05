// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {PackedUserOperation} from "@openzeppelin/contracts/interfaces/draft-IERC4337.sol";
import {IEntryPoint} from "@openzeppelin/contracts/interfaces/draft-IERC4337.sol";

contract MockEntryPoint is IEntryPoint {
    mapping(address => uint256) public nonces;

    function handleOps(PackedUserOperation[] calldata ops, address payable beneficiary) external override {
        for (uint256 i = 0; i < ops.length; i++) {
            // Use the consistent hashing method
            bytes32 userOpHash = getUserOpHash(ops[i]);

            // Minimal simulation of EntryPoint calling validateUserOp and executing
            (bool success, ) = ops[i].sender.call(
                abi.encodeWithSignature("validateUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32,uint256)",
                ops[i], userOpHash, 0)
            );
            require(success, "Validation failed");

            // Execute callData
            (success, ) = ops[i].sender.call(ops[i].callData);
            require(success, "Execution failed");
        }
    }

    function handleAggregatedOps(UserOpsPerAggregator[] calldata opsPerAggregator, address payable beneficiary) external override {}

    function getUserOpHash(PackedUserOperation calldata userOp) public view returns (bytes32) {
        return keccak256(abi.encode(userOp, address(this), block.chainid));
    }

    function getNonce(address sender, uint192 key) external view override returns (uint256) {
        return nonces[sender];
    }

    function depositTo(address account) external payable override {}
    function withdrawTo(address payable withdrawAddress, uint256 withdrawAmount) external override {}
    function addStake(uint32 unstakeDelaySec) external payable override {}
    function unlockStake() external override {}
    function withdrawStake(address payable withdrawAddress) external override {}
    function balanceOf(address account) external view override returns (uint256) { return 0; }
}
