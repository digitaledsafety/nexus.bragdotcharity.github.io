import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes } from "viem";

describe("NexusToken Integration", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));

  async function deploySystem(initialSupply = 0n, maxSupply = parseEther("1000000")) {
    const [owner, donor] = await viem.getWalletClients();

    // Deploy contracts manually for the test to ensure clean state
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const nexus = await viem.deployContract("Nexus", [
      owner.account.address,
      treasury.address,
      1n // 1 wei minimum
    ]);
    const nexusToken = await viem.deployContract("NexusToken", [
      owner.account.address,
      initialSupply,
      maxSupply
    ]);

    // Setup relationships
    await receipt.write.grantRole([MINTER_ROLE, nexus.address]);
    await nexus.write.setReceiptContract([receipt.address]);
    await nexus.write.setNexusToken([nexusToken.address]);

    // Authorize Nexus to mint tokens
    await nexusToken.write.grantRole([MINTER_ROLE, nexus.address]);

    return { owner, donor, nexus, nexusToken, treasury };
  }

  it("Should pre-mint initial supply to the owner", async function () {
    const initialSupply = parseEther("100");
    const { owner, nexusToken } = await deploySystem(initialSupply);

    const balance = await nexusToken.read.balanceOf([owner.account.address]);
    assert.equal(balance, initialSupply);
  });

  it("Should mint NEXUS tokens when a donation is made", async function () {
    const { donor, nexus, nexusToken } = await deploySystem();

    const donationAmount = parseEther("1"); // 1 ETH
    await nexus.write.donate(["praise be", ""], {
      account: donor.account,
      value: donationAmount
    });

    const balance = await nexusToken.read.balanceOf([donor.account.address]);
    // 1:1 reward ratio (in base units/wei)
    assert.equal(balance, donationAmount);
  });

  it("Should fail to mint beyond maxSupply", async function () {
    const maxSupply = parseEther("10");
    const { donor, nexus } = await deploySystem(0n, maxSupply);

    // This should fail because it exceeds maxSupply
    await assert.rejects(
      nexus.write.donate(["too much", ""], {
        account: donor.account,
        value: parseEther("11")
      }),
      /Exceeds maxSupply/
    );
  });

  it("Should allow voting delegation and track voting power", async function () {
    const { donor, nexus, nexusToken } = await deploySystem();

    const donationAmount = parseEther("10");
    await nexus.write.donate(["big donor", ""], {
      account: donor.account,
      value: donationAmount
    });

    // Check initial voting power (should be 0 until delegated)
    let votes = await nexusToken.read.getVotes([donor.account.address]);
    assert.equal(votes, 0n);

    // Delegate to self
    await nexusToken.write.delegate([donor.account.address], { account: donor.account });

    // Check voting power now
    votes = await nexusToken.read.getVotes([donor.account.address]);
    assert.equal(votes, donationAmount);
  });

  it("Should fail if someone else tries to mint tokens directly", async function () {
    const { nexusToken } = await deploySystem();
    const [_, __, attacker] = await viem.getWalletClients();

    // attacker doesn't have MINTER_ROLE
    await assert.rejects(
      nexusToken.write.mint([attacker.account.address, 100n], { account: attacker.account }),
      /AccessControlUnauthorizedAccount/
    );
  });

  it("Should allow owner (admin) to grant MINTER_ROLE to another address", async function () {
    const { owner, nexusToken } = await deploySystem();
    const [_, __, otherMinter] = await viem.getWalletClients();

    // Grant MINTER_ROLE
    await nexusToken.write.grantRole([MINTER_ROLE, otherMinter.account.address], { account: owner.account });

    // otherMinter can now mint
    await nexusToken.write.mint([otherMinter.account.address, 100n], { account: otherMinter.account });

    const balance = await nexusToken.read.balanceOf([otherMinter.account.address]);
    assert.equal(balance, 100n);
  });
});
