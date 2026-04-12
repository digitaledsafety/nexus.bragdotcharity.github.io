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
    const rpcUrl = "http://127.0.0.1:8545";
    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const account = privateKeyToAccount(privateKey as Hex);
    const publicClient = createPublicClient({ chain: hardhatLocal, transport: http(rpcUrl) });
    const walletClient = createWalletClient({ account, chain: hardhatLocal, transport: http(rpcUrl) }).extend(walletActions);

    async function deploy(name: string, args: any[]) {
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
        const hash = await walletClient.deployContract({ abi, bytecode, args });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        return { address: receipt.contractAddress!, abi };
    }

    const treasury = await deploy("Treasury", [[account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);
    const exhibitRegistry = await deploy("ExhibitRegistry", [account.address]);
    const mockPriceFeed = await deploy("MockPriceFeed", [250000000000n]);
    const bragNFT = await deploy("BragNFT", [account.address, treasury.address, 1n, mockPriceFeed.address]);
    const bragToken = await deploy("BragToken", [account.address, 0n, 1000000000n * 10n**18n]);
    const marketplace = await deploy("NFTMarketplace", [account.address, bragToken.address]);

    await walletClient.writeContract({ address: bragNFT.address, abi: bragNFT.abi, functionName: "setBragToken", args: [bragToken.address] });
    await walletClient.writeContract({ address: bragToken.address, abi: bragToken.abi, functionName: "grantRole", args: [MINTER_ROLE, bragNFT.address] });

    const chainId = await publicClient.getChainId();
    const deploymentDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
    if (!fs.existsSync(deploymentDir)) fs.mkdirSync(deploymentDir, { recursive: true });
    const deployedAddresses = { "AppModule#BragNFT": bragNFT.address, "AppModule#BragToken": bragToken.address, "AppModule#ExhibitRegistry": exhibitRegistry.address, "AppModule#NFTMarketplace": marketplace.address, "AppModule#Treasury": treasury.address };
    fs.writeFileSync(path.join(deploymentDir, "deployed_addresses.json"), JSON.stringify(deployedAddresses, null, 2));
    console.log(deployedAddresses);
}
main().catch(console.error);
