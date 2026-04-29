import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Marketplace Enhancements", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, buyer, seller] = await viem.getWalletClients();
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragToken.write.transfer([buyer.account.address, parseEther("10000")]);
        await bragToken.write.approve([marketplace.address, parseEther("10000")], { account: buyer.account });

        return { owner, buyer, seller, bragToken, marketplace, bragNFT };
    }

    it("should enforce offer expiration", async function () {
        const { buyer, seller, marketplace, bragNFT } = await deployFixture();
        const publicClient = await viem.getPublicClient();

        // Mint NFT to seller
        await bragNFT.write.donate(["Test", "uri"], { account: seller.account, value: parseEther("0.01") });
        const tokenId = 0n;
        await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

        const now = BigInt(Math.floor(Date.now() / 1000));
        const expiry = now + 100n;

        // Create offer with expiry
        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("100"), expiry], { account: buyer.account });

        // Increase time past expiry
        await publicClient.request({ method: "evm_increaseTime" as any, params: [200] });
        await publicClient.request({ method: "evm_mine" as any, params: [] });

        // Try to accept expired offer
        await assert.rejects(
            marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account }),
            /Offer expired/
        );
    });

    it("should allow batch accepting offers", async function () {
        const { buyer, seller, marketplace, bragNFT } = await deployFixture();

        // Mint 2 NFTs to seller
        await bragNFT.write.donate(["NFT 1", "uri1"], { account: seller.account, value: parseEther("0.01") });
        await bragNFT.write.donate(["NFT 2", "uri2"], { account: seller.account, value: parseEther("0.01") });

        await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
        await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

        await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("100"), 0n], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("200"), 0n], { account: buyer.account });

        await marketplace.write.batchAcceptOffers([
            [bragNFT.address, bragNFT.address],
            [0n, 1n],
            [buyer.account.address, buyer.account.address]
        ], { account: seller.account });

        assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
        assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(buyer.account.address));
    });

    it("should allow updating offer expiry", async function () {
        const { buyer, marketplace, bragNFT, seller } = await deployFixture();

        await bragNFT.write.donate(["Test", "uri"], { account: seller.account, value: parseEther("0.01") });
        const tokenId = 0n;

        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("100"), 0n], { account: buyer.account });

        const newExpiry = BigInt(Math.floor(Date.now() / 1000)) + 500n;
        await marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, parseEther("150"), newExpiry], { account: buyer.account });

        const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
        assert.equal(offer[3], newExpiry);
        assert.equal(offer[0], parseEther("150"));
    });
});
