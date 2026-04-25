import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import {
  parseEther,
  encodeFunctionData,
  keccak256,
  toBytes,
  getAddress
} from "viem";

describe("New Features and Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, parseEther("1000000")]);
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, owner.account.address]); // Mock EP for now
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), priceFeed.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { owner, user1, user2, bragToken, treasury, bragNFT, marketplace, batchGrant, publicClient, priceFeed };
  }

  describe("BatchGrant Non-Atomic Distribution", async function () {
    it("Should emit DistributionFailed when a transfer fails and continue", async function () {
      const { owner, user1, batchGrant, publicClient } = await deployContracts();
      const revertingContract = await viem.deployContract("RevertingContract");

      const recipients = [user1.account.address, revertingContract.address, owner.account.address];
      const amounts = [parseEther("1"), parseEther("1"), parseEther("1")];

      await batchGrant.write.distributeETHNonAtomic([recipients, amounts], { value: parseEther("3") });

      const logs = await publicClient.getContractEvents({
        address: batchGrant.address,
        abi: batchGrant.abi,
        eventName: "DistributionFailed"
      });

      assert.equal(logs.length, 1);
      assert.equal(getAddress(logs[0].args.recipient!), getAddress(revertingContract.address));

      const balance1 = await publicClient.getBalance({ address: user1.account.address });
      assert.ok(balance1 > parseEther("10000")); // Hardhat default balance is 10k ETH
    });
  });

  describe("BragNFT Multimedia Detection with Query Params", async function () {
    it("Should correctly detect multimedia even with query parameters", async function () {
        const { bragNFT } = await deployContracts();

        await bragNFT.write.donate(["Impact NFT", "https://example.com/audio.mp3?token=123", false], { value: parseEther("0.1") });
        const uri = await bragNFT.read.tokenURI([0n]);
        const decoded = JSON.parse(Buffer.from(uri.split(",")[1], 'base64').toString());

        assert.equal(decoded.animation_url, "https://example.com/audio.mp3?token=123");
    });
  });

  describe("NFTMarketplace Fixed-Price Listings", async function () {
    it("Should allow listing and buying an NFT", async function () {
        const { owner, user1, bragNFT, bragToken, marketplace } = await deployContracts();

        // Mint NFT to user1
        await bragNFT.write.donateTo([user1.account.address, "For sale", "ipfs://test"], { value: parseEther("0.1") });

        // user1 lists NFT
        await user1.writeContract({
            address: bragNFT.address,
            abi: bragNFT.abi,
            functionName: "approve",
            args: [marketplace.address, 0n]
        });

        await user1.writeContract({
            address: marketplace.address,
            abi: marketplace.abi,
            functionName: "createListing",
            args: [bragNFT.address, 0n, 1n, parseEther("100")]
        });

        const listing = await marketplace.read.listings([bragNFT.address, 0n]);
        assert.equal(listing[3], true); // active
        assert.equal(listing[1], parseEther("100")); // price

        // owner buys NFT (owner needs BRAG tokens first)
        await bragToken.write.mint([owner.account.address, parseEther("1000")]);
        await bragToken.write.approve([marketplace.address, parseEther("100")]);

        await marketplace.write.buyFromListing([bragNFT.address, 0n]);

        const newOwner = await bragNFT.read.ownerOf([0n]);
        assert.equal(getAddress(newOwner), getAddress(owner.account.address));

        const soldListing = await marketplace.read.listings([bragNFT.address, 0n]);
        assert.equal(soldListing[3], false);
    });
  });

  describe("Treasury Batch Execution", async function () {
    it("Should execute a batch of transactions", async function () {
        const { owner, treasury } = await deployContracts();
        const testTarget = await viem.deployContract("MockUSDC");

        const targets = [testTarget.address, testTarget.address];
        const values = [0n, 0n];
        const datas = [
            encodeFunctionData({
                abi: testTarget.abi,
                functionName: "mint",
                args: [owner.account.address, 100n]
            }),
            encodeFunctionData({
                abi: testTarget.abi,
                functionName: "mint",
                args: [owner.account.address, 200n]
            })
        ];

        await treasury.write.executeBatch([targets, values, datas, 0n]);

        const balance = await testTarget.read.balanceOf([owner.account.address]);
        assert.equal(balance, 300n);
    });

    it("Should allow owner to execute a single call directly when threshold is 1", async function () {
        const { owner, treasury } = await deployContracts();
        const testTarget = await viem.deployContract("MockUSDC");

        const data = encodeFunctionData({
            abi: testTarget.abi,
            functionName: "mint",
            args: [owner.account.address, 500n]
        });

        await treasury.write.execute([testTarget.address, 0n, data, 0n]);

        const balance = await testTarget.read.balanceOf([owner.account.address]);
        assert.equal(balance, 500n);
    });
  });
});
