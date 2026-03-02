const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  console.log("Minting Nexus with account:", owner.address);

  // In Hardhat Ignition, contract names are prefixed with module name
  // But we can also just use the address from the deployment
  const fs = require('fs');
  const deployment = JSON.parse(fs.readFileSync('ignition/deployments/chain-31337/deployed_addresses.json', 'utf8'));
  const nexusAddr = deployment['AppModule#Nexus'];

  const Nexus = await hre.ethers.getContractAt("Nexus", nexusAddr);

  console.log('Minting...');
  const tx = await Nexus.donate("Helping the world!", "https://picsum.photos/400", {
    value: hre.ethers.parseEther("0.1")
  });
  await tx.wait();
  console.log("Minted NFT #0");

  const tx2 = await Nexus.donate("Another great cause!", "https://picsum.photos/401", {
    value: hre.ethers.parseEther("0.2")
  });
  await tx2.wait();
  console.log("Minted NFT #1");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
