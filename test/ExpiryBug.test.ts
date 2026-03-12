import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { encodeAbiParameters, parseAbiParameters } from "viem";

describe("ExhibitVault Expiry Bug", async function () {
  const { viem } = await network.connect();

  async function deployVault() {
    const [owner, user] = await viem.getWalletClients();
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155");

    return { vault, registry, mock1155, owner, user };
  }

  it("should demonstrate that subsequent deposits overwrite previous expiries in ExhibitVault", async function () {
    const { vault, mock1155, owner, user } = await deployVault();
    const tokenId = 1n;
    // Owner mints to user
    await mock1155.write.mint([user.account.address, tokenId, 100n], { account: owner.account });
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });

    // Deposit 10 tokens for 1 hour (3600 seconds)
    const duration1 = 3600n;
    const data1 = encodeAbiParameters(parseAbiParameters('uint256'), [duration1]);
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 10n, data1], { account: user.account });

    const expiryAfterFirst = await vault.read.expiry1155([mock1155.address, tokenId, user.account.address]);
    assert.ok(expiryAfterFirst > 0n);

    // Deposit 1 more token for 1 second
    const duration2 = 1n;
    const data2 = encodeAbiParameters(parseAbiParameters('uint256'), [duration2]);
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 1n, data2], { account: user.account });

    const expiryAfterSecond = await vault.read.expiry1155([mock1155.address, tokenId, user.account.address]);

    // The expiry should NOT have been reduced!
    assert.equal(expiryAfterSecond, expiryAfterFirst);
    console.log(`Expiry maintained at ${expiryAfterFirst}`);
  });
});
