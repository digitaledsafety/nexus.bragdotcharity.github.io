import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Marketplace Enhancements", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer] = await viem.getWalletClients();
    const treasury = owner.account.address; // Use owner as treasury for simplicity

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [3600n, bragToken.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury,
      parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Buy Now: Should allow creating and buying a listing", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer } = await setup();

    // 1. Seller mints NFT
    await bragNFT.write.donate(["For sale", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // 2. Seller creates listing
    const price = parseEther("10");
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, price], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[0], getAddress(seller.account.address));
    assert.equal(listing[1], price);
    assert.equal(listing[3], true); // active

    // 3. Buyer buys NFT
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.buyNFT([bragNFT.address, tokenId], { account: buyer.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    const sellerBalance = await bragToken.read.balanceOf([seller.account.address]);
    // 10 BRAG minus 5% royalty (0.5 BRAG) = 9.5 BRAG
    assert.equal(sellerBalance, parseEther("9.5"));
  });

  it("Royalties: Should pay treasury on secondary sales", async function () {
    const { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury } = await setup();

    // 1. Seller has an NFT (originally donated)
    await bragNFT.write.donate(["Donation", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // 2. Buyer makes an offer
    const offerPrice = parseEther("20");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // 3. Seller accepts offer
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const initialTreasuryBalance = await bragToken.read.balanceOf([treasury]);
    await marketplace.write.acceptOffer([bragNFT.address, tokenId], { account: seller.account });

    const finalTreasuryBalance = await bragToken.read.balanceOf([treasury]);
    const royaltyPaid = finalTreasuryBalance - initialTreasuryBalance;

    // 5% of 20 BRAG = 1 BRAG
    assert.equal(royaltyPaid, parseEther("1"));
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });

  it("SVG Escaping: Should handle malicious donation messages", async function () {
    const { bragNFT, seller } = await setup();

    const maliciousMessage = '"><script>alert(1)</script><text ';
    await bragNFT.write.donate([maliciousMessage, ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const tokenURI = await bragNFT.read.tokenURI([tokenId]);
    const base64Json = tokenURI.split(",")[1];
    const json = Buffer.from(base64Json, "base64").toString();
    const metadata = JSON.parse(json);

    const imageURI = metadata.image;
    const base64Svg = imageURI.split(",")[1];
    const svg = Buffer.from(base64Svg, "base64").toString();

    // Check that special characters are escaped in SVG
    assert.ok(svg.includes("&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;&lt;text "));
    assert.ok(!svg.includes(maliciousMessage));
  });
});
