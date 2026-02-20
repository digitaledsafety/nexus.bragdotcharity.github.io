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
import { localhost, sepolia } from "viem/chains";

// @ts-ignore
import { createLightAccount } from "@alchemy/aa-accounts";
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
    const chain = isSepolia ? sepolia : hardhatLocal;
    const rpcUrl = process.env.RPC_URL || (isSepolia ? process.env.SEPOLIA_RPC_URL : "http://127.0.0.1:8545");

    if (isSepolia && (!process.env.ALCHEMY_API_KEY || !process.env.ALCHEMY_GAS_POLICY_ID)) {
        throw new Error("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless Sepolia deployment.");
    }

    let privateKey = (isSepolia ? process.env.SEPOLIA_PRIVATE_KEY : "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80") as string;
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

    console.log(`Deploying contracts to ${networkName} gaslessly...`);
    console.log(`EOA Address (to become owner): ${eoaAddress}`);

    const transport = http(isSepolia ? `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` : rpcUrl);

    // For Sepolia, use Alchemy Smart Account. For local, use standard EOA.
    let scaAddress: any;
    let client: any;
    let smartAccountClient: any;

    if (isSepolia) {
        console.log("Setting up Alchemy Smart Account for Sepolia (v1.1.0 - EP v0.6)...");
        smartAccountClient = await createAlchemySmartAccountClient({
            transport,
            chain,
            account: await createLightAccount({
                transport,
                chain,
                signer,
                version: "v1.1.0"
            }),
            rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            gasManagerConfig: {
                policyId: process.env.ALCHEMY_GAS_POLICY_ID!,
            },
        });
        scaAddress = smartAccountClient.account.address;
        client = smartAccountClient.extend(walletActions);
        console.log(`Smart Contract Account Address: ${scaAddress}`);

        // Ensure SCA has a tiny bit of ETH for donations (1 wei min)
        // We'll send 0.0001 ETH from EOA to SCA.
        // Note: This requires the EOA to have some ETH on Sepolia.
        const eoaBalance = await publicClient.getBalance({ address: eoaAddress });
        const scaBalance = await publicClient.getBalance({ address: scaAddress });

        if (scaBalance < 100000000000000n && eoaBalance > 200000000000000n) {
            console.log("Funding SCA with dust for donations...");
            const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) });
            const hash = await eoaClient.sendTransaction({
                to: scaAddress,
                value: 100000000000000n // 0.0001 ETH
            });
            await publicClient.waitForTransactionReceipt({ hash });
        }
    } else {
        console.log("Using EOA for local deployment...");
        scaAddress = eoaAddress;
        client = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
    }

    // Helper to send multiple transactions (batched if SCA, sequential if EOA)
    async function sendTransactions(requests: any[]) {
        if (isSepolia && smartAccountClient) {
            console.log(`Sending batch of ${requests.length} UserOperations...`);
            const userOpHash = await smartAccountClient.sendTransactions({ requests });
            const { hash } = await smartAccountClient.waitForUserOperationTransaction(userOpHash);
            return await publicClient.waitForTransactionReceipt({ hash });
        } else {
            let lastReceipt;
            for (const request of requests) {
                const hash = await client.sendTransaction(request);
                lastReceipt = await publicClient.waitForTransactionReceipt({ hash });
            }
            return lastReceipt;
        }
    }

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
                const userOpHash = await smartAccountClient.sendTransaction({
                    to: factoryAddress,
                    data
                });
                const { hash } = await smartAccountClient.waitForUserOperationTransaction(userOpHash);
                await publicClient.waitForTransactionReceipt({ hash });

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

    console.log(`Sending batch of ${setupTxs.length} transactions...`);
    await sendTransactions(setupTxs);
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
