import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("NFTMarketplace Refactor & New Features", async function () {
  const { viem } = await network.connect();

  async function deployMarketplace() {
    const [admin, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [admin.account.address, 0n, parseEther("1000000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [admin.account.address, bragToken.address]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      admin.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    // Give buyer some BRAG tokens
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"; // keccak256("MINTER_ROLE")
    await bragToken.write.grantRole([MINTER_ROLE, admin.account.address]);
    await bragToken.write.mint([buyer.account.address, parseEther("1000")], { account: admin.account });

    // Mint an NFT for the seller
    await bragNFT.write.donate(["For sale", "ipfs://uri"], {
      account: seller.account,
      value: parseEther("0.1")
    });
    const tokenId = 0n;

    return { marketplace, bragNFT, bragToken, admin, seller, buyer, treasury, tokenId };
  }

  it("Should allow listing an NFT at a fixed price", async function () {
    const { marketplace, bragNFT, seller, tokenId } = await deployMarketplace();
    const price = parseEther("100");

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, price], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[0], getAddress(seller.account.address));
    assert.equal(listing[1], price);
    assert.equal(listing[2], 1n);
  });

  it("Should allow canceling a listing", async function () {
    const { marketplace, bragNFT, seller, tokenId } = await deployMarketplace();
    const price = parseEther("100");

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, price], { account: seller.account });
    await marketplace.write.cancelListing([bragNFT.address, tokenId], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[1], 0n); // Price 0 means no listing
  });

  it("Should allow buying a listed NFT", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, tokenId } = await deployMarketplace();
    const price = parseEther("100");

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, price], { account: seller.account });

    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyNow([bragNFT.address, tokenId], { account: buyer.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));

    // Check proceeds (8% royalty by default in BragNFT)
    const sellerProceeds = await bragToken.read.balanceOf([seller.account.address]);
    const treasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);

    assert.equal(sellerProceeds, parseEther("92"));
    assert.equal(treasuryBalance, parseEther("8"));
  });

  it("Should handle protocol fees correctly", async function () {
    const { marketplace, bragNFT, bragToken, admin, seller, buyer, treasury, tokenId } = await deployMarketplace();
    const price = parseEther("100");

    // Set 2.5% protocol fee
    await marketplace.write.setProtocolFee([250n], { account: admin.account });
    await marketplace.write.setFeeRecipient([admin.account.address], { account: admin.account });

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, price], { account: seller.account });

    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyNow([bragNFT.address, tokenId], { account: buyer.account });

    const adminBalance = await bragToken.read.balanceOf([admin.account.address]);
    const sellerProceeds = await bragToken.read.balanceOf([seller.account.address]);
    const treasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);

    // 2.5% of 100 = 2.5
    // 8% of 100 = 8
    // Seller gets 100 - 2.5 - 8 = 89.5
    assert.equal(adminBalance, parseEther("2.5"));
    assert.equal(sellerProceeds, parseEther("89.5"));
    assert.equal(treasuryBalance, parseEther("8"));
  });

  it("Should clear listing when an offer is accepted", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, tokenId } = await deployMarketplace();
    const listPrice = parseEther("100");
    const offerPrice = parseEther("90");

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.listNFT([bragNFT.address, tokenId, 1n, listPrice], { account: seller.account });

    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[1], 0n);
  });
});
