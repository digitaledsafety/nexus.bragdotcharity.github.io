import assert from "node:assert/strict";
import { describe, it, beforeEach, mock } from "node:test";

// Mocking Minecraft Modules
const mockPlayer = {
    id: "test-uuid",
    xuid: "test-xuid",
    sendMessage: mock.fn(),
    addTag: mock.fn(),
    removeTag: mock.fn(),
    onScreenDisplay: {
        setActionBar: mock.fn()
    },
    getDynamicProperty: mock.fn(),
    setDynamicProperty: mock.fn()
};

const mockHttp = {
    request: mock.fn()
};

class MockHttpRequest {
    url: string;
    method: string | undefined;
    constructor(url: string) {
        this.url = url;
    }
}

const mockHttpRequestMethod = { Get: 'GET' };

const GAS_DEPLOY_URL = "https://script.google.com/macros/s/AKfycbwlfwzG3H0e150GYlSXsRQQR57rdoRYYrR0su_GUAd8eJm0ISTX03sshosnmyjTIr-s/exec";

// Logic copied from addons/minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample/scripts/main.js
async function checkNftStatus(
    event: any,
    http: any,
    HttpRequest: any,
    HttpRequestMethod: any
) {
    const player = event.player;
    if (!event.initialSpawn) return;

    player.sendMessage("§bChecking NFT ownership status...§r");

    try {
        let uuid = player.getDynamicProperty("nft_uuid");
        const platformId = player.xuid;

        if (!platformId) {
            player.sendMessage("§cNFT features require an Xbox Live account.§r");
            player.removeTag("nft_holder");
            return;
        }

        // Sync with server if local UUID is missing
        if (!uuid) {
            const checkUrl = `${GAS_DEPLOY_URL}?path=check-platform&platform=minecraft&platformId=${platformId}`;
            const checkRequest = new HttpRequest(checkUrl);
            checkRequest.method = HttpRequestMethod.Get;
            const checkResponse = await http.request(checkRequest);

            if (checkResponse.status === 200) {
                const checkData = JSON.parse(checkResponse.body);
                if (checkData.linked) {
                    uuid = checkData.uuid;
                    player.setDynamicProperty("nft_uuid", uuid);
                }
            }
        }

        if (!uuid) {
            player.sendMessage("§6Your wallet is not linked. Type §f!register§6 to link your crypto wallet!§r");
            player.removeTag("nft_holder");
            return;
        }

        // GAS Routing: use query parameters instead of URL paths
        const url = `${GAS_DEPLOY_URL}?path=check-ownership&uuid=${uuid}`;
        const request = new HttpRequest(url);
        request.method = HttpRequestMethod.Get;

        const response = await http.request(request);

        if (response.status === 200) {
            const data = JSON.parse(response.body);

            if (data.isHolder) {
                player.sendMessage(`§aVerified NFT Holder! (${data.address.substring(0, 6)}...)§r`);
                player.addTag("nft_holder");
                player.sendMessage("§eSpecial perks unlocked: Aggressive cows will now ignore you.§r");

                if (data.nfts && data.nfts.length > 0) {
                    player.sendMessage(`§eYou have ${data.nfts.length} NFT(s) loaded. Type §f!my_nfts§e to see them.§r`);
                }
            } else {
                player.sendMessage("§eNo qualifying NFTs found in your linked wallet.§r");
                player.removeTag("nft_holder");
            }
        } else {
            player.sendMessage(`§cError checking status. (Status: ${response.status})§r`);
            player.removeTag("nft_holder");
        }
    } catch (error) {
        player.sendMessage("§cUnable to connect to NFT bridge.§r");
    }
}

