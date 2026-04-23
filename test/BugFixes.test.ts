import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeFunctionData } from "viem";

describe("Bug Fixes", async function () {
  const { viem } = await network.connect();

  async function deployMarketplace() {
    const [owner, seller, buyer, royaltyRecipient] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Mock NFT with controllable royalty
    const mockNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock NFT", "MOCK"]);

    return { marketplace, mockNFT, bragToken, owner, seller, buyer, royaltyRecipient };
  }

  it("NFTMarketplace: Should NOT deduct royalty if recipient is address(0)", async function () {
    const { marketplace, mockNFT, bragToken, seller, buyer, owner } = await deployMarketplace();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId]);

    // Set royalty to 5% but recipient to address(0)
    await mockNFT.write.setRoyalty([zeroAddress, 500n]);

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await mockNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([mockNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await mockNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    // Royalty should NOT be deducted because recipient was address(0)
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), offerPrice);
  });

  it("NFTMarketplace: Should deduct royalty if recipient is NOT address(0)", async function () {
    const { marketplace, mockNFT, bragToken, seller, buyer, owner, royaltyRecipient } = await deployMarketplace();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId]);

    // Set royalty to 5% to royaltyRecipient
    await mockNFT.write.setRoyalty([royaltyRecipient.account.address, 500n]);

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await mockNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([mockNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await mockNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    const royaltyFee = (offerPrice * 500n) / 10000n;
    const expectedSellerProceeds = offerPrice - royaltyFee;
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), expectedSellerProceeds);
    assert.equal(await bragToken.read.balanceOf([royaltyRecipient.account.address]), royaltyFee);
  });

  async function deployBragNFT() {
    const [owner] = await viem.getWalletClients();
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    const nftImpl = await viem.deployContract("BragNFT");
    const nftInitData = encodeFunctionData({
        abi: nftImpl.abi,
        functionName: "initialize",
        args: [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]
    });
    const nftProxy = await viem.deployContract("BragProxy", [nftImpl.address, nftInitData]);
    const bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    return { bragNFT };
  }

  it("BragNFT: Should correctly detect audio extensions with various lengths", async function () {
    const { bragNFT } = await deployBragNFT();

    const [owner] = await viem.getWalletClients();

    const testURIs = [
      "a.mp3",       // Length 5
      ".wav",        // Length 4
      "abc",         // Length 3
      "a",           // Length 1
      "",            // Length 0
      "verylongfilename.mp3",
      "data:audio/mpeg;base64,..."
    ];

    for (const uri of testURIs) {
        // Donate and check tokenURI
        await bragNFT.write.donate(["test", uri], { value: parseEther("0.1") });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadataJson = Buffer.from(metadataBase64.split(",")[1], 'base64').toString();
        const metadata = JSON.parse(metadataJson);

        if (uri.endsWith(".mp3") || uri.startsWith("data:audio/")) {
            assert.ok(metadata.animation_url, `Should have animation_url for ${uri}`);
        } else if (uri.length < 4) {
            assert.ok(!metadata.animation_url, `Should NOT have animation_url for short string ${uri}`);
        }
    }
  });
});
