import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT Raw Transfer", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury] = await viem.getWalletClients();

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    // Setup: Authorize BragNFT to mint receipts
    const { keccak256, toBytes } = await import("viem");
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { bragNFT, receipt, donor, treasury };
  }

  it("Should succeed when sending raw ETH to the contract", async function () {
    const { bragNFT, receipt, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    const hash = await donor.sendTransaction({
      to: bragNFT.address,
      value: donationAmount
    });
    await publicClient.waitForTransactionReceipt({ hash });

    // 1. Check BragNFT
    const nftTokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([nftTokenId]), getAddress(donor.account.address));

    const uri = await bragNFT.read.tokenURI([nftTokenId]);
    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.equal(json.attributes[0].value, "Direct donation");

    // 2. Check DonationReceipt
    const receiptTokenId = await bragNFT.read.nftToReceipt([nftTokenId]);
    assert.equal(await receipt.read.ownerOf([receiptTokenId]), getAddress(donor.account.address));

    const receiptDetails = await receipt.read.getReceipt([receiptTokenId]);
    assert.equal(receiptDetails.donor, getAddress(donor.account.address));
    assert.equal(receiptDetails.amount, donationAmount);
    assert.equal(receiptDetails.message, "Direct donation");

    // 3. Check Treasury
    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });
});
