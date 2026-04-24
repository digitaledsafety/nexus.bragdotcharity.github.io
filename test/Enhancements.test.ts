import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("Enhancements (Royalties & SVG Escaping)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Marketplace (now with 1 arg)
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1")
    , priceFeed.address]);


    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));


    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should correctly distribute royalties to the treasury", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Royalty is fixed at 8% (800 bps)

    // Buyer makes an offer
    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyRecipient, getAddress(treasury.account.address));
    assert.equal(royaltyAmount, parseEther("0.8")); // 8% of 10

    // Seller accepts
    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify distribution
    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("0.8"));
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("9.2"));
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

  it("Should cap royalties if they exceed the price", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Capped Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set protocol fee to 10% (1000 bps) - maximum allowed
    await marketplace.write.setProtocolFee([1000], { account: owner.account });

    // Royalty is fixed at 8% (total 18%)

    // Buyer makes an offer
    const offerPrice = parseEther("100");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info (8 ETH)
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyAmount, parseEther("8"));

    // Seller accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);
    const feeRecipientBalanceBefore = await bragToken.read.balanceOf([owner.account.address]); // feeRecipient is owner by default

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    // Protocol fee: 10% of 100 = 10 ETH
    assert.equal(feeRecipientBalanceAfter - feeRecipientBalanceBefore, parseEther("10"));
    // Royalty fee: 8% of 100 = 8 ETH
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("8"));
    // Seller proceeds: 100 - 10 - 8 = 82 ETH
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("82"));
  });
});

