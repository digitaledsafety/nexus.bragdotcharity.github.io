const fs = require("fs");
const path = require("path");

const contracts = ["BragNFT", "SummonRegistry", "SummonVault", "Exhibition", "NFTMarketplace", "DonationReceipt"];
const output = {};

contracts.forEach(name => {
  const artifactPath = path.join(__dirname, "..", "artifacts", "contracts", `${name}.sol`, `${name}.json`);
  if (fs.existsSync(artifactPath)) {
    const data = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
    output[name] = {
      abi: data.abi,
      bytecode: data.bytecode
    };
    console.log(`Extracted ABI for ${name}`);
  } else {
    console.warn(`Warning: Artifact for ${name} not found at ${artifactPath}`);
  }
});

// Try to find deployment addresses in ignition/deployments
// This is a bit heuristic since there might be multiple deployments
const deploymentsDir = path.join(__dirname, "..", "ignition", "deployments");
const addresses = {};

if (fs.existsSync(deploymentsDir)) {
  const chains = fs.readdirSync(deploymentsDir);
  chains.forEach(chain => {
    const deployedContractsPath = path.join(deploymentsDir, chain, "deployed_addresses.json");
    if (fs.existsSync(deployedContractsPath)) {
      const deployed = JSON.parse(fs.readFileSync(deployedContractsPath, "utf8"));
      // We map the instance names (e.g. "AppModule#BragNFT") to the contract names
      for (const [key, addr] of Object.entries(deployed)) {
        const nameMatch = key.split("#")[1];
        if (nameMatch && contracts.includes(nameMatch)) {
          if (!addresses[chain]) addresses[chain] = {};
          addresses[chain][nameMatch] = addr;
        }
      }
    }
  });
}

const finalData = {
  contracts: output,
  deployments: addresses
};

const content = `const CONTRACT_DATA = ${JSON.stringify(finalData, null, 2)};`;

const frontendPath = path.join(__dirname, "..", "frontend", "contracts.js");
fs.writeFileSync(frontendPath, content);
console.log(`Successfully updated ${frontendPath}`);
