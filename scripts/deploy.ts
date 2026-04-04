import fs from "fs";
import path from "path";
import {
    createPublicClient,
    http,
    Hex,
    keccak256,
    getAddress,
    encodeFunctionData,
    createWalletClient,
    walletActions,
    defineChain
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
const TREASURY_ROLE = keccak256(stringToHex("TREASURY_ROLE"));
const VERIFIER_ROLE = keccak256(stringToHex("VERIFIER_ROLE"));

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

    const rpcUrl = process.env.RPC_URL ||
                   (networkName === "sepolia" ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`) :
                    (networkName === "mainnet" ?
                     (process.env.MAINNET_RPC_URL || `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`) :
                     "http://127.0.0.1:8545"));

    let privateKey = (networkName === "sepolia" ? process.env.SEPOLIA_PRIVATE_KEY :
                     (networkName === "mainnet" ? process.env.MAINNET_PRIVATE_KEY :
                     "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")) as string;

    if (!privateKey) {
        throw new Error(`Missing private key for ${networkName}`);
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

    console.log(`Deploying contracts to ${networkName}...`);
    console.log(`Deployer Address: ${account.address}`);

    async function deploy(name: string, args: any[]) {
        console.log(`Deploying ${name}...`);
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        if (!fs.existsSync(artifactPath)) {
            throw new Error(`Artifact for ${name} not found. Did you run npm run compile?`);
        }
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

        const hash = await walletClient.deployContract({ abi, bytecode, args });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        console.log(`${name} deployed at ${receipt.contractAddress}`);
        return { address: receipt.contractAddress!, abi };
    }

    // --- Contract Deployments ---
    const minimumDonation = 1n;
    const externalTreasury = process.env.TREASURY_ADDRESS;

    let treasury: { address: `0x${string}`, abi: any };
    if (externalTreasury && externalTreasury !== "") {
        console.log(`Using external treasury: ${externalTreasury}`);
        const treasuryArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/Treasury.sol/Treasury.json"), "utf8"));
        treasury = { address: getAddress(externalTreasury), abi: treasuryArtifact.abi };
    } else {
        treasury = await deploy("Treasury", [account.address]);
    }

    const exhibitRegistry = await deploy("ExhibitRegistry", [account.address]);
    const donationReceipt = await deploy("DonationReceipt", [account.address]);
    const bragNFT = await deploy("BragNFT", [account.address, treasury.address, minimumDonation]);

    const initialSupply = 0n;
    const maxSupply = 1000000000000000000000000000n;
    const bragToken = await deploy("BragToken", [account.address, initialSupply, maxSupply]);
    const marketplace = await deploy("NFTMarketplace", [account.address, bragToken.address]);

    // --- Setup Transactions ---
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

    // Additional Roles for ExhibitRegistry
    console.log("Setting up ExhibitRegistry roles...");
    const verifierHash = await walletClient.writeContract({
        address: exhibitRegistry.address,
        abi: exhibitRegistry.abi,
        functionName: "grantRole",
        args: [VERIFIER_ROLE, account.address]
    });
    await publicClient.waitForTransactionReceipt({ hash: verifierHash });

    // Additional Roles for Treasury
    console.log("Setting up Treasury roles...");
    const treasuryRoleHash = await walletClient.writeContract({
        address: treasury.address,
        abi: treasury.abi,
        functionName: "grantRole",
        args: [TREASURY_ROLE, account.address]
    });
    await publicClient.waitForTransactionReceipt({ hash: treasuryRoleHash });

    console.log("Setup complete!");

    // --- Save Deployment Artifacts ---
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
        "AppModule#Treasury": treasury.address,
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
