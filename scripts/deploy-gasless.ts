import fs from "fs";
import path from "path";
import {
    createPublicClient,
    http,
    parseEther,
    getAddress,
    encodeFunctionData,
    Hex,
    defineChain,
    walletActions,
    encodeDeployData,
    concat,
    getContractAddress,
    keccak256,
    toHex
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { localhost, sepolia } from "viem/chains";

// @ts-ignore
import { createMultiOwnerLightAccount } from "@alchemy/aa-accounts";
// @ts-ignore
import { createAlchemySmartAccountClient } from "@alchemy/aa-alchemy";
// @ts-ignore
import { LocalAccountSigner } from "@alchemy/aa-core";

const hardhatLocal = defineChain({
    ...localhost,
    id: 31337,
});

const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000" as Hex;
const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6" as Hex;
const TREASURY_ROLE = "0x3563722e0e0a544b91425d15adf6020ad7b9d4c5307691425d15adf6020ad7b9d" as Hex; // keccak256("TREASURY_ROLE")
const VERIFIER_ROLE = "0x0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09" as Hex; // keccak256("VERIFIER_ROLE")

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const chain = isSepolia ? sepolia : hardhatLocal;
    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`) :
                    "http://127.0.0.1:8545");

    if (isSepolia && (!process.env.ALCHEMY_API_KEY || !process.env.ALCHEMY_GAS_POLICY_ID)) {
        throw new Error("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless Sepolia deployment.");
    }

    let privateKey = (isSepolia ? process.env.SEPOLIA_PRIVATE_KEY : "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80") as string;
    if (privateKey) privateKey = privateKey.trim();

    if (isSepolia && !privateKey) {
        throw new Error("Missing SEPOLIA_PRIVATE_KEY environment variable.");
    }
    if (privateKey && !privateKey.startsWith("0x")) {
        privateKey = `0x${privateKey}`;
    }
    if (privateKey && !/^(0x)?[0-9a-fA-F]{64}$/.test(privateKey)) {
        throw new Error("Invalid private key format. Expected 32-byte hex string.");
    }
    const viemAccount = privateKeyToAccount(privateKey as Hex);
    const eoaAddress = viemAccount.address;
    const signer = LocalAccountSigner.privateKeyToAccountSigner(privateKey as Hex);

    const publicClient = createPublicClient({
        chain,
        transport: http(rpcUrl)
    });

    console.log(`Deploying contracts to ${networkName} gaslessly...`);
    console.log(`EOA Address (to become owner): ${eoaAddress}`);

    const transport = http(isSepolia ? `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` : rpcUrl);

    // Create Smart Account Client
    const smartAccountClient = await createAlchemySmartAccountClient({
        transport,
        chain,
        account: await createMultiOwnerLightAccount({
            transport,
            chain,
            signer,
        }),
        rpcUrl: isSepolia ? `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` : rpcUrl,
        ...(isSepolia ? {
            gasManagerConfig: {
                policyId: process.env.ALCHEMY_GAS_POLICY_ID!,
            }
        } : {}),
    });

    const scaAddress = smartAccountClient.account.address;
    console.log(`Smart Contract Account Address: ${scaAddress}`);

    // Extend with wallet actions to get deployContract
    const client = smartAccountClient.extend(walletActions);

    // Helper to deploy contract
    async function deploy(name: string, args: any[]) {
        console.log(`Deploying ${name}...`);
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

        const deployData = encodeDeployData({ abi, args, bytecode });

        if (isSepolia) {
            // Use Arachnid Deterministic Deployment Proxy (Nick's Factory)
            // This is pre-deployed at 0x4e59b44847b379578588920cA78FbF26c0B4956C on many networks
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            // Create a unique salt for each contract in this run to avoid collisions
            const salt = keccak256(toHex(`${name}-${Date.now()}`));
            const data = concat([salt, deployData]);

            console.log(`Deploying ${name} via factory...`);
            try {
                const uoResponse = await smartAccountClient.sendUserOperation({
                    uo: {
                        target: factoryAddress,
                        data
                    }
                });
                const txHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
                await publicClient.waitForTransactionReceipt({ hash: txHash });

                const deployedAddress = getContractAddress({
                    bytecode: deployData,
                    from: factoryAddress,
                    opcode: "CREATE2",
                    salt
                });

                console.log(`${name} deployed at ${deployedAddress}`);
                return { address: deployedAddress, abi };
            } catch (e: any) {
                console.error(`Factory deployment failed for ${name}: ${e.message}`);
                throw e;
            }
        } else {
            // Local fallback to EOA
            console.log(`Deploying ${name} via EOA (Local)...`);
            const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
            const hash = await eoaClient.deployContract({
                abi,
                bytecode,
                args
            });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            console.log(`${name} deployed at ${receipt.contractAddress}`);
            return { address: receipt.contractAddress!, abi };
        }
    }

    // Replication of ignition/modules/App.ts
    const minimumDonation = 1n;
    const refundPeriod = 604800n;
    const externalTreasury = process.env.TREASURY_ADDRESS;

    let treasury;
    if (externalTreasury && externalTreasury !== "") {
        console.log(`Using external treasury: ${externalTreasury}`);
        treasury = { address: getAddress(externalTreasury) };
    } else {
        // Initially set SCA as owner so it can manage/transfer
        treasury = await deploy("Treasury", [scaAddress]);
    }

    const exhibitRegistry = await deploy("ExhibitRegistry", [scaAddress]);
    const donationReceipt = await deploy("DonationReceipt", [scaAddress]);
    const campaignMaxSupply = 100n;
    const campaignId = "initial-campaign";
    const bragNFT = await deploy("Nexus", [scaAddress, treasury.address, minimumDonation, campaignMaxSupply, campaignId]);

    const initialSupply = 0n;
    const maxSupply = 1000000000000000000000000000n;
    const bragToken = await deploy("BragToken", [scaAddress, initialSupply, maxSupply]);
    const marketplace = await deploy("NFTMarketplace", [bragToken.address]);

    console.log("Batching setup and ownership transfer...");
    const setupTxs: any[] = [
        // 1. donationReceipt.grantRole(MINTER_ROLE, bragNFT.address)
        {
            to: donationReceipt.address,
            data: encodeFunctionData({
                abi: donationReceipt.abi,
                functionName: "grantRole",
                args: [MINTER_ROLE, bragNFT.address]
            })
        },
        // 2. bragNFT.setReceiptContract(donationReceipt.address)
        {
            to: bragNFT.address,
            data: encodeFunctionData({
                abi: bragNFT.abi,
                functionName: "setReceiptContract",
                args: [donationReceipt.address]
            })
        },
        // 3. bragNFT.setBragToken(bragToken.address)
        {
            to: bragNFT.address,
            data: encodeFunctionData({
                abi: bragNFT.abi,
                functionName: "setBragToken",
                args: [bragToken.address]
            })
        },
        // 4. bragToken.grantRole(MINTER_ROLE, bragNFT.address)
        {
            to: bragToken.address,
            data: encodeFunctionData({
                abi: bragToken.abi,
                functionName: "grantRole",
                args: [MINTER_ROLE, bragNFT.address]
            })
        }
    ];

    // Ownership transfers
    const contractsToTransfer = [
        { name: "DonationReceipt", contract: donationReceipt },
        { name: "Nexus", contract: bragNFT },
        { name: "BragToken", contract: bragToken }
    ];

    for (const item of contractsToTransfer) {
        setupTxs.push({
            to: item.contract.address,
            data: encodeFunctionData({
                abi: item.contract.abi,
                functionName: "grantRole",
                args: [DEFAULT_ADMIN_ROLE, eoaAddress]
            })
        });
        // We do NOT renounce the SCA roles here to allow the Smart Account to perform seeding operations
    }

    // Seed initial NFTs
    const seedNFTs: { msg: string, img: string }[] = [];
    for (let i = 1; i <= 50; i++) {
        seedNFTs.push({ msg: `Gasless Seed #${i}`, img: `https://picsum.photos/seed/g${i}/400` });
    }

    for (const nft of seedNFTs) {
        setupTxs.push({
            to: bragNFT.address,
            data: encodeFunctionData({
                abi: [{
                    name: 'donate',
                    type: 'function',
                    inputs: [
                        { name: 'message', type: 'string' },
                        { name: 'tokenURI_', type: 'string' }
                    ],
                    outputs: [],
                    stateMutability: 'payable'
                }],
                functionName: "donate",
                args: [nft.msg, nft.img]
            }),
            value: minimumDonation
        });
    }

    if (!externalTreasury) {
        const treasuryAbi = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/Treasury.sol/Treasury.json"), "utf8")).abi;
        setupTxs.push({
            to: treasury.address,
            data: encodeFunctionData({
                abi: treasuryAbi,
                functionName: "grantRole",
                args: [DEFAULT_ADMIN_ROLE, eoaAddress]
            })
        });
        setupTxs.push({
            to: treasury.address,
            data: encodeFunctionData({
                abi: treasuryAbi,
                functionName: "grantRole",
                args: [TREASURY_ROLE, eoaAddress]
            })
        });
        // We do NOT renounce the SCA roles here to allow the Smart Account to perform seeding operations
    }

    setupTxs.push({
        to: exhibitRegistry.address,
        data: encodeFunctionData({
            abi: exhibitRegistry.abi,
            functionName: "grantRole",
            args: [DEFAULT_ADMIN_ROLE, eoaAddress]
        })
    });
    setupTxs.push({
        to: exhibitRegistry.address,
        data: encodeFunctionData({
            abi: exhibitRegistry.abi,
            functionName: "grantRole",
            args: [VERIFIER_ROLE, eoaAddress]
        })
    });
    // We do NOT renounce the SCA roles here to allow the Smart Account to perform seeding operations

    console.log(`Sending batch of ${setupTxs.length} transactions...`);
    const uoResponse = await smartAccountClient.sendUserOperation({
        uo: setupTxs.map(tx => ({
            target: tx.to,
            data: tx.data,
            value: tx.value
        }))
    });
    const batchTxHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
    await publicClient.waitForTransactionReceipt({ hash: batchTxHash });
    console.log("Batch setup complete!");

    // Save artifacts
    const chainId = await publicClient.getChainId();
    const deploymentDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
    if (!fs.existsSync(deploymentDir)) {
        fs.mkdirSync(deploymentDir, { recursive: true });
    }

    const deployedAddresses = {
        "AppModule#BragNFT": bragNFT.address,
        "AppModule#BragToken": bragToken.address,
        "AppModule#DonationReceipt": donationReceipt.address,
        "AppModule#ExhibitRegistry": exhibitRegistry.address,
        "AppModule#NFTMarketplace": marketplace.address,
        "AppModule#Nexus": bragNFT.address,
    } as any;

    if (!externalTreasury) {
        deployedAddresses["AppModule#Treasury"] = treasury.address;
    }

    fs.writeFileSync(
        path.join(deploymentDir, "deployed_addresses.json"),
        JSON.stringify(deployedAddresses, null, 2)
    );

    console.log("Deployment complete! Artifacts saved.");
    console.log(deployedAddresses);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
