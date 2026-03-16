import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeAbiParameters, parseAbiParameters } from "viem";

describe("New Features", async function () {
  const { viem } = await network.connect();

  async function deploySetup() {
    const [owner, user, user2] = await viem.getWalletClients();
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("10000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const mockNFT = await viem.deployContract("MockERC1155", []);
    const mock721 = await viem.deployContract("RoyaltyZeroRecipient", []); // Also a plain ERC721

    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    return { bragToken, marketplace, vault, registry, mockNFT, mock721, owner, user, user2 };
  }

  it("NFTMarketplace: Offer expiry works", async function () {
    const { bragToken, marketplace, mock721, owner, user, user2 } = await deploySetup();
    const publicClient = await viem.getPublicClient();

    const tokenId = 1n;
    await mock721.write.mint([user.account.address, tokenId], { account: owner.account });
    await bragToken.write.transfer([user2.account.address, parseEther("100")], { account: owner.account });

    const price = parseEther("10");
    const duration = 3600n; // 1 hour
    await bragToken.write.approve([marketplace.address, price], { account: user2.account });

    // Create offer with duration
    await marketplace.write.createOffer([mock721.address, tokenId, 1n, price, duration], { account: user2.account });

    await mock721.write.approve([marketplace.address, tokenId], { account: user.account });

    // Increase time beyond expiry
    await publicClient.request({ method: "evm_increaseTime" as any, params: [3601] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Accept should fail
    await assert.rejects(
        marketplace.write.acceptOffer([mock721.address, tokenId, user2.account.address], { account: user.account }),
        /Offer expired/
    );

    // Reject should still work to return funds
    await marketplace.write.rejectOffer([mock721.address, tokenId, user2.account.address], { account: user.account });

    const user2Balance = await bragToken.read.balanceOf([user2.account.address]);
    assert.equal(user2Balance, parseEther("100"));
  });

  it("ExhibitVault: Batch withdrawal works for ERC721", async function () {
    const { vault, mock721, owner, user } = await deploySetup();

    const tokenId1 = 10n;
    const tokenId2 = 20n;
    await mock721.write.mint([user.account.address, tokenId1], { account: owner.account });
    await mock721.write.mint([user.account.address, tokenId2], { account: owner.account });

    await mock721.write.safeTransferFrom([user.account.address, vault.address, tokenId1], { account: user.account });
    await mock721.write.safeTransferFrom([user.account.address, vault.address, tokenId2], { account: user.account });

    assert.equal(await mock721.read.ownerOf([tokenId1]), getAddress(vault.address));
    assert.equal(await mock721.read.ownerOf([tokenId2]), getAddress(vault.address));

    await vault.write.batchWithdraw721([[mock721.address, mock721.address], [tokenId1, tokenId2]], { account: user.account });

    assert.equal(await mock721.read.ownerOf([tokenId1]), getAddress(user.account.address));
    assert.equal(await mock721.read.ownerOf([tokenId2]), getAddress(user.account.address));
  });

  it("ExhibitVault: Batch withdrawal works for ERC1155", async function () {
    const { vault, mockNFT, owner, user } = await deploySetup();

    const tokenId1 = 1n;
    const tokenId2 = 2n;
    await mockNFT.write.mint([user.account.address, tokenId1, 10n], { account: owner.account });
    await mockNFT.write.mint([user.account.address, tokenId2, 20n], { account: owner.account });

    await mockNFT.write.safeTransferFrom([user.account.address, vault.address, tokenId1, 5n, "0x"], { account: user.account });
    await mockNFT.write.safeTransferFrom([user.account.address, vault.address, tokenId2, 10n, "0x"], { account: user.account });

    await vault.write.batchWithdraw1155([
        [mockNFT.address, mockNFT.address],
        [tokenId1, tokenId2],
        [5n, 10n]
    ], { account: user.account });

    assert.equal(await mockNFT.read.balanceOf([user.account.address, tokenId1]), 10n);
    assert.equal(await mockNFT.read.balanceOf([user.account.address, tokenId2]), 20n);
  });
});
