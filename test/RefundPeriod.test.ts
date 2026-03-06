import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { network } from "hardhat";
import { parseEther, zeroAddress, getAddress } from "viem";

describe("NFTMarketplace Refund Period", async function () {
  const { viem } = await network.connect();

  async function deployMarketplaceFixture() {
    const [owner, buyer, seller] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("2000000")
    ]);

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address, // treasury
      parseEther("0.01")
    ]);

    // 7 days refund period
    const refundPeriod = 7n * 24n * 60n * 60n;
    const marketplace = await viem.deployContract("NFTMarketplace", [
      refundPeriod,
      bragToken.address
    ]);

    // Setup: Mint NFT to seller
    const donationReceipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    await bragNFT.write.setReceiptContract([donationReceipt.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await donationReceipt.write.grantRole([MINTER_ROLE, bragNFT.address]);

    await bragNFT.write.donate(["test", "uri"], { value: parseEther("0.01"), account: seller.account });
    const tokenId = 0n;

    // Setup: Give buyer some BRAG tokens
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

    return {
      marketplace,
      bragToken,
      bragNFT,
      owner,
      buyer,
      seller,
      tokenId,
      refundPeriod
    };
  }

  it("Should not allow cancelOffer before refund period has elapsed", async function () {
    const { marketplace, bragNFT, buyer, tokenId } = await deployMarketplaceFixture();

    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: buyer.account });

    await assert.rejects(
      marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account }),
      /Refund period not yet elapsed/
    );
  });

  it("Should allow cancelOffer after refund period has elapsed", async function () {
    const { marketplace, bragNFT, buyer, tokenId, refundPeriod } = await deployMarketplaceFixture();
    const testClient = await viem.getTestClient();

    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: buyer.account });

    // Increase time
    await testClient.increaseTime({ seconds: Number(refundPeriod) + 1 });
    await testClient.mine({ blocks: 1 });

    await marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account });

    const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
    assert.equal(offer[0], zeroAddress);
  });

  it("Should allow requestRefund within refund period", async function () {
    const { marketplace, bragNFT, buyer, tokenId } = await deployMarketplaceFixture();

    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: buyer.account });

    await marketplace.write.requestRefund([bragNFT.address, tokenId], { account: buyer.account });

    const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
    assert.equal(offer[0], zeroAddress);
  });

  it("Should allow seller to rejectOffer immediately (refunding buyer)", async function () {
    const { marketplace, bragNFT, buyer, seller, tokenId, bragToken } = await deployMarketplaceFixture();

    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: buyer.account });

    const initialBalance = await bragToken.read.balanceOf([buyer.account.address]);

    await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const finalBalance = await bragToken.read.balanceOf([buyer.account.address]);
    assert.equal(finalBalance, initialBalance + parseEther("10"));

    const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
    assert.equal(offer[0], zeroAddress);
  });
});
