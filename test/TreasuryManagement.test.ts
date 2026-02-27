import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeFunctionData, keccak256, toBytes } from "viem";

describe("Treasury Management", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const bragNFT = await viem.deployContract("Nexus", [
        owner.account.address,
        treasury.address,
        parseEther("0.1"),
        100n,
        "test-campaign"
    ]);
    const marketplace = await viem.deployContract("NFTMarketplace", [bragToken.address]);

    // Setup: Authorize BragNFT to mint receipts
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await receipt.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    return { treasury, bragNFT, receipt, marketplace, bragToken, owner, donor, buyer };
  }

  it("Should allow donating to treasury and then withdrawing by owner", async function () {
    const { bragNFT, treasury, donor, owner } = await deployContracts();

    await bragNFT.write.donateTo([treasury.address, "For the treasury", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(treasury.address));

    // Owner withdraws
    await treasury.write.withdrawERC721([bragNFT.address, tokenId, owner.account.address], { account: owner.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(owner.account.address));
  });

  it("Should allow buying from treasury via marketplace and treasury.execute", async function () {
    const { bragNFT, treasury, marketplace, bragToken, donor, buyer, owner } = await deployContracts();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // 1. Mint to treasury
    await bragNFT.write.donateTo([treasury.address, "To be sold", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    // 2. Buyer creates an offer on marketplace
    const offerPrice = parseEther("1.0");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], {
        account: buyer.account
    });

    // 3. Treasury owner approves marketplace to handle the NFT via treasury.execute
    const approveData = encodeFunctionData({
        abi: [
            {
                name: 'approve',
                type: 'function',
                inputs: [{ name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }],
                outputs: [],
            }
        ],
        args: [marketplace.address, tokenId]
    });
    await treasury.write.execute([bragNFT.address, 0n, approveData], { account: owner.account });

    // 4. Treasury owner accepts the offer through treasury.execute
    const acceptOfferData = encodeFunctionData({
        abi: [
            {
                name: 'acceptOffer',
                type: 'function',
                inputs: [
                    { name: 'nftContract', type: 'address' },
                    { name: 'tokenId', type: 'uint256' },
                    { name: 'buyer', type: 'address' }
                ],
                outputs: [],
            }
        ],
        args: [bragNFT.address, tokenId, buyer.account.address]
    });

    const initialTreasuryBalance = await bragToken.read.balanceOf([treasury.address]);

    await treasury.write.execute([marketplace.address, 0n, acceptOfferData], { account: owner.account });

    // 5. Verify results
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));

    const finalTreasuryBalance = await bragToken.read.balanceOf([treasury.address]);
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + offerPrice);
  });
});
