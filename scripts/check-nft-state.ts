import hre from "hardhat";
import fs from "fs";
import path from "path";
import { formatUnits, createPublicClient, http, getContract } from "viem";
import { localhost } from "viem/chains";

async function main() {
  const publicClient = createPublicClient({ chain: localhost, transport: http("http://127.0.0.1:8545") });
  const chainId = await publicClient.getChainId();
  const deploymentPath = path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`);
  const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

  const bragNFTAddr = deployment["AppModule#BragNFT"];
  const artifactPath = path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json");
  const { abi } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  const BragNFT = getContract({ address: bragNFTAddr, abi, client: publicClient });

  console.log("BragNFT Address:", bragNFTAddr);

  const nextTokenId = await BragNFT.read.nextTokenId() as bigint;
  console.log("Total Supply (nextTokenId):", nextTokenId.toString());

  for (let i = 0n; i < nextTokenId; i++) {
    const tax = await BragNFT.read.taxRegistry([i]) as any[];
    // taxRegistry returns a struct which viem represents as an array or object depending on ABI
    // struct PermanentRecord { address originalDonor; uint256 usdValue; uint256 timestamp; TaxStatus status; string message; }

    console.log(`Token ID ${i}:`);
    console.log(`  Tax Donor: ${tax[0]}`);
    console.log(`  USD Value: ${formatUnits(tax[1], 8)}`);
    console.log(`  Status: ${tax[3]}`);
    console.log(`  Message: ${tax[4]}`);

    const owner = await BragNFT.read.ownerOf([i]);
    console.log(`  Current Owner: ${owner}`);
  }
}

main().catch(console.error);
