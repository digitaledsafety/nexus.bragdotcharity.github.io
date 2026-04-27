import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, zeroAddress, getAddress } from "viem";

describe("Marketplace Expiry", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Mock NFT
    const mock721 = await viem.deployContract("MockRoyaltyNFT", ["Mock NFT", "MOCK"]);

    return { owner, seller, buyer, marketplace, bragToken, mock721 };
  }

  it("Should allow creating an offer with expiry", async function () {
    const { owner, seller, buyer, marketplace, bragToken, mock721 } = await setup();
    const tokenId = 1n;
    await mock721.write.mint([seller.account.address, tokenId]);

    const price = parseEther("10");
    const expiry = BigInt(Math.floor(Date.now() / 1000) + 3600); // 1 hour from now

    await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

    await marketplace.write.createOffer([mock721.address, tokenId, 1n, price, expiry], { account: buyer.account });

    const offer = await marketplace.read.offers([mock721.address, tokenId, buyer.account.address]);
    assert.equal(offer[3], expiry); // expiry is at index 3 in struct/tuple
  });

  it("Should revert if offer is expired", async function () {
    const { owner, seller, buyer, marketplace, bragToken, mock721 } = await setup();
    const tokenId = 2n;
    await mock721.write.mint([seller.account.address, tokenId]);

    const price = parseEther("10");
    // Use a small expiry and then wait (or simulate time pass if possible, but easier to just use a timestamp in the past if contract allows it for testing, oh wait createOffer checks for future)
    // Actually, we can just use a timestamp that will be reached quickly.
    // In Hardhat we can increase time.
    const publicClient = await viem.getPublicClient();
    const now = BigInt((await publicClient.getBlock({blockTag: 'latest'})).timestamp);
    const expiry = now + 10n;

    await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

    await marketplace.write.createOffer([mock721.address, tokenId, 1n, price, expiry], { account: buyer.account });

    // Increase time
    await viem.getPublicClient().then(c => c.request({ method: "evm_increaseTime", params: [20] }));
    await viem.getPublicClient().then(c => c.request({ method: "evm_mine" }));

    await mock721.write.approve([marketplace.address, tokenId], { account: seller.account });

    await assert.rejects(
        marketplace.write.acceptOffer([mock721.address, tokenId, buyer.account.address], { account: seller.account }),
        /Offer expired/
    );
  });

  it("Should allow accepting if not yet expired", async function () {
    const { owner, seller, buyer, marketplace, bragToken, mock721 } = await setup();
    const tokenId = 3n;
    await mock721.write.mint([seller.account.address, tokenId]);

    const price = parseEther("10");
    const publicClient = await viem.getPublicClient();
    const now = BigInt((await publicClient.getBlock({blockTag: 'latest'})).timestamp);
    const expiry = now + 1000n;

    await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

    await marketplace.write.createOffer([mock721.address, tokenId, 1n, price, expiry], { account: buyer.account });

    await mock721.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([mock721.address, tokenId, buyer.account.address], { account: seller.account });

    assert.equal(await mock721.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });

  it("Should allow updating expiry", async function () {
      const { owner, seller, buyer, marketplace, bragToken, mock721 } = await setup();
      const tokenId = 4n;
      await mock721.write.mint([seller.account.address, tokenId]);

      const price = parseEther("10");
      await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

      await marketplace.write.createOffer([mock721.address, tokenId, 1n, price, 0n], { account: buyer.account });

      const newExpiry = BigInt(Math.floor(Date.now() / 1000) + 7200);
      await marketplace.write.updateOffer([mock721.address, tokenId, 1n, price, newExpiry], { account: buyer.account });

      const offer = await marketplace.read.offers([mock721.address, tokenId, buyer.account.address]);
      assert.equal(offer[3], newExpiry);
  });
});
