import assert from "node:assert/strict";
import { describe, it, before, after } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";
import { spawn, ChildProcess } from "child_process";
import fs from "fs";
import path from "path";
import { WebSocket } from "ws";

/**
 * This test verifies the multi-server WebSocket handshake and real-time push logic.
 * It spawns the bridge process and simulates Minecraft WebSocket client interactions.
 */
describe("Multi-Server WebSocket Logic", async function () {
    let bridgeProcess: ChildProcess;
    let contracts: any;
    let viem: any;

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
        const net = await network.connect();
        viem = net.viem;
        contracts = await deployContracts();

        // Setup Bridge Config
        const config = {
            servers: {
                "server-1": { vaultAddress: contracts.vault1.address, name: "Survival" }
            }
        };
        fs.writeFileSync("bridge-config.json", JSON.stringify(config, null, 2));

        // Setup user mapping
        const mappings = { "12345": contracts.user.account.address.toLowerCase() };
        fs.writeFileSync("mappings.json", JSON.stringify(mappings));

        // Start Bridge
        bridgeProcess = spawn("node", ["scripts/nft-bridge.js"], {
            env: {
                ...process.env,
                CHAIN_ID: "31337",
                RPC_URL: "http://127.0.0.1:8545",
                CONTRACT_ADDRESS_BRAGNFT: contracts.bragNFT.address
            }
        });

        // bridgeProcess.stdout?.on('data', (d) => console.log(`[Bridge] ${d}`));
        // bridgeProcess.stderr?.on('data', (d) => console.error(`[Bridge Error] ${d}`));

        await new Promise(resolve => setTimeout(resolve, 4000));
    });

    after(() => {
        if (bridgeProcess) bridgeProcess.kill();
        if (fs.existsSync("bridge-config.json")) fs.unlinkSync("bridge-config.json");
        if (fs.existsSync("mappings.json")) fs.unlinkSync("mappings.json");
    });

    it("Should correctly identify server via handshake and push commands", async function () {
        const { bragNFT, vault1, user } = contracts;
        const playerName = "Steve";
        const xuid = "12345";

        const ws = new WebSocket("ws://localhost:9001");
        const receivedCommands: string[] = [];

        ws.on('message', (data) => {
            const msg = JSON.parse(data.toString());
            if (msg.header.messagePurpose === 'commandRequest') {
                receivedCommands.push(msg.body.commandLine);
            }
        });

        await new Promise(resolve => ws.on('open', resolve));

        // 1. Handshake
        ws.send(JSON.stringify({
            body: {
                eventName: "PlayerMessage",
                properties: { Message: `!handshake server-1` }
            }
        }));
        await new Promise(resolve => setTimeout(resolve, 500));

        // 2. Register Player Presence
        await fetch(`http://localhost:9000?path=check-ownership&uuid=${xuid}&serverId=server-1&playerName=${playerName}`);

        // 3. Trigger Event: Deposit NFT
        await bragNFT.write.donate(["test", ""], { account: user.account, value: parseEther("0.1") });
        const tokenId = 0n;
        await bragNFT.write.safeTransferFrom([user.account.address, vault1.address, tokenId], { account: user.account });

        // 4. Verification with retries (events take time to propagate to bridge)
        let found = false;
        for (let i = 0; i < 20; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (receivedCommands.some(c => c.includes(`tag "${playerName}" add nft_holder`))) {
                found = true;
                break;
            }
        }

        assert.ok(found, "Command to add nft_holder tag was not received by WebSocket");
        ws.close();
    });
});
