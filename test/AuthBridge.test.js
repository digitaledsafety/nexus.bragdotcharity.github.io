import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { handleRequest, pendingTokens, mappings } from "../scripts/nft-bridge.js";
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
        pendingTokens.clear();
        mappings.clear();
    });

    it('should link a platform ID via /verify-link', async () => {
        const token = "LINK123";
        const platformId = "minecraft-uuid-456";
        pendingTokens.set(token, { platformId, expires: Date.now() + 10000 });

        // Message must include address for stateless verification
        const message = `Link account ${token} for ${account.address}`;
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

    it('should fail /verify-link if address is not in message', async () => {
        const token = "LINK123";
        const platformId = "minecraft-uuid-456";
        pendingTokens.set(token, { platformId, expires: Date.now() + 10000 });

        // Message does not include address
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

        assert.strictEqual(res.statusCode, 400);
        const data = JSON.parse(res.body);
        assert.strictEqual(data.error, "Message must include address");
    });
});
