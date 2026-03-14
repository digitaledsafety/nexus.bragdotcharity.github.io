import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Bug Reproduction", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user, user2] = await viem.getWalletClients();
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    const mock1155 = await viem.deployContract("MockERC1155", []);
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);
    const mockRoyaltyNFT = await viem.deployContract("MockRoyaltyNFT", []);

    return { owner, user, user2, vault, mock1155, bragToken, marketplace, mockRoyaltyNFT };
  }

  it("ExhibitVault: Second deposit overrides expiry (Bug)", async function () {
    const { owner, user, vault, mock1155 } = await setup();
    const publicClient = await viem.getPublicClient();

    const tokenId = 1n;
    await mock1155.write.mint([user.account.address, tokenId, 100n], { account: owner.account });

    // 1. Deposit 10 tokens with 1 hour duration
    const duration = 3600n;
    const data = encodeAbiParameters(parseAbiParameters('uint256'), [duration]);
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 10n, data], { account: user.account });

    // Verify they are locked
    await assert.rejects(
      vault.write.withdraw1155([mock1155.address, tokenId, 1n], { account: user.account }),
      /Exhibition not yet expired/
    );

    // 2. Deposit 5 tokens with 0 duration
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 5n, "0x"], { account: user.account });

    // 3. Attempt to withdraw all 15 tokens immediately
    // After fix, this should REVERT because the expiry should still be 1 hour from the first deposit
    await assert.rejects(
      vault.write.withdraw1155([mock1155.address, tokenId, 15n], { account: user.account }),
      /Exhibition not yet expired/
    );

    // Increase time to verify we can still withdraw eventually
    await publicClient.request({ method: "evm_increaseTime" as any, params: [3601] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    await vault.write.withdraw1155([mock1155.address, tokenId, 15n], { account: user.account });
    assert.equal(await mock1155.read.balanceOf([user.account.address, tokenId]), 100n);
    console.log("ExhibitVault expiry override bug fixed!");
  });

  it("NFTMarketplace: Royalty to address(0) traps funds (Bug)", async function () {
    const { owner, user, user2, bragToken, marketplace, mockRoyaltyNFT } = await setup();

    const tokenId = 1n;
    await mockRoyaltyNFT.write.mint([user.account.address, tokenId], { account: owner.account });

    // Create offer
    const price = parseEther("100");
    await bragToken.write.transfer([user2.account.address, price], { account: owner.account });
    await bragToken.write.approve([marketplace.address, price], { account: user2.account });
    await marketplace.write.createOffer([mockRoyaltyNFT.address, tokenId, 1n, price, 0n], { account: user2.account });

    // Accept offer
    await mockRoyaltyNFT.write.approve([marketplace.address, tokenId], { account: user.account });
    await marketplace.write.acceptOffer([mockRoyaltyNFT.address, tokenId, user2.account.address], { account: user.account });

    // Royalty is 10% (10 BRAG), recipient is address(0)
    // After fix, seller proceeds should be 100 - 0 (fee) - 0 (royalty because recipient is 0) = 100
    const sellerBalance = await bragToken.read.balanceOf([user.account.address]);
    assert.equal(sellerBalance, parseEther("100"));

    // Marketplace should have 0 balance if bug is fixed
    const marketplaceBalance = await bragToken.read.balanceOf([marketplace.address]);
    assert.equal(marketplaceBalance, 0n);
    console.log("NFTMarketplace royalty trap bug fixed!");
  });

  it("NFTMarketplace: Should enforce offer expiration", async function () {
    const { owner, user, user2, bragToken, marketplace, mockRoyaltyNFT } = await setup();
    const publicClient = await viem.getPublicClient();

    const tokenId = 1n;
    await mockRoyaltyNFT.write.mint([user.account.address, tokenId], { account: owner.account });

    // Create offer with 1 hour duration
    const price = parseEther("100");
    await bragToken.write.transfer([user2.account.address, price], { account: owner.account });
    await bragToken.write.approve([marketplace.address, price], { account: user2.account });
    const duration = 3600n;
    await marketplace.write.createOffer([mockRoyaltyNFT.address, tokenId, 1n, price, duration], { account: user2.account });

    // Increase time by 1 hour and 1 second
    await publicClient.request({ method: "evm_increaseTime" as any, params: [3601] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Try to accept offer
    await mockRoyaltyNFT.write.approve([marketplace.address, tokenId], { account: user.account });
    await assert.rejects(
      marketplace.write.acceptOffer([mockRoyaltyNFT.address, tokenId, user2.account.address], { account: user.account }),
      /Offer expired/
    );

    console.log("NFTMarketplace offer expiration verified!");
  });
});
