import { createWalletClient, http, parseEther, publicActions } from 'viem';
import { localhost } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import fs from 'fs';

// Load contract addresses from Ignition deployments
const deployment = JSON.parse(fs.readFileSync('ignition/deployments/chain-31337/deployed_addresses.json', 'utf8'));
const bragNFTAddr = deployment['AppModule#BragNFT'];

// Account #0 from Hardhat
const account = privateKeyToAccount('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80');

const client = createWalletClient({
  account,
  chain: {
    ...localhost,
    id: 31337,
  },
  transport: http('http://127.0.0.1:8545'),
}).extend(publicActions);

// Minimal ABI for donate
const abi = [
  {
    "inputs": [
      { "internalType": "string", "name": "message", "type": "string" },
      { "internalType": "string", "name": "tokenURI_", "type": "string" }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

async function mint() {
  console.log('Minting BragNFT at', bragNFTAddr);
  try {
      const hash = await client.writeContract({
        address: bragNFTAddr,
        abi,
        functionName: 'donate',
        args: ['Helping the world!', 'https://picsum.photos/400'],
        value: parseEther('0.1'),
      });
      console.log('Minted! Hash:', hash);
  } catch (e) {
      console.error(e);
  }
}

mint();
