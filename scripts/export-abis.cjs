const fs = require("fs");
const path = require("path");

const output = {};
const contractsDir = path.join(__dirname, "..", "artifacts", "contracts");

if (fs.existsSync(contractsDir)) {
  const solFiles = fs.readdirSync(contractsDir);
  solFiles.forEach(solFolder => {
    if (solFolder.endsWith(".sol")) {
      const contractName = solFolder.replace(".sol", "");
      const artifactPath = path.join(contractsDir, solFolder, `${contractName}.json`);
      if (fs.existsSync(artifactPath)) {
        const data = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
        if (data.abi && data.abi.length > 0) {
          output[contractName] = {
            abi: data.abi,
            bytecode: data.bytecode
          };
          console.log(`Extracted ABI for ${contractName}`);
        }
      }
    }
  });
}

// Try to find deployment addresses in ignition/deployments
const deploymentsDir = path.join(__dirname, "..", "ignition", "deployments");
let addresses = {};

// Load existing deployments from contracts.js if it exists to avoid wiping them
const frontendPath = path.join(__dirname, "..", "frontend", "contracts.js");
if (fs.existsSync(frontendPath)) {
  const existingContent = fs.readFileSync(frontendPath, "utf8");
  const match = existingContent.match(/const CONTRACT_DATA = ({[\s\S]*});/);
  if (match) {
    try {
      const existingData = JSON.parse(match[1]);
      if (existingData.deployments) {
        addresses = existingData.deployments;
      }
    } catch (e) {
      console.warn("Could not parse existing deployments from contracts.js");
    }
  }
}

if (fs.existsSync(deploymentsDir)) {
  const chains = fs.readdirSync(deploymentsDir);
  chains.forEach(chain => {
    const deployedContractsPath = path.join(deploymentsDir, chain, "deployed_addresses.json");
    if (fs.existsSync(deployedContractsPath)) {
      const deployed = JSON.parse(fs.readFileSync(deployedContractsPath, "utf8"));
      for (const [key, addr] of Object.entries(deployed)) {
        const nameMatch = key.split("#")[1];
        if (nameMatch) {
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

fs.writeFileSync(frontendPath, content);
console.log(`Successfully updated ${frontendPath}`);
