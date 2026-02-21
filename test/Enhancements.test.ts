import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Contract Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("10000")]);
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01")]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [3600n, bragToken.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const batchGrant = await viem.deployContract("BatchGrant", []);

    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { owner, other, bragToken, treasury, bragNFT, receipt, marketplace, registry, vault, batchGrant };
  }

  it("BragNFT: Should emit events on administrative changes", async function () {
    const { bragNFT, other } = await deployAll();
    const publicClient = await viem.getPublicClient();

    // Test events
    await bragNFT.write.setMinimumDonation([parseEther("0.02")]);
    const logs1 = await publicClient.getContractEvents({ address: bragNFT.address, abi: bragNFT.abi, eventName: 'MinimumDonationUpdated' });
    assert.equal(logs1.length, 1);
    assert.equal(logs1[0].args.newMinimumDonation, parseEther("0.02"));

    await bragNFT.write.setTreasury([other.account.address]);
    const logs2 = await publicClient.getContractEvents({ address: bragNFT.address, abi: bragNFT.abi, eventName: 'TreasuryUpdated' });
    assert.equal(logs2.length, 1);
    assert.equal(logs2[0].args.newTreasury, getAddress(other.account.address));
  });

  it("BragNFT & DonationReceipt: Should escape special characters in metadata", async function () {
    const { bragNFT, receipt, owner } = await deployAll();

    const maliciousMessage = 'Message with "quotes", <tags>, & ampersand, and \n newline';
    await bragNFT.write.donate([maliciousMessage, ""], { value: parseEther("0.01") });

    const tokenURI = await bragNFT.read.tokenURI([0n]);
    assert.ok(tokenURI.startsWith("data:application/json;base64,"));

    const base64 = tokenURI.split(",")[1];
    const json = Buffer.from(base64, "base64").toString();
    const metadata = JSON.parse(json);

    assert.equal(metadata.attributes[0].value, maliciousMessage);
    assert.ok(metadata.image.includes("data:image/svg+xml;base64,"));

    // Check DonationReceipt metadata
    const receiptURI = await receipt.read.tokenURI([0n]);
    const receiptJson = Buffer.from(receiptURI.split(",")[1], "base64").toString();
    const receiptMetadata = JSON.parse(receiptJson);
    assert.equal(receiptMetadata.attributes[3].value, maliciousMessage);
  });

  it("NFTMarketplace: Should support multiple offers and acceptance", async function () {
    const { marketplace, bragNFT, bragToken, owner, other } = await deployAll();
    const [_, __, buyer1, buyer2] = await viem.getWalletClients();

    // Mint NFT
    await bragNFT.write.donate(["For sale", ""], { value: parseEther("0.01"), account: owner.account });
    const tokenId = 0n;

    // Approve marketplace for buyers
    await bragToken.write.transfer([buyer1.account.address, parseEther("100")], { account: owner.account });
    await bragToken.write.transfer([buyer2.account.address, parseEther("100")], { account: owner.account });

    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer1.account });
    await bragToken.write.approve([marketplace.address, parseEther("20")], { account: buyer2.account });

    // Create two offers
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: buyer1.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("20")], { account: buyer2.account });

    // Verify both offers exist
    const offer1 = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]) as any;
    const offer2 = await marketplace.read.offers([bragNFT.address, tokenId, buyer2.account.address]) as any;

    // Check if it's an array or object
    const price1 = offer1.price !== undefined ? offer1.price : offer1[1];
    const price2 = offer2.price !== undefined ? offer2.price : offer2[1];

    assert.equal(price1, parseEther("10"));
    assert.equal(price2, parseEther("20"));

    // Accept second offer
    await bragNFT.write.approve([marketplace.address, tokenId], { account: owner.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer2.account.address], { account: owner.account });

    // Verify owner changed and offer deleted
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer2.account.address));
    const offer2After = await marketplace.read.offers([bragNFT.address, tokenId, buyer2.account.address]);
    const buyer2After = offer2After.buyer !== undefined ? offer2After.buyer : offer2After[0];
    assert.equal(buyer2After, zeroAddress);

    // First offer should still exist (but might not be fillable if owner changed, which is correct)
    const offer1After = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]) as any;
    const buyer1After = offer1After.buyer !== undefined ? offer1After.buyer : offer1After[0];
    assert.equal(buyer1After, getAddress(buyer1.account.address));
  });

  it("BatchGrant: Should emit Distributed event", async function () {
    const { batchGrant, bragToken, owner, other } = await deployAll();
    const publicClient = await viem.getPublicClient();

    await bragToken.write.approve([batchGrant.address, parseEther("10")]);
    await batchGrant.write.distribute([bragToken.address, [other.account.address], [parseEther("10")]]);

    const logs = await publicClient.getContractEvents({ address: batchGrant.address, abi: batchGrant.abi, eventName: 'Distributed' });
    assert.equal(logs.length, 1);
    assert.equal(logs[0].args.totalAmount, parseEther("10"));
  });

});
