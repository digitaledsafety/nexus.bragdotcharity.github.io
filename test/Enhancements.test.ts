import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Enhancements (Royalties & SVG Escaping)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Marketplace (now with 1 arg)
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);

    // BragNFT
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should correctly distribute royalties to the treasury", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set royalty to 10% for testing
    await bragNFT.write.setRoyaltyFeeNumerator([1000], { account: owner.account });

    // Buyer makes an offer
    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyRecipient, getAddress(treasury.account.address));
    assert.equal(royaltyAmount, parseEther("1")); // 10% of 10

    // Seller accepts
    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify distribution
    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("1"));
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("9"));
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });

  it("Should correctly escape special characters in SVG", async function () {
    const { bragNFT, seller } = await deployAll();

    const maliciousMessage = '<script>alert("XSS")</script> & "quotes"';
    await bragNFT.write.donate([maliciousMessage, ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

    // Verify SVG is escaped
    assert.ok(!svg.includes("<script>"), "SVG should not contain raw <script> tag");
    assert.ok(svg.includes("&lt;script&gt;"), "SVG should contain escaped script tag");
    assert.ok(svg.includes("&amp;"), "SVG should contain escaped ampersand");
    assert.ok(svg.includes("&quot;"), "SVG should contain escaped quotes");

    // Verify JSON description is also handled (it uses _escapeJSON which was already there but good to check)
    assert.ok(json.description.includes(maliciousMessage), "JSON description should contain original message (escaped in JSON string)");
  });

  it("Should cap royalties if they exceed the price", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Capped Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set protocol fee to 5% (500 bps)
    await marketplace.write.setProtocolFee([500], { account: owner.account });

    // Set royalty to 96% for testing (total 101%)
    await bragNFT.write.setRoyaltyFeeNumerator([9600], { account: owner.account });

    // Buyer makes an offer
    const offerPrice = parseEther("100");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info (96 ETH)
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyAmount, parseEther("96"));

    // Seller accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceBefore = await bragToken.read.balanceOf([owner.account.address]); // feeRecipient is owner by default

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    // Protocol fee: 5% of 100 = 5 ETH
    assert.equal(feeRecipientBalanceAfter - feeRecipientBalanceBefore, parseEther("5"));
    // Royalty fee should be capped at: 100 - 5 = 95 ETH (instead of 96 ETH)
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("95"));
    // Seller proceeds should be 0
    assert.equal(sellerBalanceAfter, 0n);
  });
});
