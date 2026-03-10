import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Batch Withdrawal (ExhibitVault)", async function () {
  const { viem } = await network.connect();

  async function deploy() {
    const [owner, user] = await viem.getWalletClients();
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);
    const mock1155 = await viem.deployContract("MockERC1155");

    return { vault, mock1155, owner, user };
  }

  it("Should withdraw multiple ERC1155 tokens in one batch", async function () {
    const { vault, mock1155, owner, user } = await deploy();

    const ids = [1n, 2n, 3n];
    const amounts = [10n, 20n, 30n];

    // Mint and transfer to user
    for(let i=0; i<ids.length; i++) {
        await mock1155.write.mint([user.account.address, ids[i], amounts[i]]);
    }

    // Exhibit all to vault
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });
    for(let i=0; i<ids.length; i++) {
        await mock1155.write.safeTransferFrom([user.account.address, vault.address, ids[i], amounts[i], "0x"], { account: user.account });
    }

    // Verify balances in vault
    for(let i=0; i<ids.length; i++) {
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], user.account.address]), amounts[i]);
    }

    // Batch withdraw
    await vault.write.withdrawBatch1155([mock1155.address, ids, amounts], { account: user.account });

    // Verify balances returned to user
    for(let i=0; i<ids.length; i++) {
        assert.equal(await mock1155.read.balanceOf([user.account.address, ids[i]]), amounts[i]);
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], user.account.address]), 0n);
    }
  });

  it("Should revert batch withdrawal if one item is insufficient", async function () {
    const { vault, mock1155, owner, user } = await deploy();

    await mock1155.write.mint([user.account.address, 1n, 10n]);
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, 1n, 10n, "0x"], { account: user.account });

    await assert.rejects(
        vault.write.withdrawBatch1155([mock1155.address, [1n, 2n], [10n, 1n]], { account: user.account }),
        /Insufficient balance/
    );
  });
});
