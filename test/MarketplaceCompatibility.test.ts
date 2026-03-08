import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Marketplace Compatibility (ERC721 & ERC1155)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [7n * 24n * 3600n, bragToken.address]);

    // ERC721
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1")
    ]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    // ERC1155
    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, mock1155, bragToken, owner, seller, buyer };
  }

  it("Should handle ERC721 offers and acceptance", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), offerPrice);
  });

  it("Should handle ERC1155 offers and acceptance", async function () {
    const { marketplace, mock1155, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Mint 10 units to seller
    const tokenId = 1337n;
    const amount = 5n;
    await mock1155.write.mint([seller.account.address, tokenId, 10n]);

    // Buyer makes an offer for 5 units
    const offerPrice = parseEther("2");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mock1155.address, tokenId, amount, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.acceptOffer([mock1155.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await mock1155.read.balanceOf([buyer.account.address, tokenId]), amount);
    assert.equal(await mock1155.read.balanceOf([seller.account.address, tokenId]), 5n);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), offerPrice);
  });

  it("Should revert on ERC721 offer if amount != 1", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 2n, offerPrice], { account: buyer.account });

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await assert.rejects(
        marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account }),
        /ERC721 offer must have amount 1/
    );
  });

  it("Should revert on ERC1155 offer if balance is insufficient", async function () {
    const { marketplace, mock1155, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    const tokenId = 1n;
    await mock1155.write.mint([seller.account.address, tokenId, 10n]);

    // Buyer wants 20 units
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mock1155.address, tokenId, 20n, offerPrice], { account: buyer.account });

    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await assert.rejects(
        marketplace.write.acceptOffer([mock1155.address, tokenId, buyer.account.address], { account: seller.account }),
        /Insufficient balance/
    );
  });
});
