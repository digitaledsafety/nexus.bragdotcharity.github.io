import fs from "fs";
import path from "path";
import {
    createPublicClient,
    createWalletClient,
    http,
    parseEther,
    encodeFunctionData,
    Hex,
    encodeDeployData,
    concat,
    getContractAddress,
    keccak256,
    toHex,
    decodeEventLog,
    walletActions,
    defineChain
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { localhost, sepolia } from "viem/chains";

// @ts-ignore
import { createMultiOwnerLightAccount } from "@alchemy/aa-accounts";
// @ts-ignore
import { createAlchemySmartAccountClient } from "@alchemy/aa-alchemy";
// @ts-ignore
import { LocalAccountSigner } from "@alchemy/aa-core";

const hardhatLocal = defineChain({ ...localhost, id: 31337 });

/**
 * Ensures private keys are properly formatted for viem
 */
const formatKey = (key: string | undefined, defaultKey: string): Hex => {
    const target = key || defaultKey;
    return target.startsWith("0x") ? (target as Hex) : `0x${target}`;
};

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const chain = isSepolia ? sepolia : hardhatLocal;
    
    const rpcUrl = isSepolia 
        ? `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` 
        : "http://127.0.0.1:8545";

    // 1. Setup Accounts & Signers
    const pk0 = formatKey(process.env.SEPOLIA_PRIVATE_KEY, "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");
    const pk1 = formatKey(process.env.SEPOLIA_BUYER_PRIVATE_KEY, "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d");

    const account0 = privateKeyToAccount(pk0);
    const account1 = privateKeyToAccount(pk1);
    const signer0 = LocalAccountSigner.privateKeyToAccountSigner(pk0);
    const signer1 = LocalAccountSigner.privateKeyToAccountSigner(pk1);

    const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });

    let client0: any;
    let client1: any;

    // 2. Initialize Smart Clients or Wallet Clients
    if (isSepolia) {
        console.log("Initializing Alchemy Smart Accounts...");
        const smartConfig = async (signer: any) => createAlchemySmartAccountClient({
            transport: http(rpcUrl),
            chain,
            account: await createMultiOwnerLightAccount({ transport: http(rpcUrl), chain, signer }),
            gasManagerConfig: { policyId: process.env.ALCHEMY_GAS_POLICY_ID! },
        });

        client0 = await smartConfig(signer0);
        client1 = await smartConfig(signer1);
        console.log("Smart Account 0:", client0.account.address);
    } else {
        client0 = createWalletClient({ account: account0, chain, transport: http(rpcUrl) }).extend(walletActions);
        client1 = createWalletClient({ account: account1, chain, transport: http(rpcUrl) }).extend(walletActions);
    }

    // 3. Load Contracts
    const chainId = await publicClient.getChainId();
    const deployment = JSON.parse(fs.readFileSync(path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`), "utf8"));
    
    const bragNFTAddr = deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const registryAddr = deployment["AppModule#ExhibitRegistry"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];

    // 4. Unified Transaction/UserOp Helper
    async function sendTransactions(client: any, requests: any[]) {
        if (isSepolia) {
            console.log(`Submitting UserOp with ${requests.length} calls...`);
            const uoResponse = await client.sendUserOperation({
                uo: requests.map(req => ({
                    target: req.to,
                    data: req.data || "0x",
                    value: req.value || 0n
                }))
            });
            const txHash = await client.waitForUserOperationTransaction(uoResponse);
            return await publicClient.waitForTransactionReceipt({ hash: txHash });
        } else {
            let lastReceipt;
            for (const req of requests) {
                const hash = await client.sendTransaction(req);
                lastReceipt = await publicClient.waitForTransactionReceipt({ hash });
            }
            return lastReceipt;
        }
    }

    // --- SEEDING LOGIC ---

    // Step 1: Mint NFT
    console.log("Minting BragNFT...");
    const donationAmount = isSepolia ? parseEther("0.00000001") : parseEther("0.001");
    const donateReceipt = await sendTransactions(client0, [{
        to: bragNFTAddr,
        value: donationAmount,
        data: encodeFunctionData({
            abi: [{ name: 'donate', type: 'function', inputs: [{ name: 'message', type: 'string' }, { name: 'media', type: 'string' }], outputs: [], stateMutability: 'payable' }],
            args: ["Seeding data!", "https://picsum.photos/400"]
        })
    }]);

    const nftArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));
    const tokenId = decodeEventLog({ 
        abi: nftArtifact.abi, 
        data: donateReceipt.logs[1].data, 
        topics: donateReceipt.logs[1].topics 
    }).args['nftTokenId'] as bigint;

    // Step 2: Batch Deploy Vaults
    console.log("Deploying Vaults...");
    const vaultBatch: any[] = [];
    const vaultAddresses: string[] = [];
    const vaultArt = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/ExhibitVault.sol/ExhibitVault.json"), "utf8"));
    const CREATE2_FACTORY = "0x4e59b44847b379578588920cA78FbF26c0B4956C";

    for (const name of ["server-1", "server-2", "gallery-1", "roblox-1", "custom-1"]) {
        const salt = keccak256(toHex(`${name}-${Date.now()}`));
        const deployData = encodeDeployData({ abi: vaultArt.abi, args: [registryAddr], bytecode: vaultArt.bytecode });
        const vaultAddr = getContractAddress({ bytecode: deployData, from: CREATE2_FACTORY, opcode: "CREATE2", salt });
        
        vaultBatch.push({ to: CREATE2_FACTORY, data: concat([salt, deployData]) });
        vaultBatch.push({ 
            to: registryAddr, 
            data: encodeFunctionData({
                abi: [{ name: 'verifyVault', type: 'function', inputs: [{ name: 'vault', type: 'address' }, { name: 'locationType', type: 'uint8' }, { name: 'name', type: 'string' }, { name: 'description', type: 'string' }], outputs: [] }],
                args: [vaultAddr, 0, name, `Seeded ${name}`]
            })
        });
        vaultAddresses.push(vaultAddr);
    }
    await sendTransactions(client0, vaultBatch);

    // Step 3: Marketplace Interaction
    console.log("Trading Actions...");
    const offerPrice = parseEther("0.000000001");
    const MINTER_ROLE = keccak256(toHex("MINTER_ROLE"));

    // Grant Role and Mint to User B (using User A as admin)
    await sendTransactions(client0, [
        { to: bragTokenAddr, data: encodeFunctionData({ abi: [{ name: 'grantRole', type: 'function', inputs: [{ name: 'role', type: 'bytes32' }, { name: 'account', type: 'address' }], outputs: [] }], args: [MINTER_ROLE, account0.address] }) },
        { to: bragTokenAddr, data: encodeFunctionData({ abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }], args: [client1.account.address, offerPrice * 2n] }) }
    ]);

    // User B: Approve and Create Offer
    await sendTransactions(client1, [
        { to: bragTokenAddr, data: encodeFunctionData({ abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ name: '', type: 'bool' }] }], args: [marketplaceAddr, offerPrice] }) },
        { to: marketplaceAddr, data: encodeFunctionData({ abi: [{ name: 'createOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'amount', type: 'uint256' }, { name: 'price', type: 'uint256' }], outputs: [] }], args: [bragNFTAddr, tokenId, 1n, offerPrice] }) }
    ]);

    // User A: Approve and Accept
    await sendTransactions(client0, [
        { to: bragNFTAddr, data: encodeFunctionData({ abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }], args: [marketplaceAddr, tokenId] }) },
        { to: marketplaceAddr, data: encodeFunctionData({ abi: [{ name: 'acceptOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }], args: [bragNFTAddr, tokenId] }) }
    ]);

    console.log("Seeding process completed.");
}

main().catch(console.error);
