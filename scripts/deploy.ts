import fs from "fs";
import path from "path";
import hre from "hardhat";
import { createPublicClient, http, Hex, keccak256, getAddress, encodeFunctionData, createWalletClient, walletActions, defineChain } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { localhost } from "viem/chains";
import { stringToHex } from "viem/utils";

const hardhatLocal = defineChain({ ...localhost, id: 31337 });
const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const rpcUrl = isSepolia ? process.env.SEPOLIA_RPC_URL : "http://127.0.0.1:8545";
    const privateKey = (isSepolia ? process.env.SEPOLIA_PRIVATE_KEY : "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80") as Hex;

    if (!rpcUrl || !privateKey) {
        throw new Error("Missing RPC_URL or PRIVATE_KEY for deployment");
    }

    const account = privateKeyToAccount(privateKey);
    const chain = isSepolia ? (hre.config.networks.sepolia as any).chain || { id: 11155111 } : hardhatLocal;
    const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });
    const walletClient = createWalletClient({ account, chain, transport: http(rpcUrl) }).extend(walletActions);

    async function deploy(name: string, args: any[], artifactFile?: string) {
        console.log(`Deploying ${name}...`);
        const fileName = artifactFile || `${name}.sol/${name}.json`;
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${fileName}`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
        const hash = await walletClient.deployContract({ abi, bytecode, args });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        console.log(`${name} deployed at ${receipt.contractAddress}`);
        return { address: receipt.contractAddress!, abi };
    }

    async function deployProxy(implementationName: string, initArgs: any[]) {
        console.log(`Deploying proxy for ${implementationName}...`);
        const impl = await deploy(implementationName, []);

        const initData = encodeFunctionData({
            abi: impl.abi,
            functionName: "initialize",
            args: initArgs
        });

        const proxy = await deploy("BragProxy", [impl.address, initData], "Proxy.sol/BragProxy.json");
        return { address: proxy.address, abi: impl.abi };
    }

    const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await deployProxy("Treasury", [[account.address], 1n, entryPoint]);
    const exhibitRegistry = await deploy("ExhibitRegistry", [account.address]);

    // For price feed, use mock if local, else use provided address or zero
    const mockPriceFeed = await deploy("MockPriceFeed", [250000000000n]);

    const bragNFT = await deployProxy("BragNFT", [account.address, treasury.address, 1n, mockPriceFeed.address]);
    const bragToken = await deploy("BragToken", [account.address, 0n, 1000000000000000n * 10n**18n]); // 1 Quadrillion BRAG
    const marketplace = await deploy("NFTMarketplace", [account.address, bragToken.address]);

    console.log("Setting up roles...");
    await walletClient.writeContract({ address: bragNFT.address, abi: bragNFT.abi, functionName: "setBragToken", args: [bragToken.address] });
    await walletClient.writeContract({ address: bragToken.address, abi: bragToken.abi, functionName: "grantRole", args: [MINTER_ROLE, bragNFT.address] });

    const chainId = await publicClient.getChainId();
    const deploymentDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
    if (!fs.existsSync(deploymentDir)) fs.mkdirSync(deploymentDir, { recursive: true });
    const deployedAddresses = {
        "AppModule#BragNFT": bragNFT.address,
        "AppModule#BragToken": bragToken.address,
        "AppModule#ExhibitRegistry": exhibitRegistry.address,
        "AppModule#NFTMarketplace": marketplace.address,
        "AppModule#Treasury": treasury.address
    };
    fs.writeFileSync(path.join(deploymentDir, "deployed_addresses.json"), JSON.stringify(deployedAddresses, null, 2));
    console.log("Deployment complete:");
    console.log(deployedAddresses);
}
main().catch(console.error);
