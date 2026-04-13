const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const deployment = require(`./ignition/deployments/chain-${hre.network.config.chainId}/deployed_addresses.json`);
  const bragNFTAddr = deployment["AppModule#BragNFT"];
  const BragNFT = await hre.ethers.getContractAt("BragNFT", bragNFTAddr);

  console.log("BragNFT Address:", bragNFTAddr);

  const totalSupply = await BragNFT.nextTokenId();
  console.log("Total Supply (nextTokenId):", totalSupply.toString());

  for (let i = 1; i < totalSupply; i++) {
    const donor = await BragNFT.originalDonors(i);
    const tax = await BragNFT.taxRegistry(i);
    console.log(`Token ID ${i}:`);
    console.log(`  Donor: ${donor}`);
    console.log(`  Tax Donor: ${tax.originalDonor}`);
    console.log(`  USD Value: ${hre.ethers.utils.formatUnits(tax.valuationUSD, 8)}`);
    console.log(`  Status: ${tax.status}`);
  }
}

main().catch(console.error);
