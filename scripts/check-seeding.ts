import { createPublicClient, http, getAddress } from "viem";
import { localhost } from "viem/chains";
import fs from "fs";
import path from "path";

async function main() {
  const deployment = JSON.parse(fs.readFileSync("./ignition/deployments/chain-31337/deployed_addresses.json", "utf8"));
  const bragNFTAddress = deployment["AppModule#BragNFT"];

  const publicClient = createPublicClient({
    chain: localhost,
    transport: http("http://127.0.0.1:8545")
  });

  const artifactPath = path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json");
  const { abi } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  const totalSupply = await publicClient.readContract({
    address: bragNFTAddress as `0x${string}`,
    abi,
    functionName: "totalSupply",
  });

  console.log(`Total Supply of BragNFT: ${totalSupply.toString()}`);

  if (totalSupply.toString() === "50") {
    console.log("SUCCESS: 50 NFTs seeded.");
  } else {
    console.log(`FAILURE: Expected 50 NFTs, found ${totalSupply.toString()}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
