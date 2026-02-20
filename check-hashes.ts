import { keccak256, toBytes } from "viem";
console.log("MINTER_ROLE:", keccak256(toBytes("MINTER_ROLE")));
console.log("TREASURY_ROLE:", keccak256(toBytes("TREASURY_ROLE")));
console.log("VERIFIER_ROLE:", keccak256(toBytes("VERIFIER_ROLE")));
