import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex } from "viem";

describe("Issue Fixes", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, 0n, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        return {
            owner,
            otherAccount,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
        };
    }

    describe("Marketplace Offers", async function () {
        it("should allow creating an offer with BRAG", async function () {
            const { otherAccount, bragToken, marketplace, bragNFT } = await deployFixture();

            // Mint NFT for owner
            await bragNFT.write.donate(["Impact Message", "ipfs://test"], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Transfer BRAG to otherAccount
            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);

            // Other account approves marketplace
            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: otherAccount.account });

            // Create offer
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50")], { account: otherAccount.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, otherAccount.account.address]);
            assert.equal(offer[0], parseEther("50"));
        });
    });

    describe("Treasury Withdrawal", async function () {
        it("should execute withdrawal when threshold is 1", async function () {
            const { owner, treasury, otherAccount } = await deployFixture();
            const publicClient = await viem.getPublicClient();

            // Fund treasury
            await owner.sendTransaction({
                to: treasury.address,
                value: parseEther("1")
            });

            const initialBalance = await publicClient.getBalance({ address: otherAccount.account.address });
            const nonce = BigInt(Math.floor(Date.now() / 1000));

            // Execute withdrawal
            await treasury.write.execute([otherAccount.account.address, parseEther("0.5"), "0x", nonce]);

            const finalBalance = await publicClient.getBalance({ address: otherAccount.account.address });
            assert.equal(finalBalance - initialBalance, parseEther("0.5"));
        });

        it("should propose withdrawal when threshold is > 1", async function () {
             const [owner, secondOwner] = await viem.getWalletClients();
             const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

             // Deploy with threshold 2
             const treasury = await viem.deployContract("Treasury", [[owner.account.address, secondOwner.account.address], 2n, entryPoint]);

             const nonce = BigInt(Math.floor(Date.now() / 1000));
             const target = secondOwner.account.address;
             const value = parseEther("0.1");
             const data = "0x" as Hex;

             await treasury.write.propose([target, value, data, nonce], { account: owner.account });

             const proposalCount = await treasury.read.proposalCount();
             assert.equal(proposalCount, 1n);

             const proposal = await treasury.read.proposals([0n]);
             assert.equal(proposal[0], getAddress(target));
             assert.equal(proposal[1], value);
        });
    });

    describe("NFT Top-up", async function () {
        it("should allow topping up with ETH", async function () {
            const { otherAccount, bragNFT, treasury } = await deployFixture();
            const publicClient = await viem.getPublicClient();

            // Mint NFT
            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01"), account: otherAccount.account });
            const tokenId = 0n;

            const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.address });

            // Top up with ETH (0.0004 ETH)
            await bragNFT.write.topUp([tokenId], { value: parseEther("0.0004"), account: otherAccount.account });

            const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.address });
            assert.equal(finalTreasuryBalance - initialTreasuryBalance, parseEther("0.0004"));

            const isGlowing = await bragNFT.read.isGlowing([tokenId]);
            assert.equal(isGlowing, true);
        });

        it("should allow topping up with BRAG tokens", async function () {
            const { otherAccount, bragNFT, bragToken, treasury } = await deployFixture();

            // Mint NFT
            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01"), account: otherAccount.account });
            const tokenId = 0n;

            // Give BRAG to otherAccount
            await bragToken.write.transfer([otherAccount.account.address, parseEther("200000")]);

            // Approve BragNFT contract to spend BRAG
            await bragToken.write.approve([bragNFT.address, parseEther("100000")], { account: otherAccount.account });

            const initialTreasuryBrag = await bragToken.read.balanceOf([treasury.address]);

            // Top up with BRAG (Requires 100,000 BRAG)
            await bragNFT.write.topUpWithBrag([tokenId], { account: otherAccount.account });

            const finalTreasuryBrag = await bragToken.read.balanceOf([treasury.address]);
            assert.equal(finalTreasuryBrag - initialTreasuryBrag, parseEther("100000"));

            const isGlowing = await bragNFT.read.isGlowing([tokenId]);
            assert.equal(isGlowing, true);
        });
    });
});
