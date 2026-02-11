import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Smallest Denomination Test", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury] = await viem.getWalletClients();

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        1n // 1 wei
    ]);

    await receipt.write.setMinter([bragNFT.address, true]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const marketplace = await viem.deployContract("NFTMarketplace", []);

    return { bragNFT, receipt, marketplace, owner, donor, treasury };
  }

  it("Should allow 1 wei donation", async function () {
    const { bragNFT, donor } = await deployContracts();
    const donationAmount = 1n; // 1 wei

    await bragNFT.write.donate(["1 wei donation", "ipfs://uri"], {
        account: donor.account,
        value: donationAmount
    });

    const nftTokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([nftTokenId]), getAddress(donor.account.address));
  });

  it("Should allow 1 wei offer in marketplace", async function () {
    const { bragNFT, marketplace, donor, owner } = await deployContracts();

    // Mint an NFT first
    await bragNFT.write.donate(["Mint for offer", "ipfs://uri"], {
        account: owner.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await marketplace.write.createOffer([bragNFT.address, tokenId], {
        account: donor.account,
        value: 1n // 1 wei
    });

    const offer = await marketplace.read.offers([bragNFT.address, tokenId]);
    assert.equal(offer[1], 1n); // price
  });
});
