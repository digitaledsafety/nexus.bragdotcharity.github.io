import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT and Exhibition", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury, recipient, otherExhibition] = await viem.getWalletClients();

    const exhibition = await viem.deployContract("Exhibition", [owner.account.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { exhibition, bragNFT, mock1155, owner, donor, treasury, recipient, otherExhibition };
  }

  it("Should allow donations and store receipts", async function () {
    const { bragNFT, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");
    const message = "Saving the world!";

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.donate([message], {
        account: donor.account,
        value: donationAmount
    });

    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));

    const receipt = await bragNFT.read.getDonation([tokenId]);
    assert.equal(receipt.donor, getAddress(donor.account.address));
    assert.equal(receipt.amount, donationAmount);
    assert.equal(receipt.message, message);

    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });

  it("Should be Soulbound (restricted transfer to random address)", async function () {
    const { bragNFT, donor, recipient } = await deployContracts();
    await bragNFT.write.donate(["Bragging rights"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    await assert.rejects(
        bragNFT.write.transferFrom([donor.account.address, recipient.account.address, tokenId], { account: donor.account }),
        /BragNFT: Soulbound token cannot be transferred/
    );
  });

  it("Should allow exhibition loan ONLY if authorized", async function () {
    const { bragNFT, exhibition, otherExhibition, donor } = await deployContracts();

    await bragNFT.write.donate(["Exhibition piece"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    // 1. Try to exhibit in unauthorized exhibition (should fail)
    await bragNFT.write.approve([otherExhibition.account.address, tokenId], { account: donor.account });
    await assert.rejects(
        bragNFT.write.transferFrom([donor.account.address, otherExhibition.account.address, tokenId], { account: donor.account }),
        /BragNFT: Soulbound token cannot be transferred/
    );

    // 2. Authorize Exhibition in BragNFT
    await bragNFT.write.setAuthorizedExhibition([exhibition.address, true]);

    // 3. Approve and Exhibit in authorized exhibition (should succeed)
    await bragNFT.write.approve([exhibition.address, tokenId], { account: donor.account });
    await exhibition.write.exhibit721([bragNFT.address, tokenId, 3600n], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(exhibition.address));
  });

  it("Should allow reclamation after expiry", async function () {
    const { bragNFT, exhibition, donor } = await deployContracts();
    const publicClient = await viem.getPublicClient();

    await bragNFT.write.setAuthorizedExhibition([exhibition.address, true]);
    await bragNFT.write.donate(["Timed exhibition"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.approve([exhibition.address, tokenId], { account: donor.account });
    const duration = 3600n;
    await exhibition.write.exhibit721([bragNFT.address, tokenId, duration], { account: donor.account });

    const exhibitionId = 0n;

    // Fast forward time
    await publicClient.request({ method: "evm_increaseTime" as any, params: [4000] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Reclaim
    await exhibition.write.reclaim([exhibitionId], { account: donor.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));
  });

  it("Should allow admin to reclaim (safety hatch)", async function () {
    const { bragNFT, exhibition, donor, owner } = await deployContracts();
    const publicClient = await viem.getPublicClient();

    await bragNFT.write.setAuthorizedExhibition([exhibition.address, true]);
    await bragNFT.write.donate(["Admin safety test"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.approve([exhibition.address, tokenId], { account: donor.account });
    await exhibition.write.exhibit721([bragNFT.address, tokenId, 3600n], { account: donor.account });

    await publicClient.request({ method: "evm_increaseTime" as any, params: [4000] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Admin (owner) reclaims
    await exhibition.write.reclaim([0n], { account: owner.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));
  });

  it("Should support ERC1155 exhibition", async function () {
    const { exhibition, mock1155, donor } = await deployContracts();
    const publicClient = await viem.getPublicClient();

    const tokenId = 42n;
    const amount = 100n;
    await mock1155.write.mint([donor.account.address, tokenId, amount]);

    await mock1155.write.setApprovalForAll([exhibition.address, true], { account: donor.account });

    await exhibition.write.exhibit1155([mock1155.address, tokenId, amount, 3600n], { account: donor.account });

    assert.equal(await mock1155.read.balanceOf([exhibition.address, tokenId]), amount);
    assert.equal(await mock1155.read.balanceOf([donor.account.address, tokenId]), 0n);

    await publicClient.request({ method: "evm_increaseTime" as any, params: [4000] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    await exhibition.write.reclaim([0n], { account: donor.account });
    assert.equal(await mock1155.read.balanceOf([donor.account.address, tokenId]), amount);
  });
});
