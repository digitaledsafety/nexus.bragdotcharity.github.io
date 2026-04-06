import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import hre from "hardhat";
import {
  getAddress,
  parseEther,
  encodeFunctionData,
  keccak256,
  toHex,
  pad
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

describe("Brag Charity Upgradeable Ecosystem", async function () {
  const { viem } = await hre.network.connect();
  let publicClient: any;
  let owner: any;
  let user: any;

  let bragToken: any;
  let treasury: any;
  let bragNFT: any;
  let marketplace: any;
  let receipt: any;
  let registry: any;

  async function deployUUPS(name: string, args: any[]) {
    const impl = await viem.deployContract(name);
    const data = encodeFunctionData({
        abi: impl.abi,
        functionName: "initialize",
        args: args
    });
    const proxy = await viem.deployContract("BragProxy", [impl.address, data]);
    return await viem.getContractAt(name, proxy.address);
  }

  before(async () => {
    publicClient = await viem.getPublicClient();
    const wallets = await viem.getWalletClients();
    owner = wallets[0];
    user = wallets[1];

    // 1. Token
    bragToken = await deployUUPS("BragToken", [owner.account.address, 0n, parseEther("1000000")]);

    // 2. Treasury
    const treasuryImpl = await viem.deployContract("Treasury");
    const factory = await viem.deployContract("TreasuryFactory", [treasuryImpl.address]);
    const salt = keccak256(toHex("test-salt"));
    const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    await factory.write.createTreasury([[owner.account.address], 1n, entryPoint, salt]);
    const logs = await publicClient.getContractEvents({ address: factory.address, abi: factory.abi, eventName: "TreasuryCreated" });
    treasury = await viem.getContractAt("Treasury", logs[0].args.treasury);

    // 3. Registry
    registry = await deployUUPS("ExhibitRegistry", [owner.account.address]);

    // 4. Receipt
    receipt = await deployUUPS("DonationReceipt", [owner.account.address]);

    // 5. NFT
    bragNFT = await deployUUPS("BragNFT", [owner.account.address, treasury.address, parseEther("0.01")]);

    // 6. Marketplace
    marketplace = await deployUUPS("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Setup roles
    await receipt.write.grantRole([await receipt.read.MINTER_ROLE(), bragNFT.address]);
    await bragNFT.write.setReceiptContract([receipt.address]);
    await bragToken.write.grantRole([await bragToken.read.MINTER_ROLE(), bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);
  });

  it("Should allow donating and minting an NFT", async () => {
    const amount = parseEther("0.1");
    await bragNFT.write.donate(["Hello Upgradeable World!", ""], { value: amount, account: owner.account });

    assert.equal(await bragNFT.read.totalSupply(), 1n);
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(owner.account.address));
    assert.equal(await bragToken.read.balanceOf([owner.account.address]), amount);
    assert.equal(await publicClient.getBalance({ address: treasury.address }), amount);
  });

  it("Should allow placing an offer in the marketplace", async () => {
    const price = parseEther("10");
    await bragToken.write.mint([user.account.address, price]);

    await bragToken.write.approve([marketplace.address, price], { account: user.account });
    await marketplace.write.createOffer([bragNFT.address, 0n, 1n, price], { account: user.account });

    const offer = await marketplace.read.offers([bragNFT.address, 0n, user.account.address]);
    // The marketplace mapping returns a struct, viem returns it as an array or object depending on version
    assert.equal(offer[0], price);
  });

  it("Should support UUPS upgrades", async () => {
    const newImpl = await viem.deployContract("BragToken");
    await bragToken.write.upgradeToAndCall([newImpl.address, "0x"]);
    assert.equal(await bragToken.read.name(), "Brag Token");
  });
});
