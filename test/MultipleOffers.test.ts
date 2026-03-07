import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("NFTMarketplace Multiple Offers", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer1, buyer2] = await viem.getWalletClients();

    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);
    const marketplace = await viem.deployContract("NFTMarketplace", [3600n, bragToken.address]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1")]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer1, buyer2 };
  }

  it("Should allow multiple buyers to make offers on the same NFT", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer1, buyer2, owner } = await deployAll();

    // Fund buyers
    await bragToken.write.transfer([buyer1.account.address, parseEther("100")], { account: owner.account });
    await bragToken.write.transfer([buyer2.account.address, parseEther("100")], { account: owner.account });

    // Seller mints NFT
    await bragNFT.write.donate(["test nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer 1 makes offer
    const price1 = parseEther("10");
    await bragToken.write.approve([marketplace.address, price1], { account: buyer1.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price1], { account: buyer1.account });

    // Buyer 2 makes higher offer
    const price2 = parseEther("15");
    await bragToken.write.approve([marketplace.address, price2], { account: buyer2.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price2], { account: buyer2.account });

    // Verify both offers exist
    const offer1 = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
    const offer2 = await marketplace.read.offers([bragNFT.address, tokenId, buyer2.account.address]);

    assert.equal(offer1[1], price1);
    assert.equal(offer2[1], price2);
    assert.equal(await bragToken.read.balanceOf([marketplace.address]), price1 + price2);

    // Seller accepts Buyer 2's offer
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer2.account.address], { account: seller.account });

    // Verify ownership and payments
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer2.account.address));
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), price2);

    // Verify Buyer 1's offer still exists (funds still in contract)
    const remainingOffer1 = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
    assert.equal(remainingOffer1[1], price1);
    assert.equal(await bragToken.read.balanceOf([marketplace.address]), price1);

    // Buyer 1 cancels their offer and gets refund
    await marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer1.account });
    assert.equal(await bragToken.read.balanceOf([buyer1.account.address]), parseEther("100"));
    assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
  });
});
