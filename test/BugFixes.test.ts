import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Bug Fixes & Enhancements Verification", async function () {
  const { viem } = await network.connect();

  async function deployMarketplace() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1")
    ]);

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should cap fees at 100% in NFTMarketplace and avoid underflow", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployMarketplace();

    // 1. Set protocol fee to 10% (max allowed by setProtocolFee)
    await marketplace.write.setProtocolFee([1000n]);
    await marketplace.write.setFeeRecipient([owner.account.address]);

    // 2. Set royalty fee to 95% (total fees 105%)
    await bragNFT.write.setRoyaltyFeeNumerator([9500]);

    // 3. Setup offer
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragNFT.write.donate(["High fee NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;
    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // 4. Accept offer
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);
    const ownerBalanceBefore = await bragToken.read.balanceOf([owner.account.address]);
    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    // This should NOT revert now
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);
    const ownerBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);
    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);

    // Expected:
    // Protocol Fee = 10% of 10 = 1 BRAG
    // Royalty Fee = 90% of 10 = 9 BRAG (capped because 10 + 9.5 > 10)
    // Seller Proceeds = 0
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, 0n);
    assert.equal(ownerBalanceAfter - ownerBalanceBefore, parseEther("1"));
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("9"));
  });

  it("Should allow owner to distribute tokens from BatchGrant balance", async function () {
    const [owner, recipient1, recipient2] = await viem.getWalletClients();
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const batchGrant = await viem.deployContract("BatchGrant");

    // Send tokens to contract first
    await bragToken.write.transfer([batchGrant.address, parseEther("100")]);

    const recipients = [recipient1.account.address, recipient2.account.address];
    const amounts = [parseEther("40"), parseEther("60")];

    // Non-owner should fail
    await assert.rejects(
        batchGrant.write.distributeFromBalance([bragToken.address, recipients, amounts], { account: recipient1.account }),
        /OwnableUnauthorizedAccount/
    );

    // Owner should succeed
    await batchGrant.write.distributeFromBalance([bragToken.address, recipients, amounts]);

    assert.equal(await bragToken.read.balanceOf([recipient1.account.address]), parseEther("40"));
    assert.equal(await bragToken.read.balanceOf([recipient2.account.address]), parseEther("60"));
    assert.equal(await bragToken.read.balanceOf([batchGrant.address]), 0n);
  });

  it("Should ensure ExhibitVault expiry only increases for ERC1155", async function () {
    const [owner, user] = await viem.getWalletClients();
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155");

    const tokenId = 1n;
    await mock1155.write.mint([user.account.address, tokenId, 100n]);
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });

    // 1. Exhibit with 1 hour duration
    const duration1 = 3600n;
    const data1 = encodeAbiParameters(parseAbiParameters('uint256'), [duration1]);
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 10n, data1], { account: user.account });
    const expiry1 = await vault.read.expiry1155([mock1155.address, tokenId, user.account.address]);
    assert.ok(expiry1 > 0n);

    // 2. Exhibit again with SHORTER duration (should not decrease expiry)
    const duration2 = 60n;
    const data2 = encodeAbiParameters(parseAbiParameters('uint256'), [duration2]);
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 10n, data2], { account: user.account });
    const expiry2 = await vault.read.expiry1155([mock1155.address, tokenId, user.account.address]);
    assert.equal(expiry2, expiry1, "Expiry should not have decreased");

    // 3. Exhibit again with LONGER duration (should increase expiry)
    const duration3 = 7200n;
    const data3 = encodeAbiParameters(parseAbiParameters('uint256'), [duration3]);
    await mock1155.write.safeTransferFrom([user.account.address, vault.address, tokenId, 10n, data3], { account: user.account });
    const expiry3 = await vault.read.expiry1155([mock1155.address, tokenId, user.account.address]);
    assert.ok(expiry3 > expiry1, "Expiry should have increased");
  });
});
