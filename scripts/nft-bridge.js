import http from 'http';
import fs from 'fs';
import path from 'path';
import { createPublicClient, http as viemHttp, getContract, verifyMessage, parseAbiItem, getAddress } from 'viem';
import { mainnet, localhost, sepolia } from 'viem/chains';
import { WebSocketServer } from 'ws';
import { randomUUID } from 'node:crypto';

const PORT = 9000;
const WS_PORT = 9001;
const CHAIN_ID = process.env.CHAIN_ID ? parseInt(process.env.CHAIN_ID) : 31337;
const MAPPINGS_FILE = path.join(process.cwd(), 'mappings.json');
const CONFIG_FILE = path.join(process.cwd(), 'bridge-config.json');

// --- Configuration ---
let serverConfigs = {
    "server-1": { vaultAddress: null, name: "Survival" },
    "server-2": { vaultAddress: null, name: "Creative" }
};

if (fs.existsSync(CONFIG_FILE)) {
    try {
        const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        serverConfigs = { ...serverConfigs, ...config.servers };
        console.log("Loaded server configurations");
    } catch (e) {
        console.error("Failed to load bridge-config.json:", e);
    }
}

let mappings = new Map();
if (fs.existsSync(MAPPINGS_FILE)) {
    try {
        const data = JSON.parse(fs.readFileSync(MAPPINGS_FILE, 'utf8'));
        mappings = new Map(Object.entries(data));
    } catch (e) {}
}

const pendingTokens = new Map();
const statusCache = new Map();
const activePlayers = new Map(); // XUID -> { serverId, playerName }
const serverSockets = new Map(); // serverId -> WebSocket (Minecraft uses only one connection per server)

function saveMappings() {
    fs.writeFileSync(MAPPINGS_FILE, JSON.stringify(Object.fromEntries(mappings), null, 2));
}

// --- WebSocket Server (Minecraft Bedrock Protocol) ---
const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws, req) => {
    console.log(`Minecraft server connected from ${req.socket.remoteAddress}`);

    // In a real scenario, the first message from the server would identify which serverId it is.
    // For now, we'll assign the first connection to server-1, second to server-2, etc. or use a handshake.
    ws.on('message', (data) => {
        try {
            const msg = JSON.parse(data);

            // Handle Minecraft Bedrock Handshake via PlayerMessage
            if (msg.body && msg.body.eventName === 'PlayerMessage') {
                const message = msg.body.properties.Message;
                if (message && message.startsWith('!handshake ')) {
                    const serverId = message.split(' ')[1];
                    if (serverConfigs[serverId]) {
                        serverSockets.set(serverId, ws);
                        console.log(`WebSocket handshaked and assigned to ${serverId} (${serverConfigs[serverId].name})`);
                    }
                }
            }

            // Handle Command Responses (optional but good for debugging)
            if (msg.header && msg.header.messagePurpose === 'commandResponse') {
                // console.log("Command Response:", JSON.stringify(msg.body, null, 2));
            }

        } catch (e) {
            console.error("Error processing WS message:", e);
        }
    });

    ws.on('close', () => {
        for (const [id, socket] of serverSockets.entries()) {
            if (socket === ws) {
                serverSockets.delete(id);
                console.log(`WebSocket disconnected for ${id}`);
                break;
            }
        }
    });

    // Subscribe to interesting events
    const subscribeMsg = {
        header: {
            version: 1,
            requestId: randomUUID(),
            messageType: "commandRequest",
            messagePurpose: "subscribe"
        },
        body: { eventName: "PlayerMessage" }
    };
    ws.send(JSON.stringify(subscribeMsg));
});

function sendMinecraftCommand(serverId, commandLine) {
    const ws = serverSockets.get(serverId);
    if (!ws) {
        console.warn(`No active WebSocket for server ${serverId}. Command ignored: ${commandLine}`);
        return;
    }

    const msg = {
        header: {
            version: 1,
            requestId: randomUUID(),
            messageType: "commandRequest",
            messagePurpose: "commandRequest"
        },
        body: {
            commandLine: commandLine,
            version: 1
        }
    };
    ws.send(JSON.stringify(msg));
}

// --- Blockchain Integration ---
const DEPLOYMENT_PATH = path.join(process.cwd(), 'ignition', 'deployments', `chain-${CHAIN_ID}`, 'deployed_addresses.json');

function getContractAddress(contractName) {
    const envVar = `CONTRACT_ADDRESS_${contractName.toUpperCase()}`;
    if (process.env[envVar]) return process.env[envVar];

    if (!fs.existsSync(DEPLOYMENT_PATH)) return null;
    const deployments = JSON.parse(fs.readFileSync(DEPLOYMENT_PATH, 'utf8'));
    return deployments[`AppModule#${contractName}`];
}

