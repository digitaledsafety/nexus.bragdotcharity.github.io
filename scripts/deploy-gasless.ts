import fs from "fs";
import path from "path";
import hre from "hardhat";
import {
    createPublicClient,
    http,
    encodeDeployData,
    Hex,
    keccak256,
    toHex,
    concat,
    getContractAddress,
    getAddress,
    encodeFunctionData,
    createWalletClient,
    walletActions,
    defineChain,
    decodeEventLog
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia, localhost } from "viem/chains";
import { stringToHex } from "viem/utils";
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
const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));
const VERIFIER_ROLE = keccak256(stringToHex("VERIFIER_ROLE"));

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
    const gasPolicyId = getConfig("ALCHEMY_GAS_POLICY_ID", "");
    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`) :
                    "http://127.0.0.1:8545");

    if (isSepolia && (!alchemyApiKey || !gasPolicyId)) {
        throw new Error("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless Sepolia deployment.");
    }

    let privateKey: string;
    if (isSepolia) {
        privateKey = getConfig("SEPOLIA_PRIVATE_KEY");
    } else {
        privateKey = process.env.LOCAL_PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
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

    console.log(`Deploying contracts to ${networkName} gaslessly...`);
    console.log(`EOA Address (to become owner): ${eoaAddress}`);

    const transport = http(isSepolia ? `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}` : rpcUrl);

    const smartAccountClient = await createAlchemySmartAccountClient({
        transport,
        chain,
        account: await createMultiOwnerLightAccount({
            transport,
            chain,
            signer,
        }),
        rpcUrl: isSepolia ? `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}` : rpcUrl,
        ...(isSepolia ? {
            gasManagerConfig: {
                policyId: gasPolicyId,
            }
        } : {}),
    });

    const scaAddress = smartAccountClient.account.address;
    console.log(`Smart Contract Account Address: ${scaAddress}`);

    async function deploy(name: string, args: any[]) {
        console.log(`Deploying implementation ${name}...`);
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
        const deployData = encodeDeployData({ abi, args, bytecode });

        if (isSepolia) {
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            const salt = keccak256(toHex(`${name}-${Date.now()}`));
            const data = concat([salt, deployData]);
            const uoResponse = await smartAccountClient.sendUserOperation({ uo: { target: factoryAddress, data } });
            const txHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
            await publicClient.waitForTransactionReceipt({ hash: txHash });
            const deployedAddress = getContractAddress({ bytecode: deployData, from: factoryAddress, opcode: "CREATE2", salt });
            console.log(`${name} deployed at ${deployedAddress}`);
            return { address: deployedAddress, abi };
        } else {
            const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
            const hash = await eoaClient.deployContract({ abi, bytecode, args });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            console.log(`${name} deployed at ${receipt.contractAddress}`);
            return { address: receipt.contractAddress!, abi };
        }
    }

    async function deployProxy(name: string, initializeArgs: any[]) {
        const implementation = await deploy(name, []);
        console.log(`Deploying proxy for ${name}...`);
        const proxyArtifactPath = path.join(process.cwd(), "artifacts/contracts/Proxy.sol/BragProxy.json");
        const { abi: proxyAbi, bytecode: proxyBytecode } = JSON.parse(fs.readFileSync(proxyArtifactPath, "utf8"));
        const initData = encodeFunctionData({ abi: implementation.abi, functionName: "initialize", args: initializeArgs });
        const deployData = encodeDeployData({ abi: proxyAbi, args: [implementation.address, initData], bytecode: proxyBytecode });

        if (isSepolia) {
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            const salt = keccak256(toHex(`${name}-proxy-${Date.now()}`));
            const data = concat([salt, deployData]);
            const uoResponse = await smartAccountClient.sendUserOperation({ uo: { target: factoryAddress, data } });
            const txHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
            await publicClient.waitForTransactionReceipt({ hash: txHash });
            const proxyAddress = getContractAddress({ bytecode: deployData, from: factoryAddress, opcode: "CREATE2", salt });
            console.log(`${name} proxy deployed at ${proxyAddress}`);
            return { address: proxyAddress, abi: implementation.abi };
        } else {
            const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
            const hash = await eoaClient.deployContract({ abi: proxyAbi, bytecode: proxyBytecode, args: [implementation.address, initData] });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            console.log(`${name} proxy deployed at ${receipt.contractAddress}`);
            return { address: receipt.contractAddress!, abi: implementation.abi };
        }
    }

    const minimumDonation = 1n;
    const externalTreasury = process.env.TREASURY_ADDRESS;
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032"; // v0.7.0

    let treasuryAddress: `0x${string}`;
    let treasuryAbi: any;
    if (externalTreasury && externalTreasury !== "") {
        treasuryAddress = getAddress(externalTreasury);
        const treasuryArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/Treasury.sol/Treasury.json"), "utf8"));
        treasuryAbi = treasuryArtifact.abi;
    } else {
        const treasuryImpl = await deploy("Treasury", []);
        const treasuryFactory = await deploy("TreasuryFactory", [treasuryImpl.address]);

        console.log("Creating Treasury through Factory...");
        const salt = keccak256(toHex(`brag-treasury-${Date.now()}`));
        const initData = encodeFunctionData({
            abi: treasuryFactory.abi,
            functionName: "createTreasury",
            args: [[scaAddress], 1n, entryPointAddress, salt]
        });

        const uoResponse = await smartAccountClient.sendUserOperation({
            uo: { target: treasuryFactory.address, data: initData }
        });
        const txHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
        const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });

        const log = receipt.logs.find(l => l.address.toLowerCase() === treasuryFactory.address.toLowerCase());
        const event = decodeEventLog({
            abi: treasuryFactory.abi,
            eventName: "TreasuryCreated",
            data: log!.data,
            topics: log!.topics
        });
        treasuryAddress = (event.args as any).treasury;
        treasuryAbi = treasuryImpl.abi;
        console.log(`Treasury proxy created at ${treasuryAddress}`);
    }

    const exhibitRegistry = await deployProxy("ExhibitRegistry", [scaAddress]);
    const donationReceipt = await deployProxy("DonationReceipt", [scaAddress]);
    const bragNFT = await deployProxy("BragNFT", [scaAddress, treasuryAddress, minimumDonation]);

    const initialSupply = 0n;
    const maxSupply = 1000000000000000000000000000n;
    const bragToken = await deployProxy("BragToken", [scaAddress, initialSupply, maxSupply]);
    const marketplace = await deployProxy("NFTMarketplace", [scaAddress, bragToken.address]);

    console.log("Batching setup and ownership transfer...");
    const setupTxs: any[] = [
        {
            to: donationReceipt.address,
            data: encodeFunctionData({ abi: donationReceipt.abi, functionName: "grantRole", args: [MINTER_ROLE, bragNFT.address] })
        },
        {
            to: bragNFT.address,
            data: encodeFunctionData({ abi: bragNFT.abi, functionName: "setReceiptContract", args: [donationReceipt.address] })
        },
        {
            to: bragNFT.address,
            data: encodeFunctionData({ abi: bragNFT.abi, functionName: "setBragToken", args: [bragToken.address] })
        },
        {
            to: bragToken.address,
            data: encodeFunctionData({ abi: bragToken.abi, functionName: "grantRole", args: [MINTER_ROLE, bragNFT.address] })
        }
    ];

    const contractsToTransfer = [
        { name: "DonationReceipt", contract: donationReceipt },
        { name: "BragNFT", contract: bragNFT },
        { name: "BragToken", contract: bragToken },
        { name: "NFTMarketplace", contract: marketplace },
        { name: "ExhibitRegistry", contract: exhibitRegistry }
    ];

    for (const item of contractsToTransfer) {
        setupTxs.push({
            to: item.contract.address,
            data: encodeFunctionData({ abi: item.contract.abi, functionName: "grantRole", args: [DEFAULT_ADMIN_ROLE, eoaAddress] })
        });
    }

    setupTxs.push({
        to: exhibitRegistry.address,
        data: encodeFunctionData({ abi: exhibitRegistry.abi, functionName: "grantRole", args: [VERIFIER_ROLE, eoaAddress] })
    });

    console.log(`Sending batch of ${setupTxs.length} transactions...`);
    const uoResponse = await smartAccountClient.sendUserOperation({ uo: setupTxs.map(tx => ({ target: tx.to, data: tx.data })) });
    const batchTxHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
    await publicClient.waitForTransactionReceipt({ hash: batchTxHash });
    console.log("Batch setup complete!");

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
        "AppModule#Treasury": treasuryAddress,
    };

    fs.writeFileSync(path.join(deploymentDir, "deployed_addresses.json"), JSON.stringify(deployedAddresses, null, 2));

    console.log("Deployment complete! Artifacts saved.");
    console.log(deployedAddresses);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
