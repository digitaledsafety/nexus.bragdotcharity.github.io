import fs from "fs";
import path from "path";
import hre from "hardhat";
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
import { stringToHex } from "viem/utils";

// @ts-ignore
import { createLightAccountClient, createMultiOwnerLightAccount } from "@alchemy/aa-accounts";
// @ts-ignore
import { createAlchemySmartAccountClient, defineAlchemyChain } from "@alchemy/aa-alchemy";
// @ts-ignore
import { LocalAccountSigner } from "@alchemy/aa-core";

const hardhatLocal = defineChain({
    ...localhost,
    id: 31337,
});

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
    const alchemyApiKey = getConfig("ALCHEMY_API_KEY", "");
    const gasPolicyId = getConfig("ALCHEMY_GAS_POLICY_ID", "");
    const chain = isSepolia ? defineAlchemyChain({
        chain: sepolia,
        rpcBaseUrl: "https://eth-sepolia.g.alchemy.com/v2"
    }) : hardhatLocal;

    if (isSepolia && (!alchemyApiKey || !gasPolicyId)) {
        throw new Error("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless Sepolia seeding.");
    }

    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`) :
                    "http://127.0.0.1:8545");

    let privateKey0 = process.env.LOCAL_PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    let privateKey1 = process.env.LOCAL_BUYER_PRIVATE_KEY || "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

    if (isSepolia) {
        privateKey0 = getConfig("SEPOLIA_PRIVATE_KEY");
        privateKey1 = getConfig("SEPOLIA_BUYER_PRIVATE_KEY");
    }

    if (privateKey0 && !privateKey0.startsWith("0x")) privateKey0 = `0x${privateKey0}`;
    if (privateKey1 && !privateKey1.startsWith("0x")) privateKey1 = `0x${privateKey1}`;

    const account0 = privateKeyToAccount(privateKey0 as Hex);
    const account1 = privateKeyToAccount(privateKey1 as Hex);

    const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });
    const chainId = await publicClient.getChainId();

    // 1. Setup Clients (Gasless for Sepolia)
    let client0: any = createWalletClient({ account: account0, chain, transport: http(rpcUrl) }).extend(walletActions);
    let client1: any = createWalletClient({ account: account1, chain, transport: http(rpcUrl) }).extend(walletActions);

    if (isSepolia) {
        console.log("Initializing Smart Account Clients for Sepolia...");
        const signer0 = LocalAccountSigner.privateKeyToAccountSigner(privateKey0 as Hex);
        const signer1 = LocalAccountSigner.privateKeyToAccountSigner(privateKey1 as Hex);

        client0 = await createAlchemySmartAccountClient({
            chain,
            account: await createMultiOwnerLightAccount({
                transport: http(rpcUrl),
                chain,
                signer: signer0,
                owners: [account0.address],
                version: "v2.0.0"
            }),
            apiKey: alchemyApiKey,
            gasManagerConfig: { policyId: gasPolicyId },
        });

        client1 = await createAlchemySmartAccountClient({
            chain,
            account: await createMultiOwnerLightAccount({
                transport: http(rpcUrl),
                chain,
                signer: signer1,
                owners: [account1.address],
                version: "v2.0.0"
            }),
            apiKey: alchemyApiKey,
            gasManagerConfig: { policyId: gasPolicyId },
        });
        console.log(`SCA 0: ${client0.account.address}`);
        console.log(`SCA 1: ${client1.account.address}`);
    } else {
        // Local SCA for testing if needed, but usually we just use EOA for local seeding
        // If we want to test SCA locally:
        /*
        client0 = await createAlchemySmartAccountClient({
            chain,
            account: await createMultiOwnerLightAccount({
                transport: http(rpcUrl),
                chain,
                signer: LocalAccountSigner.privateKeyToAccountSigner(privateKey0 as Hex),
                owners: [account0.address],
                version: "v2.0.0"
            }),
            rpcUrl
        });
        */
    }

    const deploymentPath = path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`);
    if (!fs.existsSync(deploymentPath)) {
        throw new Error(`Deployment not found at ${deploymentPath}. Please deploy first.`);
    }
    const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

    const bragNFTAddr = deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];
    const registryAddr = deployment["AppModule#ExhibitRegistry"];

    const bragNFTArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));

    const donationAmount = isSepolia ? parseEther("0.0000001") : parseEther("0.1");

    // Helper for sending transactions (UserOp or Standard)
    async function sendTx(client: any, txs: { to: `0x${string}`, data: `0x${string}`, value?: bigint }[]) {
        if (isSepolia) {
            const uoResponse = await client.sendUserOperation({
                uo: txs.map(tx => ({ target: tx.to, data: tx.data, value: tx.value }))
            });
            const hash = await client.waitForUserOperationTransaction(uoResponse);
            return await publicClient.waitForTransactionReceipt({ hash });
        } else {
            let lastReceipt;
            for (const tx of txs) {
                const hash = await client.sendTransaction({
                    to: tx.to,
                    data: tx.data,
                    value: tx.value
                });
                lastReceipt = await publicClient.waitForTransactionReceipt({ hash });
            }
            return lastReceipt;
        }
    }

    // 1. Initial Donations
    console.log("Seeding donations...");
    const donations = [
        { message: "Test Mint", uri: "data:image/jpeg;base64,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lWGGBwRSV2/xa8OjS9WGo2sZFtdklvRH7j8etcRWidzbcKKKKYBRRSE460DAkAEngDrWDrGo+aTBC37vuR3pdY1HzSYICQg4Y+prJrKUuiPQw2Ht70goooqDuCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKALWn3klpLkcofvLXTW80c8QkjOQf0rj6tafeSWkuRyh+8vrVRlY5cRh1U1W51VFR280c8QkjbKmpK2PLaa0YUUUUCCiitjwhos+u61FaRDCZ3SvjhVHWgD0D4NaCYLaTWrhCHlGyEH+73Nek1DaW8Vrax28KhY41CqPYVNmsm7mTd2FFFFAgooooAKKKKAKOs6dbarps1jdKGjkUjp909iPcV4B4n0W50LVpbG4BO05R8cMOxr6NrC8YeHLXxFppt5gEmXmKXHKn/CmnYqLsfPdFXNZ0250rUZbG7TbJG2D6H3qkSAMk4FaGoE4GTWFq+pebmCA/u+Mt3zRrGomRjBCcKDywPX2rJrKUuiPQw2Gt70goooqDuCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAtafeSWkuRyh+8tdNbzRzxCSNsqa4+rWn3klpLkcofvL61UZWOXEYdVFdbnVUVHbzRzxCSNsqalRWdwiKWYnAAHJrY8tq2jH2sE11cJb28bSSyHaqqOSa948AeHIvD+lBD811MA0zeh/u/hWL8MfBzaVGNU1JB9rkX5IyP9WP8a7+okzOUugUUUVJAUUUUAFFFFABRRRQAUUUjMACScAdaAOc8ceGrPxDp5EhEVzEpMU3p7H2NfNniiW5tbqXTpI9hU4Y/wB76e1e9eLfELXTNZWbEQg4dx/F/wDWrgPEei2+r2hRwFmUfu5O4NYSxCTse7g8vlyc89+iPJqKs6jZXFhdvbXKFXU/mPWq1XudDVgooopgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUqgswVQSScADvQBa027ltZxsBZWOCnr9PevoH4W+EreG2j1u+2yzvzFH1Efuff+Vea+DPDIswt/foDcEZRD/wAs/wD69eheHtZn0q4GCXgY/Omf5Vl9YSduhniM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" },
        { message: "Test Mint 2", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 3", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 4", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 5", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 6", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 7", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 8", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 9", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 10", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 11", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 12", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 13", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 14", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 15", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 16", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 17", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 18", uri: "https://picsum.photos/id/10/800/800" },
        { message: "Test Mint 19", uri: "https://picsum.photos/id/10/800/800" },
        { message: "On-Chain SVG Native", uri: "" },
        { message: "Multimedia Impact (Video)", uri: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ];

    let lastTokenId = 0n;
    for (const d of donations) {
        console.log(`Donating: ${d.message}...`);
        const receipt = await sendTx(client0, [{
            to: bragNFTAddr,
            data: encodeFunctionData({
                abi: bragNFTArtifact.abi,
                functionName: 'donate',
                args: [d.message, d.uri]
            }),
            value: donationAmount
        }]);

        for (const log of receipt.logs) {
            try {
                const decoded = decodeEventLog({ abi: bragNFTArtifact.abi, data: log.data, topics: log.topics });
                if (decoded.eventName === 'Donated') {
                    lastTokenId = (decoded.args as any).tokenId;
                    console.log(`Minted Token ID: ${lastTokenId}`);
                    break;
                }
            } catch (e) {}
        }
    }

    // 2. Deploy and Register ExhibitVaults
    const vaultNames = ["minecraft-server-1", "gallery-1", "roblox-1", "custom-1"];
    const vaultAddresses: `0x${string}`[] = [];
    const vaultArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/ExhibitVault.sol/ExhibitVault.json"), "utf8"));

    console.log("Deploying 5 ExhibitVaults...");
    const timestamp = Date.now();

    for (const name of vaultNames) {
        const salt = keccak256(toHex(`${name}-${timestamp}`));
        const deployData = encodeDeployData({ abi: vaultArtifact.abi, args: [registryAddr], bytecode: vaultArtifact.bytecode });

        let vaultAddr: `0x${string}`;
        if (isSepolia) {
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            const data = concat([salt, deployData]);

            const uoResponse = await client0.sendUserOperation({
                uo: { target: factoryAddress, data }
            });
            const hash = await client0.waitForUserOperationTransaction(uoResponse);
            await publicClient.waitForTransactionReceipt({ hash });

            vaultAddr = getContractAddress({
                bytecode: deployData,
                from: factoryAddress,
                opcode: "CREATE2",
                salt
            });
        } else {
            const hash = await client0.deployContract({
                abi: vaultArtifact.abi,
                bytecode: vaultArtifact.bytecode,
                args: [registryAddr]
            });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            vaultAddr = receipt.contractAddress!;
        }

        console.log(`Vault ${name} deployed at ${vaultAddr}`);
        vaultAddresses.push(vaultAddr);

        // Register vault
        await sendTx(client0, [{
            to: registryAddr,
            data: encodeFunctionData({
                abi: [{ name: 'verifyVault', type: 'function', inputs: [{ name: 'vault', type: 'address' }, { name: 'locationType', type: 'uint8' }, { name: 'name', type: 'string' }, { name: 'description', type: 'string' }], outputs: [] }],
                args: [vaultAddr, 0, name, `Seeded vault for ${name}`]
            })
        }]);
    }

    // 3. User B: Marketplace Setup
    console.log("Setting up marketplace for User B...");
    const offerPrice = parseEther("1");

    // Mint tokens to User B
    await sendTx(client0, [{
        to: bragTokenAddr,
        data: encodeFunctionData({
            abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }],
            args: [client1.account.address, parseEther("100")]
        })
    }]);

    // User B: Create Offer
    console.log("User B: Creating offer...");
    await sendTx(client1, [
        {
            to: bragTokenAddr,
            data: encodeFunctionData({
                abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ name: '', type: 'bool' }] }],
                args: [marketplaceAddr, offerPrice]
            })
        },
        {
            to: marketplaceAddr,
            data: encodeFunctionData({
                abi: [{ name: 'createOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'amount', type: 'uint256' }, { name: 'price', type: 'uint256' }], outputs: [] }],
                args: [bragNFTAddr, lastTokenId, 1n, offerPrice]
            })
        }
    ]);

    // 4. Save Artifacts
    const artifacts = {
        network: networkName,
        chainId,
        vaults: vaultNames.reduce((acc, name, i) => ({ ...acc, [name]: vaultAddresses[i] }), {}),
        userA: client0.account.address,
        userB: client1.account.address,
    };

    const deploymentDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
    if (!fs.existsSync(deploymentDir)) {
        fs.mkdirSync(deploymentDir, { recursive: true });
    }
    const artifactFile = path.join(deploymentDir, `seed_artifacts.json`);
    fs.writeFileSync(artifactFile, JSON.stringify(artifacts, null, 2));

    // Also save to root of deployments for easier artifact upload in workflow
    //const rootArtifactDir = path.join(process.cwd(), "ignition/deployments");
    //if (!fs.existsSync(rootArtifactDir)) {
    //    fs.mkdirSync(rootArtifactDir, { recursive: true });
    //}
    //const rootArtifactFile = path.join(rootArtifactDir, "seed_artifacts.json");
    //fs.writeFileSync(rootArtifactFile, JSON.stringify(artifacts, null, 2));

    console.log("Seeding complete!");
    //console.log(`Artifacts saved to ${artifactFile} and ${rootArtifactFile}`);
    console.log(`Artifacts saved to ${artifactFile}`);
    console.log(JSON.stringify(artifacts, null, 2));
}

main().catch(console.error);
