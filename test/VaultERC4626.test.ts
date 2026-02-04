import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseUnits } from "viem";

describe("Vault ERC-4626 Compliance", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user] = await viem.getWalletClients();
    const mockUsdc = await viem.deployContract("MockUSDC");
    const registry = await viem.deployContract("SummonRegistry", [owner.account.address]);

    const summonVault = await viem.deployContract("SummonVault", [
      owner.account.address,
      registry.address,
      mockUsdc.address,
      "Summon Vault Shares",
      "SVS"
    ]);

    const exhibition = await viem.deployContract("Exhibition", [
      owner.account.address,
      mockUsdc.address,
      "Exhibition Vault Shares",
      "EVS"
    ]);

    const treasury = await viem.deployContract("Treasury", [
      owner.account.address,
      mockUsdc.address,
      "Treasury Vault Shares",
      "TVS"
    ]);

    return { mockUsdc, summonVault, exhibition, treasury, owner, user };
  }

  const vaults = [
    { name: "SummonVault", key: "summonVault" },
    { name: "Exhibition", key: "exhibition" },
    { name: "Treasury", key: "treasury" },
  ];

  for (const vaultInfo of vaults) {
    describe(vaultInfo.name, function () {
      it("should have the correct asset", async function () {
        const contracts = await setup();
        const vault = (contracts as any)[vaultInfo.key];
        assert.equal(await vault.read.asset(), getAddress(contracts.mockUsdc.address));
      });

      it("should allow deposits and withdrawals of the underlying asset", async function () {
        const contracts = await setup();
        const { mockUsdc, owner, user } = contracts;
        const vault = (contracts as any)[vaultInfo.key];

        const depositAmount = parseUnits("100", 18);

        // Mint and approve
        await mockUsdc.write.mint([user.account.address, depositAmount], { account: owner.account });
        await mockUsdc.write.approve([vault.address, depositAmount], { account: user.account });

        // Deposit
        await vault.write.deposit([depositAmount, user.account.address], { account: user.account });

        // Check shares (with decimals offset of 3, 1 asset unit = 1000 share units)
        const shares = await vault.read.balanceOf([user.account.address]);
        const expectedShares = depositAmount * 1000n;
        assert.equal(shares, expectedShares);

        // Withdraw
        await vault.write.withdraw([depositAmount, user.account.address, user.account.address], { account: user.account });

        // Check balances
        const finalBalance = await mockUsdc.read.balanceOf([user.account.address]);
        assert.equal(finalBalance, depositAmount);

        const finalShares = await vault.read.balanceOf([user.account.address]);
        assert.equal(finalShares, 0n);
      });
    });
  }
});
