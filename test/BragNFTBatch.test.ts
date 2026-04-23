import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT Batch & Truncation", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury] = await viem.getWalletClients();
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    return { bragNFT, owner, donor, treasury };
  }

  it("Should allow batch donating for multiple NFTs", async function () {
    const { bragNFT, donor, treasury } = await deployContracts();
    const messages = ["Msg 1", "Msg 2", "Msg 3"];
    const mediaURIs = ["ipfs://1", "ipfs://2", "ipfs://3"];
    const onChainFlags = [false, false, false];
    const totalDonation = parseEther("0.3");

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.batchDonate([messages, mediaURIs, onChainFlags], {
      account: donor.account,
      value: totalDonation
    });

    assert.equal(await bragNFT.read.totalSupply(), 3n);
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(donor.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(donor.account.address));
    assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(donor.account.address));

    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + totalDonation);

    // Verify individual records
    const record1 = await bragNFT.read.taxRegistry([0n]);
    assert.equal(record1[4], "Msg 1");
    const record2 = await bragNFT.read.taxRegistry([1n]);
    assert.equal(record2[4], "Msg 2");
  });

  it("Should truncate long messages in SVG metadata", async function () {
    const { bragNFT, donor } = await deployContracts();
    const longMessage = "This is a very long donation message that should definitely be truncated in the SVG";

    await bragNFT.write.donate([longMessage, ""], {
      account: donor.account,
      value: parseEther("0.1")
    });

    const uri = await bragNFT.read.tokenURI([0n]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

    // The _truncate helper uses maxLen 32 and appends "..."
    // "This is a very long donation mes" (32 chars) + "..."
    const expected = "This is a very long donation mes...";
    assert.ok(svg.includes(expected), `SVG should include truncated message: ${expected}`);
    assert.ok(!svg.includes(longMessage), "SVG should NOT include full long message");
  });

  it("Should not truncate short messages", async function () {
    const { bragNFT, donor } = await deployContracts();
    const shortMessage = "Short msg";

    await bragNFT.write.donate([shortMessage, ""], {
      account: donor.account,
      value: parseEther("0.1")
    });

    const uri = await bragNFT.read.tokenURI([0n]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

    assert.ok(svg.includes(shortMessage), `SVG should include full short message: ${shortMessage}`);
    assert.ok(!svg.includes("..."), "SVG should not include ellipsis for short message");
  });

  it("Should enforce minimum donation for single donations", async function () {
    const { bragNFT, donor } = await deployContracts();
    const lowDonation = parseEther("0.05"); // Min is 0.1

    await assert.rejects(
      bragNFT.write.donate(["Too low", ""], {
        account: donor.account,
        value: lowDonation
      }),
      /Donation below minimum/
    );
  });

  it("Should handle dust correctly in batchDonate", async function () {
    const { bragNFT, donor, treasury } = await deployContracts();
    const messages = ["M1", "M2", "M3"];
    const mediaURIs = ["", "", ""];
    const onChainFlags = [false, false, false];

    // 0.300000000000000001 ETH
    const totalDonation = parseEther("0.3") + 1n;

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.batchDonate([messages, mediaURIs, onChainFlags], {
      account: donor.account,
      value: totalDonation
    });

    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + totalDonation);
  });
});