async function handleChat(
    event: any,
    http: any,
    HttpRequest: any,
    HttpRequestMethod: any
) {
    const message = event.message.trim();
    const player = event.sender;
    const platformId = player.xuid;

    if (message.toLowerCase() === "!register") {
        event.cancel = true;
        if (!platformId) {
            player.sendMessage("§cYou must be signed in to Xbox Live to register.§r");
            return;
        }
        player.sendMessage("§bRequesting registration link...§r");

        try {
            const url = `${GAS_DEPLOY_URL}?path=request-token&platform=minecraft&platformId=${platformId}`;
            const request = new HttpRequest(url);
            request.method = HttpRequestMethod.Get;

            const response = await http.request(request);

            if (response.status === 200) {
                const { token, uuid } = JSON.parse(response.body);

                // Save the new UUID
                player.setDynamicProperty("nft_uuid", uuid);

                const registrationUrl = `${GAS_DEPLOY_URL}?path=register&token=${token}`;

                player.sendMessage("§e====================================§r");
                player.sendMessage("§aTo link your wallet, visit this URL:§r");
                player.sendMessage(`§f${registrationUrl}§r`);
                player.sendMessage("§7(The link is valid for 10 minutes)§r");
                player.sendMessage("§e====================================§r");

                player.onScreenDisplay.setActionBar("§6Visit the link in chat to register§r");
            } else {
                player.sendMessage("§cFailed to get registration token.§r");
            }
        } catch (error) {
            player.sendMessage("§cBridge server is offline.§r");
        }
    } else if (message.toLowerCase() === "!my_nfts") {
        event.cancel = true;
        const uuid = player.getDynamicProperty("nft_uuid");
        if (!uuid) {
            player.sendMessage("§cYou must be registered to view your NFTs.§r");
            return;
        }

        player.sendMessage("§bFetching your NFTs...§r");

        try {
            const url = `${GAS_DEPLOY_URL}?path=check-ownership&uuid=${uuid}`;
            const request = new HttpRequest(url);
            request.method = HttpRequestMethod.Get;
            const response = await http.request(request);

            if (response.status === 200) {
                const data = JSON.parse(response.body);
                if (data.isHolder && data.nfts && data.nfts.length > 0) {
                    player.sendMessage("§eYour NFTs:§r");
                    data.nfts.forEach((nft: any) => {
                        const uriText = nft.tokenURI ? `: §f${nft.tokenURI}` : "";
                        player.sendMessage(`§b- ID #${nft.tokenId}${uriText}§r`);
                    });
                } else {
                    player.sendMessage("§6No NFTs found in your linked wallet.§r");
                }
            } else {
                player.sendMessage("§cFailed to fetch NFTs.§r");
            }
        } catch (error) {
            player.sendMessage("§cBridge server error.§r");
        }
    } else if (message.toLowerCase().startsWith("!link")) {
        event.cancel = true;
        if (!platformId) {
            player.sendMessage("§cYou must be signed in to Xbox Live to link accounts.§r");
            return;
        }
        const args = message.split(" ");
        let uuid = args[1];

        if (!uuid) {
            uuid = player.getDynamicProperty("nft_uuid");
        }

        if (!uuid) {
            player.sendMessage("§cUsage: !link <uuid> (if you have one) or use !register§r");
            return;
        }

        player.sendMessage("§bRequesting link...§r");

        try {
            const url = `${GAS_DEPLOY_URL}?path=request-token&platform=minecraft&platformId=${platformId}&uuid=${uuid}`;
            const request = new HttpRequest(url);
            request.method = HttpRequestMethod.Get;

            const response = await http.request(request);

            if (response.status === 200) {
                const { token, uuid: returnedUuid } = JSON.parse(response.body);

                // Update saved UUID
                player.setDynamicProperty("nft_uuid", returnedUuid);

                const registrationUrl = `${GAS_DEPLOY_URL}?path=register&token=${token}`;

                player.sendMessage("§e====================================§r");
                player.sendMessage("§aTo link your existing account, visit:§r");
                player.sendMessage(`§f${registrationUrl}§r`);
                player.sendMessage("§7(The link is valid for 10 minutes)§r");
                player.sendMessage("§e====================================§r");

                player.onScreenDisplay.setActionBar("§6Visit the link in chat to link§r");
            } else {
                player.sendMessage("§cFailed to get link token.§r");
            }
        } catch (error) {
            player.sendMessage("§cBridge server is offline.§r");
        }
    }
}

