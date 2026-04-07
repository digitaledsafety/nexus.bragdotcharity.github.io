import { spawn, execSync } from 'child_process';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PORT = 9002;

const services = {
    hardhat: {
        command: 'npx',
        args: ['hardhat', 'node'],
        process: null,
        status: 'stopped',
        logs: []
    },
    bridge: {
        command: 'node',
        args: ['scripts/nft-bridge.js'],
        process: null,
        status: 'stopped',
        logs: []
    },
    frontend: {
        command: 'npx',
        args: ['serve', 'frontend', '-p', '3000'],
        process: null,
        status: 'stopped',
        logs: []
    }
};

// Placeholder for Bedrock Server Manager API URL
let MANAGER_API_URL = process.env.MANAGER_API_URL || 'http://localhost:9003';

function log(service, data) {
    const message = data.toString().trim();
    if (!message) return;
    const entry = { timestamp: new Date().toISOString(), message };
    services[service].logs.push(entry);
    if (services[service].logs.length > 100) services[service].logs.shift();
    console.log(`[${service.toUpperCase()}] ${message}`);
}

function startService(name) {
    if (services[name].process) return;

    console.log(`Starting ${name}...`);
    const svc = services[name];
    svc.process = spawn(svc.command, svc.args, {
        cwd: ROOT,
        shell: true,
        env: { ...process.env, FORCE_COLOR: 'true' }
    });

    svc.status = 'running';

    svc.process.stdout.on('data', (data) => log(name, data));
    svc.process.stderr.on('data', (data) => log(name, data));

    svc.process.on('close', (code) => {
        console.log(`${name} process exited with code ${code}`);
        svc.status = 'stopped';
        svc.process = null;
    });
}

function stopService(name) {
    if (services[name].process) {
        console.log(`Stopping ${name}...`);
        if (process.platform === 'win32') {
            execSync(`taskkill /pid ${services[name].process.pid} /T /F`);
        } else {
            services[name].process.kill('SIGTERM');
        }
    }
}

async function checkManagerStatus() {
    try {
        const res = await fetch(`${MANAGER_API_URL}/api/status`);
        return res.ok;
    } catch (e) {
        return false;
    }
}

function checkDependencies() {
    const nodeModulesPath = path.join(ROOT, 'node_modules');
    const viemPath = path.join(nodeModulesPath, 'viem');
    if (!fs.existsSync(nodeModulesPath) || !fs.existsSync(viemPath)) {
        console.log('Dependencies missing or incomplete. Installing...');
        try {
            execSync('npm install', { cwd: ROOT, stdio: 'inherit' });
            console.log('Dependencies installed successfully.');
        } catch (e) {
            console.error('Failed to install dependencies:', e.message);
            throw e;
        }
    }
}

async function waitForHardhat(timeoutMs = 30000) {
    console.log('Waiting for Hardhat node to be ready...');
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        try {
            const res = await fetch('http://127.0.0.1:8545', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_chainId', params: [], id: 1 })
            });
            if (res.ok) {
                console.log('Hardhat node is ready.');
                return true;
            }
        } catch (e) {
            // Node not ready yet
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw new Error(`Hardhat node failed to become ready within ${timeoutMs}ms`);
}

async function initEnvironment() {
    if (services.hardhat.status === 'initializing') return false;
    services.hardhat.status = 'initializing';

    console.log('--- Initializing Environment ---');

    try {
        checkDependencies();

        // 1. Start Hardhat Node
        startService('hardhat');

        // Wait for node to be ready
        await waitForHardhat();

        console.log('Deploying contracts...');
        await new Promise((resolve, reject) => {
            const child = spawn('npm', ['run', 'deploy:local'], { cwd: ROOT, shell: true });
            child.stdout.on('data', d => log('hardhat', d));
            child.stderr.on('data', d => log('hardhat', d));
            child.on('close', code => code === 0 ? resolve() : reject(new Error('Deploy failed')));
        });

        console.log('Seeding data...');
        await new Promise((resolve, reject) => {
            const child = spawn('npm', ['run', 'seed:local'], { cwd: ROOT, shell: true });
            child.stdout.on('data', d => log('hardhat', d));
            child.stderr.on('data', d => log('hardhat', d));
            child.on('close', code => code === 0 ? resolve() : reject(new Error('Seed failed')));
        });

        console.log('Environment initialized successfully.');
        services.hardhat.status = 'running';
        return true;
    } catch (e) {
        console.error('Initialization failed:', e.message);
        services.hardhat.status = 'stopped';
        return false;
    }
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);

    if (url.pathname === '/status') {
        checkManagerStatus().then(connected => {
            const status = {
                services: {},
                minecraft: {
                    managerUrl: MANAGER_API_URL,
                    connected: connected
                }
            };
            for (const [name, svc] of Object.entries(services)) {
                status.services[name] = { status: svc.status, logCount: svc.logs.length };
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(status));
        });
    } else if (url.pathname === '/logs') {
        const service = url.searchParams.get('service');
        if (services[service]) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(services[service].logs));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (url.pathname === '/start' && req.method === 'POST') {
        const service = url.searchParams.get('service');
        if (services[service]) {
            startService(service);
            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (url.pathname === '/stop' && req.method === 'POST') {
        const service = url.searchParams.get('service');
        if (services[service]) {
            stopService(service);
            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (url.pathname === '/init' && req.method === 'POST') {
        initEnvironment();
        res.writeHead(200);
        res.end(JSON.stringify({ success: true, message: 'Initialization started' }));
    } else if (url.pathname === '/minecraft/start' && req.method === 'POST') {
        console.log(`Requesting Minecraft server start via ${MANAGER_API_URL}`);
        fetch(`${MANAGER_API_URL}/api/start`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            });
    } else if (url.pathname === '/minecraft/stop' && req.method === 'POST') {
        console.log(`Requesting Minecraft server stop via ${MANAGER_API_URL}`);
        fetch(`${MANAGER_API_URL}/api/stop`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            });
    } else if (url.pathname === '/minecraft/restart' && req.method === 'POST') {
        console.log(`Requesting Minecraft server restart via ${MANAGER_API_URL}`);
        fetch(`${MANAGER_API_URL}/api/restart`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                res.writeHead(200);
                res.end(JSON.stringify(data));
            }).catch(err => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            });
    } else if (url.pathname === '/minecraft/inject' && req.method === 'POST') {
        // Proxy to bedrock-server-manager
        const addonPath = path.join(ROOT, 'addons', 'minecraft-bedrock-addon');
        console.log(`Injecting addon from ${addonPath} to ${MANAGER_API_URL}`);

        fetch(`${MANAGER_API_URL}/api/inject`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: addonPath })
        }).then(r => r.json())
          .then(data => {
              res.writeHead(200);
              res.end(JSON.stringify(data));
          }).catch(err => {
              res.writeHead(500);
              res.end(JSON.stringify({ error: err.message }));
          });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const mode = process.argv[2];
if (mode === 'init') {
    initEnvironment().then((success) => {
        if (success) {
            startService('bridge');
            startService('frontend');
        } else {
            console.error('Initialization failed. Bridge and frontend will not be started.');
            process.exit(1);
        }
    });
} else if (mode === 'start') {
    startService('hardhat');
    startService('bridge');
    startService('frontend');
}

server.listen(PORT, () => {
    console.log(`Environment Manager running at http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Shutting down services...');
    for (const name in services) {
        stopService(name);
    }
    process.exit();
});
