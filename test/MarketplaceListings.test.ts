import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("NFTMarketplace Fixed-Price Listings", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("10000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    // Give some tokens to buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10000")], { account: owner.account });

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should allow listing and buying an ERC721 NFT", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury } = await deployContracts();

    // 1. Mint NFT to seller
    await bragNFT.write.donate(["For Sale", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // 2. Approve marketplace
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    // 3. List NFT
    const price = parseEther("1000");
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, price], { account: seller.account });

    const [listingSeller, listingPrice, listingAmount] = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listingSeller, getAddress(seller.account.address));
    assert.equal(listingPrice, price);
    assert.equal(listingAmount, 1n);

    // 4. Buy NFT
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyNow([bragNFT.address, tokenId], { account: buyer.account });

    // 5. Verify ownership and listing cleared
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    const [clearedSeller] = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(clearedSeller, "0x0000000000000000000000000000000000000000");

    // 6. Verify payment (8% royalty by default in BragNFT)
    const sellerBalance = await bragToken.read.balanceOf([seller.account.address]);
    const expectedRoyalty = (price * 800n) / 10000n;
    assert.equal(sellerBalance, price - expectedRoyalty);

    const treasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);
    assert.equal(treasuryBalance, expectedRoyalty);
  });

  it("Should allow canceling a listing", async function () {
    const { marketplace, bragNFT, seller } = await deployContracts();

    await bragNFT.write.donate(["To be canceled", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, parseEther("100")], { account: seller.account });
    await marketplace.write.cancelListing([bragNFT.address, tokenId], { account: seller.account });

    const [listingSeller] = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listingSeller, "0x0000000000000000000000000000000000000000");
  });

  it("Should clear listing when an offer is accepted", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer } = await deployContracts();

    await bragNFT.write.donate(["Hybrid Sale", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // List it
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, parseEther("1000")], { account: seller.account });

    // Make an offer
    const offerPrice = parseEther("800");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Accept offer
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Listing should be cleared
    const [listingSeller] = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listingSeller, "0x0000000000000000000000000000000000000000");
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });
});