const NEXUS_ABI = [
    { "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
];

const chain = CHAIN_ID === 31337 ? localhost : sepolia;
const RPC_URL = process.env.RPC_URL || (CHAIN_ID === 31337 ? 'http://127.0.0.1:8545' : undefined);
console.log(`Bridge using RPC_URL: ${RPC_URL} for Chain ID: ${CHAIN_ID}`);
const publicClient = createPublicClient({
    chain: chain,
    transport: viemHttp(RPC_URL, {
        retryCount: 10,
        retryDelay: 1000,
    }),
    pollingInterval: 500, // Faster polling for events
});

async function handleStatusChange(address) {
    if (!address || address === '0x0000000000000000000000000000000000000000') return;
    let normalizedAddress;
    try {
        normalizedAddress = getAddress(address);
    } catch (e) {
        return;
    }

    // Find all XUIDs linked to this address
    const xuids = [];
    for (const [xuid, addr] of mappings.entries()) {
        try {
            if (getAddress(addr) === normalizedAddress) xuids.push(xuid);
        } catch (e) {}
    }

    for (const xuid of xuids) {
        const active = activePlayers.get(xuid);
        if (!active) continue;

        console.log(`Pushing real-time update for player ${active.playerName} (${xuid}) on ${active.serverId}`);

        // Refresh status
        const status = await fetchCurrentStatus(lowerAddress);
        statusCache.set(lowerAddress, status);

        const serverConfig = serverConfigs[active.serverId];
        const vaultAddr = (serverConfig && serverConfig.vaultAddress) ? serverConfig.vaultAddress.toLowerCase() : null;
        const inVault = vaultAddr ? (status.vaults[vaultAddr]?.length > 0) : false;
        const inWallet = status.walletNfts.length > 0;
        const isHolder = inVault || inWallet;

        if (isHolder) {
            sendMinecraftCommand(active.serverId, `tag "${active.playerName}" add nft_holder`);
            sendMinecraftCommand(active.serverId, `tellraw "${active.playerName}" {"rawtext":[{"text":"§a[NFT] Your status has been updated! Qualification verified.§r"}]}`);
        } else {
            sendMinecraftCommand(active.serverId, `tag "${active.playerName}" remove nft_holder`);
            sendMinecraftCommand(active.serverId, `tellraw "${active.playerName}" {"rawtext":[{"text":"§c[NFT] Your status has changed. You no longer hold a qualifying NFT for this server.§r"}]}`);
        }
    }
}

async function setupEventListeners() {
    const nexusAddress = getContractAddress('Nexus');
    if (nexusAddress) {
        console.log(`Setting up event listener for Nexus at ${nexusAddress}`);
        publicClient.watchEvent({
            address: nexusAddress,
            event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)'),
            polling: true,
            onLogs: (logs) => {
                logs.forEach(log => {
                    console.log(`Transfer event detected: ${log.args.from} -> ${log.args.to}`);
                    handleStatusChange(log.args.from);
                    handleStatusChange(log.args.to);
                });
            }
        });
    }

    Object.values(serverConfigs).forEach(config => {
        if (!config.vaultAddress) return;
        const events = [
            'event Exhibited721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, string location, uint256 expiry)',
            'event Withdrawn721(address indexed nftContract, uint256 indexed tokenId, address indexed owner)',
            'event Moved721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, address destinationVault)',
            'event Exhibited1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, string location, uint256 expiry)',
            'event Withdrawn1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount)'
        ];
        events.forEach(e => {
            publicClient.watchEvent({
                address: config.vaultAddress,
                event: parseAbiItem(e),
                polling: true,
                onLogs: (logs) => logs.forEach(log => handleStatusChange(log.args.owner))
            });
        });
    });
}

// --- HTTP API ---
const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = url.pathname;
    const searchParams = url.searchParams;

    try {
        if (searchParams.get('path') === 'check-platform') {
            const platformId = searchParams.get('platformId');
            const linkedAddress = mappings.get(platformId);
            res.writeHead(200);
            res.end(JSON.stringify({ linked: !!linkedAddress, address: linkedAddress || null, uuid: platformId }));
            return;
        }

        if (searchParams.get('path') === 'request-token') {
            const platformId = searchParams.get('platformId');
            const token = Math.random().toString(36).substring(2, 10).toUpperCase();
            pendingTokens.set(token, { platformId, expires: Date.now() + (10 * 60 * 1000) });
            res.writeHead(200);
            res.end(JSON.stringify({ token, uuid: platformId, registrationUrl: `http://localhost:3000?token=${token}` }));
            return;
        }

        if (pathname === '/verify-link' && req.method === 'POST') {
            let body = '';
            for await (const chunk of req) body += chunk;
            const { token, signature, message, address } = JSON.parse(body);
            const pending = pendingTokens.get(token);
            if (!pending || pending.expires < Date.now()) { res.writeHead(400); res.end(JSON.stringify({ error: "Invalid token" })); return; }
            const isValid = await verifyMessage({ address, message, signature });
            if (!isValid) { res.writeHead(401); res.end(JSON.stringify({ error: "Invalid signature" })); return; }
            mappings.set(pending.platformId, address);
            saveMappings();
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, platformId: pending.platformId, address }));
            return;
        }

        if (searchParams.get('path') === 'check-ownership') {
            const uuid = searchParams.get('uuid'); // This is the XUID from Minecraft
            const serverId = searchParams.get('serverId');
            const playerName = searchParams.get('playerName');
            const addressToCheck = mappings.get(uuid) || uuid;

            if (uuid && serverId && playerName) {
                activePlayers.set(uuid, { serverId, playerName });
                // If this is the first time we see this connection, try to bind the socket if it's generic
                if (!serverSockets.has(serverId) && wss.clients.size > 0) {
                    // For local mock testing, we'll just take the first available socket if not bound
                    const firstSocket = Array.from(wss.clients)[0];
                    serverSockets.set(serverId, firstSocket);
                }
            }

            if (!addressToCheck || !addressToCheck.startsWith('0x') || addressToCheck.length !== 42) {
                 res.writeHead(200);
                 res.end(JSON.stringify({ isHolder: false, address: addressToCheck }));
                 return;
            }

            let status = await fetchCurrentStatus(addressToCheck);
            statusCache.set(addressToCheck.toLowerCase(), status);

            const serverConfig = serverConfigs[serverId];
            const vaultAddr = (serverConfig && serverConfig.vaultAddress) ? serverConfig.vaultAddress.toLowerCase() : null;
            const inVault = vaultAddr ? (status.vaults[vaultAddr]?.length > 0) : false;
            const inWallet = status.walletNfts.length > 0;

            res.writeHead(200);
            res.end(JSON.stringify({
                isHolder: inVault || inWallet,
                inVault,
                inWallet,
                address: addressToCheck,
                nfts: [...status.walletNfts, ...(vaultAddr ? (status.vaults[vaultAddr] || []) : [])]
            }));
            return;
        }

        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not found" }));
    } catch (error) {
        console.error(error);
        res.writeHead(500);
        res.end(JSON.stringify({ error: error.message }));
    }
});

