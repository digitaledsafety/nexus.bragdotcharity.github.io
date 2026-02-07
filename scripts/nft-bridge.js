import http from 'http';
import fs from 'fs';
import path from 'path';
import { createPublicClient, http as viemHttp, getContract } from 'viem';
import { mainnet, localhost } from 'viem/chains';

const PORT = 9000;
const CHAIN_ID = 31337; // Hardhat Localhost

// Simulated Database
const mappings = new Map(); // XUID -> ETH Address
const pendingTokens = new Map(); // Token -> { xuid, expires }

// Path to deployment info
const DEPLOYMENT_PATH = path.join(process.cwd(), 'ignition', 'deployments', `chain-${CHAIN_ID}`, 'deployed_addresses.json');

// Helper to get contract address
function getBragNFTAddress() {
    if (!fs.existsSync(DEPLOYMENT_PATH)) {
        console.error("Deployment file not found. Have you run 'npm run deploy:local'?");
        return null;
    }
    const deployments = JSON.parse(fs.readFileSync(DEPLOYMENT_PATH, 'utf8'));
    return deployments['AppModule#BragNFT'];
}

// Minimal ABI for balanceof
const BRAG_ABI = [
    {
        "inputs": [{ "name": "owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
];

const publicClient = createPublicClient({
    chain: localhost,
    transport: viemHttp()
});

const server = http.createServer(async (req, res) => {
    // Basic CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = url.pathname;
    const searchParams = url.searchParams;

    console.log(`Incoming request: ${req.method} ${req.url}`);

    try {
        // --- Endpoints ---

        // 1. Check if a platform account is linked
        if (searchParams.get('path') === 'check-platform') {
            const platformId = searchParams.get('platformId');
            const linkedAddress = mappings.get(platformId);

            res.writeHead(200);
            res.end(JSON.stringify({
                linked: !!linkedAddress,
                address: linkedAddress || null,
                uuid: platformId
            }));
            return;
        }

        // 2. Request a linking token (called from Minecraft)
        if (searchParams.get('path') === 'request-token') {
            const platformId = searchParams.get('platformId');
            const token = Math.random().toString(36).substring(2, 10).toUpperCase();

            pendingTokens.set(token, {
                platformId,
                expires: Date.now() + (10 * 60 * 1000)
            });

            console.log(`Generated token ${token} for XUID ${platformId}`);
            res.writeHead(200);
            res.end(JSON.stringify({ token, uuid: platformId }));
            return;
        }

        // 3. Verify SIWE and finalize link (called from Web Frontend)
        if (pathname === '/verify-link' && req.method === 'POST') {
            let body = '';
            for await (const chunk of req) body += chunk;
            const { token, signature, message, address } = JSON.parse(body);

            const pending = pendingTokens.get(token);
            if (!pending || pending.expires < Date.now()) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Invalid or expired token" }));
                return;
            }

            // In a real bridge, we would use a library like 'siwe' or ethers to verify the signature
            // Here we just log it and store the mapping to demonstrate the relationship storage.
            mappings.set(pending.platformId, address);
            pendingTokens.delete(token);

            console.log(`Successfully linked XUID ${pending.platformId} to ${address}`);
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, platformId: pending.platformId, address }));
            return;
        }

        // 4. Check Ownership (called from Minecraft using stored mapping or direct address)
        let addressToCheck = null;

        if (pathname.startsWith('/nfts/')) {
            addressToCheck = pathname.split('/')[2];
        }
        else if (searchParams.get('path') === 'check-ownership') {
            const uuid = searchParams.get('uuid');
            // Check if uuid is a platformId we have a mapping for, otherwise assume it's an address
            addressToCheck = mappings.get(uuid) || uuid;
        }

        if (!addressToCheck) {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Not found or missing parameters" }));
            return;
        }

        const bragAddress = getBragNFTAddress();
        if (!bragAddress) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: "BragNFT contract not deployed on local network" }));
            return;
        }

        // Validate address
        if (!addressToCheck.startsWith('0x') || addressToCheck.length !== 42) {
             // For local testing, if it's not a valid address, we might be using platformId as uuid
             // In a real scenario we'd have a mapping. Here we'll just return isHolder: false or mock it.
             res.writeHead(200);
             res.end(JSON.stringify({ isHolder: false, address: "0x0000000000000000000000000000000000000000", message: "UUID must be a valid ETH address for local mock" }));
             return;
        }

        const balance = await publicClient.readContract({
            address: bragAddress,
            abi: BRAG_ABI,
            functionName: 'balanceOf',
            args: [addressToCheck]
        });

        res.writeHead(200);
        res.end(JSON.stringify({
            isHolder: balance > 0n,
            balance: balance.toString(),
            address: addressToCheck
        }));

    } catch (error) {
        console.error(error);
        res.writeHead(500);
        res.end(JSON.stringify({ error: error.message }));
    }
});

server.listen(PORT, () => {
    console.log(`Local NFT Bridge running at http://localhost:${PORT}`);
    console.log(`Point your Minecraft addon to this URL for local testing.`);
});