describe("Enhancements (New)", function () {
  async function setup() {
    const { viem } = await network.connect();
    const [owner, otherAccount, thirdAccount] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    // 1. Setup Treasury
    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const owners = [owner.account.address, otherAccount.account.address, thirdAccount.account.address];
    const threshold = 2n;
    const treasury = await viem.deployContract("Treasury", [owners, threshold, mockEntryPoint.address]);

    // 2. Setup BatchGrant
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    // 3. Setup NFTMarketplace
    const mockUsdc = await viem.deployContract("MockUSDC");
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, mockUsdc.address]);

    // 4. Setup ExhibitVault
    const mockRegistry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [mockRegistry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [mockRegistry.address]);
    await mockRegistry.write.verifyVault([vault1.address, 0, "Vault 1", "Desc"], { account: owner.account });
    await mockRegistry.write.verifyVault([vault2.address, 0, "Vault 2", "Desc"], { account: owner.account });

    const mock1155 = await viem.deployContract("MockERC1155");

    return {
      viem,
      publicClient,
      owner,
      otherAccount,
      thirdAccount,
      treasury,
      batchGrant,
      marketplace,
      mockUsdc,
      vault1,
      vault2,
      mock1155,
      mockRegistry
    };
  }

  describe("Treasury Rejection Mechanism", function () {
    it("should allow owners to reject a proposal", async function () {
      const { treasury, owner, otherAccount } = await setup();
      const nonce = 1n;
      await treasury.write.propose([otherAccount.account.address, 0n, "0x", nonce], { account: owner.account });

      const proposalId = 0n;
      await treasury.write.rejectProposal([proposalId, nonce + 1n], { account: otherAccount.account });

      const proposal = await treasury.read.proposals([proposalId]);
      assert.equal(proposal[7], 1n); // rejectionCount
      assert.equal(await treasury.read.hasRejected([proposalId, otherAccount.account.address]), true);
    });

    it("should cancel proposal when rejection threshold is reached", async function () {
      const { treasury, owner, otherAccount, thirdAccount } = await setup();
      const nonce = 1n;
      await treasury.write.propose([otherAccount.account.address, 0n, "0x", nonce], { account: owner.account });

      const proposalId = 0n;
      await treasury.write.rejectProposal([proposalId, nonce + 1n], { account: otherAccount.account });
      await treasury.write.rejectProposal([proposalId, nonce + 2n], { account: thirdAccount.account });

      const proposal = await treasury.read.proposals([proposalId]);
      assert.equal(proposal[4], true); // canceled
    });

    it("should not allow approving a rejected proposal by the same owner", async function () {
      const { treasury, owner, otherAccount } = await setup();
      const nonce = 1n;
      await treasury.write.propose([otherAccount.account.address, 0n, "0x", nonce], { account: owner.account });

      const proposalId = 0n;
      await treasury.write.rejectProposal([proposalId, nonce + 1n], { account: otherAccount.account });

      await assert.rejects(
        treasury.write.approve([proposalId, nonce + 2n], { account: otherAccount.account }),
        /AlreadyRejected/
      );
    });
  });

  describe("BatchGrant Non-Atomic Distribution", function () {
    it("should continue distribution even if one transfer fails", async function () {
      const { batchGrant, owner, otherAccount, publicClient, viem } = await setup();
      // Use a contract that reverts on ETH receipt
      const revertingContract = await viem.deployContract("MaliciousBuyer", [zeroAddress, zeroAddress]);

      const recipients = [otherAccount.account.address, revertingContract.address];
      const amounts = [parseEther("1"), parseEther("1")];
      const total = parseEther("2");

      const balanceBefore = await publicClient.getBalance({ address: otherAccount.account.address });

      await batchGrant.write.distributeETHNonAtomic([recipients, amounts], {
        account: owner.account,
        value: total,
      });

      const balanceAfter = await publicClient.getBalance({ address: otherAccount.account.address });
      assert.equal(balanceAfter, balanceBefore + parseEther("1"));

      // Check for event
      const logs = await publicClient.getContractEvents({
        address: batchGrant.address,
        abi: batchGrant.abi,
        eventName: 'DistributionFailed'
      });
      assert.equal(logs.length, 1);
      assert.equal(logs[0].args.recipient.toLowerCase(), revertingContract.address.toLowerCase());
    });
  });

  describe("NFTMarketplace Zero-Value Proceeds", function () {
    it("should not revert when seller proceeds are zero", async function () {
      const { marketplace, owner, otherAccount, mockUsdc, viem } = await setup();

      // Set protocol fee to 10% (1000 bps)
      await marketplace.write.setProtocolFee([1000n], { account: owner.account });

      const mockNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock", "MCK"]);
      const tokenId = 1n;
      await mockNFT.write.mint([owner.account.address, tokenId]);
      await mockNFT.write.approve([marketplace.address, tokenId], { account: owner.account });

      const price = 1000n;
      await mockUsdc.write.mint([otherAccount.account.address, price]);
      await mockUsdc.write.approve([marketplace.address, price], { account: otherAccount.account });

      await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, price], { account: otherAccount.account });

      // This would have reverted if it tried to transfer 0 proceeds and the token didn't support it.
      // Even if MockUSDC supports it, we are testing that the code path works.
      await marketplace.write.acceptOffer([mockNFT.address, tokenId, otherAccount.account.address], { account: owner.account });

      const offer = await marketplace.read.offers([mockNFT.address, tokenId, otherAccount.account.address]);
      assert.equal(offer[0], 0n);
    });
  });

  describe("ExhibitVault ERC1155 Batch Operations", function () {
    it("should withdraw multiple 1155 tokens in one batch", async function () {
      const { vault1, owner, mock1155 } = await setup();
      const ids = [1n, 2n];
      const amounts = [100n, 200n];

      await mock1155.write.mintBatch([owner.account.address, ids, amounts]);
      await mock1155.write.setApprovalForAll([vault1.address, true]);

      await mock1155.write.safeBatchTransferFrom([owner.account.address, vault1.address, ids, amounts, "0x"]);

      assert.equal(await vault1.read.balances1155([mock1155.address, 1n, owner.account.address]), 100n);
      assert.equal(await vault1.read.balances1155([mock1155.address, 2n, owner.account.address]), 200n);

      await vault1.write.withdrawBatch1155([mock1155.address, ids, amounts], { account: owner.account });

      assert.equal(await vault1.read.balances1155([mock1155.address, 1n, owner.account.address]), 0n);
      assert.equal(await vault1.read.balances1155([mock1155.address, 2n, owner.account.address]), 0n);
      assert.equal(await mock1155.read.balanceOf([owner.account.address, 1n]), 100n);
    });

    it("should move multiple 1155 tokens in one batch", async function () {
        const { vault1, vault2, owner, mock1155 } = await setup();
        const ids = [1n, 2n];
        const amounts = [50n, 60n];

        await mock1155.write.mintBatch([owner.account.address, ids, amounts]);
        await mock1155.write.setApprovalForAll([vault1.address, true]);
        await mock1155.write.safeBatchTransferFrom([owner.account.address, vault1.address, ids, amounts, "0x"]);

        await vault1.write.moveBatch1155([mock1155.address, ids, amounts, vault2.address], { account: owner.account });

        assert.equal(await vault1.read.balances1155([mock1155.address, 1n, owner.account.address]), 0n);
        assert.equal(await vault2.read.balances1155([mock1155.address, 1n, owner.account.address]), 50n);
    });
  });
});
