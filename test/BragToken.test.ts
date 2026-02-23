import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes } from "viem";

describe("BragToken Integration", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));

  async function deploySystem(initialSupply = 0n, maxSupply = parseEther("1000000")) {
    const [owner, donor] = await viem.getWalletClients();

    // Deploy contracts manually for the test to ensure clean state
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      1n, // 1 wei minimum
      100n,
      "test-campaign"
    ]);
    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      initialSupply,
      maxSupply
    ]);

    // Setup relationships
    await receipt.write.setMinter([bragNFT.address, true]);
    await bragNFT.write.setReceiptContract([receipt.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    // Authorize BragNFT to mint tokens
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { owner, donor, bragNFT, bragToken, treasury };
  }

  it("Should pre-mint initial supply to the owner", async function () {
    const initialSupply = parseEther("100");
    const { owner, bragToken } = await deploySystem(initialSupply);

    const balance = await bragToken.read.balanceOf([owner.account.address]);
    assert.equal(balance, initialSupply);
  });

  it("Should mint BRAG tokens when a donation is made", async function () {
    const { donor, bragNFT, bragToken } = await deploySystem();

    const donationAmount = parseEther("1"); // 1 ETH
    await bragNFT.write.donate(["praise be", ""], {
      account: donor.account,
      value: donationAmount
    });

    const balance = await bragToken.read.balanceOf([donor.account.address]);
    // 1:1 reward ratio (in base units/wei)
    assert.equal(balance, donationAmount);
  });

  it("Should fail to mint beyond maxSupply", async function () {
    const maxSupply = parseEther("10");
    const { donor, bragNFT } = await deploySystem(0n, maxSupply);

    // This should fail because it exceeds maxSupply
    await assert.rejects(
      bragNFT.write.donate(["too much", ""], {
        account: donor.account,
        value: parseEther("11")
      }),
      /Exceeds maxSupply/
    );
  });

  it("Should allow voting delegation and track voting power", async function () {
    const { donor, bragNFT, bragToken } = await deploySystem();

    const donationAmount = parseEther("10");
    await bragNFT.write.donate(["big donor", ""], {
      account: donor.account,
      value: donationAmount
    });

    // Check initial voting power (should be 0 until delegated)
    let votes = await bragToken.read.getVotes([donor.account.address]);
    assert.equal(votes, 0n);

    // Delegate to self
    await bragToken.write.delegate([donor.account.address], { account: donor.account });

    // Check voting power now
    votes = await bragToken.read.getVotes([donor.account.address]);
    assert.equal(votes, donationAmount);
  });

  it("Should fail if someone else tries to mint tokens directly", async function () {
    const { bragToken } = await deploySystem();
    const [_, __, attacker] = await viem.getWalletClients();

    // attacker doesn't have MINTER_ROLE
    await assert.rejects(
      bragToken.write.mint([attacker.account.address, 100n], { account: attacker.account }),
      /AccessControlUnauthorizedAccount/
    );
  });

  it("Should allow owner (admin) to grant MINTER_ROLE to another address", async function () {
    const { owner, bragToken } = await deploySystem();
    const [_, __, otherMinter] = await viem.getWalletClients();

    // Grant MINTER_ROLE
    await bragToken.write.grantRole([MINTER_ROLE, otherMinter.account.address], { account: owner.account });

    // otherMinter can now mint
    await bragToken.write.mint([otherMinter.account.address, 100n], { account: otherMinter.account });

    const balance = await bragToken.read.balanceOf([otherMinter.account.address]);
    assert.equal(balance, 100n);
  });
});