describe('Minecraft Script Logic', () => {
    beforeEach(() => {
        // Reset mocks
        mockPlayer.sendMessage.mock.resetCalls();
        mockPlayer.addTag.mock.resetCalls();
        mockPlayer.removeTag.mock.resetCalls();
        mockPlayer.onScreenDisplay.setActionBar.mock.resetCalls();
        mockPlayer.getDynamicProperty.mock.resetCalls();
        mockPlayer.setDynamicProperty.mock.resetCalls();
        mockHttp.request.mock.resetCalls();

        // Default implementations
        mockPlayer.getDynamicProperty.mock.mockImplementation(() => null);
        mockPlayer.setDynamicProperty.mock.mockImplementation(() => {});
        mockHttp.request.mock.mockImplementation(async () => ({ status: 404 }));
    });

    describe('checkNftStatus', () => {
        const testUuid = "550e8400-e29b-41d4-a716-446655440000";

        it('should add nft_holder tag if player is a holder (using saved UUID)', async () => {
            mockPlayer.getDynamicProperty.mock.mockImplementation(() => testUuid);
            mockHttp.request.mock.mockImplementation(async () => ({
                status: 200,
                body: JSON.stringify({
                    isHolder: true,
                    address: "0x1234567890",
                    nfts: [{ tokenId: 1, tokenURI: "https://media.com/1" }]
                })
            }));

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(mockHttp.request.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.addTag.mock.calls[0].arguments[0], "nft_holder");
            assert.ok(mockPlayer.sendMessage.mock.calls.some(c => (c.arguments[0] as string).includes("1 NFT(s) loaded")));
        });

        it('should sync with check-platform if UUID is missing', async () => {
            let callCount = 0;
            mockHttp.request.mock.mockImplementation(async () => {
                callCount++;
                if (callCount === 1) return { status: 200, body: JSON.stringify({ linked: true, uuid: testUuid }) };
                return {
                    status: 200,
                    body: JSON.stringify({
                        isHolder: true,
                        address: "0x1234567890",
                        nfts: []
                    })
                };
            });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(mockHttp.request.mock.calls.length, 2);
            assert.strictEqual(mockPlayer.setDynamicProperty.mock.calls[0].arguments[1], testUuid);
        });

        it('should remove nft_holder tag if player is NOT a holder', async () => {
            mockPlayer.getDynamicProperty.mock.mockImplementation(() => "saved-uuid");
            mockHttp.request.mock.mockImplementation(async () => ({
                status: 200,
                body: JSON.stringify({ isHolder: false })
            }));

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(mockPlayer.removeTag.mock.calls[0].arguments[0], "nft_holder");
        });

        it('should handle errors gracefully', async () => {
            mockHttp.request.mock.mockImplementation(async () => { throw new Error("Network Error"); });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.ok(mockPlayer.sendMessage.mock.calls.some(c => (c.arguments[0] as string).includes("Unable to connect")));
        });
    });

    describe('handleChat', () => {
        const testUuid = "550e8400-e29b-41d4-a716-446655440000";

        it('should handle !my_nfts command with mixed URIs', async () => {
            mockPlayer.getDynamicProperty.mock.mockImplementation(() => testUuid);
            mockHttp.request.mock.mockImplementation(async () => ({
                status: 200,
                body: JSON.stringify({
                    isHolder: true,
                    nfts: [
                        { tokenId: 42, tokenURI: "ipfs://test" },
                        { tokenId: 43, tokenURI: "" }
                    ]
                })
            }));

            const event = { message: "!my_nfts", sender: mockPlayer, cancel: false };
            await handleChat(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(event.cancel, true);
            assert.ok(mockPlayer.sendMessage.mock.calls.some(c => (c.arguments[0] as string).includes("ID #42: §fipfs://test")));
            assert.ok(mockPlayer.sendMessage.mock.calls.some(c => (c.arguments[0] as string).includes("ID #43") && !(c.arguments[0] as string).includes(":")));
        });

        it('should provide registration link when !register is typed', async () => {
            mockHttp.request.mock.mockImplementation(async () => ({
                status: 200,
                body: JSON.stringify({ token: "A1B2", uuid: testUuid })
            }));

            const event = { message: "!register", sender: mockPlayer, cancel: false };
            await handleChat(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(event.cancel, true);
            assert.strictEqual(mockPlayer.setDynamicProperty.mock.calls[0].arguments[1], testUuid);
        });

        it('should handle !link <uuid>', async () => {
            mockHttp.request.mock.mockImplementation(async () => ({
                status: 200,
                body: JSON.stringify({ token: "C3D4", uuid: testUuid })
            }));

            const event = { message: `!link ${testUuid}`, sender: mockPlayer, cancel: false };
            await handleChat(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(event.cancel, true);
            assert.strictEqual(mockPlayer.setDynamicProperty.mock.calls[0].arguments[1], testUuid);
        });

        it('should handle !link without args using saved UUID', async () => {
            mockPlayer.getDynamicProperty.mock.mockImplementation(() => testUuid);
            mockHttp.request.mock.mockImplementation(async () => ({
                status: 200,
                body: JSON.stringify({ token: "E5F6", uuid: testUuid })
            }));

            const event = { message: "!link", sender: mockPlayer, cancel: false };
            await handleChat(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.ok((mockHttp.request.mock.calls[0].arguments[0] as any).url.includes(`uuid=${testUuid}`));
        });

        it('should not intercept other messages', async () => {
            const event = { message: "Hello", sender: mockPlayer, cancel: false };
            await handleChat(event, mockHttp, MockHttpRequest, mockHttpRequestMethod);

            assert.strictEqual(event.cancel, false);
            assert.strictEqual(mockHttp.request.mock.calls.length, 0);
        });
    });
});
