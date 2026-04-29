import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("BragNFT Optimizations", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner] = await viem.getWalletClients();
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.01"), mockPriceFeed.address]);
        return { bragNFT };
    }

    it("should detect .glb as multimedia", async function () {
        const { bragNFT } = await deployFixture();
        await bragNFT.write.donate(["Test GLB", "https://example.com/model.glb"], { value: parseEther("0.01") });
        const uri = await bragNFT.read.tokenURI([0n]);
        const decoded = JSON.parse(atob(uri.split(",")[1]));
        assert.ok(decoded.animation_url, "animation_url should be set for .glb");
    });

    it("should detect .gltf as multimedia", async function () {
        const { bragNFT } = await deployFixture();
        await bragNFT.write.donate(["Test GLTF", "https://example.com/model.gltf"], { value: parseEther("0.01") });
        const uri = await bragNFT.read.tokenURI([0n]);
        const decoded = JSON.parse(atob(uri.split(",")[1]));
        assert.ok(decoded.animation_url, "animation_url should be set for .gltf");
    });

    it("should detect data:audio/ as multimedia", async function () {
        const { bragNFT } = await deployFixture();
        await bragNFT.write.donate(["Test Audio", "data:audio/mp3;base64,AAA"], { value: parseEther("0.01") });
        const uri = await bragNFT.read.tokenURI([0n]);
        const decoded = JSON.parse(atob(uri.split(",")[1]));
        assert.ok(decoded.animation_url, "animation_url should be set for data:audio/");
    });

    it("should handle case-insensitive extensions", async function () {
        const { bragNFT } = await deployFixture();
        await bragNFT.write.donate(["Test MP4", "https://example.com/video.MP4"], { value: parseEther("0.01") });
        const uri = await bragNFT.read.tokenURI([0n]);
        const decoded = JSON.parse(atob(uri.split(",")[1]));
        assert.ok(decoded.animation_url, "animation_url should be set for .MP4");
    });
});
