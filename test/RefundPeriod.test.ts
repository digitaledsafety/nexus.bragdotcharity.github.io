import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("NFTMarketplace: Refund Period", async function () {
  const { viem } = await network.connect();

  async function deployAll(refundPeriod: bigint) {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    // Marketplace with specific refund period
    const marketplace = await viem.deployContract("NFTMarketplace", [refundPeriod, bragToken.address]);

    // BragNFT
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

  it("Should restrict cancelOffer during refund period and allow it after", async function () {
    const refundPeriod = 3600n; // 1 hour
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll(refundPeriod);
    const publicClient = await viem.getPublicClient();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints
    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes offer
    const price = parseEther("1");
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price], { account: buyer.account });

    // Try to cancel immediately - should fail
    await assert.rejects(
      marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account }),
      /Refund period not yet passed/
    );

    // Advance time halfway
    await publicClient.request({ method: "evm_increaseTime" as any, params: [1800] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Should still fail
    await assert.rejects(
      marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account }),
      /Refund period not yet passed/
    );

    // Advance time past the period
    await publicClient.request({ method: "evm_increaseTime" as any, params: [1801] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Should now succeed
    await marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account });

    // Verify refund
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
    const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
    assert.equal(offer[0], "0x0000000000000000000000000000000000000000");
  });

  it("Should allow seller to rejectOffer anytime regardless of refund period", async function () {
    const refundPeriod = 86400n; // 1 day
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll(refundPeriod);

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints
    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes offer
    const price = parseEther("1");
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price], { account: buyer.account });

    // Seller rejects immediately
    await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify refund
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
  });
});
