import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Marketplace Refund Period", async function () {
  const { viem } = await network.connect();

  async function deployMarketplace() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const refundPeriod = 3600n; // 1 hour
    const marketplace = await viem.deployContract("NFTMarketplace", [refundPeriod, bragToken.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, refundPeriod };
  }

  it("Should restrict cancelOffer until refundPeriod has passed", async function () {
    const { marketplace, bragNFT, bragToken, buyer, seller, owner, refundPeriod } = await deployMarketplace();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Attempt to cancel immediately - should fail
    await assert.rejects(
      marketplace.write.cancelOffer([bragNFT.address, tokenId, buyer.account.address], { account: buyer.account }),
      /Refund period not yet elapsed/
    );

    // Increase time
    const testClient = await viem.getTestClient();
    await testClient.increaseTime({ seconds: Number(refundPeriod) + 1 });
    await testClient.mine({ blocks: 1 });

    // Now it should work
    await marketplace.write.cancelOffer([bragNFT.address, tokenId, buyer.account.address], { account: buyer.account });

    // Verify refund
    const buyerBalance = await bragToken.read.balanceOf([buyer.account.address]);
    assert.equal(buyerBalance, parseEther("10"));
  });

  it("Should allow seller to rejectOffer anytime", async function () {
    const { marketplace, bragNFT, bragToken, buyer, seller, owner } = await deployMarketplace();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller rejects immediately
    await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify refund
    const buyerBalance = await bragToken.read.balanceOf([buyer.account.address]);
    assert.equal(buyerBalance, parseEther("10"));

    // Verify offer is gone
    const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
    assert.equal(offer[0], "0x0000000000000000000000000000000000000000");
  });
});
