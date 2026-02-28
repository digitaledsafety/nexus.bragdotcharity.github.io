import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes } from "viem";

describe("Bug Reproductions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);

    // BragNFT
    const bragNFT = await viem.deployContract("Nexus", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1"),
      100n,
      "test-campaign"
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // ERC1155
    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, mock1155, bragToken, owner, user1, user2 };
  }

  it("REPRODUCTION: JSON escaping bug with newlines", async function () {
    const { bragNFT, user1 } = await deployAll();
    const message = "Line 1\nLine 2";
    await bragNFT.write.donate([message, ""], { account: user1.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const tokenURI = await bragNFT.read.tokenURI([tokenId]);
    const base64Json = tokenURI.split(",")[1];
    const jsonStr = Buffer.from(base64Json, "base64").toString();

    try {
        JSON.parse(jsonStr);
    } catch (e) {
        assert.fail("JSON.parse failed: " + (e as Error).message + "\nJSON: " + jsonStr);
    }
  });

  it("REPRODUCTION: ERC1155 rejection griefing", async function () {
    const { marketplace, mock1155, bragToken, owner, user1, user2 } = await deployAll();

    // Fund user2 (buyer)
    await bragToken.write.transfer([user2.account.address, parseEther("10")], { account: owner.account });

    // user1 (legitimate seller) has 10 tokens
    const tokenId = 1n;
    await mock1155.write.mint([user1.account.address, tokenId, 10n]);

    // owner (griefer) has only 1 token
    await mock1155.write.mint([owner.account.address, tokenId, 1n]);

    // user2 makes an offer for 10 tokens to the market for this tokenId
    const offerPrice = parseEther("5");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: user2.account });
    await marketplace.write.createOffer([mock1155.address, tokenId, 10n, offerPrice], { account: user2.account });

    // owner (griefer) should NOT be able to reject an offer for 10 tokens when they only have 1
    await assert.rejects(
        marketplace.write.rejectOffer([mock1155.address, tokenId, user2.account.address], { account: owner.account }),
        /Insufficient balance to reject/
    );

    const offer = await marketplace.read.offers([mock1155.address, tokenId, user2.account.address]);
    assert.notEqual(offer[0], zeroAddress, "Offer should NOT have been rejected");
  });
});
