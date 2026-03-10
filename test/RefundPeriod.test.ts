import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Marketplace Refund Period", async function () {
  const { viem } = await network.connect();

  async function deployAll(refundPeriod: bigint) {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, refundPeriod, bragToken.address]);

    // ERC721
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer };
  }

  it("Should NOT allow canceling an offer before refund period elapses", async function () {
    const refundPeriod = 3600n; // 1 hour
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll(refundPeriod);

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints
    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Try to cancel immediately
    await assert.rejects(
      marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account }),
      /Refund period not yet elapsed/
    );
  });

  it("Should allow canceling an offer after refund period elapses", async function () {
    const refundPeriod = 3600n; // 1 hour
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll(refundPeriod);
    const publicClient = await viem.getPublicClient();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints
    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Fast forward time
    await publicClient.request({ method: "evm_increaseTime" as any, params: [3601] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Cancel should succeed
    await marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account });

    // Verify refund
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));

    // Verify offer is deleted
    const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
    assert.equal(offer[0], 0n); // price should be 0
  });

  it("Seller should be able to reject an offer even during refund period", async function () {
    const refundPeriod = 3600n; // 1 hour
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll(refundPeriod);

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints
    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller rejects
    await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify refund
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
  });
});
