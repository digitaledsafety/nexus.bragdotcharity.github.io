import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Investigation of Bugs (Fixed)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("BragNFT: Should NOT break JSON if media URI contains a double quote", async function () {
    const { bragNFT, seller } = await deployAll();

    const mediaWithQuote = 'https://example.com/media"quote.png';
    await bragNFT.write.donate(["test", mediaWithQuote], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const base64Content = uri.split(",")[1];
    const jsonString = Buffer.from(base64Content, "base64").toString();

    // This should now NOT throw
    const json = JSON.parse(jsonString);
    assert.equal(json.image, mediaWithQuote);
  });

  it("BragNFT: Should detect .mp4 and .webm as multimedia", async function () {
    const { bragNFT, seller } = await deployAll();

    const testURIs = [
        'https://example.com/video.mp4',
        'https://example.com/video.webm',
        'data:video/mp4;base64,...'
    ];

    for (let i = 0; i < testURIs.length; i++) {
        const videoURI = testURIs[i];
        await bragNFT.write.donate(["video test " + i, videoURI], { account: seller.account, value: parseEther("0.1") });
        const tokenId = BigInt(i);

        const uri = await bragNFT.read.tokenURI([tokenId]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

        assert.ok(json.animation_url, `Should have animation_url for ${videoURI}`);
        assert.equal(json.animation_url, videoURI);
    }
  });
});
