import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Fixes and Enhancements", function () {
  async function deployAll() {
    const { viem } = await network.connect();
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { marketplace, bragNFT, bragToken, receipt, registry, vault, mock1155, owner, seller, buyer, treasury, viem };
  }

  it("Should fix royalty trapped funds bug (royalty recipient 0)", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner, treasury, viem } = await deployAll();

    // Deploy a mock NFT that returns address(0) for royalty
    const mockRoyaltyNFT = await viem.deployContract("MockERC721", []); // Standard ERC721 doesn't implement EIP-2981 by default or returns 0

    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Mint to seller
    await mockRoyaltyNFT.write.mint([seller.account.address, 1n]);
    const tokenId = 1n;

    // Buyer makes an offer
    const price = parseEther("10");
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.createOffer([mockRoyaltyNFT.address, tokenId, 1n, price, 0n], { account: buyer.account });

    // Seller accepts
    await mockRoyaltyNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);
    await marketplace.write.acceptOffer([mockRoyaltyNFT.address, tokenId, buyer.account.address], { account: seller.account });
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    // Royalty should be 0 because mockRoyaltyNFT doesn't support IERC2981 or returns 0
    // Seller should get the full price (minus protocol fee which is 0 by default)
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, price);
  });

  it("Should enforce offer expiration", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner, viem } = await deployAll();
    const publicClient = await viem.getPublicClient();

    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
    await bragNFT.write.donate(["Expiration NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const duration = 10n;
    const price = parseEther("10");
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price, duration], { account: buyer.account });

    await publicClient.request({ method: "evm_increaseTime" as any, params: [11] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    await assert.rejects(
        marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account }),
        /Offer has expired/
    );
  });

  it("Should allow batch withdrawal from ExhibitVault", async function () {
    const { bragNFT, mock1155, vault, seller, owner } = await deployAll();
    const user = seller;

    await bragNFT.write.donate(["Batch 1", ""], { account: user.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Batch 2", ""], { account: user.account, value: parseEther("0.1") });
    await bragNFT.write.safeTransferFrom([user.account.address, vault.address, 0n], { account: user.account });
    await bragNFT.write.safeTransferFrom([user.account.address, vault.address, 1n], { account: user.account });

    await mock1155.write.mint([user.account.address, 100n, 10n], { account: owner.account });
    await mock1155.write.mint([user.account.address, 101n, 20n], { account: owner.account });
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, 100n, 5n, "0x"], { account: user.account });
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, 101n, 10n, "0x"], { account: user.account });

    await vault.write.batchWithdraw721([[bragNFT.address, bragNFT.address], [0n, 1n]], { account: user.account });
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user.account.address));

    await vault.write.batchWithdraw1155([
        [mock1155.address, mock1155.address],
        [100n, 101n],
        [5n, 10n]
    ], { account: user.account });
    assert.equal(await mock1155.read.balanceOf([user.account.address, 100n]), 10n);
    assert.equal(await mock1155.read.balanceOf([user.account.address, 101n]), 20n);
  });
});
