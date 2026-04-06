import fs from "fs";
import path from "path";
import hre from "hardhat";
import {
    createPublicClient,
    http,
    Hex,
    keccak256,
    getAddress,
    encodeFunctionData,
    createWalletClient,
    walletActions,
    defineChain,
    decodeEventLog
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia, mainnet, localhost } from "viem/chains";
import { stringToHex } from "viem/utils";

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
    let chain;
    if (networkName === "sepolia") {
        chain = sepolia;
    } else if (networkName === "mainnet") {
        chain = mainnet;
    } else {
        chain = hardhatLocal;
    }

    const alchemyApiKey = getConfig("ALCHEMY_API_KEY", "");
    const rpcUrl = process.env.RPC_URL ||
                   (networkName === "sepolia" ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`) :
                    (networkName === "mainnet" ?
                     (process.env.MAINNET_RPC_URL || `https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`) :
                     "http://127.0.0.1:8545"));

    let privateKey: string;
    if (networkName === "sepolia") {
        privateKey = getConfig("SEPOLIA_PRIVATE_KEY");
    } else if (networkName === "mainnet") {
        privateKey = getConfig("MAINNET_PRIVATE_KEY");
    } else {
        privateKey = process.env.LOCAL_PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    }
    if (privateKey && !privateKey.startsWith("0x")) {
        privateKey = `0x${privateKey}`;
    }
    const account = privateKeyToAccount(privateKey as Hex);

    const publicClient = createPublicClient({
        chain,
        transport: http(rpcUrl)
    });

    const walletClient = createWalletClient({
        account,
        chain,
        transport: http(rpcUrl)
    }).extend(walletActions);

    console.log(`Deploying upgradeable contracts to ${networkName}...`);
    console.log(`Deployer Address: ${account.address}`);

    async function deploy(name: string, args: any[]) {
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
        const hash = await walletClient.deployContract({ abi, bytecode, args });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        return { address: receipt.contractAddress!, abi };
    }

    async function deployProxy(name: string, initializeArgs: any[]) {
        console.log(`Deploying implementation for ${name}...`);
        const implementation = await deploy(name, []);
        console.log(`${name} implementation at ${implementation.address}`);

        console.log(`Deploying proxy for ${name}...`);
        const proxyArtifactPath = path.join(process.cwd(), "artifacts/contracts/Proxy.sol/BragProxy.json");
        const { abi: proxyAbi, bytecode: proxyBytecode } = JSON.parse(fs.readFileSync(proxyArtifactPath, "utf8"));

        const initData = encodeFunctionData({
            abi: implementation.abi,
            functionName: "initialize",
            args: initializeArgs
        });

        const hash = await walletClient.deployContract({
            abi: proxyAbi,
            bytecode: proxyBytecode,
            args: [implementation.address, initData]
        });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        console.log(`${name} proxy deployed at ${receipt.contractAddress}`);

        return { address: receipt.contractAddress!, abi: implementation.abi };
    }

    const minimumDonation = 1n;
    const externalTreasury = process.env.TREASURY_ADDRESS;
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032"; // v0.7.0

    let treasuryProxy: { address: `0x${string}`, abi: any };
    if (externalTreasury && externalTreasury !== "") {
        console.log(`Using external treasury: ${externalTreasury}`);
        const treasuryArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/Treasury.sol/Treasury.json"), "utf8"));
        treasuryProxy = { address: getAddress(externalTreasury), abi: treasuryArtifact.abi };
    } else {
        const treasuryImpl = await deploy("Treasury", []);
        const treasuryFactory = await deploy("TreasuryFactory", [treasuryImpl.address]);

        console.log("Creating Treasury through Factory...");
        const salt = keccak256(stringToHex(`brag-treasury-${Date.now()}`));
        const hash = await walletClient.writeContract({
            address: treasuryFactory.address,
            abi: treasuryFactory.abi,
            functionName: "createTreasury",
            args: [[account.address], 1n, entryPointAddress, salt]
        });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });

        // Parse log to get treasury address
        const log = receipt.logs.find(l => l.address.toLowerCase() === treasuryFactory.address.toLowerCase());
        const event = decodeEventLog({
            abi: treasuryFactory.abi,
            eventName: "TreasuryCreated",
            data: log!.data,
            topics: log!.topics
        });
        const treasuryAddress = (event.args as any).treasury;
        console.log(`Treasury proxy created at ${treasuryAddress}`);

        treasuryProxy = { address: treasuryAddress, abi: treasuryImpl.abi };
    }

    const exhibitRegistry = await deployProxy("ExhibitRegistry", [account.address]);
    const donationReceipt = await deployProxy("DonationReceipt", [account.address]);
    const bragNFT = await deployProxy("BragNFT", [account.address, treasuryProxy.address, minimumDonation]);

    const initialSupply = 0n;
    const maxSupply = 1000000000000000000000000000n;
    const bragToken = await deployProxy("BragToken", [account.address, initialSupply, maxSupply]);
    const marketplace = await deployProxy("NFTMarketplace", [account.address, bragToken.address]);

    console.log("Setting up contract relationships and roles...");

    const setupCalls = [
        {
            name: "DonationReceipt.grantRole(MINTER_ROLE, BragNFT)",
            to: donationReceipt.address,
            abi: donationReceipt.abi,
            functionName: "grantRole",
            args: [MINTER_ROLE, bragNFT.address]
        },
        {
            name: "BragNFT.setReceiptContract(DonationReceipt)",
            to: bragNFT.address,
            abi: bragNFT.abi,
            functionName: "setReceiptContract",
            args: [donationReceipt.address]
        },
        {
            name: "BragNFT.setBragToken(BragToken)",
            to: bragNFT.address,
            abi: bragNFT.abi,
            functionName: "setBragToken",
            args: [bragToken.address]
        },
        {
            name: "BragToken.grantRole(MINTER_ROLE, BragNFT)",
            to: bragToken.address,
            abi: bragToken.abi,
            functionName: "grantRole",
            args: [MINTER_ROLE, bragNFT.address]
        },
        {
            name: "ExhibitRegistry.grantRole(VERIFIER_ROLE, account)",
            to: exhibitRegistry.address,
            abi: exhibitRegistry.abi,
            functionName: "grantRole",
            args: [VERIFIER_ROLE, account.address]
        }
    ];

    for (const call of setupCalls) {
        console.log(`Executing: ${call.name}`);
        const hash = await walletClient.writeContract({
            address: call.to,
            abi: call.abi,
            functionName: call.functionName,
            args: call.args
        });
        await publicClient.waitForTransactionReceipt({ hash });
    }

    console.log("Setup complete!");

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
        "AppModule#Treasury": treasuryProxy.address,
    };

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
