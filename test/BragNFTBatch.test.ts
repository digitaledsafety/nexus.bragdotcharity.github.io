import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT Batch Donations and Truncation", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury] = await viem.getWalletClients();

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 500/ETH

    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    return { bragNFT, donor, treasury, owner };
  }

  it("Should batch mint NFTs", async function () {
    const { bragNFT, donor, treasury } = await deployContracts();
    const count = 5n;
    const donationAmount = parseEther("1"); // 0.2 ETH each
    const message = "Batch donation";

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.batchDonate([count, message], {
        account: donor.account,
        value: donationAmount
    });

    assert.equal(await bragNFT.read.totalSupply(), count);
    for (let i = 0n; i < count; i++) {
        assert.equal(await bragNFT.read.ownerOf([i]), getAddress(donor.account.address));
        const record = await bragNFT.read.taxRegistry([i]);
        assert.equal(record[4], message);
    }

    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });

  it("Should truncate long messages in SVG", async function () {
      const { bragNFT, donor } = await deployContracts();
      const longMessage = "This is a very very very very very long message that should definitely be truncated in the SVG generation to avoid layout issues";

      await bragNFT.write.donate([longMessage, ""], {
          account: donor.account,
          value: parseEther("0.1")
      });

      const uri = await bragNFT.read.tokenURI([0n]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

      // Full message should be in attributes
      assert.equal(json.attributes[0].value, longMessage);

      // Truncated message should be in SVG (image)
      const svg = Buffer.from(json.image.split(",")[1], "base64").toString();
      // _truncate(str, 32) adds "..." at the end
      const expectedTruncated = longMessage.substring(0, 32) + "...";
      assert.ok(svg.includes(expectedTruncated), `SVG should contain truncated message: ${expectedTruncated}`);
      assert.ok(!svg.includes(longMessage), "SVG should not contain full long message");
  });
});
