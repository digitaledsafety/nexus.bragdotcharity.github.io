import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { handleRequest, sessions, nonces, pendingTokens, emailWallets, mappings } from "../scripts/nft-bridge.js";
import { EventEmitter } from "node:events";
import { privateKeyToAccount } from 'viem/accounts';

class MockResponse extends EventEmitter {
    constructor() {
        super();
        this.statusCode = 200;
        this.headers = {};
        this.body = "";
        this.writableEnded = false;
    }

    setHeader(name, value) {
        this.headers[name] = value;
    }

    writeHead(statusCode, headers) {
        this.statusCode = statusCode;
        if (headers) Object.assign(this.headers, headers);
    }

    end(data) {
        if (data) this.body += data;
        this.writableEnded = true;
        this.emit("finish");
    }

    write(data) {
        this.body += data;
    }
}

class MockRequest extends EventEmitter {
    constructor(url, method = "GET", headers = {}) {
        super();
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = "";
    }

    async *[Symbol.asyncIterator]() {
        yield Buffer.from(this.body);
    }
}

const TEST_PRIVATE_KEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const account = privateKeyToAccount(TEST_PRIVATE_KEY);

describe('Auth Bridge API', () => {
    beforeEach(() => {
        sessions.clear();
        nonces.clear();
        pendingTokens.clear();
        emailWallets.clear();
        mappings.clear();
    });

    it('should return a nonce for SIWE', async () => {
        const req = new MockRequest(`/auth/nonce?address=${account.address}`);
        const res = new MockResponse();

        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200);
        const data = JSON.parse(res.body);
        assert.ok(data.nonce);
        assert.strictEqual(nonces.get(account.address.toLowerCase()), data.nonce);
    });

    it('should verify SIWE signature and create a session', async () => {
        const nonce = "test-nonce-123";
        nonces.set(account.address.toLowerCase(), nonce);

        const message = `Sign in to Brag Charity\nNonce: ${nonce}`;
        const signature = await account.signMessage({ message });

        const req = new MockRequest("/auth/verify", "POST");
        req.body = JSON.stringify({
            address: account.address,
            message,
            signature
        });

        const res = new MockResponse();
        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200);
        const data = JSON.parse(res.body);
        assert.ok(data.sessionId);

        const session = sessions.get(data.sessionId);
        assert.ok(session);
        assert.strictEqual(session.address, account.address.toLowerCase());
    });

    it('should handle email login and generate deterministic address', async () => {
        const email = "test@example.com";
        const req = new MockRequest("/auth/login-email", "POST");
        req.body = JSON.stringify({ email, password: "password123" });

        const res = new MockResponse();
        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200);
        const data = JSON.parse(res.body);
        assert.ok(data.sessionId);

        const expectedAddress = `0x${Buffer.from(email).toString('hex').padEnd(40, '0').slice(0, 40)}`;
        assert.strictEqual(data.address, expectedAddress);
    });

    it('should link a platform ID via /verify-link', async () => {
        const token = "LINK123";
        const platformId = "minecraft-uuid-456";
        pendingTokens.set(token, { platformId, expires: Date.now() + 10000 });

        const message = `Link account ${token}`;
        const signature = await account.signMessage({ message });

        const req = new MockRequest("/verify-link", "POST");
        req.body = JSON.stringify({
            token,
            address: account.address,
            message,
            signature
        });

        const res = new MockResponse();
        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(mappings.get(platformId), account.address);
    });

    it('should verify a valid session', async () => {
        const sessionId = "valid-session-id";
        sessions.set(sessionId, { address: account.address, type: 'wallet', createdAt: Date.now() });

        const req = new MockRequest(`/auth/session?sessionId=${sessionId}`);
        const res = new MockResponse();

        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200);
        const data = JSON.parse(res.body);
        assert.strictEqual(data.address, account.address);
    });
});
