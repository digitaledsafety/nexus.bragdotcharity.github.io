import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog, keccak256, toBytes } from "viem";

describe("Enhancement Tests", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // Deploy BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);

    // Deploy Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Deploy ExhibitRegistry & Vault
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    // Deploy BragNFT & Receipt
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1")]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // BatchGrant
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    return { owner, user1, user2, bragToken, marketplace, registry, vault, bragNFT, receipt, batchGrant };
  }

  describe("NFTMarketplace Optimization", function () {
    it("Should batch cancel offers correctly with optimization", async function () {
      const { marketplace, bragNFT, bragToken, owner, user1 } = await setup();

      // Setup offers
      await bragNFT.write.donate(["nft1", ""], { value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { value: parseEther("0.1") });

      await bragToken.write.transfer([user1.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: user1.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: user1.account });

      const balanceBefore = await bragToken.read.balanceOf([user1.account.address]);

      // Batch cancel
      await marketplace.write.cancelOffers([[bragNFT.address, bragNFT.address], [0n, 1n]], { account: user1.account });

      const balanceAfter = await bragToken.read.balanceOf([user1.account.address]);
      assert.equal(balanceAfter, balanceBefore + parseEther("3"));
      assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
    });
  });

  describe("Administrative Recovery", function () {
    const contractsToTest = [
      { name: "NFTMarketplace", deploy: (s: any) => s.marketplace },
      { name: "BragNFT", deploy: (s: any) => s.bragNFT },
      { name: "DonationReceipt", deploy: (s: any) => s.receipt },
      { name: "ExhibitRegistry", deploy: (s: any) => s.registry },
      { name: "ExhibitVault", deploy: (s: any) => s.vault },
      { name: "BatchGrant", deploy: (s: any) => s.batchGrant }
    ];

    for (const item of contractsToTest) {
      it(`${item.name}: Should allow admin to recover stuck ERC20`, async function () {
        const s = await setup();
        const contract = item.deploy(s);
        const { bragToken, owner, user1 } = s;

        const stuckAmount = parseEther("5");
        await bragToken.write.transfer([contract.address, stuckAmount], { account: owner.account });

        const adminBalanceBefore = await bragToken.read.balanceOf([owner.account.address]);
        await contract.write.withdrawERC20([bragToken.address, stuckAmount], { account: owner.account });
        const adminBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);

        assert.equal(adminBalanceAfter, adminBalanceBefore + stuckAmount);
        assert.equal(await bragToken.read.balanceOf([contract.address]), 0n);
      });

      it(`${item.name}: Should allow admin to recover stuck ETH`, async function () {
        const s = await setup();
        const contract = item.deploy(s);
        const { owner, user1 } = s;
        const publicClient = await viem.getPublicClient();

        const stuckAmount = parseEther("1");

        // Use user1 to send ETH so we don't worry about gas on admin balance for simple assertion
        // For BragNFT, we use donate to fund it with ETH as a normal transfer triggers donate
        if (item.name === "BragNFT") {
           await s.bragNFT.write.setTreasury([s.bragNFT.address]);
           await s.bragNFT.write.donate(["stuck", ""], { value: stuckAmount, account: user1.account });
        } else {
           await user1.sendTransaction({ to: contract.address, value: stuckAmount });
        }

        const contractBalance = await publicClient.getBalance({ address: contract.address });
        assert.ok(contractBalance >= stuckAmount, `Contract balance ${contractBalance} is less than ${stuckAmount}`);

        const adminBalanceBefore = await publicClient.getBalance({ address: owner.account.address });
        const txHash = await contract.write.withdrawETH([stuckAmount], { account: owner.account });
        const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
        const gasPaid = receipt.gasUsed * receipt.effectiveGasPrice;

        const adminBalanceAfter = await publicClient.getBalance({ address: owner.account.address });

        assert.equal(adminBalanceAfter, adminBalanceBefore + stuckAmount - gasPaid);
      });

      it(`${item.name}: Should fail if non-admin tries to recover`, async function () {
        const s = await setup();
        const contract = item.deploy(s);
        const { user1, bragToken } = s;

        await assert.rejects(
          contract.write.withdrawERC20([bragToken.address, 1n], { account: user1.account }),
          /AccessControlUnauthorizedAccount/
        );

        await assert.rejects(
          contract.write.withdrawETH([1n], { account: user1.account }),
          /AccessControlUnauthorizedAccount/
        );
      });
    }
  });

  describe("DonationReceipt Metadata", function () {
    it("Should generate on-chain metadata with donation details", async function () {
      const { bragNFT, receipt, user1 } = await setup();
      const donationAmount = parseEther("0.25");
      const message = "On-chain Receipt Test";

      await bragNFT.write.donate([message, ""], {
        account: user1.account,
        value: donationAmount
      });

      const receiptId = 0n;
      const uri = await receipt.read.tokenURI([receiptId]);
      assert.ok(uri.startsWith("data:application/json;base64,"));

      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      assert.equal(json.name, `Donation Receipt #${receiptId}`);
      assert.ok(json.image.startsWith("data:image/svg+xml;base64,"));

      const attributes = json.attributes;
      assert.equal(attributes.find((a: any) => a.trait_type === "Donor").value.toLowerCase(), user1.account.address.toLowerCase());
      assert.equal(attributes.find((a: any) => a.trait_type === "Amount").value, donationAmount.toString());
      assert.equal(attributes.find((a: any) => a.trait_type === "Message").value, message);
    });
  });

  describe("BragNFT Multimedia Detection", function () {
    it("Should detect .webp as multimedia", async function () {
      const { bragNFT } = await setup();

      const webpURI = "https://example.com/image.webp";
      await bragNFT.write.donate(["webp test", webpURI], { value: parseEther("0.1") });

      const tokenId = 0n;
      const uri = await bragNFT.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

      assert.equal(json.animation_url, webpURI);
      assert.ok(json.image.startsWith("data:image/svg+xml;base64,"));
    });
  });
});
