import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT and DonationReceipt", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury, recipient] = await viem.getWalletClients();

    const exhibition = await viem.deployContract("Exhibition", [owner.account.address]);
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

    return { exhibition, bragNFT, receipt, mock1155, owner, donor, treasury, recipient };
  }

  it("Should mint both BragNFT and DonationReceipt on donation", async function () {
    const { bragNFT, receipt, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");
    const message = "Generous donor";

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.donate([message], {
        account: donor.account,
        value: donationAmount
    });

    // 1. Check BragNFT
    const nftTokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([nftTokenId]), getAddress(donor.account.address));

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
    await bragNFT.write.donate(["Transferable NFT"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    await bragNFT.write.transferFrom([donor.account.address, recipient.account.address, tokenId], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(recipient.account.address));
  });

  it("Should NOT allow DonationReceipt to be transferred (soulbound)", async function () {
    const { bragNFT, receipt, donor, recipient } = await deployContracts();
    await bragNFT.write.donate(["Soulbound receipt"], {
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
    const { bragNFT, exhibition, donor } = await deployContracts();

    await bragNFT.write.donate(["Exhibition piece"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.approve([exhibition.address, tokenId], { account: donor.account });
    await exhibition.write.exhibit721([bragNFT.address, tokenId, 3600n], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(exhibition.address));
  });

  it("Should allow reclamation of BragNFT after exhibition", async function () {
    const { bragNFT, exhibition, donor } = await deployContracts();
    const publicClient = await viem.getPublicClient();

    await bragNFT.write.donate(["Timed exhibition"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.approve([exhibition.address, tokenId], { account: donor.account });
    await exhibition.write.exhibit721([bragNFT.address, tokenId, 3600n], { account: donor.account });

    await publicClient.request({ method: "evm_increaseTime" as any, params: [4000] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    await exhibition.write.reclaim([0n], { account: donor.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));
  });
});
