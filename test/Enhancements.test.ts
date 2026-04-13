import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Enhancements (Royalties & SVG Escaping)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Marketplace (now with 1 arg)
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT
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

  it("Should correctly distribute royalties to the treasury", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set royalty to 10% for testing
    await bragNFT.write.setRoyaltyFeeNumerator([1000], { account: owner.account });

    // Buyer makes an offer
    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyRecipient, getAddress(treasury.account.address));
    assert.equal(royaltyAmount, parseEther("1")); // 10% of 10

    // Seller accepts
    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify distribution
    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("1"));
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("9"));
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });

  it("Should correctly escape special characters in SVG", async function () {
    const { bragNFT, seller } = await deployAll();

    const maliciousMessage = '<script>alert("XSS")</script> & "quotes"';
    await bragNFT.write.donate([maliciousMessage, ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

    // Verify SVG is escaped
    assert.ok(!svg.includes("<script>"), "SVG should not contain raw <script> tag");
    assert.ok(svg.includes("&lt;script&gt;"), "SVG should contain escaped script tag");
    assert.ok(svg.includes("&amp;"), "SVG should contain escaped ampersand");
    assert.ok(svg.includes("&quot;"), "SVG should contain escaped quotes");

    // Verify JSON description is also handled (it uses _escapeJSON which was already there but good to check)
    assert.ok(json.description.includes(maliciousMessage), "JSON description should contain original message (escaped in JSON string)");
  });

  it("Should allow changing royalty recipient and verify it works in marketplace", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();
    const [newRoyaltyRecipient] = await viem.getWalletClients(); // Using the first wallet client for simplicity

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["New Recipient NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set royalty to 10%
    await bragNFT.write.setRoyaltyFeeNumerator([1000], { account: owner.account });
    // Change royalty recipient
    await bragNFT.write.setRoyaltyRecipient([newRoyaltyRecipient.account.address], { account: owner.account });

    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info returns new recipient
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyRecipient, getAddress(newRoyaltyRecipient.account.address));

    // Seller accepts
    const balanceBefore = await bragToken.read.balanceOf([newRoyaltyRecipient.account.address]);
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const balanceAfter = await bragToken.read.balanceOf([newRoyaltyRecipient.account.address]);
    assert.equal(balanceAfter - balanceBefore, parseEther("1"));
  });

  it("Should enforce minOfferPrice in NFTMarketplace", async function () {
    const { marketplace, bragNFT, bragToken, buyer, owner } = await deployAll();

    const minPrice = parseEther("5");
    await marketplace.write.setMinOfferPrice([minPrice], { account: owner.account });
    assert.equal(await marketplace.read.minOfferPrice(), minPrice);

    const tokenId = 0n;
    const lowPrice = parseEther("4");
    await bragToken.write.approve([marketplace.address, lowPrice], { account: buyer.account });

    await assert.rejects(
      marketplace.write.createOffer([bragNFT.address, tokenId, 1n, lowPrice], { account: buyer.account }),
      /Offer price below minimum/
    );

    // Should also work for updateOffer
    const validPrice = parseEther("6");
    await bragToken.write.transfer([buyer.account.address, validPrice], { account: owner.account });
    await bragToken.write.approve([marketplace.address, validPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, validPrice], { account: buyer.account });

    const lowUpdatePrice = parseEther("3");
    await assert.rejects(
      marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, lowUpdatePrice], { account: buyer.account }),
      /New price below minimum/
    );
  });

  it("Should allow Treasury to update its own owners via multi-sig proposal", async function () {
    const [owner1, owner2, owner3, newOwner] = await viem.getWalletClients();
    const entryPoint = await viem.deployContract("MockEntryPoint");

    // Deploy Treasury with 2 owners and threshold 2
    const treasury = await viem.deployContract("Treasury", [
      [owner1.account.address, owner2.account.address],
      2n,
      entryPoint.address
    ]);

    // Propose adding a new owner
    // addOwner(address) signature: 0x7065cb48
    const addOwnerData = `0x7065cb48${newOwner.account.address.slice(2).padStart(64, '0')}`;

    await treasury.write.propose([treasury.address, 0n, addOwnerData, 0n], { account: owner1.account });
    const proposalId = 0n;

    // Approve by second owner
    await treasury.write.approve([proposalId, 0n], { account: owner2.account });

    // Execute
    await treasury.write.executeProposal([proposalId], { account: owner1.account });

    // Verify new owner added
    assert.ok(await treasury.read.isOwner([newOwner.account.address]));
    const owners = await treasury.read.getOwners();
    assert.equal(owners.length, 3);

    // Propose changing threshold to 3
    // changeThreshold(uint256) signature: 0x694e80c3
    const changeThresholdData = `0x694e80c3${(3n).toString(16).padStart(64, '0')}`;

    await treasury.write.propose([treasury.address, 0n, changeThresholdData, 0n], { account: owner1.account });
    const proposalId2 = 1n;

    await treasury.write.approve([proposalId2, 0n], { account: owner2.account });
    await treasury.write.executeProposal([proposalId2], { account: owner1.account });

    assert.equal(await treasury.read.threshold(), 3n);
  });

  it("Should cap royalties if they exceed the price", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Capped Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set protocol fee to 5% (500 bps)
    await marketplace.write.setProtocolFee([500], { account: owner.account });

    // Set royalty to 96% for testing (total 101%)
    await bragNFT.write.setRoyaltyFeeNumerator([9600], { account: owner.account });

    // Buyer makes an offer
    const offerPrice = parseEther("100");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info (96 ETH)
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyAmount, parseEther("96"));

    // Seller accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceBefore = await bragToken.read.balanceOf([owner.account.address]); // feeRecipient is owner by default

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    // Protocol fee: 5% of 100 = 5 ETH
    assert.equal(feeRecipientBalanceAfter - feeRecipientBalanceBefore, parseEther("5"));
    // Royalty fee should be capped at: 100 - 5 = 95 ETH (instead of 96 ETH)
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("95"));
    // Seller proceeds should be 0
    assert.equal(sellerBalanceAfter, 0n);
  });
});
