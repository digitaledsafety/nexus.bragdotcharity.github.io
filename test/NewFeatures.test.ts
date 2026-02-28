import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("New Features Verification", async function () {
  const { viem } = await network.connect();

  it("BatchGrant: distributeETH", async function () {
    const [owner, recipient1, recipient2] = await viem.getWalletClients();
    const batchGrant = await viem.deployContract("BatchGrant");

    const amount1 = parseEther("1");
    const amount2 = parseEther("2");
    const total = amount1 + amount2;

    const publicClient = await viem.getPublicClient();
    const bal1Before = await publicClient.getBalance({ address: recipient1.account.address });
    const bal2Before = await publicClient.getBalance({ address: recipient2.account.address });

    await batchGrant.write.distributeETH(
      [[recipient1.account.address, recipient2.account.address], [amount1, amount2]],
      { value: total + parseEther("0.5") } // Send extra to test refund
    );

    const bal1After = await publicClient.getBalance({ address: recipient1.account.address });
    const bal2After = await publicClient.getBalance({ address: recipient2.account.address });

    assert.equal(bal1After - bal1Before, amount1);
    assert.equal(bal2After - bal2Before, amount2);
  });

  it("NFTMarketplace: Fees", async function () {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);
    const mockNFT = await viem.deployContract("Nexus", [
        owner.account.address,
        owner.account.address,
        parseEther("0.1"),
        100n,
        "test"
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, mockNFT.address]);
    await mockNFT.write.setReceiptContract([receipt.address]);

    // Set 5% fee
    await marketplace.write.setFees([500n, treasury.account.address]);

    // Setup: mint NFT to seller, give tokens to buyer
    await mockNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Buyer makes offer
    const price = parseEther("10");
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, price], { account: buyer.account });

    // Seller accepts
    await mockNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([mockNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // 5% of 10 is 0.5
    const expectedFee = parseEther("0.5");
    const expectedSellerProceeds = parseEther("9.5");

    assert.equal(await bragToken.read.balanceOf([treasury.account.address]), expectedFee);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), expectedSellerProceeds);
  });
});
