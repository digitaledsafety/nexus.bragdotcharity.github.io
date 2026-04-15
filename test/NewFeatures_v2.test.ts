import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("New Features v2 (Batch Donate, SVG Truncation, Buy Now)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("BragNFT: Should handle batchDonate correctly", async function () {
    const { bragNFT, buyer, treasury } = await deployAll();

    const messages = ["Msg 1", "Msg 2", "Msg 3"];
    const mediaURIs = ["", "", ""];
    const totalDonation = parseEther("0.3");

    const treasuryBalanceBefore = await (await viem.getPublicClient()).getBalance({ address: treasury.account.address });

    await bragNFT.write.batchDonate([messages, mediaURIs, false], { account: buyer.account, value: totalDonation });

    assert.equal(await bragNFT.read.totalSupply(), 3n);
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(buyer.account.address));
    assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(buyer.account.address));

    const treasuryBalanceAfter = await (await viem.getPublicClient()).getBalance({ address: treasury.account.address });
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, totalDonation);

    // Verify metadata of first one
    const uri = await bragNFT.read.tokenURI([0n]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.equal(json.name, "BragNFT #0");
    assert.ok(json.description.includes("Msg 1"));
  });

  it("BragNFT: Should truncate long messages in SVG", async function () {
    const { bragNFT, seller } = await deployAll();

    const longMessage = "This is a very long message that should definitely be truncated because it exceeds thirty two characters.";
    await bragNFT.write.donate([longMessage, ""], { account: seller.account, value: parseEther("0.1") });

    const tokenId = 0n;
    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

    // Check SVG content
    assert.ok(svg.includes("..."), "SVG should contain ellipsis");
    // Text in SVG should be truncated to 32 chars + "..."
    // "This is a very long message that" is 32 chars.
    assert.ok(svg.includes("This is a very long message that..."), "SVG should contain truncated text");
    assert.ok(!svg.includes("exceeds thirty two characters"), "SVG should NOT contain the end of the long message");
  });

  it("NFTMarketplace: Should handle fixed-price listings (Buy Now)", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // 1. Seller mints NFT
    await bragNFT.write.donate(["For Sale", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // 2. Seller lists NFT
    const listPrice = parseEther("50");
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, listPrice], { account: seller.account });

    // Verify listing
    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[0], getAddress(seller.account.address));
    assert.equal(listing[1], listPrice);

    // 3. Fund buyer
    await bragToken.write.transfer([buyer.account.address, listPrice], { account: owner.account });
    await bragToken.write.approve([marketplace.address, listPrice], { account: buyer.account });

    // 4. Buyer buys now
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);
    await marketplace.write.buyNow([bragNFT.address, tokenId], { account: buyer.account });

    // 5. Verify results
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));

    // Default protocol fee is 0, royalty for BragNFT is 8%
    const royaltyFee = (listPrice * 800n) / 10000n;
    const expectedSellerProceeds = listPrice - royaltyFee;
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, expectedSellerProceeds);

    // Listing should be cleared
    const listingAfter = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listingAfter[0], "0x0000000000000000000000000000000000000000");
  });

  it("NFTMarketplace: Should clear listing if an offer is accepted", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    await bragNFT.write.donate(["Dual Sale", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // List for 100
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, parseEther("100")], { account: seller.account });

    // Buyer makes offer for 80
    const offerPrice = parseEther("80");
    await bragToken.write.transfer([buyer.account.address, offerPrice], { account: owner.account });
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller accepts offer
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Listing should be cleared
    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[0], "0x0000000000000000000000000000000000000000");
  });
});
