import assert from "node:assert/strict";
import { describe, it, before, after } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";
import { spawn, ChildProcess } from "child_process";
import fs from "fs";
import { WebSocket } from "ws";

describe("Real-time WebSocket Handshake & Tracking", async function () {
    let bridgeProcess: ChildProcess;
    let contracts: any;
    const { viem } = await network.connect();

    async function deployContracts() {
        const [owner, user] = await viem.getWalletClients();
        const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
        const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

        await registry.write.verifyVault([vault1.address, 0, "Survival Vault", "Vault 1"]);

        const bragNFT = await viem.deployContract("BragNFT", [
            owner.account.address,
            owner.account.address,
            parseEther("0.1")
        ]);
        const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
        await receipt.write.setMinter([bragNFT.address, true]);
        await bragNFT.write.setReceiptContract([receipt.address]);

        return { registry, vault1, bragNFT, owner, user };
    }

    before(async () => {
        contracts = await deployContracts();
        const publicClient = await viem.getPublicClient();
        console.log(`Test connected at block ${await publicClient.getBlockNumber()}`);

        const config = {
            servers: {
                "server-1": { vaultAddress: contracts.vault1.address, name: "Survival" }
            }
        };
        fs.writeFileSync("bridge-config.json", JSON.stringify(config, null, 2));

        const mappings = { [contracts.user.account.address.toLowerCase()]: contracts.user.account.address.toLowerCase() };
        fs.writeFileSync("mappings.json", JSON.stringify(mappings));

        bridgeProcess = spawn("node", ["scripts/nft-bridge.js"], {
            env: {
                ...process.env,
                CHAIN_ID: "31337",
                RPC_URL: "http://127.0.0.1:8545",
                CONTRACT_ADDRESS_BRAGNFT: contracts.bragNFT.address
            }
        });
        bridgeProcess.stdout?.on('data', (data) => console.log(`[Bridge] ${data}`));
        bridgeProcess.stderr?.on('data', (data) => console.error(`[Bridge Error] ${data}`));

        await new Promise(resolve => setTimeout(resolve, 3000));
    });

    after(() => {
        if (bridgeProcess) bridgeProcess.kill();
        if (fs.existsSync("bridge-config.json")) fs.unlinkSync("bridge-config.json");
        if (fs.existsSync("mappings.json")) fs.unlinkSync("mappings.json");
    });

    it("Should handshake and then push commands upon NFT transfer", async function () {
        const { bragNFT, vault1, user } = contracts;
        const userAddress = user.account.address.toLowerCase();
        const playerName = "Steve";

        const ws = new WebSocket("ws://localhost:9001");
        const receivedCommands: any[] = [];

        ws.on('message', (data) => {
            const msg = JSON.parse(data.toString());
            if (msg.header.messagePurpose === 'commandRequest') {
                receivedCommands.push(msg.body.commandLine);
            }
        });

        await new Promise(resolve => ws.on('open', resolve));

        // 1. Perform Handshake (Simulate Minecraft sending !handshake)
        const handshakeMsg = {
            body: {
                eventName: "PlayerMessage",
                properties: {
                    Message: `!handshake server-1`
                }
            }
        };
        ws.send(JSON.stringify(handshakeMsg));
        await new Promise(resolve => setTimeout(resolve, 500));

        // 2. Register player activity
        await fetch(`http://localhost:9000?path=check-ownership&uuid=${userAddress}&serverId=server-1&playerName=${playerName}`);

        // 3. Mint NFT to user
        await bragNFT.write.donate(["test", ""], { account: user.account, value: parseEther("0.1") });
        const tokenId = 0n;

        // 4. Exhibit to Vault 1
        await bragNFT.write.safeTransferFrom([user.account.address, vault1.address, tokenId], { account: user.account });

        // Wait for processing with retries
        let success = false;
        for (let i = 0; i < 10; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (receivedCommands.some(c => c.includes(`tag "${playerName}" add nft_holder`))) {
                success = true;
                break;
            }
        }

        console.log("Received Commands:", receivedCommands);
        assert.ok(success, "Should have sent add tag command");

        // 5. Withdraw NFT
        await vault1.write.withdraw721([bragNFT.address, tokenId], { account: user.account });

        success = false;
        for (let i = 0; i < 10; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (receivedCommands.some(c => c.includes(`tag "${playerName}" remove nft_holder`))) {
                success = true;
                break;
            }
        }
        assert.ok(success, "Should have sent remove tag command");

        ws.close();
    });
});
