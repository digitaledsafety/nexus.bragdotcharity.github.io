import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("NFTMarketplace Refund Period", async function () {
    const { viem } = await network.connect();

    async function deployAll() {
        const [owner, seller, buyer] = await viem.getWalletClients();

        const initialSupply = parseEther("1000");
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

        const refundPeriod = 3600n; // 1 hour
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, refundPeriod, bragToken.address]);

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

    it("Should prevent canceling an offer before the refund period elapses", async function () {
        const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

        // Setup: Buyer has tokens and seller has NFT
        await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
        await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
        const tokenId = 0n;

        // Buyer makes an offer
        const offerPrice = parseEther("1");
        await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

        // Buyer tries to cancel immediately
        await assert.rejects(
            marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account }),
            /Refund period not yet elapsed/
        );
    });

    it("Should allow canceling an offer after the refund period elapses", async function () {
        const { marketplace, bragNFT, bragToken, seller, buyer, owner, refundPeriod } = await deployAll();

        await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
        await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
        const tokenId = 0n;

        const offerPrice = parseEther("1");
        await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

        // Increase time
        const testClient = await viem.getTestClient();
        await testClient.increaseTime({ seconds: Number(refundPeriod) + 1 });
        await testClient.mine({ blocks: 1 });

        // Buyer should be able to cancel now
        await marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account });

        // Verify refund
        assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
    });

    it("Should allow the seller to reject an offer immediately regardless of refund period", async function () {
        const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

        await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
        await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
        const tokenId = 0n;

        const offerPrice = parseEther("1");
        await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

        // Seller rejects immediately
        await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

        // Verify refund
        assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
    });
});
