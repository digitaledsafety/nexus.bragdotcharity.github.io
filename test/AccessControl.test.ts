import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("AccessControl Security Tests", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
  const VERIFIER_ROLE = keccak256(toBytes("VERIFIER_ROLE"));
  const TREASURY_ROLE = keccak256(toBytes("TREASURY_ROLE"));
  const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";

  async function setup() {
    const [owner, attacker, other] = await viem.getWalletClients();

    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    const nexus = await viem.deployContract("Nexus", [
      owner.account.address,
      treasury.address,
      parseEther("0.1")
    ]);
    const nexusToken = await viem.deployContract("NexusToken", [
      owner.account.address,
      0n,
      parseEther("1000")
    ]);

    return { owner, attacker, other, treasury, registry, receipt, nexus, nexusToken };
  }

  describe("NexusToken Access", () => {
    it("Should fail to mint without MINTER_ROLE", async function () {
      const { nexusToken, attacker } = await setup();
      await assert.rejects(
        nexusToken.write.mint([attacker.account.address, 100n], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("DonationReceipt Access", () => {
    it("Should fail to mint without MINTER_ROLE", async function () {
      const { receipt, attacker } = await setup();
      await assert.rejects(
        receipt.write.mint([attacker.account.address, parseEther("1"), "hacker"], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to setMinter without ADMIN_ROLE", async function () {
      const { receipt, attacker, other } = await setup();
      await assert.rejects(
        receipt.write.setMinter([other.account.address, true], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("Nexus Access", () => {
    it("Should fail to setTreasury without ADMIN_ROLE", async function () {
      const { nexus, attacker, other } = await setup();
      await assert.rejects(
        nexus.write.setTreasury([other.account.address], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to setMinimumDonation without ADMIN_ROLE", async function () {
      const { nexus, attacker } = await setup();
      await assert.rejects(
        nexus.write.setMinimumDonation([1n], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("ExhibitRegistry Access", () => {
    it("Should fail to verifyVault without VERIFIER_ROLE", async function () {
      const { registry, attacker, other } = await setup();
      await assert.rejects(
        registry.write.verifyVault([other.account.address, 0, "Fake", "Fake"], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to removeVault without VERIFIER_ROLE", async function () {
      const { registry, attacker, other } = await setup();
      await assert.rejects(
        registry.write.removeVault([other.account.address], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("Treasury Access", () => {
    it("Should fail to withdrawETH without TREASURY_ROLE", async function () {
      const { treasury, attacker } = await setup();
      await assert.rejects(
        treasury.write.withdrawETH([attacker.account.address, 1n], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to withdrawERC721 without TREASURY_ROLE", async function () {
      const { treasury, attacker, nexus } = await setup();
      await assert.rejects(
        treasury.write.withdrawERC721([nexus.address, 0n, attacker.account.address], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to execute without ADMIN_ROLE", async function () {
      const { treasury, attacker, other } = await setup();
      await assert.rejects(
        treasury.write.execute([other.account.address, 0n, "0x"], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("Role Management", () => {
    it("Should allow ADMIN to grant and revoke roles", async function () {
      const { owner, other, nexusToken } = await setup();

      // Grant MINTER_ROLE
      await nexusToken.write.grantRole([MINTER_ROLE, other.account.address], { account: owner.account });
      assert.ok(await nexusToken.read.hasRole([MINTER_ROLE, other.account.address]));

      // Mint works now
      await nexusToken.write.mint([other.account.address, 50n], { account: other.account });

      // Revoke MINTER_ROLE
      await nexusToken.write.revokeRole([MINTER_ROLE, other.account.address], { account: owner.account });
      assert.ok(!(await nexusToken.read.hasRole([MINTER_ROLE, other.account.address])));

      // Mint fails again
      await assert.rejects(
        nexusToken.write.mint([other.account.address, 50n], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });
});
