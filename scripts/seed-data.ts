import fs from "fs";
import path from "path";
import {
    createPublicClient,
    createWalletClient,
    http,
    parseEther,
    formatEther,
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

const hardhatLocal = defineChain({
    ...localhost,
    id: 31337,
});

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const chain = isSepolia ? sepolia : hardhatLocal;
    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` :
                    "http://127.0.0.1:8545");

    // 1. Setup Signers (EOAs)
    let privateKey0 = (isSepolia ? process.env.SEPOLIA_PRIVATE_KEY : "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80") as string;
    let privateKey1 = (isSepolia ? process.env.SEPOLIA_BUYER_PRIVATE_KEY : "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d") as string;
    
    const account0 = privateKeyToAccount(privateKey0 as Hex);
    const account1 = privateKeyToAccount(privateKey1 as Hex);
    const signer0 = LocalAccountSigner.privateKeyToAccountSigner(privateKey0 as Hex);
    const signer1 = LocalAccountSigner.privateKeyToAccountSigner(privateKey1 as Hex);

    const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });

    let client0: any;
    let client1: any;

    // 2. Initialize Clients (Smart Account vs EOA)
    if (isSepolia) {
        console.log("Setting up Alchemy Smart Accounts...");
        const transport = http(rpcUrl);
        
        const config = (signer: any) => ({
            transport,
            chain,
            rpcUrl,
            account: createMultiOwnerLightAccount({ transport, chain, signer }),
            gasManagerConfig: { policyId: process.env.ALCHEMY_GAS_POLICY_ID! },
        });

        client0 = await createAlchemySmartAccountClient(config(signer0));
        client1 = await createAlchemySmartAccountClient(config(signer1));
        console.log("Smart Accounts ready:", client0.account.address, client1.account.address);
    } else {
        client0 = createWalletClient({ account: account0, chain, transport: http(rpcUrl) }).extend(walletActions);
        client1 = createWalletClient({ account: account1, chain, transport: http(rpcUrl) }).extend(walletActions);
    }

    // 3. Load Deployment Addresses
    const chainId = await publicClient.getChainId();
    const deploymentPath = path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`);
    const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

    const bragNFTAddr = deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const registryAddr = deployment["AppModule#ExhibitRegistry"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];

    // 4. Helpers for UserOps and Transactions
    async function waitForTx(uoOrHash: any) {
        if (isSepolia && typeof uoOrHash === 'object' && uoOrHash.hash) {
            console.log("Waiting for UserOp bundled...", uoOrHash.hash);
            const txHash = await client0.waitForUserOperationTransaction({ hash: uoOrHash.hash });
            return await publicClient.waitForTransactionReceipt({ hash: txHash });
        }
        const hash = typeof uoOrHash === 'string' ? uoOrHash : uoOrHash.hash;
        return await publicClient.waitForTransactionReceipt({ hash });
    }

    async function sendTransactions(client: any, requests: any[]) {
        if (isSepolia) {
            // Alchemy Smart Client automatically batches these into one UserOp
            const uoHash = await client.sendTransactions({ requests });
            return await waitForTx({ hash: uoHash });
        } else {
            let lastReceipt;
            for (const req of requests) {
                const hash = await client.sendTransaction(req);
                lastReceipt = await publicClient.waitForTransactionReceipt({ hash });
            }
            return lastReceipt;
        }
    }

    // 5. Execution Steps
    const donationAmount = isSepolia ? parseEther("0.00000001") : parseEther("0.001");

    console.log("Step 1: User A Minting BragNFT...");
    const donateReceipt = await sendTransactions(client0, [{
        to: bragNFTAddr,
        value: donationAmount,
        data: encodeFunctionData({
            abi: [{ name: 'donate', type: 'function', inputs: [{ name: 'message', type: 'string' }, { name: 'media', type: 'string' }], outputs: [], stateMutability: 'payable' }],
            args: ["Seeding data!", "https://picsum.photos/400"]
        })
    }]);

    const bragNFTArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));
    const tokenId = decodeEventLog({
        abi: bragNFTArtifact.abi,
        data: donateReceipt.logs[1].data, // Index might vary depending on specific contract events
        topics: donateReceipt.logs[1].topics
    }).args['nftTokenId'] as bigint;
    console.log(`Minted Token ID: ${tokenId}`);

    console.log("Step 2: Deploying Vaults...");
    const vaultNames = ["minecraft-1", "minecraft-2", "gallery-1", "roblox-1", "custom-1"];
    const vaultAddresses: string[] = [];
    const vaultBatch: any[] = [];
    const { abi: vaultAbi, bytecode: vaultBytecode } = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/ExhibitVault.sol/ExhibitVault.json"), "utf8"));
    const CREATE2_FACTORY = "0x4e59b44847b379578588920cA78FbF26c0B4956C";

    for (const name of vaultNames) {
        const salt = keccak256(toHex(`${name}-${Date.now()}`));
        const deployData = encodeDeployData({ abi: vaultAbi, args: [registryAddr], bytecode: vaultBytecode });
        const vaultAddr = getContractAddress({ bytecode: deployData, from: CREATE2_FACTORY, opcode: "CREATE2", salt });
        
        vaultBatch.push({ to: CREATE2_FACTORY, data: concat([salt, deployData]) });
        vaultBatch.push({
            to: registryAddr,
            data: encodeFunctionData({
                abi: [{ name: 'verifyVault', type: 'function', inputs: [{ name: 'vault', type: 'address' }, { name: 'locationType', type: 'uint8' }, { name: 'name', type: 'string' }, { name: 'description', type: 'string' }], outputs: [] }],
                args: [vaultAddr, 0, name, `Seeded vault for ${name}`]
            })
        });
        vaultAddresses.push(vaultAddr);
    }
    await sendTransactions(client0, vaultBatch);

    console.log("Step 3: User A actions (Exhibit, Move, Withdraw)...");
    const vault1 = vaultAddresses[0];
    const vault2 = vaultAddresses[1];
    await sendTransactions(client0, [
        { to: bragNFTAddr, data: encodeFunctionData({ abi: [{ name: 'safeTransferFrom', type: 'function', inputs: [{ name: 'from', type: 'address' }, { name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'data', type: 'bytes' }], outputs: [] }], args: [client0.account.address, vault1, tokenId, "0x"] }) },
        { to: vault1, data: encodeFunctionData({ abi: [{ name: 'move721', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'destinationVault', type: 'address' }], outputs: [] }], args: [bragNFTAddr, tokenId, vault2] }) },
        { to: vault2, data: encodeFunctionData({ abi: [{ name: 'withdraw721', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }], args: [bragNFTAddr, tokenId] }) }
    ]);

    console.log("Step 4: User B Market Actions...");
    const offerPrice = parseEther("0.000000001");
    const MINTER_ROLE = keccak256(toHex("MINTER_ROLE"));

    await sendTransactions(client0, [
        { to: bragTokenAddr, data: encodeFunctionData({ abi: [{ name: 'grantRole', type: 'function', inputs: [{ name: 'role', type: 'bytes32' }, { name: 'account', type: 'address' }], outputs: [] }], args: [MINTER_ROLE, account0.address] }) },
        { to: bragTokenAddr, data: encodeFunctionData({ abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }], args: [client1.account.address, offerPrice * 2n] }) }
    ]);

    await sendTransactions(client1, [
        { to: bragTokenAddr, data: encodeFunctionData({ abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ name: '', type: 'bool' }] }], args: [marketplaceAddr, offerPrice] }) },
        { to: marketplaceAddr, data: encodeFunctionData({ abi: [{ name: 'createOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'amount', type: 'uint256' }, { name: 'price', type: 'uint256' }], outputs: [] }], args: [bragNFTAddr, tokenId, 1n, offerPrice] }) }
    ]);

    console.log("Step 5: Finalizing Trade...");
    await sendTransactions(client0, [
        { to: bragNFTAddr, data: encodeFunctionData({ abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }], args: [marketplaceAddr, tokenId] }) },
        { to: marketplaceAddr, data: encodeFunctionData({ abi: [{ name: 'acceptOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }], outputs: [] }], args: [bragNFTAddr, tokenId] }) }
    ]);

    console.log("Seeding complete! NFT is now owned by User B.");
}

main().catch(console.error);
