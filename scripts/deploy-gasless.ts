import fs from "fs";
import path from "path";
import {
    createPublicClient,
    createWalletClient,
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
import { localhost, sepolia, mainnet } from "viem/chains";

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
const TREASURY_ROLE = "0xe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca9" as Hex; // keccak256("TREASURY_ROLE")
const VERIFIER_ROLE = "0x0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09" as Hex; // keccak256("VERIFIER_ROLE")

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const isMainnet = networkName === "mainnet";
    const isLocal = networkName === "localhost" || networkName === "hardhat";

    const chain = isSepolia ? sepolia : (isMainnet ? mainnet : hardhatLocal);

    let rpcUrl = process.env.RPC_URL;
    if (!rpcUrl) {
        if (isSepolia) {
            rpcUrl = process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;
        } else if (isMainnet) {
            rpcUrl = process.env.MAINNET_RPC_URL || `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;
        } else {
            rpcUrl = "http://127.0.0.1:8545";
        }
    }

    if ((isSepolia || isMainnet) && (!process.env.ALCHEMY_API_KEY || !process.env.ALCHEMY_GAS_POLICY_ID)) {
        throw new Error(`Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless ${networkName} deployment.`);
    }

    let privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // Default local
    if (isSepolia) {
        privateKey = process.env.SEPOLIA_PRIVATE_KEY!;
    } else if (isMainnet) {
        privateKey = process.env.MAINNET_PRIVATE_KEY!;
    }
    if (privateKey && !privateKey.startsWith("0x")) {
        privateKey = `0x${privateKey}`;
    }
    const viemAccount = privateKeyToAccount(privateKey as Hex);
    const eoaAddress = viemAccount.address;
    const signer = LocalAccountSigner.privateKeyToAccountSigner(privateKey as Hex);

    const publicClient = createPublicClient({
        chain,
        transport: http(rpcUrl)
    });

    async function ensureArachnidFactory() {
        const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
        const code = await publicClient.getCode({ address: factoryAddress });
        if (!code || code === "0x") {
            console.log("Arachnid Factory not found at 0x4e59... Deploying it locally...");
            // Standard Nick's Factory RUNTIME bytecode
            const factoryRuntimeBytecode = "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3";

            // If on hardhat/local, we can use setCode
            if (isLocal) {
                // @ts-ignore
                await publicClient.request({
                    method: "hardhat_setCode",
                    params: [factoryAddress, factoryRuntimeBytecode],
                });
                console.log("Deployed Arachnid Factory via hardhat_setCode");
            } else {
                console.warn("Arachnid Factory missing on public network. Deterministic deployment might fail.");
            }
        } else {
            console.log("Arachnid Factory found at 0x4e59...");
        }
    }

    if (isLocal) {
        await ensureArachnidFactory();
    }

    console.log(`Deploying contracts to ${networkName} gaslessly...`);
    console.log(`EOA Address (to become owner): ${eoaAddress}`);

    const transport = http((isSepolia || isMainnet) ? `https://eth-${networkName}.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` : rpcUrl);

    let scaAddress: Hex;
    let smartAccountClient: any;

    if (isSepolia || isMainnet) {
        // Create Smart Account Client for public networks
        smartAccountClient = await createAlchemySmartAccountClient({
            transport,
            chain,
            account: await createMultiOwnerLightAccount({
                transport,
                chain,
                signer,
            }),
            rpcUrl: `https://eth-${networkName}.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            gasManagerConfig: {
                policyId: process.env.ALCHEMY_GAS_POLICY_ID!,
            },
        });
        scaAddress = smartAccountClient.account.address;
    } else {
        // For Local, we'll use the EOA address as the scaAddress to simplify,
        // but the deployment process will still use the factory.
        scaAddress = eoaAddress;
        console.log("Local deployment: Using EOA as the administrative address.");
    }

    console.log(`Smart Contract Account / Admin Address: ${scaAddress}`);

    // Helper to deploy contract
    async function deploy(name: string, args: any[]) {
        console.log(`Deploying ${name}...`);
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

        const deployData = encodeDeployData({ abi, args, bytecode });

        // Use Arachnid Deterministic Deployment Proxy (Nick's Factory)
        // This is pre-deployed at 0x4e59b44847b379578588920cA78FbF26c0B4956C on many networks
        const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";

        // Use a deterministic salt based on the contract name
        // This ensures the same contract with the same bytecode and args ends up at the same address
        const salt = keccak256(toHex(name));
        const data = concat([salt, deployData]);

        console.log(`Deploying ${name} via factory...`);
        try {
            if (isSepolia || isMainnet) {
                const uoResponse = await smartAccountClient.sendUserOperation({
                    uo: {
                        target: factoryAddress,
                        data
                    }
                });
                const txHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
                await publicClient.waitForTransactionReceipt({ hash: txHash });
            } else {
                // Local fallback to direct transaction to factory
                const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
                // Call the factory directly. The resulting contract address will be the same
                // because CREATE2 depends only on factory address, salt, and bytecode.
                const hash = await eoaClient.sendTransaction({
                    to: factoryAddress,
                    data
                });
                await publicClient.waitForTransactionReceipt({ hash });
            }

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
    const bragNFT = await deploy("BragNFT", [scaAddress, treasury.address, minimumDonation]);

    const initialSupply = 0n;
    const maxSupply = 1000000000000000000000000000n;
    const bragToken = await deploy("BragToken", [scaAddress, initialSupply, maxSupply]);
    const marketplace = await deploy("NFTMarketplace", [refundPeriod, bragToken.address]);

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
        { name: "BragNFT", contract: bragNFT },
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
    if (isSepolia || isMainnet) {
        const uoResponse = await smartAccountClient.sendUserOperation({
            uo: setupTxs.map(tx => ({
                target: tx.to,
                data: tx.data,
                value: tx.value
            }))
        });
        const batchTxHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
        await publicClient.waitForTransactionReceipt({ hash: batchTxHash });
    } else {
        const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
        for (const tx of setupTxs) {
            const hash = await eoaClient.sendTransaction({
                to: tx.to,
                data: tx.data,
                value: tx.value
            });
            await publicClient.waitForTransactionReceipt({ hash });
        }
    }
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
