import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, decodeBase64 } from "viem";

describe("XML Escaping", async function () {
  const { viem } = await network.connect();

  async function deploy() {
    const [owner, donor] = await viem.getWalletClients();
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { bragNFT, owner, donor };
  }

  it("Should escape XML special characters in SVG metadata", async function () {
    const { bragNFT, donor } = await deploy();

    const maliciousMessage = "Hello <script>alert('xss')</script> & more";
    await bragNFT.write.donate([maliciousMessage, ""], { account: donor.account, value: parseEther("0.1") });

    const tokenId = 0n;
    const uri = await bragNFT.read.tokenURI([tokenId]);

    // uri is data:application/json;base64,...
    const base64Json = uri.split(",")[1];
    const jsonStr = Buffer.from(base64Json, 'base64').toString();
    const json = JSON.parse(jsonStr);

    const imageURI = json.image;
    // imageURI is data:image/svg+xml;base64,...
    const base64Svg = imageURI.split(",")[1];
    const svg = Buffer.from(base64Svg, 'base64').toString();

    assert.ok(svg.includes("&lt;script&gt;"), "Should escape < and >");
    assert.ok(svg.includes("&amp;"), "Should escape &");
    assert.ok(!svg.includes("<script>"), "Should NOT contain raw <script>");
  });
});