async function fetchWithRetry(fn, label, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (e) {
            if (i === maxRetries - 1) throw e;
            console.warn(`[Retry] ${label} failed (attempt ${i+1}/${maxRetries}): ${e.message}`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

async function fetchCurrentStatus(address) {
    console.log(`Fetching current on-chain status for ${address}...`);
    const nexusAddress = getContractAddress('Nexus');
    let walletNfts = [];

    // Check Wallet
    if (nexusAddress) {
        try {
            const balance = await fetchWithRetry(() => publicClient.readContract({
                address: nexusAddress,
                abi: NEXUS_ABI,
                functionName: 'balanceOf',
                args: [address]
            }), `balanceOf(${address})`);

            if (balance > 0n) {
                walletNfts.push({ tokenId: "any", location: "Wallet", nftContract: nexusAddress });
            }
        } catch (e) {
            console.error(`Error checking balance for ${address}:`, e.message);
        }
    }

    const vaults = {};
    for (const config of Object.values(serverConfigs)) {
        if (!config.vaultAddress) continue;
        const vaultAddr = config.vaultAddress.toLowerCase();
        vaults[vaultAddr] = [];

        try {
            // Check for exhibited Nexuss in this vault
            // We use getLogs to find tokens the user has exhibited
            const logs = await fetchWithRetry(() => publicClient.getLogs({
                address: vaultAddr,
                event: parseAbiItem('event Exhibited721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, string location, uint256 expiry)'),
                args: { owner: address },
                fromBlock: 0n
            }), `getLogs(${vaultAddr})`);

            // For each token, verify it's still in the vault
            for (const log of logs) {
                const { nftContract, tokenId } = log.args;
                const currentOwner = await fetchWithRetry(() => publicClient.readContract({
                    address: vaultAddr,
                    abi: [parseAbiItem('function owner721(address, uint256) view returns (address)')],
                    functionName: 'owner721',
                    args: [nftContract, tokenId]
                }), `owner721(${vaultAddr}, ${tokenId})`);

                if (currentOwner.toLowerCase() === address.toLowerCase()) {
                    let media = { image: null, animation_url: null };
                    try {
                        const uri = await fetchWithRetry(() => publicClient.readContract({
                            address: nftContract,
                            abi: [parseAbiItem('function tokenURI(uint256) view returns (string)')],
                            functionName: 'tokenURI',
                            args: [tokenId]
                        }), `tokenURI(${nftContract}, ${tokenId})`);

                        if (uri.startsWith('data:application/json;base64,')) {
                            const json = JSON.parse(Buffer.from(uri.split(',')[1], 'base64').toString());
                            media.image = json.image;
                            media.animation_url = json.animation_url;
                        }
                    } catch (e) {
                        console.error(`Error fetching tokenURI for ${nftContract} #${tokenId}:`, e.message);
                    }

                    vaults[vaultAddr].push({
                        tokenId: tokenId.toString(),
                        nftContract,
                        location: config.name,
                        image: media.image,
                        animation_url: media.animation_url
                    });
                }
            }
        } catch (e) {
            console.error(`Error checking vault ${vaultAddr} for ${address}:`, e.message);
        }
    }

    return { walletNfts, vaults };
}

server.listen(PORT, async () => {
    console.log(`HTTP Bridge: http://localhost:${PORT}`);
    console.log(`WS Bridge: ws://localhost:${WS_PORT}`);
    setupEventListeners().catch(console.error);
});
