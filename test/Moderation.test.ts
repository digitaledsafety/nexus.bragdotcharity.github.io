import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("BragNFT Moderation", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury, reporter, other] = await viem.getWalletClients();

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    // Setup: Authorize BragNFT to mint receipts
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // Mint an NFT for testing
    await bragNFT.write.donate(["Original Message", "https://example.com/original.png"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    return { bragNFT, owner, donor, treasury, reporter, other };
  }

  it("Should allow a user to report a token", async function () {
    const { bragNFT, reporter } = await deployContracts();
    const tokenId = 0n;
    const reason = "Inappropriate content";

    // Test reporting
    // We check for event emission in integration tests if possible,
    // but here we just ensure it doesn't revert.
    await bragNFT.write.report([tokenId, reason], { account: reporter.account });
  });

  it("Should allow an admin to flag a token", async function () {
    const { bragNFT, owner } = await deployContracts();
    const tokenId = 0n;

    await bragNFT.write.setFlagged([tokenId, true], { account: owner.account });
    assert.equal(await bragNFT.read.flagged([tokenId]), true);
  });

  it("Should return flagged metadata when a token is flagged", async function () {
    const { bragNFT, owner } = await deployContracts();
    const tokenId = 0n;

    await bragNFT.write.setFlagged([tokenId, true], { account: owner.account });

    const uri = await bragNFT.read.tokenURI([tokenId]);
    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");

    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.ok(json.name.includes("[FLAGGED]"), "Name should indicate flagged status");
    assert.ok(json.description.includes("flagged"), "Description should indicate flagged status");
    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be a flagged SVG");
    assert.equal(json.attributes[0].value, "Flagged", "Attribute should be Flagged");

    // Check SVG content for flagged message
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();
    assert.ok(svg.includes("Content Flagged"), "SVG should include flagged message");
  });

  it("Should NOT allow a non-admin to flag a token", async function () {
    const { bragNFT, other } = await deployContracts();
    const tokenId = 0n;

    await assert.rejects(
        bragNFT.write.setFlagged([tokenId, true], { account: other.account }),
        /AccessControlUnauthorizedAccount/
    );
  });

  it("Should allow an admin to unflag a token", async function () {
    const { bragNFT, owner } = await deployContracts();
    const tokenId = 0n;

    // Flag first
    await bragNFT.write.setFlagged([tokenId, true], { account: owner.account });
    assert.equal(await bragNFT.read.flagged([tokenId]), true);

    // Then unflag
    await bragNFT.write.setFlagged([tokenId, false], { account: owner.account });
    assert.equal(await bragNFT.read.flagged([tokenId]), false);

    // Verify metadata restored
    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.equal(json.image, "https://example.com/original.png");
    assert.equal(json.attributes[0].value, "Original Message");
  });

  it("Should fail to report a non-existent token", async function () {
    const { bragNFT, reporter } = await deployContracts();
    const nonExistentTokenId = 999n;

    await assert.rejects(
        bragNFT.write.report([nonExistentTokenId, "Reason"], { account: reporter.account }),
        /ERC721NonexistentToken/
    );
  });

  it("Should fail to flag a non-existent token", async function () {
    const { bragNFT, owner } = await deployContracts();
    const nonExistentTokenId = 999n;

    await assert.rejects(
        bragNFT.write.setFlagged([nonExistentTokenId, true], { account: owner.account }),
        /ERC721NonexistentToken/
    );
  });
});
