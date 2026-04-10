import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeFunctionData } from "viem";

describe("Treasury Batch Proposals", async function () {
  const { viem } = await network.connect();

  async function deployTreasury() {
    const [owner1, owner2, nonOwner] = await viem.getWalletClients();
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032"; // Standard v0.7.0 EntryPoint

    const treasury = await viem.deployContract("Treasury", [
      [owner1.account.address, owner2.account.address],
      2n, // threshold 2
      entryPointAddress
    ]);

    // Mock contract to call
    const mockNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock", "MCK"]);

    return { treasury, mockNFT, owner1, owner2, nonOwner };
  }

  it("Should allow proposing and executing a batch of transactions", async function () {
    const { treasury, mockNFT, owner1, owner2 } = await deployTreasury();

    const targets = [mockNFT.address, mockNFT.address];
    const values = [0n, 0n];
    const datas = [
        encodeFunctionData({
            abi: mockNFT.abi,
            functionName: "mint",
            args: [treasury.address, 1n]
        }),
        encodeFunctionData({
            abi: mockNFT.abi,
            functionName: "mint",
            args: [treasury.address, 2n]
        })
    ];

    // owner1 proposes
    await treasury.write.propose([targets, values, datas, 0n], { account: owner1.account });
    const proposalId = 0n;

    // owner2 approves
    await treasury.write.approve([proposalId, 0n], { account: owner2.account });

    // Execute
    await treasury.write.executeProposal([proposalId]);

    // Verify
    assert.equal(await mockNFT.read.ownerOf([1n]), getAddress(treasury.address));
    assert.equal(await mockNFT.read.ownerOf([2n]), getAddress(treasury.address));
  });

  it("Should fail if any transaction in the batch fails", async function () {
    const { treasury, mockNFT, owner1, owner2 } = await deployTreasury();

    // Mint token 1 first to make second mint fail if it were for same ID (but we use different ID for now)
    // Let's make it fail by calling a non-existent function or reverting
    const targets = [mockNFT.address, mockNFT.address];
    const values = [0n, 0n];
    const datas = [
        encodeFunctionData({
            abi: mockNFT.abi,
            functionName: "mint",
            args: [treasury.address, 1n]
        }),
        "0xdeadbeef" // Invalid calldata
    ];

    await treasury.write.propose([targets, values, datas, 0n], { account: owner1.account });
    const proposalId = 0n;
    await treasury.write.approve([proposalId, 0n], { account: owner2.account });

    // Execute should fail
    await assert.rejects(
        treasury.write.executeProposal([proposalId]),
        /ExecutionFailed/
    );

    // Token 1 should NOT be minted (atomic revert)
    await assert.rejects(
        mockNFT.read.ownerOf([1n])
    );
  });
});
