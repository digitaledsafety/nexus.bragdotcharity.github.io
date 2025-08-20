// We don't have Ethereum specific assertions in Hardhat 3 yet
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

describe("Reward", function () {
  it("Should have the correct name and symbol", async function () {
    const { viem } = await network.connect();
    const [owner] = await viem.getWalletClients();
    const reward = await viem.deployContract("Reward", [
      owner.account.address,
      100n,
      3n,
    ]);
    assert.equal(
      await reward.read.name(),
      "Digital Education & Safety Foundation Donation"
    );
    assert.equal(await reward.read.symbol(), "DESF");
  });

  it("Should allow donations and mint NFTs", async function () {
    const { viem } = await network.connect();
    const [owner, otherAccount] = await viem.getWalletClients();
    const reward = await viem.deployContract("Reward", [
      owner.account.address,
      100n,
      3n,
    ]);
    const donationAmount = 150n;

    await reward.write.donate({
      value: donationAmount,
      account: otherAccount.account,
    });

    assert.equal(
      (await reward.read.ownerOf([0n])).toLowerCase(),
      otherAccount.account.address.toLowerCase()
    );
  });

  it("Should not allow donations below the minimum amount", async function () {
    const { viem } = await network.connect();
    const [owner, otherAccount] = await viem.getWalletClients();
    const reward = await viem.deployContract("Reward", [
      owner.account.address,
      100n,
      3n,
    ]);
    const donationAmount = 50n;

    await assert.rejects(
      reward.write.donate({
        value: donationAmount,
        account: otherAccount.account,
      }),
      (err: Error) => {
        assert.match(err.message, /Donation amount is below minimum/);
        return true;
      }
    );
  });

  it("Should not allow minting more than the maximum supply", async function () {
    const { viem } = await network.connect();
    const [owner, otherAccount] = await viem.getWalletClients();
    const reward = await viem.deployContract("Reward", [
      owner.account.address,
      100n,
      3n,
    ]);
    const donationAmount = 150n;

    for (let i = 0; i < 3; i++) {
      await reward.write.donate({
        value: donationAmount,
        account: otherAccount.account,
      });
    }

    await assert.rejects(
      reward.write.donate({
        value: donationAmount,
        account: otherAccount.account,
      }),
      (err: Error) => {
        assert.match(err.message, /Cannot exceed maximum supply of rewards/);
        return true;
      }
    );
  });

  it("Should accept donations through receive function", async function () {
    const { viem } = await network.connect();
    const publicClient = await viem.getPublicClient();
    const [owner, otherAccount] = await viem.getWalletClients();
    const reward = await viem.deployContract("Reward", [
      owner.account.address,
      100n,
      3n,
    ]);
    const donationAmount = 150n;

    const ownerBalanceBefore = await publicClient.getBalance({
      address: await reward.read.wallet(),
    });

    await otherAccount.sendTransaction({
      to: reward.address,
      value: donationAmount,
    });

    const ownerBalanceAfter = await publicClient.getBalance({
      address: await reward.read.wallet(),
    });

    assert.equal(
      ownerBalanceAfter - ownerBalanceBefore,
      donationAmount,
      "Wallet did not receive the donation"
    );
    assert.equal(
      (await reward.read.ownerOf([0n])).toLowerCase(),
      otherAccount.account.address.toLowerCase(),
      "NFT not minted to the donor"
    );
  });
});
