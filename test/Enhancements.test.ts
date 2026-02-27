import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog } from "viem";

describe("Nexus Enhancements & Bug Fixes", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer1, buyer2] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

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
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // ExhibitVault
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);

    return { marketplace, bragNFT, bragToken, registry, vault, owner, seller, buyer1, buyer2 };
  }

  describe("NFTMarketplace: Multiple Offers & Rejection", async function () {
    it("Should allow multiple buyers to make offers and seller to reject one", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer1, buyer2, owner } = await deployAll();

      // Fund buyers
      await bragToken.write.transfer([buyer1.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.transfer([buyer2.account.address, parseEther("10")], { account: owner.account });

      // Seller mints
      await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      // Buyer 1 makes offer
      const price1 = parseEther("1");
      await bragToken.write.approve([marketplace.address, price1], { account: buyer1.account });
      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price1], { account: buyer1.account });

      // Buyer 2 makes higher offer
      const price2 = parseEther("2");
      await bragToken.write.approve([marketplace.address, price2], { account: buyer2.account });
      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price2], { account: buyer2.account });

      // Both offers should exist
      const offer1 = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
      const offer2 = await marketplace.read.offers([bragNFT.address, tokenId, buyer2.account.address]);
      // Viem returns structs as arrays: [buyer, price, amount, timestamp]
      assert.equal(offer1[1], price1);
      assert.equal(offer2[1], price2);

      // Seller rejects Buyer 1
      await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer1.account.address], { account: seller.account });

      // Offer 1 should be gone, Offer 2 should remain
      const offer1After = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
      const offer2After = await marketplace.read.offers([bragNFT.address, tokenId, buyer2.account.address]);
      assert.equal(offer1After[0], zeroAddress);
      assert.equal(offer2After[1], price2);

      // Buyer 1 should be refunded
      assert.equal(await bragToken.read.balanceOf([buyer1.account.address]), parseEther("10"));

      // Seller accepts Buyer 2
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
      await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer2.account.address], { account: seller.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer2.account.address));
    });
  });

  describe("BragNFT: SVG Escaping & Admin Events", async function () {
    it("Should escape special characters in SVG", async function () {
      const { bragNFT, seller } = await deployAll();
      const message = "Hello <world> & 'peace' \"joy\"";
      await bragNFT.write.donate([message, ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const tokenURI = await bragNFT.read.tokenURI([tokenId]);
      const base64Json = tokenURI.split(",")[1];
      const json = JSON.parse(Buffer.from(base64Json, "base64").toString());
      const imageURI = json.image;
      const base64Svg = imageURI.split(",")[1];
      const svg = Buffer.from(base64Svg, "base64").toString();

      assert.ok(svg.includes("Hello &lt;world&gt; &amp; &apos;peace&apos; &quot;joy&quot;"));
    });

    it("Should emit events for admin changes", async function () {
      const { bragNFT, owner } = await deployAll();
      const newTreasury = "0x1234567890123456789012345678901234567890";

      const hash = await bragNFT.write.setTreasury([newTreasury], { account: owner.account });
      const publicClient = await viem.getPublicClient();
      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      const event = decodeEventLog({
        abi: bragNFT.abi,
        data: receipt.logs[0].data,
        topics: receipt.logs[0].topics
      });

      assert.equal(event.eventName, "TreasuryUpdated");
      assert.equal(getAddress((event.args as any).treasury), getAddress(newTreasury));
    });
  });

  describe("ExhibitVault: Registry Update", async function () {
    it("Should allow owner to update registry", async function () {
      const { vault, owner } = await deployAll();
      const newRegistry = "0x0000000000000000000000000000000000000001";

      await vault.write.setRegistry([newRegistry], { account: owner.account });
      assert.equal(await vault.read.registry(), getAddress(newRegistry));
    });

    it("Should revert if non-owner tries to update registry", async function () {
      const { vault, seller } = await deployAll();
      const newRegistry = "0x0000000000000000000000000000000000000001";

      await assert.rejects(
        vault.write.setRegistry([newRegistry], { account: seller.account }),
        /OwnableUnauthorizedAccount/
      );
    });
  });
});
