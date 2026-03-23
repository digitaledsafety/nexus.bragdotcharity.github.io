import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, decodeEventLog, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Enhancements and Fixes Verification", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, other] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.address,
        parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const mockERC20 = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [mockERC20.address]);

    const mockERC1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault, treasury, bragNFT, receipt, marketplace, mockERC20, mockERC1155, owner, other };
  }

  it("BragNFT: Should escape special characters in metadata", async function () {
    const { bragNFT, owner } = await deployContracts();
    const maliciousMessage = 'Donation" , "image": "malicious"';
    const maliciousMedia = 'https://example.com/art" , "animation_url": "malicious"';

    await bragNFT.write.donate([maliciousMessage, maliciousMedia], { value: parseEther("0.1") });
    const tokenId = 0n;
    const uri = await bragNFT.read.tokenURI([tokenId]);

    const base64Json = uri.split(",")[1];
    const jsonStr = Buffer.from(base64Json, 'base64').toString();
    const metadata = JSON.parse(jsonStr);

    assert.equal(metadata.attributes[0].value, maliciousMessage);
    assert.equal(metadata.image, maliciousMedia);
    assert.notEqual(metadata.image, "malicious");
  });

  it("ExhibitVault: Should support minting directly to vault (ERC721)", async function () {
    const { bragNFT, vault, owner } = await deployContracts();

    await bragNFT.write.donateTo([vault.address, "direct to vault", ""], { value: parseEther("0.1") });
    const tokenId = 0n;

    const recordedOwner = await vault.read.owner721([bragNFT.address, tokenId]);
    assert.equal(recordedOwner, getAddress(owner.account.address));

    await vault.write.withdraw721([bragNFT.address, tokenId]);
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(owner.account.address));
  });

  it("ExhibitVault: Should support batch operations (ERC1155)", async function () {
    const { mockERC1155, vault, owner, registry } = await deployContracts();

    const ids = [1n, 2n];
    const amounts = [10n, 20n];

    await mockERC1155.write.mintBatch([owner.account.address, ids, amounts, "0x"]);
    await mockERC1155.write.setApprovalForAll([vault.address, true]);

    // Deposit batch - using single transfers to avoid duration issues
    await mockERC1155.write.safeTransferFrom([owner.account.address, vault.address, 1n, 10n, "0x"]);
    await mockERC1155.write.safeTransferFrom([owner.account.address, vault.address, 2n, 20n, "0x"]);

    assert.equal(await vault.read.balances1155([mockERC1155.address, 1n, owner.account.address]), 10n);
    assert.equal(await vault.read.balances1155([mockERC1155.address, 2n, owner.account.address]), 20n);

    // Move batch to another vault
    const vault2 = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Secondary vault"]);

    // Ensure both vaults are verified so they can move tokens with custom data (owner address)
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "Primary vault"]);

    await vault.write.moveBatch1155([mockERC1155.address, ids, amounts, vault2.address]);

    assert.equal(await vault.read.balances1155([mockERC1155.address, 1n, owner.account.address]), 0n);
    assert.equal(await vault2.read.balances1155([mockERC1155.address, 1n, owner.account.address]), 10n);

    // Withdraw batch from vault2
    await vault2.write.withdrawBatch1155([mockERC1155.address, ids, amounts]);
    assert.equal(await mockERC1155.read.balanceOf([owner.account.address, 1n]), 10n);
    assert.equal(await mockERC1155.read.balanceOf([owner.account.address, 2n]), 20n);
  });

  it("NFTMarketplace: Should emit updated OfferAccepted event and handle zero proceeds", async function () {
    const { bragNFT, marketplace, mockERC20, owner, other } = await deployContracts();

    await bragNFT.write.donate(["for sale", ""], { value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.setRoyaltyFeeNumerator([10000]);

    const price = parseEther("1");
    await mockERC20.write.transfer([other.account.address, price]);
    await mockERC20.write.approve([marketplace.address, price], { account: other.account });

    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price], { account: other.account });

    await bragNFT.write.approve([marketplace.address, tokenId]);

    const txHash = await marketplace.write.acceptOffer([bragNFT.address, tokenId, other.account.address]);
    const publicClient = await viem.getPublicClient();
    const receipt = await publicClient.getTransactionReceipt({ hash: txHash });

    const offerAcceptedLog = receipt.logs.map(log => {
      try {
        return decodeEventLog({
          abi: marketplace.abi,
          data: log.data,
          topics: log.topics,
        });
      } catch (e) {
        return null;
      }
    }).find(l => l && l.eventName === 'OfferAccepted');

    assert.ok(offerAcceptedLog, "OfferAccepted event not found");
    assert.equal(getAddress(offerAcceptedLog.args.buyer), getAddress(other.account.address));
    assert.equal(getAddress(offerAcceptedLog.args.seller), getAddress(owner.account.address));
  });
});
