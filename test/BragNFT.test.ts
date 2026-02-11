import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT and DonationReceipt", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury, recipient] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    // Verify vault in registry
    await registry.write.verifyVault([vault.address, 3, "Art Gallery", "Main gallery"]);

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    // Setup: Authorize BragNFT to mint receipts
    await receipt.write.setMinter([bragNFT.address, true]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault, bragNFT, receipt, mock1155, owner, donor, treasury, recipient };
  }

  it("Should mint both BragNFT and DonationReceipt on donation", async function () {
    const { bragNFT, receipt, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");
    const message = "Generous donor";
    const tokenURI = "https://example.com/nft.json";

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.donate([message, tokenURI], {
        account: donor.account,
        value: donationAmount
    });

    // 1. Check BragNFT
    const nftTokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([nftTokenId]), getAddress(donor.account.address));
    assert.equal(await bragNFT.read.tokenURI([nftTokenId]), tokenURI);

    // 2. Check DonationReceipt
    const receiptTokenId = await bragNFT.read.nftToReceipt([nftTokenId]);
    assert.equal(await receipt.read.ownerOf([receiptTokenId]), getAddress(donor.account.address));

    const receiptDetails = await receipt.read.getReceipt([receiptTokenId]);
    assert.equal(receiptDetails.donor, getAddress(donor.account.address));
    assert.equal(receiptDetails.amount, donationAmount);
    assert.equal(receiptDetails.message, message);

    // 3. Check Treasury
    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });

  it("Should allow BragNFT to be transferred (not soulbound)", async function () {
    const { bragNFT, donor, recipient } = await deployContracts();
    await bragNFT.write.donate(["Transferable NFT", "ipfs://uri1"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    await bragNFT.write.transferFrom([donor.account.address, recipient.account.address, tokenId], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(recipient.account.address));
  });

  it("Should NOT allow DonationReceipt to be transferred (soulbound)", async function () {
    const { bragNFT, receipt, donor, recipient } = await deployContracts();
    await bragNFT.write.donate(["Soulbound receipt", "ipfs://uri2"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const receiptId = await bragNFT.read.nftToReceipt([0n]);

    await assert.rejects(
        receipt.write.transferFrom([donor.account.address, recipient.account.address, receiptId], { account: donor.account }),
        /DonationReceipt: Token is soulbound and cannot be transferred/
    );
  });

  it("Should allow BragNFT to be exhibited", async function () {
    const { bragNFT, vault, donor } = await deployContracts();

    await bragNFT.write.donate(["Exhibition piece", "ipfs://uri3"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, tokenId], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault.address));
    assert.equal(await vault.read.owner721([bragNFT.address, tokenId]), getAddress(donor.account.address));
  });

  it("Should allow withdrawal of BragNFT from exhibit", async function () {
    const { bragNFT, vault, donor } = await deployContracts();

    await bragNFT.write.donate(["Withdrawal test", "ipfs://uri4"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, tokenId], { account: donor.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault.address));

    await vault.write.withdraw721([bragNFT.address, tokenId], { account: donor.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));
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

  it("Should allow minting with an empty tokenURI", async function () {
    const { bragNFT, donor } = await deployContracts();

    await bragNFT.write.donate(["No URI here", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));

    // ERC721URIStorage returns empty string if not set and no baseURI
    assert.equal(await bragNFT.read.tokenURI([tokenId]), "");
  });

  it("Should support on-chain media and metadata", async function () {
    const { bragNFT, donor } = await deployContracts();
    const message = "On-chain test";
    const media = '<svg>on-chain</svg>';

    // Use the 3-argument overload: donate(string, string, bool)
    // In viem with overloads, we can specify the function name with types if needed
    // But usually viem handles it based on argument length if possible
    await bragNFT.write.donate([message, media, true], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    const uri = await bragNFT.read.tokenURI([tokenId]);

    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");

    // Decode and check content
    const base64Content = uri.split(",")[1];
    const json = JSON.parse(Buffer.from(base64Content, "base64").toString());

    assert.equal(json.name, `BragNFT #${tokenId}`);
    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be an on-chain SVG data URI");
  });

  it("Should generate on-chain SVG receipt in DonationReceipt", async function () {
    const { bragNFT, receipt, donor } = await deployContracts();

    await bragNFT.write.donate(["SVG Receipt Test", "ipfs://some-uri"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const receiptId = await bragNFT.read.nftToReceipt([0n]);
    const uri = await receipt.read.tokenURI([receiptId]);

    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");

    const base64Content = uri.split(",")[1];
    const json = JSON.parse(Buffer.from(base64Content, "base64").toString());

    assert.equal(json.name, `Donation Receipt #${receiptId}`);
    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be an SVG data URI");

    const svgBase64 = json.image.split(",")[1];
    const svg = Buffer.from(svgBase64, "base64").toString();
    assert.ok(svg.includes("Donation Receipt"), "SVG should contain title");
    assert.ok(svg.includes(donor.account.address.toLowerCase()), "SVG should contain donor address");
  });
});
