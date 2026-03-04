import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes } from "viem";

describe("Enhancements and Bug Fixes", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user, user2, feeRecipient] = await viem.getWalletClients();

    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address, owner.account.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1")]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const batchGrant = await viem.deployContract("BatchGrant");

    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { owner, user, user2, feeRecipient, bragToken, marketplace, registry, vault, bragNFT, batchGrant };
  }

  describe("BragNFT Escaping", async function () {
    it("Should escape control characters in JSON", async function () {
      const { bragNFT } = await deployAll();
      const message = "Line1\nLine2\tTab";
      await bragNFT.write.donate([message, ""], { value: parseEther("0.1") });
      const uri = await bragNFT.read.tokenURI([0n]);
      const jsonStr = atob(uri.split(",")[1]);
      // Check for literal escape sequences in the JSON string
      assert.ok(jsonStr.includes("Line1\\u000aLine2\\u0009Tab"));

      const json = JSON.parse(jsonStr);
      assert.equal(json.attributes[0].value, message);
    });

    it("Should escape special characters in SVG", async function () {
      const { bragNFT } = await deployAll();
      const message = "<script>alert(1)</script> & more";
      await bragNFT.write.donate([message, ""], { value: parseEther("0.1") });
      const uri = await bragNFT.read.tokenURI([0n]);
      const json = JSON.parse(atob(uri.split(",")[1]));
      const svg = atob(json.image.split(",")[1]);
      assert.ok(svg.includes("&lt;script&gt;alert(1)&lt;/script&gt; &amp; more"));
    });
  });

  describe("ExhibitVault Security", async function () {
    it("Should prevent unauthorized actualOwner override with 64-byte data", async function () {
      const { bragNFT, vault, user, user2 } = await deployAll();
      await bragNFT.write.donate(["test", ""], { value: parseEther("0.1"), account: user.account });

      const data = "0x" + user2.account.address.slice(2).padStart(64, "0") + "0000000000000000000000000000000000000000000000000000000000000000";

      await assert.rejects(
        bragNFT.write.safeTransferFrom([user.account.address, vault.address, 0n, data], { account: user.account }),
        /Unauthorized actualOwner override/
      );
    });
  });

  describe("NFTMarketplace Enhancements", async function () {
    it("Should collect protocol fees on offer acceptance", async function () {
      const { marketplace, bragNFT, bragToken, owner, user, user2, feeRecipient } = await deployAll();

      await marketplace.write.setFeeBps([500n]); // 5%
      await marketplace.write.setFeeRecipient([feeRecipient.account.address]);

      await bragNFT.write.donate(["sellable", ""], { value: parseEther("0.1"), account: user.account });
      await bragToken.write.transfer([user2.account.address, parseEther("10")], { account: owner.account });

      const price = parseEther("1");
      await bragToken.write.approve([marketplace.address, price], { account: user2.account });
      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, price], { account: user2.account });

      await bragNFT.write.approve([marketplace.address, 0n], { account: user.account });
      await marketplace.write.acceptOffer([bragNFT.address, 0n], { account: user.account });

      const fee = (price * 500n) / 10000n;
      assert.equal(await bragToken.read.balanceOf([feeRecipient.account.address]), fee);
      assert.equal(await bragToken.read.balanceOf([user.account.address]), price - fee);
    });

    it("Should allow seller to reject an offer", async function () {
      const { marketplace, bragNFT, bragToken, owner, user, user2 } = await deployAll();

      await bragNFT.write.donate(["sellable", ""], { value: parseEther("0.1"), account: user.account });
      await bragToken.write.transfer([user2.account.address, parseEther("10")], { account: owner.account });

      const price = parseEther("1");
      await bragToken.write.approve([marketplace.address, price], { account: user2.account });
      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, price], { account: user2.account });

      await marketplace.write.rejectOffer([bragNFT.address, 0n], { account: user.account });

      assert.equal(await bragToken.read.balanceOf([user2.account.address]), parseEther("10"));
      const offer = await marketplace.read.offers([bragNFT.address, 0n]);
      assert.equal(offer[0], zeroAddress);
    });
  });

  describe("BatchGrant ETH", async function () {
    it("Should distribute ETH to multiple recipients", async function () {
      const { batchGrant, user, user2 } = await deployAll();
      const recipients = [user.account.address, user2.account.address];
      const amounts = [parseEther("1"), parseEther("2")];

      const pc = await viem.getPublicClient();
      const before1 = await pc.getBalance({ address: user.account.address });
      const before2 = await pc.getBalance({ address: user2.account.address });

      await batchGrant.write.distributeETH([recipients, amounts], { value: parseEther("3") });

      assert.equal(await pc.getBalance({ address: user.account.address }), before1 + parseEther("1"));
      assert.equal(await pc.getBalance({ address: user2.account.address }), before2 + parseEther("2"));
    });
  });
});
