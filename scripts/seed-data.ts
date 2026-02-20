import fs from "fs";
import path from "path";
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

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const chain = isSepolia ? sepolia : hardhatLocal;
    const rpcUrl = process.env.RPC_URL || (isSepolia ? process.env.SEPOLIA_RPC_URL : "http://127.0.0.1:8545");

    if (isSepolia && (!process.env.ALCHEMY_API_KEY || !process.env.ALCHEMY_GAS_POLICY_ID)) {
        console.warn("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for Sepolia. Transactions might fail if not funded.");
    }

    let privateKey0 = (isSepolia ? process.env.SEPOLIA_PRIVATE_KEY : "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80") as string;
    if (privateKey0 && !privateKey0.startsWith("0x")) {
        privateKey0 = `0x${privateKey0}`;
    }
    let privateKey1 = (isSepolia ? process.env.SEPOLIA_BUYER_PRIVATE_KEY : "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d") as string;
    if (privateKey1 && !privateKey1.startsWith("0x")) {
        privateKey1 = `0x${privateKey1}`;
    }

    const account0 = privateKeyToAccount(privateKey0 as Hex);
    const account1 = privateKeyToAccount(privateKey1 as Hex);
    const signer0 = LocalAccountSigner.privateKeyToAccountSigner(privateKey0 as Hex);
    const signer1 = LocalAccountSigner.privateKeyToAccountSigner(privateKey1 as Hex);

    const publicClient = createPublicClient({
        chain,
        transport: http(rpcUrl)
    });

    let client0: any = createWalletClient({
        account: account0,
        chain,
        transport: http(rpcUrl)
    });

    let client1: any = createWalletClient({
        account: account1,
        chain,
        transport: http(rpcUrl)
    });

    // If Sepolia, use Alchemy Smart Accounts
    if (isSepolia) {
        console.log("Setting up Alchemy Smart Accounts for Sepolia...");
        // This is a simplified setup. In a real scenario, you'd use the Alchemy SDK more extensively.
        // For the sake of this script, we'll try to use the Smart Account Clients if possible.
        try {
            const transport = http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);

            client0 = await createAlchemySmartAccountClient({
                transport,
                chain,
                rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
                account: await createMultiOwnerLightAccount({
                    transport,
                    chain,
                    signer: signer0,
                }),
                gasManagerConfig: {
                    policyId: process.env.ALCHEMY_GAS_POLICY_ID!,
                },
            });

            client1 = await createAlchemySmartAccountClient({
                transport,
                chain,
                rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
                account: await createMultiOwnerLightAccount({
                    transport,
                    chain,
                    signer: signer1,
                }),
                gasManagerConfig: {
                    policyId: process.env.ALCHEMY_GAS_POLICY_ID!,
                },
            });
            console.log("Smart Accounts ready:", client0.account.address, client1.account.address);
            client0 = client0.extend(walletActions);
            client1 = client1.extend(walletActions);
        } catch (e) {
            console.error("Failed to setup Alchemy Smart Accounts:", e);
            console.log("Falling back to EOA...");
        }
    }

    const chainId = await publicClient.getChainId();
    const deploymentPath = path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`);
    if (!fs.existsSync(deploymentPath)) {
        throw new Error(`Deployment not found at ${deploymentPath}. Please deploy first.`);
    }
    const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

    const bragNFTAddr = deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const registryAddr = deployment["AppModule#ExhibitRegistry"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];

    console.log("Contracts:", { bragNFTAddr, bragTokenAddr, registryAddr, marketplaceAddr });

    // Robust tx handler with retries
    async function sendWithRetry(client: any, params: any, retries = 3) {
        for (let i = 0; i < retries; i++) {
            try {
                const hash = await client.sendTransaction(params);
                return await publicClient.waitForTransactionReceipt({ hash });
            } catch (e: any) {
                console.warn(`Transaction failed (attempt ${i + 1}/${retries}): ${e.message}`);
                if (i === retries - 1) throw e;
                await new Promise(r => setTimeout(r, 5000)); // Wait 5s before retry
            }
        }
    }

    // Helper to wait for tx
    async function waitForTx(tx: any) {
        const hash = typeof tx === 'string' ? tx : (tx.hash || tx.transactionHash);
        return publicClient.waitForTransactionReceipt({ hash });
    }

    // 1. User A: Mint BragNFT by donating
    console.log("User A: Minting BragNFT...");
    const donateReceipt = await sendWithRetry(client0, {
        to: bragNFTAddr,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'donate',
                    type: 'function',
                    inputs: [{ name: 'message', type: 'string' }, { name: 'media', type: 'string' }],
                    outputs: [],
                    stateMutability: 'payable'
                }
            ],
            args: ["Seeding data!", "https://picsum.photos/400"]
        }),
        value: parseEther("0.001") // Using small amount
    });

    // Get tokenId from logs
    // We'll look for the Donated event in BragNFT
    const bragNFTArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));

    let tokenId = 0n;
    for (const log of donateReceipt.logs) {
        try {
            const decoded = decodeEventLog({
                abi: bragNFTArtifact.abi,
                data: log.data,
                topics: log.topics
            });
            if (decoded.eventName === 'Donated') {
                tokenId = (decoded.args as any).nftTokenId;
                break;
            }
        } catch (e) {
            // Ignore logs that don't match the ABI
        }
    }
    console.log(`Using Token ID: ${tokenId}`);

    // 2. User A: Deploy 5 ExhibitVault instances
    const vaultNames = ["minecraft-server-1", "minecraft-server-2", "gallery-1", "roblox-1", "custom-1"];
    const vaultAddresses: string[] = [];

    // We need the ExhibitVault bytecode. We'll read it from artifacts.
    const artifactPath = path.join(process.cwd(), "artifacts/contracts/ExhibitVault.sol/ExhibitVault.json");
    const { abi: vaultAbi, bytecode: vaultBytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

    console.log("Deploying 5 vaults...");
    for (const name of vaultNames) {
        console.log(`Deploying ${name}...`);
        // Smart accounts might not support direct contract deployment easily via sendTransaction if they are ERC-4337
        // but Alchemy's client usually handles it or we use EOA for deployment if needed.
        // For simplicity and since vaults are "community" assets, we might use EOA to deploy if SCA fails.
        let vaultAddr: string;
        const vaultDeployData = encodeDeployData({ abi: vaultAbi, args: [registryAddr], bytecode: vaultBytecode });

        if (isSepolia) {
            console.log(`Deploying ${name} via factory (Gasless)...`);
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            const salt = keccak256(toHex(`${name}-${Date.now()}`));
            const data = concat([salt, vaultDeployData]);

            await sendWithRetry(client0, {
                to: factoryAddress,
                data
            });

            vaultAddr = getContractAddress({
                bytecode: vaultDeployData,
                from: factoryAddress,
                opcode: "CREATE2",
                salt
            });
        } else {
            console.log(`Deploying ${name} via EOA (Local)...`);
            const eoaClient = createWalletClient({ account: account0, chain, transport: http(rpcUrl) }).extend(walletActions);
            const hash = await eoaClient.deployContract({
                abi: vaultAbi,
                bytecode: vaultBytecode,
                args: [registryAddr]
            });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            vaultAddr = receipt.contractAddress!;
        }
        console.log(`Deployed ${name} at ${vaultAddr}`);
        vaultAddresses.push(vaultAddr);

        // Register vault
        console.log(`Registering ${name}...`);
        await sendWithRetry(client0, {
            to: registryAddr,
            data: encodeFunctionData({
                abi: [
                    {
                        name: 'verifyVault',
                        type: 'function',
                        inputs: [
                            { name: 'vault', type: 'address' },
                            { name: 'locationType', type: 'uint8' },
                            { name: 'name', type: 'string' },
                            { name: 'description', type: 'string' }
                        ],
                        outputs: []
                    }
                ],
                args: [vaultAddr, 0, name, `Seeded vault for ${name}`]
            })
        });
    }

    // 3. User A: Exhibit the BragNFT in minecraft-server-1
    console.log("Exhibiting NFT in minecraft-server-1...");
    const vault1 = vaultAddresses[0];
    await sendWithRetry(client0, {
        to: bragNFTAddr,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'safeTransferFrom',
                    type: 'function',
                    inputs: [
                        { name: 'from', type: 'address' },
                        { name: 'to', type: 'address' },
                        { name: 'tokenId', type: 'uint256' },
                        { name: 'data', type: 'bytes' }
                    ],
                    outputs: []
                }
            ],
            args: [client0.account.address, vault1, tokenId, "0x"]
        })
    });

    // 4. User A: Move the BragNFT from minecraft-server-1 to minecraft-server-2
    console.log("Moving NFT from minecraft-server-1 to minecraft-server-2...");
    const vault2 = vaultAddresses[1];
    await sendWithRetry(client0, {
        to: vault1,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'move721',
                    type: 'function',
                    inputs: [
                        { name: 'nftContract', type: 'address' },
                        { name: 'tokenId', type: 'uint256' },
                        { name: 'destinationVault', type: 'address' }
                    ],
                    outputs: []
                }
            ],
            args: [bragNFTAddr, tokenId, vault2]
        })
    });

    // 5. User A: Withdraw the BragNFT from minecraft-server-2
    console.log("Withdrawing NFT from minecraft-server-2...");
    await sendWithRetry(client0, {
        to: vault2,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'withdraw721',
                    type: 'function',
                    inputs: [
                        { name: 'nftContract', type: 'address' },
                        { name: 'tokenId', type: 'uint256' }
                    ],
                    outputs: []
                }
            ],
            args: [bragNFTAddr, tokenId]
        })
    });

    // 6. User B: Create an offer for the BragNFT in the NFTMarketplace using BragToken
    console.log("User B: Creating offer on Marketplace...");
    const offerPrice = parseEther("100");

    // First, ensure User B has enough tokens.
    // Since client0 (Account #0) is the admin, it can grant itself MINTER_ROLE and mint tokens.
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6" as Hex;

    console.log("Checking MINTER_ROLE for Account #0 on BragToken...");
    const hasRole = await publicClient.readContract({
        address: bragTokenAddr,
        abi: [{ name: 'hasRole', type: 'function', inputs: [{ name: 'role', type: 'bytes32' }, { name: 'account', type: 'address' }], outputs: [{ name: '', type: 'bool' }] }],
        args: [MINTER_ROLE, account0.address]
    });

    if (!hasRole) {
        console.log("Granting MINTER_ROLE to Account #0...");
        await sendWithRetry(client0, {
            to: bragTokenAddr,
            data: encodeFunctionData({
                abi: [{ name: 'grantRole', type: 'function', inputs: [{ name: 'role', type: 'bytes32' }, { name: 'account', type: 'address' }], outputs: [] }],
                args: [MINTER_ROLE, account0.address]
            })
        });
    }

    console.log("Minting BragTokens to User B...");
    await sendWithRetry(client0, {
        to: bragTokenAddr,
        data: encodeFunctionData({
            abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }],
            args: [client1.account.address, offerPrice * 2n]
        })
    });

    console.log("User B: Approving Marketplace...");
    await sendWithRetry(client1, {
        to: bragTokenAddr,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'approve',
                    type: 'function',
                    inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }],
                    outputs: [{ name: '', type: 'bool' }]
                }
            ],
            args: [marketplaceAddr, offerPrice]
        })
    });

    console.log("User B: Creating offer...");
    await sendWithRetry(client1, {
        to: marketplaceAddr,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'createOffer',
                    type: 'function',
                    inputs: [
                        { name: 'nftContract', type: 'address' },
                        { name: 'tokenId', type: 'uint256' },
                        { name: 'amount', type: 'uint256' },
                        { name: 'price', type: 'uint256' }
                    ],
                    outputs: []
                }
            ],
            args: [bragNFTAddr, tokenId, 1n, offerPrice]
        })
    });

    // 7. User A: Accept the offer
    console.log("User A: Accepting offer...");
    console.log("User A: Approving NFT for Marketplace...");
    await sendWithRetry(client0, {
        to: bragNFTAddr,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'approve',
                    type: 'function',
                    inputs: [{ name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }],
                    outputs: []
                }
            ],
            args: [marketplaceAddr, tokenId]
        })
    });

    await sendWithRetry(client0, {
        to: marketplaceAddr,
        data: encodeFunctionData({
            abi: [
                {
                    name: 'acceptOffer',
                    type: 'function',
                    inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }],
                    outputs: []
                }
            ],
            args: [bragNFTAddr, tokenId]
        })
    });

    console.log("Offer accepted! NFT should now be owned by User B.");

    // Summary of addresses
    const artifacts = {
        network: networkName,
        chainId,
        vaults: vaultNames.reduce((acc, name, i) => ({ ...acc, [name]: vaultAddresses[i] }), {}),
        userA: client0.account.address,
        userB: client1.account.address,
    };

    console.log("Seeding complete!");
    console.log(JSON.stringify(artifacts, null, 2));

    if (isSepolia) {
        const artifactDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
        if (!fs.existsSync(artifactDir)) {
            fs.mkdirSync(artifactDir, { recursive: true });
        }
        const artifactFile = path.join(artifactDir, `seed_artifacts.json`);
        fs.writeFileSync(artifactFile, JSON.stringify(artifacts, null, 2));
        console.log(`Artifacts saved to ${artifactFile}`);
    }
}

main().catch(console.error);
