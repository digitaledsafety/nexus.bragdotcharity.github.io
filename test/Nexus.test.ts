import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Nexus and DonationReceipt", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury, recipient] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);

    // Verify vault in registry
    await registry.write.verifyVault([vault.address, 3, "Art Gallery", "Main gallery"]);

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const nexus = await viem.deployContract("Nexus", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    // Setup: Authorize Nexus to mint receipts
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, nexus.address]);
    await nexus.write.setReceiptContract([receipt.address]);

    // Optional: Setup NexusToken for rewards testing
    const nexusToken = await viem.deployContract("NexusToken", [owner.account.address, 0n, parseEther("1000000")]);
    await nexusToken.write.grantRole([MINTER_ROLE, nexus.address]);
    await nexus.write.setNexusToken([nexusToken.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault, nexus, receipt, nexusToken, mock1155, owner, donor, treasury, recipient };
  }

  it("Should mint Nexus, DonationReceipt, and NexusToken on donation", async function () {
    const { nexus, receipt, nexusToken, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");
    const message = "Generous donor";
    const tokenURI = "https://example.com/nft.json";

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await nexus.write.donate([message, tokenURI], {
        account: donor.account,
        value: donationAmount
    });

    // 1. Check Nexus
    const nftTokenId = 0n;
    assert.equal(await nexus.read.ownerOf([nftTokenId]), getAddress(donor.account.address));

    const uri = await nexus.read.tokenURI([nftTokenId]);
    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.equal(json.image, tokenURI);
    assert.equal(json.attributes[0].value, message);

    // 2. Check DonationReceipt
    const receiptTokenId = await nexus.read.nftToReceipt([nftTokenId]);
    assert.equal(await receipt.read.ownerOf([receiptTokenId]), getAddress(donor.account.address));

    // 2.5 Check NexusToken reward
    const balance = await nexusToken.read.balanceOf([donor.account.address]);
    assert.equal(balance, donationAmount);

    const receiptDetails = await receipt.read.getReceipt([receiptTokenId]);
    assert.equal(receiptDetails.donor, getAddress(donor.account.address));
    assert.equal(receiptDetails.amount, donationAmount);
    assert.equal(receiptDetails.message, message);

    // 3. Check Treasury
    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });

  it("Should allow Nexus to be transferred (not soulbound)", async function () {
    const { nexus, donor, recipient } = await deployContracts();
    await nexus.write.donate(["Transferable NFT", "ipfs://uri1"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    await nexus.write.transferFrom([donor.account.address, recipient.account.address, tokenId], { account: donor.account });

    assert.equal(await nexus.read.ownerOf([tokenId]), getAddress(recipient.account.address));
  });

  it("Should NOT allow DonationReceipt to be transferred (soulbound)", async function () {
    const { nexus, receipt, donor, recipient } = await deployContracts();
    await nexus.write.donate(["Soulbound receipt", "ipfs://uri2"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const receiptId = await nexus.read.nftToReceipt([0n]);

    await assert.rejects(
        receipt.write.transferFrom([donor.account.address, recipient.account.address, receiptId], { account: donor.account }),
        /DonationReceipt: Token is soulbound and cannot be transferred/
    );
  });

  it("Should allow Nexus to be exhibited", async function () {
    const { nexus, vault, donor } = await deployContracts();

    await nexus.write.donate(["Exhibition piece", "ipfs://uri3"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await nexus.write.safeTransferFrom([donor.account.address, vault.address, tokenId], { account: donor.account });

    assert.equal(await nexus.read.ownerOf([tokenId]), getAddress(vault.address));
    assert.equal(await vault.read.owner721([nexus.address, tokenId]), getAddress(donor.account.address));
  });

  it("Should allow withdrawal of Nexus from exhibit", async function () {
    const { nexus, vault, donor } = await deployContracts();

    await nexus.write.donate(["Withdrawal test", "ipfs://uri4"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await nexus.write.safeTransferFrom([donor.account.address, vault.address, tokenId], { account: donor.account });
    assert.equal(await nexus.read.ownerOf([tokenId]), getAddress(vault.address));

    await vault.write.withdraw721([nexus.address, tokenId], { account: donor.account });
    assert.equal(await nexus.read.ownerOf([tokenId]), getAddress(donor.account.address));
  });

  it("Should support ERC1155 exhibition and return to owner", async function () {
    const { vault, mock1155, donor } = await deployContracts();

    const tokenId = 42n;
    const amount = 100n;
    await mock1155.write.mint([donor.account.address, tokenId, amount], { account: (await viem.getWalletClients())[0].account });

    await mock1155.write.safeTransferFrom([donor.account.address, vault.address, tokenId, amount, "0x"], { account: donor.account });

    assert.equal(await mock1155.read.balanceOf([vault.address, tokenId]), amount);
    assert.equal(await vault.read.balances1155([mock1155.address, tokenId, donor.account.address]), amount);

    await vault.write.withdraw1155([mock1155.address, tokenId, amount], { account: donor.account });
    assert.equal(await mock1155.read.balanceOf([donor.account.address, tokenId]), amount);
  });

  it("Should allow minting with an empty tokenURI and use SVG fallback", async function () {
    const { nexus, donor } = await deployContracts();
    const message = "No URI here";

    await nexus.write.donate([message, ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    assert.equal(await nexus.read.ownerOf([tokenId]), getAddress(donor.account.address));

    const uri = await nexus.read.tokenURI([tokenId]);
    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be an SVG data URI");
    assert.equal(json.attributes[0].value, message);

    // Check SVG content for the message
    const svgBase64 = json.image.split(",")[1];
    const svg = Buffer.from(svgBase64, "base64").toString();
    assert.ok(svg.includes(message), "SVG should include the donation message");
  });

  it("Should support on-chain media and metadata including message", async function () {
    const { nexus, donor } = await deployContracts();
    const message = "On-chain test";
    const media = 'ipfs://on-chain-stored-uri';

    await nexus.write.donate([message, media, true], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    const uri = await nexus.read.tokenURI([tokenId]);

    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");

    // Decode and check content
    const base64Content = uri.split(",")[1];
    const json = JSON.parse(Buffer.from(base64Content, "base64").toString());

    assert.equal(json.name, `Nexus #${tokenId}`);
    assert.equal(json.image, media);
    assert.equal(json.attributes[0].value, message);
    assert.ok(json.description.includes(message));
  });

  it("Should support audio NFTs with animation_url", async function () {
    const { nexus, donor } = await deployContracts();
    const message = "Audio NFT Test";
    const audioMedia = 'data:audio/mpeg;base64,SGVsbG8='; // "Hello" in base64

    await nexus.write.donate([message, audioMedia, true], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    const uri = await nexus.read.tokenURI([tokenId]);

    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");

    const base64Content = uri.split(",")[1];
    const json = JSON.parse(Buffer.from(base64Content, "base64").toString());

    assert.equal(json.animation_url, audioMedia);
    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be an SVG fallback");
    assert.equal(json.attributes[0].value, message);
  });

  it("Should track supply correctly", async function () {
    const { nexus, donor, owner } = await deployContracts();

    const initialTotalSupply = await nexus.read.totalSupply();
    assert.equal(initialTotalSupply, 0n);

    const initialMaxSupply = await nexus.read.maxSupply();
    assert.equal(initialMaxSupply, 10000n);

    await nexus.write.donate(["Donation 1", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    assert.equal(await nexus.read.totalSupply(), 1n);

    // Test setMaxSupply
    await nexus.write.setMaxSupply([2n], { account: owner.account });
    assert.equal(await nexus.read.maxSupply(), 2n);

    await nexus.write.donate(["Donation 2", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    assert.equal(await nexus.read.totalSupply(), 2n);

    // Should fail on third donation
    await assert.rejects(
        nexus.write.donate(["Donation 3", ""], {
            account: donor.account,
            value: parseEther("0.1")
        }),
        /Max supply reached/
    );
  });
});
