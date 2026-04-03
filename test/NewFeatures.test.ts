import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("New Features and Enhancements", async function () {
  const { viem } = await network.connect();
  const testClient = await viem.getTestClient();
  const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";

  async function setup() {
    const [owner, other] = await viem.getWalletClients();
    const refundPeriod = 3600n; // 1 hour

    // Deploy BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("1000000")]);

    // Deploy NFTMarketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, refundPeriod, bragToken.address]);

    // Deploy Mock NFT
    const mockNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock NFT", "MOCK"]);

    // Deploy ExhibitVault
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "The main exhibit vault"]);

    // Deploy MockERC1155
    const mock1155 = await viem.deployContract("MockERC1155");

    return { owner, other, bragToken, marketplace, mockNFT, vault, registry, mock1155, refundPeriod };
  }

  describe("NFTMarketplace Refund Period", () => {
    it("Should NOT allow canceling an offer before the refund period has elapsed", async function () {
      const { owner, other, marketplace, mockNFT, bragToken } = await setup();
      const tokenId = 1n;
      const price = parseEther("10");

      await bragToken.write.transfer([other.account.address, price], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price], { account: other.account });

      await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, price], { account: other.account });

      // Attempt to cancel immediately
      await assert.rejects(
        marketplace.write.cancelOffer([mockNFT.address, tokenId], { account: other.account }),
        /Refund period not yet elapsed/
      );
    });

    it("Should allow canceling an offer after the refund period has elapsed", async function () {
      const { owner, other, marketplace, mockNFT, bragToken, refundPeriod } = await setup();
      const tokenId = 1n;
      const price = parseEther("10");

      await bragToken.write.transfer([other.account.address, price], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price], { account: other.account });

      await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, price], { account: other.account });

      // Fast forward time
      await testClient.increaseTime({ seconds: Number(refundPeriod) + 1 });
      await testClient.mine({ blocks: 1 });

      // Cancel should now work
      await marketplace.write.cancelOffer([mockNFT.address, tokenId], { account: other.account });

      const offer = await marketplace.read.offers([mockNFT.address, tokenId, other.account.address]);
      assert.equal(offer[0], 0n); // price should be 0
    });

    it("Should allow the seller to reject an offer immediately regardless of refund period", async function () {
        const { owner, other, marketplace, mockNFT, bragToken } = await setup();
        const tokenId = 1n;
        const price = parseEther("10");

        await mockNFT.write.mint([owner.account.address, tokenId]);
        await bragToken.write.transfer([other.account.address, price], { account: owner.account });
        await bragToken.write.approve([marketplace.address, price], { account: other.account });

        await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, price], { account: other.account });

        // Seller rejects offer immediately
        await marketplace.write.rejectOffer([mockNFT.address, tokenId, other.account.address], { account: owner.account });

        const offer = await marketplace.read.offers([mockNFT.address, tokenId, other.account.address]);
        assert.equal(offer[0], 0n);
    });
  });

  describe("ExhibitVault Batch Withdrawals", () => {
    it("Should batch withdraw ERC721 tokens", async function () {
      const { owner, vault, mockNFT } = await setup();
      const tokenIds = [1n, 2n, 3n];

      for (const id of tokenIds) {
        await mockNFT.write.mint([owner.account.address, id]);
        await mockNFT.write.safeTransferFrom([owner.account.address, vault.address, id], { account: owner.account });
      }

      assert.equal(await mockNFT.read.ownerOf([1n]), getAddress(vault.address));

      const nftContracts = [mockNFT.address, mockNFT.address, mockNFT.address];
      await vault.write.batchWithdraw721([nftContracts, tokenIds], { account: owner.account });

      for (const id of tokenIds) {
        assert.equal(await mockNFT.read.ownerOf([id]), getAddress(owner.account.address));
      }
    });

    it("Should batch withdraw ERC1155 tokens", async function () {
      const { owner, vault, mock1155 } = await setup();
      const ids = [1n, 2n];
      const amounts = [10n, 20n];

      await mock1155.write.mint([owner.account.address, ids[0], amounts[0]]);
      await mock1155.write.mint([owner.account.address, ids[1], amounts[1]]);

      await mock1155.write.safeBatchTransferFrom([owner.account.address, vault.address, ids, amounts, "0x"], { account: owner.account });

      assert.equal(await mock1155.read.balanceOf([vault.address, ids[0]]), amounts[0]);

      await vault.write.batchWithdraw1155([mock1155.address, ids, amounts], { account: owner.account });

      assert.equal(await mock1155.read.balanceOf([owner.account.address, ids[0]]), amounts[0]);
      assert.equal(await mock1155.read.balanceOf([vault.address, ids[0]]), 0n);
    });
  });

  describe("AccessControl Transitions", () => {
    it("NFTMarketplace: Should allow admin to withdraw ERC20", async function () {
      const { owner, other, marketplace, bragToken } = await setup();
      const amount = parseEther("50");

      await bragToken.write.transfer([marketplace.address, amount], { account: owner.account });

      // Admin can withdraw
      await marketplace.write.withdrawERC20([bragToken.address, other.account.address, amount], { account: owner.account });
      assert.equal(await bragToken.read.balanceOf([other.account.address]), amount);
    });

    it("BatchGrant: Should use AccessControl for administrative functions", async function () {
        const [owner, other] = await viem.getWalletClients();
        const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

        // Non-admin should fail
        await assert.rejects(
            batchGrant.write.distributeFromBalance([zeroAddress, [], []], { account: other.account }),
            /AccessControlUnauthorizedAccount/
        );

        // Admin should succeed (with empty arrays)
        await batchGrant.write.distributeFromBalance([zeroAddress, [], []], { account: owner.account });
    });

    it("MockERC1155: Should use AccessControl for minting", async function () {
        const { mock1155, other } = await setup();

        // Non-admin should fail
        await assert.rejects(
            mock1155.write.mint([other.account.address, 1n, 100n], { account: other.account }),
            /AccessControlUnauthorizedAccount/
        );
    });
  });
});
