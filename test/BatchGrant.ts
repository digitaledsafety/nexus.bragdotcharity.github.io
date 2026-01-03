import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("BatchGrant", function () {
  async function setup() {
    const { viem } = await network.connect();
    const [owner, recipient1, recipient2] = await viem.getWalletClients();

    const mockUsdc = await viem.deployContract("MockUSDC");
    const batchGrant = await viem.deployContract("BatchGrant", [mockUsdc.address]);

    return {
      viem,
      owner,
      recipient1,
      recipient2,
      batchGrant,
      mockUsdc,
    };
  }

  describe("distributeUSDC", function () {
    it("should distribute USDC to multiple recipients", async function () {
      const { owner, recipient1, recipient2, batchGrant, mockUsdc } = await setup();

      const ownerAddress = owner.account.address;
      const recipient1Address = recipient1.account.address;
      const recipient2Address = recipient2.account.address;

      // Mint some mock USDC to the owner
      await mockUsdc.write.mint([ownerAddress, 1000n], { account: owner.account });

      // Approve the BatchGrant contract to spend the owner's mock USDC
      await mockUsdc.write.approve([batchGrant.address, 1000n], { account: owner.account });

      // Distribute the mock USDC
      const recipients = [recipient1Address, recipient2Address];
      const amounts = [100n, 200n];
      await batchGrant.write.distributeUSDC([recipients, amounts], {
        account: owner.account,
      });

      // Check the balances
      const balance1 = await mockUsdc.read.balanceOf([recipient1Address]);
      const balance2 = await mockUsdc.read.balanceOf([recipient2Address]);

      assert.equal(balance1, 100n);
      assert.equal(balance2, 200n);
    });

    it("should revert if recipients and amounts arrays have different lengths", async function () {
      const { owner, recipient1, batchGrant } = await setup();
      const recipient1Address = recipient1.account.address;
      const recipients = [recipient1Address];
      const amounts = [100n, 200n];

      try {
        await batchGrant.write.distributeUSDC([recipients, amounts], {
          account: owner.account,
        });
        assert.fail("The transaction should have reverted");
      } catch (e: any) {
        assert.ok(e.message.includes("Mismatched arrays"));
      }
    });

    it("should revert if the transfer fails due to insufficient allowance", async function () {
      const { owner, recipient1, recipient2, batchGrant } = await setup();
      const recipient1Address = recipient1.account.address;
      const recipient2Address = recipient2.account.address;

      // Distribute the mock USDC without approval
      const recipients = [recipient1Address, recipient2Address];
      const amounts = [100n, 200n];
      try {
        await batchGrant.write.distributeUSDC([recipients, amounts], {
          account: owner.account,
        });
        assert.fail("The transaction should have reverted");
      } catch (e: any) {
        assert.ok(e.message.includes("ERC20InsufficientAllowance"));
      }
    });
  });
});
