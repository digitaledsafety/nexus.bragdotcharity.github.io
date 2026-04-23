import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeFunctionData, keccak256, toBytes, zeroAddress } from "viem";

describe("BragNFT Upgradeable & Rewards", async function () {
  const { viem } = await network.connect();

  async function deploySystem() {
    const [owner, donor] = await viem.getWalletClients();

    // Deploy Treasury (re-using implementation for simplicity or deploy new)
    const treasuryImpl = await viem.deployContract("Treasury"); // []);
    const factory = await viem.deployContract("TreasuryFactory", [treasuryImpl.address]);
    const salt = keccak256(toBytes("salt-nft"));
    const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    await factory.write.createTreasury([[owner.account.address], 1n, entryPoint, salt]);
    const treasuryAddr = await factory.read.getAddress([[owner.account.address], 1n, entryPoint, salt]);
    const treasury = await viem.getContractAt("Treasury", treasuryAddr);

    // Deploy BragToken (non-upgradeable)
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, 1000000000000000n * 10n**18n]); // 1 Quadrillion

    // Deploy BragNFT Implementation
    const nftImpl = await viem.deployContract("BragNFT"); // []); await (await viem.getContractAt("BragNFT", (await viem.deployContract("BragNFT"); // [])).address)).write.initialize([]);

    // Deploy Proxy for BragNFT (manually for test)
    const initData = encodeFunctionData({
        abi: [{
            name: 'initialize',
            type: 'function',
            inputs: [
                { name: '_initialOwner', type: 'address' },
                { name: '_treasury', type: 'address' },
                { name: '_minimumDonation', type: 'uint256' },
                { name: '_priceFeed', type: 'address' }
            ],
            outputs: [],
        }],
        args: [owner.account.address, treasury.address, parseEther("0.01"), zeroAddress]
    });

    const proxy = await viem.deployContract("BragProxy", [nftImpl.address, initData]);
    const bragNFT = await viem.getContractAt("BragNFT", proxy.address);

    // Setup: PriceFeed
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    await bragNFT.write.setPriceFeed([priceFeed.address]);

    // Setup: BRAG reward
    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { bragNFT, bragToken, treasury, owner, donor, priceFeed };
  }

  it("Should initialize and reward 1,000,000 BRAG per $1 USD", async function () {
    const { bragNFT, bragToken, donor } = await deploySystem();

    // Donate $50 worth of ETH.
    // Price is $2500. So $50 is 50 / 2500 = 0.02 ETH.
    const donationAmount = parseEther("0.02");

    await bragNFT.write.donate(["Impact Donation", ""], {
        account: donor.account,
        value: donationAmount
    });

    // Should get 50 * 1,000,000 = 50,000,000 BRAG
    const expectedBrag = parseEther("50000000");
    const balance = await bragToken.read.balanceOf([donor.account.address]);

    assert.equal(balance, expectedBrag);
  });
});
