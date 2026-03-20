import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes } from "viem";

describe("New Features and Bug Fixes", async function () {
  const { viem } = await network.connect();

  async function deployBase() {
    const publicClient = await viem.getPublicClient();
    const [owner, user1, user2] = await viem.getWalletClients();
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.address,
        parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { registry, vault, treasury, bragNFT, owner, user1, user2 };
  }

  it("Should allow minting BragNFT directly into ExhibitVault", async function () {
    const { bragNFT, vault, user1 } = await deployBase();

    // User 1 mints directly to vault
    const message = "Mint to vault";
    await bragNFT.write.donateTo([vault.address, message, "", false], {
        account: user1.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault.address));

    // Verify vault records user1 (the operator/msg.sender) as the owner
    const recordedOwner = await vault.read.owner721([bragNFT.address, tokenId]);
    assert.equal(recordedOwner, getAddress(user1.account.address));

    // User 1 should be able to withdraw it
    await vault.write.withdraw721([bragNFT.address, tokenId], { account: user1.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(user1.account.address));
  });

  it("Should support ERC1155 batch withdrawal and moving", async function () {
    const { registry, vault, user1, owner } = await deployBase();
    const publicClient = await viem.getPublicClient();
    const mock1155 = await viem.deployContract("MockERC1155");

    // Verify both vaults
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "First vault"], { account: owner.account });
    const vault2 = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Second vault"], { account: owner.account });

    const ids = [1n, 2n, 3n];
    const amounts = [10n, 20n, 30n];

    // Mint and exhibit to vault 1
    for (let i = 0; i < ids.length; i++) {
        await mock1155.write.mint([user1.account.address, ids[i], amounts[i]]);
    }
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });
    await mock1155.write.safeBatchTransferFrom([user1.account.address, vault.address, ids, amounts, "0x"], { account: user1.account });

    // Verify balances in vault
    for (let i = 0; i < ids.length; i++) {
        const bal = await vault.read.balances1155([mock1155.address, ids[i], user1.account.address]);
        assert.equal(bal, amounts[i]);
    }

    // Move batch to vault 2
    const moveTx = await vault.write.moveBatch1155([mock1155.address, ids, amounts, vault2.address], { account: user1.account });
    await publicClient.waitForTransactionReceipt({ hash: moveTx });

    for (let i = 0; i < ids.length; i++) {
        const bal1 = await vault.read.balances1155([mock1155.address, ids[i], user1.account.address]);
        const bal2 = await vault2.read.balances1155([mock1155.address, ids[i], user1.account.address]);
        assert.equal(bal1, 0n, `ID ${ids[i]} should be 0 in vault1`);
        assert.equal(bal2, amounts[i], `ID ${ids[i]} should be ${amounts[i]} in vault2`);
    }

    // Batch withdraw from vault 2
    const withdrawTx = await vault2.write.withdrawBatch1155([mock1155.address, ids, amounts], { account: user1.account });
    await publicClient.waitForTransactionReceipt({ hash: withdrawTx });

    for (let i = 0; i < ids.length; i++) {
        const bal2 = await vault2.read.balances1155([mock1155.address, ids[i], user1.account.address]);
        assert.equal(bal2, 0n, `ID ${ids[i]} should be 0 in vault2 after withdrawal`);
        assert.equal(await mock1155.read.balanceOf([user1.account.address, ids[i]]), amounts[i], `ID ${ids[i]} balance of user1 should be ${amounts[i]}`);
    }
  });

  it("Should allow TREASURY_ROLE to withdraw ERC20 from Treasury", async function () {
    const { treasury, owner, user1 } = await deployBase();
    const mockERC20 = await viem.deployContract("MockUSDC");

    const amount = parseEther("100");
    await mockERC20.write.mint([treasury.address, amount]);

    assert.equal(await mockERC20.read.balanceOf([treasury.address]), amount);

    // owner has TREASURY_ROLE
    await treasury.write.withdrawERC20([mockERC20.address, user1.account.address, amount], { account: owner.account });

    assert.equal(await mockERC20.read.balanceOf([treasury.address]), 0n);
    assert.equal(await mockERC20.read.balanceOf([user1.account.address]), amount);
  });

  it("Should detect external audio URLs in BragNFT", async function () {
    const { bragNFT, owner } = await deployBase();

    const audioUrl = "https://example.com/podcast.mp3";
    await bragNFT.write.donate(["Audio Test", audioUrl], { value: parseEther("0.1") });
    const tokenId = 0n;

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

    assert.equal(json.animation_url, audioUrl);
    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"));
  });
});
