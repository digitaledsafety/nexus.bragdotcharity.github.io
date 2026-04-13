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
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1")
    , priceFeed.address]);


    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));


    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should correctly distribute royalties to the treasury", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Royalty is fixed at 8% (800 bps)

    // Buyer makes an offer
    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyRecipient, getAddress(treasury.account.address));
    assert.equal(royaltyAmount, parseEther("0.8")); // 8% of 10

    // Seller accepts
    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify distribution
    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("0.8"));
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("9.2"));
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

    // Set protocol fee to 10% (1000 bps) - maximum allowed
    await marketplace.write.setProtocolFee([1000], { account: owner.account });

    // Royalty is fixed at 8% (total 18%)

    // Buyer makes an offer
    const offerPrice = parseEther("100");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info (8 ETH)
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyAmount, parseEther("8"));

    // Seller accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);
    const feeRecipientBalanceBefore = await bragToken.read.balanceOf([owner.account.address]); // feeRecipient is owner by default

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    // Protocol fee: 10% of 100 = 10 ETH
    assert.equal(feeRecipientBalanceAfter - feeRecipientBalanceBefore, parseEther("10"));
    // Royalty fee: 8% of 100 = 8 ETH
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("8"));
    // Seller proceeds: 100 - 10 - 8 = 82 ETH
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("82"));
  });
});
