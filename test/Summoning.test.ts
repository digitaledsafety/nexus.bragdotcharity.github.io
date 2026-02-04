import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Summoning System", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user, user2, admin] = await viem.getWalletClients();

    const mockUsdc = await viem.deployContract("MockUSDC");
    const registry = await viem.deployContract("SummonRegistry", [owner.account.address]);

    // Deploy two vaults
    const vault1 = await viem.deployContract("SummonVault", [
      owner.account.address,
      registry.address,
      mockUsdc.address,
      "Minecraft Vault",
      "MCV"
    ]);
    const vault2 = await viem.deployContract("SummonVault", [
      owner.account.address,
      registry.address,
      mockUsdc.address,
      "Roblox Vault",
      "RBV"
    ]);

    // Verify vaults in registry
    await registry.write.verifyVault([vault1.address, 0, "Minecraft Vault", "Vault for Minecraft"]);
    await registry.write.verifyVault([vault2.address, 0, "Roblox Vault", "Vault for Roblox"]);

    // Deploy mock NFTs
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        owner.account.address,
        parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    await receipt.write.setMinter([bragNFT.address, true]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault1, vault2, bragNFT, mock1155, owner, user, user2, admin };
  }

  it("Should summon ERC721 to a vault and unsummon it", async function () {
    const { bragNFT, vault1, user } = await deployContracts();

    // Mint NFT to user
    await bragNFT.write.donate(["test"], { account: user.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Summon: Transfer to vault
    await bragNFT.write.safeTransferFrom([user.account.address, vault1.address, tokenId], { account: user.account });

    // Verify ownership in vault
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault1.address));
    assert.equal(await vault1.read.owner721([bragNFT.address, tokenId]), getAddress(user.account.address));

    // Unsummon: Withdraw from vault
    await vault1.write.withdraw721([bragNFT.address, tokenId], { account: user.account });

    // Verify ownership returned to user
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(user.account.address));
    assert.equal(await vault1.read.owner721([bragNFT.address, tokenId]), getAddress("0x0000000000000000000000000000000000000000"));
  });

  it("Should summon ERC1155 to a vault and unsummon it", async function () {
    const { mock1155, vault1, user, owner } = await deployContracts();

    const tokenId = 1n;
    const amount = 10n;
    await mock1155.write.mint([user.account.address, tokenId, amount], { account: owner.account });

    // Summon
    await mock1155.write.safeTransferFrom([user.account.address, vault1.address, tokenId, amount, "0x"], { account: user.account });

    // Verify
    assert.equal(await mock1155.read.balanceOf([vault1.address, tokenId]), amount);
    assert.equal(await vault1.read.balances1155([mock1155.address, tokenId, user.account.address]), amount);

    // Unsummon
    await vault1.write.withdraw1155([mock1155.address, tokenId, 5n], { account: user.account });

    // Verify partial withdraw
    assert.equal(await mock1155.read.balanceOf([user.account.address, tokenId]), 5n);
    assert.equal(await vault1.read.balances1155([mock1155.address, tokenId, user.account.address]), 5n);
  });

  it("Should move ERC721 directly between verified vaults", async function () {
    const { bragNFT, vault1, vault2, user } = await deployContracts();

    await bragNFT.write.donate(["move test"], { account: user.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Summon to Vault 1
    await bragNFT.write.safeTransferFrom([user.account.address, vault1.address, tokenId], { account: user.account });

    // Move to Vault 2
    await vault1.write.move721([bragNFT.address, tokenId, vault2.address], { account: user.account });

    // Verify in Vault 2
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault2.address));
    assert.equal(await vault2.read.owner721([bragNFT.address, tokenId]), getAddress(user.account.address));
    // Verify NOT in Vault 1
    assert.equal(await vault1.read.owner721([bragNFT.address, tokenId]), getAddress("0x0000000000000000000000000000000000000000"));

    // Can withdraw from Vault 2
    await vault2.write.withdraw721([bragNFT.address, tokenId], { account: user.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(user.account.address));
  });

  it("Should move ERC1155 directly between verified vaults", async function () {
    const { mock1155, vault1, vault2, user, owner } = await deployContracts();

    const tokenId = 1n;
    const amount = 10n;
    await mock1155.write.mint([user.account.address, tokenId, amount], { account: owner.account });

    // Summon to Vault 1
    await mock1155.write.safeTransferFrom([user.account.address, vault1.address, tokenId, amount, "0x"], { account: user.account });

    // Move 3 units to Vault 2
    await vault1.write.move1155([mock1155.address, tokenId, 3n, vault2.address], { account: user.account });

    // Verify distribution
    assert.equal(await vault1.read.balances1155([mock1155.address, tokenId, user.account.address]), 7n);
    assert.equal(await vault2.read.balances1155([mock1155.address, tokenId, user.account.address]), 3n);

    assert.equal(await mock1155.read.balanceOf([vault1.address, tokenId]), 7n);
    assert.equal(await mock1155.read.balanceOf([vault2.address, tokenId]), 3n);
  });

  it("Should NOT allow moving to unverified vault", async function () {
    const { bragNFT, vault1, user, user2 } = await deployContracts();

    await bragNFT.write.donate(["unverified test"], { account: user.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.safeTransferFrom([user.account.address, vault1.address, tokenId], { account: user.account });

    // user2's address is NOT a verified vault
    await assert.rejects(
        vault1.write.move721([bragNFT.address, tokenId, user2.account.address], { account: user.account }),
        /Destination not verified/
    );
  });

  it("Should allow admin force withdraw", async function () {
    const { bragNFT, vault1, user, owner, user2 } = await deployContracts();

    await bragNFT.write.donate(["admin force"], { account: user.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.safeTransferFrom([user.account.address, vault1.address, tokenId], { account: user.account });

    // Admin (owner of vault1) force withdraws to user2
    await vault1.write.adminForceWithdraw721([bragNFT.address, tokenId, user2.account.address], { account: owner.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(user2.account.address));
    assert.equal(await vault1.read.owner721([bragNFT.address, tokenId]), getAddress("0x0000000000000000000000000000000000000000"));
  });

  it("Should handle ERC1155 atomicity (unit level)", async function () {
    const { mock1155, vault1, vault2, user, owner } = await deployContracts();

    const tokenId = 1n;
    const amount = 2n;
    await mock1155.write.mint([user.account.address, tokenId, amount], { account: owner.account });

    // Summon 1 to Minecraft (vault1)
    await mock1155.write.safeTransferFrom([user.account.address, vault1.address, tokenId, 1n, "0x"], { account: user.account });
    // Summon 1 to Roblox (vault2)
    await mock1155.write.safeTransferFrom([user.account.address, vault2.address, tokenId, 1n, "0x"], { account: user.account });

    assert.equal(await vault1.read.balances1155([mock1155.address, tokenId, user.account.address]), 1n);
    assert.equal(await vault2.read.balances1155([mock1155.address, tokenId, user.account.address]), 1n);

    // Try to withdraw 2 from vault1 (should fail)
    await assert.rejects(
        vault1.write.withdraw1155([mock1155.address, tokenId, 2n], { account: user.account }),
        /Insufficient balance/
    );
  });
});
