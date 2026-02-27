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
    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`) :
                    "http://127.0.0.1:8545");

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

    const bragNFTAddr = deployment["AppModule#Nexus"] || deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const registryAddr = deployment["AppModule#ExhibitRegistry"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];

    console.log("Contracts:", { bragNFTAddr, bragTokenAddr, registryAddr, marketplaceAddr });

    // Use dust ETH for Sepolia donation as requested
    const donationAmount = isSepolia ? parseEther("0.00000001") : parseEther("0.001");

    async function ensureFunding(smartAccountClient: any, eoaAccount: any, label: string) {
        if (!isSepolia) return;
        const balance = await publicClient.getBalance({ address: smartAccountClient.account.address });
        if (balance < donationAmount) {
            console.log(`${label} balance (${formatEther(balance)} ETH) is less than required (${formatEther(donationAmount)} ETH). Funding from EOA...`);
            const eoaClient = createWalletClient({
                account: eoaAccount,
                chain,
                transport: http(rpcUrl)
            });
            const hash = await eoaClient.sendTransaction({
                to: smartAccountClient.account.address,
                value: parseEther("0.000000001"), // Transfer some dust
            });
            await publicClient.waitForTransactionReceipt({ hash });
            console.log(`Transferred 0.000000001 ETH from EOA to ${label}`);
        }
    }

    if (isSepolia) {
        await ensureFunding(client0, account0, "Smart Account 0");
        await ensureFunding(client1, account1, "Smart Account 1");
    }

    // Helper to send multiple transactions (batched if supported)
    async function sendTransactions(client: any, requests: any[]) {
        if (isSepolia) {
            const uoResponse = await client.sendUserOperation({
                uo: requests.map(r => ({
                    target: r.target,
                    data: r.data,
                    value: r.value
                }))
            });
            const txHash = await client.waitForUserOperationTransaction(uoResponse);
            return await publicClient.waitForTransactionReceipt({ hash: txHash });
        } else {
            let lastReceipt;
            for (const request of requests) {
                const hash = await client.sendTransaction({
                    ...request,
                    to: request.target
                });
                lastReceipt = await publicClient.waitForTransactionReceipt({ hash });
            }
            return lastReceipt;
        }
    }

    async function waitForTx(client: any, uoResponse: any) {
        // Check if this is an Alchemy UserOperation response
        if (uoResponse && typeof uoResponse === 'object' && 'hash' in uoResponse) {
            console.log("Waiting for UserOp to be bundled...", uoResponse.hash);

            // 1. Wait for the Bundler to turn the UserOp into a real Transaction
            // This returns the standard Ethereum Tx Hash
            const txHash = await client.waitForUserOperationTransaction({
                hash: uoResponse.hash
            });

            console.log("UserOp bundled! Tx Hash:", txHash);

            // 2. Wait for the actual block confirmation
            return await publicClient.waitForTransactionReceipt({ hash: txHash });
        }

        // Fallback for standard EOA string hashes
        const hash = typeof uoResponse === 'string' ? uoResponse : uoResponse?.hash;
        return await publicClient.waitForTransactionReceipt({ hash });
    }




    // 1. User A: Mint Multiple BragNFTs by donating
    console.log("User A: Minting Multiple BragNFTs...");

    const seedNFTData = [
        { message: "Seeding data 1!", media: "https://picsum.photos/406" },
        { message: "Seeding data 2!", media: "https://picsum.photos/407" },
        { message: "Seeding data 3!", media: "https://picsum.photos/408" }
    ];

    let lastTokenId = 0n;
    const bragNFTArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));

    for (const seed of seedNFTData) {
        console.log(`Minting: ${seed.message}`);
        let donateTxHash;
        if (isSepolia) {
            // Using sendUserOperation instead of sendTransaction for Gasless/AA
            donateTxHash = await client0.sendUserOperation({
                uo: {
                    target: bragNFTAddr,
                    data: encodeFunctionData({
                        abi: [{
                            name: 'donate',
                            type: 'function',
                            inputs: [
                                { name: 'message', type: 'string' },
                                { name: 'media', type: 'string' }
                            ],
                            outputs: [],
                            stateMutability: 'payable'
                        }],
                        args: [seed.message, seed.media]
                    }),
                    value: donationAmount
                }
            });
        } else {
            // Standard EOA transaction for local
            donateTxHash = await client0.sendTransaction({
                to: bragNFTAddr,
                data: encodeFunctionData({
                    abi: [{
                        name: 'donate',
                        type: 'function',
                        inputs: [
                            { name: 'message', type: 'string' },
                            { name: 'media', type: 'string' }
                        ],
                        outputs: [],
                        stateMutability: 'payable'
                    }],
                    args: [seed.message, seed.media]
                }),
                value: donationAmount
            });
        }

        const donateReceipt = await waitForTx(client0, donateTxHash);

        // Get tokenId from logs
        for (const log of donateReceipt.logs) {
            try {
                const decoded = decodeEventLog({
                    abi: bragNFTArtifact.abi,
                    data: log.data,
                    topics: log.topics
                });
                if (decoded.eventName === 'Donated') {
                    lastTokenId = (decoded.args as any).nftTokenId;
                    console.log(`Minted Token ID: ${lastTokenId}`);
                    break;
                }
            } catch (e) {
                // Ignore logs that don't match the ABI
            }
        }
    }

    const tokenId = lastTokenId;
    console.log(`Using Token ID for further operations: ${tokenId}`);

    // 2. User A: Deploy 5 ExhibitVault instances
    const vaultNames = ["server-1", "server-2", "gallery-1", "custom-1"];
    const vaultAddresses: string[] = [];

    // We need the ExhibitVault bytecode. We'll read it from artifacts.
    const artifactPath = path.join(process.cwd(), "artifacts/contracts/ExhibitVault.sol/ExhibitVault.json");
    const { abi: vaultAbi, bytecode: vaultBytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

    console.log("Deploying and registering 5 vaults...");
    const vaultBatch: any[] = [];
    const timestamp = Date.now();

    for (const name of vaultNames) {
        const salt = keccak256(toHex(`${name}-${timestamp}`));
        const vaultDeployData = encodeDeployData({ abi: vaultAbi, args: [registryAddr], bytecode: vaultBytecode });
        const vaultAddr = getContractAddress({
            bytecode: vaultDeployData,
            from: "0x4e59b44847b379578588920cA78FbF26c0B4956C",
            opcode: "CREATE2",
            salt
        });

        if (isSepolia) {
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            const data = concat([salt, vaultDeployData]);
            vaultBatch.push({ target: factoryAddress, data });

            // Register call
            vaultBatch.push({
                target: registryAddr,
                data: encodeFunctionData({
                    abi: [{ name: 'verifyVault', type: 'function', inputs: [{ name: 'vault', type: 'address' }, { name: 'locationType', type: 'uint8' }, { name: 'name', type: 'string' }, { name: 'description', type: 'string' }], outputs: [] }],
                    args: [vaultAddr, 0, name, `Seeded vault for ${name}`]
                })
            });
            vaultAddresses.push(vaultAddr);
        } else {
            console.log(`Deploying ${name} via EOA (Local)...`);
            const eoaClient = createWalletClient({ account: account0, chain, transport: http(rpcUrl) }).extend(walletActions);
            const hash = await eoaClient.deployContract({
                abi: vaultAbi,
                bytecode: vaultBytecode,
                args: [registryAddr]
            });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            const deployedAddr = receipt.contractAddress!;
            console.log(`Deployed ${name} at ${deployedAddr}`);
            vaultAddresses.push(deployedAddr);

            const regTx = await client0.sendTransaction({
                to: registryAddr,
                data: encodeFunctionData({
                    abi: [{ name: 'verifyVault', type: 'function', inputs: [{ name: 'vault', type: 'address' }, { name: 'locationType', type: 'uint8' }, { name: 'name', type: 'string' }, { name: 'description', type: 'string' }], outputs: [] }],
                    args: [deployedAddr, 0, name, `Seeded vault for ${name}`]
                })
            });
            await waitForTx(client0, regTx);
        }
    }

    if (vaultBatch.length > 0) {
        console.log(`Sending batch/sequence of ${vaultBatch.length} deployment/registration transactions...`);
        await sendTransactions(client0, vaultBatch);
        console.log("Vault batch complete!");
    }

    // 3-5. User A actions: Exhibit, Move, Withdraw
    console.log("Batching User A actions (Exhibit, Move, Withdraw)...");
    const vault1 = vaultAddresses[0];
    const vault2 = vaultAddresses[1];

    const userAActions: any[] = [
        // Exhibit
        {
            target: bragNFTAddr,
            data: encodeFunctionData({
                abi: [{ name: 'safeTransferFrom', type: 'function', inputs: [{ name: 'from', type: 'address' }, { name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'data', type: 'bytes' }], outputs: [] }],
                args: [client0.account.address, vault1, tokenId, "0x"]
            })
        },
        // Move
        {
            target: vault1,
            data: encodeFunctionData({
                abi: [{ name: 'move721', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'destinationVault', type: 'address' }], outputs: [] }],
                args: [bragNFTAddr, tokenId, vault2]
            })
        },
        // Withdraw
        {
            target: vault2,
            data: encodeFunctionData({
                abi: [{ name: 'withdraw721', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }],
                args: [bragNFTAddr, tokenId]
            })
        }
    ];

    await sendTransactions(client0, userAActions);

    // 6. User B: Create an offer for the BragNFT in the NFTMarketplace using BragToken
    console.log("User B: Creating offer on Marketplace...");
    const offerPrice = parseEther("0.000000001");

    // First, ensure User B has enough tokens.
    // Since client0 (Account #0) is the admin, it can grant itself MINTER_ROLE and mint tokens.
    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6" as Hex;

    console.log("User B: Minting and Offering...");
    const setupUserBTxs: any[] = [
        {
            target: bragTokenAddr,
            data: encodeFunctionData({
                abi: [{ name: 'grantRole', type: 'function', inputs: [{ name: 'role', type: 'bytes32' }, { name: 'account', type: 'address' }], outputs: [] }],
                args: [MINTER_ROLE, account0.address]
            })
        },
        {
            target: bragTokenAddr,
            data: encodeFunctionData({
                abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }],
                args: [client1.account.address, offerPrice * 2n]
            })
        }
    ];
    await sendTransactions(client0, setupUserBTxs);

    const userBOfferTxs: any[] = [
        {
            target: bragTokenAddr,
            data: encodeFunctionData({
                abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ name: '', type: 'bool' }] }],
                args: [marketplaceAddr, offerPrice]
            })
        },
        {
            target: marketplaceAddr,
            data: encodeFunctionData({
                abi: [{ name: 'createOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'amount', type: 'uint256' }, { name: 'price', type: 'uint256' }], outputs: [] }],
                args: [bragNFTAddr, tokenId, 1n, offerPrice]
            })
        }
    ];
    await sendTransactions(client1, userBOfferTxs);

    // 7. User A: Accept the offer
    console.log("User A: Accepting offer...");
    const userAAcceptTxs: any[] = [
        {
            target: bragNFTAddr,
            data: encodeFunctionData({
                abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }],
                args: [marketplaceAddr, tokenId]
            })
        },
        {
            target: marketplaceAddr,
            data: encodeFunctionData({
                abi: [{ name: 'acceptOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'buyer', type: 'address' }], outputs: [] }],
                args: [bragNFTAddr, tokenId, client1.account.address]
            })
        }
    ];
    await sendTransactions(client0, userAAcceptTxs);

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
