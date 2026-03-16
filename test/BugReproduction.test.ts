import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Bug Reproductions", async function () {
  const { viem } = await network.connect();

  async function deploySetup() {
    const [owner, seller, buyer] = await viem.getWalletClients();
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("10000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    return { bragToken, marketplace, vault, owner, seller, buyer };
  }

  it("Reproduction: NFTMarketplace traps funds if royalty recipient is address(0) - VERIFY FIX", async function () {
    const { bragToken, marketplace, seller, buyer, owner } = await deploySetup();
    const royaltyNFT = await viem.deployContract("RoyaltyZeroRecipient", []);

    // Setup: buyer has tokens, seller has NFT
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
    const tokenId = 1n;
    await royaltyNFT.write.mint([seller.account.address, tokenId], { account: owner.account });

    const price = parseEther("10");
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.createOffer([royaltyNFT.address, tokenId, 1n, price], { account: buyer.account });

    await royaltyNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    // Accept offer
    await marketplace.write.acceptOffer([royaltyNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const balanceAfter = await bragToken.read.balanceOf([marketplace.address]);

    // AFTER FIX: Royalty should be 0 because recipient is address(0), so 0 funds should be trapped.
    assert.equal(balanceAfter, 0n, "FIXED: No funds should be trapped in the contract");

    const sellerBalance = await bragToken.read.balanceOf([seller.account.address]);
    assert.equal(sellerBalance, price, "Seller should receive full price since royalty was invalid");
  });

  it("Reproduction: ExhibitVault ERC1155 expiry can be decreased - VERIFY FIX", async function () {
    const [owner, seller] = await viem.getWalletClients();
    const mockNFT = await viem.deployContract("MockERC1155", []);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId, 10n], { account: owner.account });

    // First deposit with long duration
    const longDuration = 3600n; // 1 hour
    const dataLong = encodeAbiParameters(parseAbiParameters('uint256'), [longDuration]);
    await mockNFT.write.safeTransferFrom([seller.account.address, vault.address, tokenId, 5n, dataLong], { account: seller.account });

    const expiryAfterFirst = await vault.read.expiry1155([mockNFT.address, tokenId, seller.account.address]);
    assert.ok(expiryAfterFirst > 0n);

    // Second deposit with zero duration (should not decrease expiry)
    const dataZero = encodeAbiParameters(parseAbiParameters('uint256'), [0n]);
    await mockNFT.write.safeTransferFrom([seller.account.address, vault.address, tokenId, 1n, dataZero], { account: seller.account });

    const expiryAfterSecond = await vault.read.expiry1155([mockNFT.address, tokenId, seller.account.address]);

    // AFTER FIX: Expiry should remain as expiryAfterFirst
    assert.equal(expiryAfterSecond, expiryAfterFirst, "FIXED: Expiry was not decreased");
  });
});
