import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("New Features: RefundPeriod, WithdrawERC20, BatchWithdraw1155", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const refundPeriod = 3600n; // 1 hour
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, refundPeriod, bragToken.address]);
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.1")]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const mock1155 = await viem.deployContract("MockERC1155", [owner.account.address]);

    return { owner, seller, buyer, bragToken, marketplace, treasury, vault, bragNFT, mock1155, refundPeriod };
  }

  it("Should enforce refund period in Marketplace", async function () {
    const { owner, buyer, marketplace, bragToken, bragNFT, refundPeriod } = await setup();
    const publicClient = await viem.getPublicClient();

    await bragNFT.write.donate(["test", ""], { value: parseEther("0.1"), account: owner.account });
    const tokenId = 0n;

    const price = parseEther("10");
    await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price], { account: buyer.account });

    // Try to cancel immediately - should fail
    await assert.rejects(
      marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account }),
      /Refund period not yet elapsed/
    );

    // Increase time
    await publicClient.request({ method: "evm_increaseTime" as any, params: [Number(refundPeriod) + 1] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Should succeed now
    await marketplace.write.cancelOffer([bragNFT.address, tokenId], { account: buyer.account });
    const balance = await bragToken.read.balanceOf([buyer.account.address]);
    assert.equal(balance, price);
  });

  it("Should allow withdrawing ERC20 from Treasury and Marketplace", async function () {
    const { owner, treasury, marketplace, bragToken } = await setup();

    const amount = parseEther("50");
    await bragToken.write.transfer([treasury.address, amount], { account: owner.account });
    await bragToken.write.transfer([marketplace.address, amount], { account: owner.account });

    const initialOwnerBalance = await bragToken.read.balanceOf([owner.account.address]);

    // Withdraw from Treasury
    await treasury.write.withdrawERC20([bragToken.address, amount, owner.account.address], { account: owner.account });
    assert.equal(await bragToken.read.balanceOf([treasury.address]), 0n);

    // Withdraw from Marketplace
    await marketplace.write.withdrawERC20([bragToken.address, amount, owner.account.address], { account: owner.account });
    assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);

    assert.equal(await bragToken.read.balanceOf([owner.account.address]), initialOwnerBalance + amount * 2n);
  });

  it("Should allow batch withdrawing ERC1155 from ExhibitVault", async function () {
    const { owner, vault, mock1155 } = await setup();

    const ids = [1n, 2n, 3n];
    const amounts = [10n, 20n, 30n];

    for (let i = 0; i < ids.length; i++) {
      await mock1155.write.mint([owner.account.address, ids[i], amounts[i]], { account: owner.account });
    }

    await mock1155.write.safeBatchTransferFrom([owner.account.address, vault.address, ids, amounts, "0x"], { account: owner.account });

    assert.equal(await mock1155.read.balanceOf([vault.address, 1n]), 10n);
    assert.equal(await vault.read.balances1155([mock1155.address, 1n, owner.account.address]), 10n);

    // Batch withdraw
    await vault.write.withdrawBatch1155([mock1155.address, ids, amounts], { account: owner.account });

    for (let i = 0; i < ids.length; i++) {
      assert.equal(await mock1155.read.balanceOf([owner.account.address, ids[i]]), amounts[i]);
      assert.equal(await vault.read.balances1155([mock1155.address, ids[i], owner.account.address]), 0n);
    }
  });
});
