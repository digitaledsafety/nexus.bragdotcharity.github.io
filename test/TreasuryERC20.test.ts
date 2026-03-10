import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Treasury ERC20 Withdrawal", async function () {
  const { viem } = await network.connect();

  async function deploy() {
    const [owner, other] = await viem.getWalletClients();
    const treasury = await viem.deployContract("Treasury", [owner.account.address]);
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);

    return { treasury, bragToken, owner, other };
  }

  it("Should allow TREASURY_ROLE to withdraw ERC20", async function () {
    const { treasury, bragToken, owner, other } = await deploy();

    const amount = parseEther("100");
    await bragToken.write.transfer([treasury.address, amount], { account: owner.account });

    assert.equal(await bragToken.read.balanceOf([treasury.address]), amount);

    await treasury.write.withdrawERC20([bragToken.address, other.account.address, amount], { account: owner.account });

    assert.equal(await bragToken.read.balanceOf([other.account.address]), amount);
    assert.equal(await bragToken.read.balanceOf([treasury.address]), 0n);
  });

  it("Should fail if non-TREASURY_ROLE tries to withdraw ERC20", async function () {
    const { treasury, bragToken, other } = await deploy();

    await assert.rejects(
        treasury.write.withdrawERC20([bragToken.address, other.account.address, 1n], { account: other.account }),
        /AccessControlUnauthorizedAccount/
    );
  });
});
