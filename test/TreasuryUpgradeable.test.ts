import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeFunctionData, keccak256, toBytes, zeroAddress } from "viem";

describe("Treasury Upgradeable & Batch", async function () {
  const { viem } = await network.connect();

  async function deployTreasury() {
    const [owner, other] = await viem.getWalletClients();
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

    // Deploy implementation
    const treasuryImpl = await viem.deployContract("Treasury", []);

    // Deploy proxy via factory
    const factory = await viem.deployContract("TreasuryFactory", [treasuryImpl.address]);

    const salt = keccak256(toBytes("salt1"));
    const owners = [owner.account.address];
    const threshold = 1n;

    await factory.write.createTreasury([owners, threshold, entryPointAddress, salt]);
    const proxyAddr = await factory.read.getAddress([owners, threshold, entryPointAddress, salt]);

    const treasury = await viem.getContractAt("Treasury", proxyAddr);

    return { treasury, owner, other, entryPointAddress };
  }

  it("Should initialize correctly through proxy", async function () {
    const { treasury, owner } = await deployTreasury();
    assert.equal(await treasury.read.threshold(), 1n);
    assert.ok(await treasury.read.isOwner([owner.account.address]));
  });

  it("Should allow proposing and executing a batch", async function () {
    const { treasury, owner, other } = await deployTreasury();

    const target1 = other.account.address;
    const value1 = parseEther("0.1");
    const data1 = "0x";

    const target2 = other.account.address;
    const value2 = parseEther("0.2");
    const data2 = "0x";

    // Send some ETH to treasury
    await owner.sendTransaction({
        to: treasury.address,
        value: parseEther("1.0")
    });

    const nonce = 1n;
    await treasury.write.propose([[target1, target2], [value1, value2], [data1, data2], nonce]);

    const proposalId = 0n;
    const publicClient = await viem.getPublicClient();
    const initialBalance = await publicClient.getBalance({ address: other.account.address });

    await treasury.write.executeProposal([proposalId]);

    const finalBalance = await publicClient.getBalance({ address: other.account.address });
    assert.equal(finalBalance - initialBalance, parseEther("0.3"));

    const p = await treasury.read.getProposal([proposalId]);
    assert.equal(p[3], true); // executed
  });
});
