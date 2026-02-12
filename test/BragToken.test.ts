import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("BragToken Integration", async function () {
  const { viem } = await network.connect();

  async function deploySystem() {
    const [owner, donor] = await viem.getWalletClients();

    // Deploy contracts manually for the test to ensure clean state
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      1n // 1 wei minimum
    ]);
    const bragToken = await viem.deployContract("BragToken", [owner.account.address]);

    // Setup relationships
    await receipt.write.setMinter([bragNFT.address, true]);
    await bragNFT.write.setReceiptContract([receipt.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    // Authorize BragNFT to mint tokens
    await bragToken.write.transferOwnership([bragNFT.address]);

    return { owner, donor, bragNFT, bragToken, treasury };
  }

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
    const { owner, bragToken } = await deploySystem();
    const [_, __, attacker] = await viem.getWalletClients();

    // owner is no longer the owner of bragToken, bragNFT is.
    await assert.rejects(
      bragToken.write.mint([attacker.account.address, 100n], { account: owner.account }),
      /OwnableUnauthorizedAccount/
    );
  });
});
