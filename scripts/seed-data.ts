import fs from "fs";
import path from "path";
import hre from "hardhat";
import {
    createPublicClient,
    createWalletClient,
    http,
    parseEther,
    formatEther,
    getAddress,
    encodeFunctionData,
    Hex,
    Chain,
    encodeAbiParameters,
    parseAbiParameters,
    encodePacked,
    defineChain,
    decodeEventLog,
    walletActions,
    encodeDeployData,
    concat,
    getContractAddress,
    keccak256,
    toHex
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { localhost, sepolia } from "viem/chains";

const hardhatLocal = defineChain({
    ...localhost,
    id: 31337,
});

// @ts-ignore
import { createLightAccountClient, createMultiOwnerLightAccount } from "@alchemy/aa-accounts";
// @ts-ignore
import { createAlchemySmartAccountClient } from "@alchemy/aa-alchemy";
// @ts-ignore
import { LocalAccountSigner } from "@alchemy/aa-core";

function getConfig(key: string, defaultValue?: string): string {
    if (process.env[key]) return process.env[key] as string;
    const vars = (hre.config as any).vars;
    if (vars && vars[key]) return vars[key];
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Config variable ${key} is not set in process.env or hardhat config`);
}

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const chain = isSepolia ? sepolia : hardhatLocal;
    const alchemyApiKey = getConfig("ALCHEMY_API_KEY", "");
    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`) :
                    "http://127.0.0.1:8545");

    let privateKey0 = process.env.LOCAL_PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    let privateKey1 = process.env.LOCAL_BUYER_PRIVATE_KEY || "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

    const account0 = privateKeyToAccount(privateKey0 as Hex);
    const account1 = privateKeyToAccount(privateKey1 as Hex);

    const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });
    const client0 = createWalletClient({ account: account0, chain, transport: http(rpcUrl) });
    const client1 = createWalletClient({ account: account1, chain, transport: http(rpcUrl) });

    const chainId = await publicClient.getChainId();
    const deploymentPath = path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`);
    if (!fs.existsSync(deploymentPath)) {
        throw new Error(`Deployment not found at ${deploymentPath}. Please deploy first.`);
    }
    const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

    const bragNFTAddr = deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];

    console.log("Seeding data for BragNFT at:", bragNFTAddr);

    const donationAmount = parseEther("0.1");
    const message = "Seeding data for the Dual-State model!";

    // 1. User A: Mint BragNFT
    const donateHash = await client0.sendTransaction({
        to: bragNFTAddr,
        data: encodeFunctionData({
            abi: [{ name: 'donate', type: 'function', inputs: [{ name: 'message', type: 'string' }, { name: 'tokenURI_', type: 'string' }], outputs: [], stateMutability: 'payable' }],
            args: [message, "https://picsum.photos/400"]
        }),
        value: donationAmount
    });
    const donateReceipt = await publicClient.waitForTransactionReceipt({ hash: donateHash });

    let tokenId = 0n;
    const bragNFTArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));
    for (const log of donateReceipt.logs) {
        try {
            const decoded = decodeEventLog({ abi: bragNFTArtifact.abi, data: log.data, topics: log.topics });
            if (decoded.eventName === 'Donated') { tokenId = (decoded.args as any).tokenId; break; }
        } catch (e) {}
    }
    console.log(`Minted Token ID: ${tokenId}`);

    // 2. Fund User B with BragToken
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6" as Hex;
    const mintTokensHash = await client0.sendTransaction({
        to: bragTokenAddr,
        data: encodeFunctionData({
            abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }],
            args: [account1.address, parseEther("10")]
        })
    });
    await publicClient.waitForTransactionReceipt({ hash: mintTokensHash });

    // 3. User B: Create offer
    const offerPrice = parseEther("1");
    const approveTokensHash = await client1.sendTransaction({
        to: bragTokenAddr,
        data: encodeFunctionData({
            abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ name: '', type: 'bool' }] }],
            args: [marketplaceAddr, offerPrice]
        })
    });
    await publicClient.waitForTransactionReceipt({ hash: approveTokensHash });

    const createOfferHash = await client1.sendTransaction({
        to: marketplaceAddr,
        data: encodeFunctionData({
            abi: [{ name: 'createOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'amount', type: 'uint256' }, { name: 'price', type: 'uint256' }], outputs: [] }],
            args: [bragNFTAddr, tokenId, 1n, offerPrice]
        })
    });
    await publicClient.waitForTransactionReceipt({ hash: createOfferHash });

    console.log("Seeding complete!");
}

main().catch(console.error);
