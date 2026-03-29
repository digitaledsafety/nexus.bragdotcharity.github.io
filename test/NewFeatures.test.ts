import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog } from "viem";

describe("New Features", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, other] = await viem.getWalletClients();

    // Registry
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    // Vault
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "Main Vault"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Secondary Vault"]);

    // BragNFT & Receipt
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1")]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("10000")]);
    await bragNFT.write.setBragToken([bragToken.address]);
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);

    // BatchGrant
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    // Mock ERC1155
    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault, vault2, bragNFT, receipt, bragToken, marketplace, batchGrant, mock1155, owner, other };
  }

  it("DonationReceipt: Should have on-chain metadata with SVG", async function () {
    const { bragNFT, receipt, owner } = await deployContracts();

    const donationAmount = parseEther("0.1");
    const message = "Hello, on-chain world!";
    await bragNFT.write.donate([message, "media.png"], { value: donationAmount });

    const receiptTokenId = 0n;
    const metadataBase64 = await receipt.read.tokenURI([receiptTokenId]);
    assert.ok(metadataBase64.startsWith("data:application/json;base64,"));

    const metadataJson = atob(metadataBase64.split(",")[1]);
    const metadata = JSON.parse(metadataJson);

    assert.equal(metadata.name, "Donation Receipt #0");
    assert.ok(metadata.image.startsWith("data:image/svg+xml;base64,"));

    const svgBase64 = metadata.image.split(",")[1];
    const svg = atob(svgBase64);
    assert.ok(svg.includes(message));
    assert.ok(svg.includes(donationAmount.toString()));
    assert.ok(svg.includes(getAddress(owner.account.address).toLowerCase()));
  });

  it("ExhibitVault: Should handle batch ERC1155 withdrawal", async function () {
    const { vault, mock1155, owner } = await deployContracts();

    const ids = [1n, 2n, 3n];
    const amounts = [10n, 20n, 30n];
    await mock1155.write.mintBatch([owner.account.address, ids, amounts, "0x"]);
    await mock1155.write.setApprovalForAll([vault.address, true]);

    // Exhibit batch
    await mock1155.write.safeBatchTransferFrom([owner.account.address, vault.address, ids, amounts, "0x"], { account: owner.account });

    for(let i=0; i<ids.length; i++) {
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], owner.account.address]), amounts[i]);
    }

    // Withdraw batch
    await vault.write.withdraw1155Batch([mock1155.address, ids, amounts]);

    for(let i=0; i<ids.length; i++) {
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], owner.account.address]), 0n);
        assert.equal(await mock1155.read.balanceOf([owner.account.address, ids[i]]), amounts[i]);
    }
  });

  it("ExhibitVault: Should handle batch ERC1155 moving", async function () {
    const { vault, vault2, mock1155, owner } = await deployContracts();

    const ids = [1n, 2n];
    const amounts = [100n, 200n];
    await mock1155.write.mintBatch([owner.account.address, ids, amounts, "0x"]);
    await mock1155.write.setApprovalForAll([vault.address, true]);

    await mock1155.write.safeBatchTransferFrom([owner.account.address, vault.address, ids, amounts, "0x"]);

    // Move batch
    await vault.write.move1155Batch([mock1155.address, ids, amounts, vault2.address]);

    for(let i=0; i<ids.length; i++) {
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], owner.account.address]), 0n);
        assert.equal(await vault2.read.balances1155([mock1155.address, ids[i], owner.account.address]), amounts[i]);
    }
  });

  it("NFTMarketplace: Should allow updating an offer", async function () {
    const { marketplace, bragNFT, bragToken, owner, other } = await deployContracts();

    await bragNFT.write.donate(["test", "media.png"], { value: parseEther("0.1") });
    const tokenId = 0n;

    // Fund 'other' with BragToken
    await bragToken.write.transfer([other.account.address, parseEther("10")]);

    // Create offer
    const initialPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, initialPrice], { account: other.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, initialPrice], { account: other.account });

    assert.equal(await bragToken.read.balanceOf([marketplace.address]), initialPrice);

    // Update offer (increase price)
    const newPrice = parseEther("2");
    await bragToken.write.approve([marketplace.address, parseEther("1")], { account: other.account });
    await marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, newPrice], { account: other.account });

    const offer = await marketplace.read.offers([bragNFT.address, tokenId, other.account.address]);
    assert.equal(offer[0], newPrice);
    assert.equal(await bragToken.read.balanceOf([marketplace.address]), newPrice);

    // Update offer (decrease price)
    const lowerPrice = parseEther("0.5");
    const otherBalanceBefore = await bragToken.read.balanceOf([other.account.address]);
    await marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, lowerPrice], { account: other.account });

    assert.equal(await bragToken.read.balanceOf([marketplace.address]), lowerPrice);
    assert.equal(await bragToken.read.balanceOf([other.account.address]), otherBalanceBefore + parseEther("1.5"));
  });

  it("BatchGrant: Should distribute ERC721 and ERC1155", async function () {
    const { batchGrant, bragNFT, mock1155, owner, other } = await deployContracts();

    // ERC721
    await bragNFT.write.donate(["1", "uri1"], { value: parseEther("0.1") });
    await bragNFT.write.donate(["2", "uri2"], { value: parseEther("0.1") });
    const tokenIds = [0n, 1n];
    const recipients = [other.account.address, other.account.address];

    await bragNFT.write.setApprovalForAll([batchGrant.address, true]);
    await batchGrant.write.distribute721([bragNFT.address, recipients, tokenIds]);

    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(other.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(other.account.address));

    // ERC1155
    const ids = [10n, 11n];
    const amounts = [5n, 10n];
    await mock1155.write.mintBatch([owner.account.address, ids, amounts, "0x"]);
    await mock1155.write.setApprovalForAll([batchGrant.address, true]);

    await batchGrant.write.distribute1155([mock1155.address, recipients, ids, amounts]);

    assert.equal(await mock1155.read.balanceOf([other.account.address, 10n]), 5n);
    assert.equal(await mock1155.read.balanceOf([other.account.address, 11n]), 10n);
  });

  it("BragNFT: Should correctly detect audio extensions using assembly", async function () {
    const { bragNFT } = await deployContracts();

    const testURIs = [
      "a.mp3",       // Length 5
      ".wav",        // Length 4
      "abc",         // Length 3
      "a",           // Length 1
      "",            // Length 0
      "verylongfilename.mp3",
      "data:audio/mpeg;base64,...",
      "my.aac"
    ];

    for (const uri of testURIs) {
        await bragNFT.write.donate(["test", uri], { value: parseEther("0.1") });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadataJson = JSON.parse(atob(metadataBase64.split(",")[1]));

        if (uri.endsWith(".mp3") || uri.endsWith(".wav") || uri.endsWith(".aac") || uri.startsWith("data:audio/")) {
            assert.ok(metadataJson.animation_url, `Should have animation_url for ${uri}`);
        } else if (uri.length < 4 || (!uri.includes(".") && !uri.startsWith("data:audio/"))) {
            assert.ok(!metadataJson.animation_url, `Should NOT have animation_url for ${uri}`);
        }
    }
  });
});
