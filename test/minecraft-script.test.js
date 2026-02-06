// Mocking Minecraft Modules
const mockPlayer = {
    id: "test-uuid",
    xuid: "test-xuid",
    sendMessage: jest.fn(),
    addTag: jest.fn(),
    removeTag: jest.fn(),
    onScreenDisplay: {
        setActionBar: jest.fn()
    },
    getDynamicProperty: jest.fn(),
    setDynamicProperty: jest.fn()
};

// Mocking @minecraft/server-net
const mockHttp = {
    request: jest.fn()
};
const mockHttpRequest = jest.fn((url) => ({ url }));
const mockHttpRequestMethod = { Get: 'GET' };

const GAS_DEPLOY_URL = "https://script.google.com/macros/s/AKfycbwlfwzG3H0e150GYlSXsRQQR57rdoRYYrR0su_GUAd8eJm0ISTX03sshosnmyjTIr-s/exec";

// Manual mock of the logic in:
// minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample/scripts/main.js
async function checkNftStatus(event, http, HttpRequest, HttpRequestMethod) {
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

async function handleChat(event, http, HttpRequest, HttpRequestMethod) {
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

describe('Minecraft Script Logic (Updated Structure)', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('checkNftStatus (New Linking Schema)', () => {
        const testUuid = "550e8400-e29b-41d4-a716-446655440000";

        it('should add nft_holder tag if player is a holder (using saved UUID)', async () => {
            mockPlayer.getDynamicProperty.mockReturnValue(testUuid);
            mockHttp.request.mockResolvedValue({
                status: 200,
                body: JSON.stringify({ isHolder: true, address: "0x1234567890" })
            });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            const expectedUrl = `${GAS_DEPLOY_URL}?path=check-ownership&uuid=${testUuid}`;
            expect(mockHttp.request).toHaveBeenCalledWith(expect.objectContaining({ url: expectedUrl }));
            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("Verified NFT Holder"));
            expect(mockPlayer.addTag).toHaveBeenCalledWith("nft_holder");
        });

        it('should sync with check-platform if UUID is missing', async () => {
            mockPlayer.getDynamicProperty.mockReturnValue(null);

            // First call: check-platform
            mockHttp.request.mockResolvedValueOnce({
                status: 200,
                body: JSON.stringify({ linked: true, uuid: testUuid })
            });
            // Second call: check-ownership
            mockHttp.request.mockResolvedValueOnce({
                status: 200,
                body: JSON.stringify({ isHolder: true, address: "0x1234567890" })
            });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            const expectedCheckUrl = `${GAS_DEPLOY_URL}?path=check-platform&platform=minecraft&platformId=${mockPlayer.xuid}`;
            expect(mockHttp.request).toHaveBeenCalledWith(expect.objectContaining({ url: expectedCheckUrl }));
            expect(mockPlayer.setDynamicProperty).toHaveBeenCalledWith("nft_uuid", testUuid);

            const expectedOwnershipUrl = `${GAS_DEPLOY_URL}?path=check-ownership&uuid=${testUuid}`;
            expect(mockHttp.request).toHaveBeenCalledWith(expect.objectContaining({ url: expectedOwnershipUrl }));
        });

        it('should sync with check-platform and then handle ownership failure', async () => {
            mockPlayer.getDynamicProperty.mockReturnValue(null);

            // First call: check-platform
            mockHttp.request.mockResolvedValueOnce({
                status: 200,
                body: JSON.stringify({ linked: true, uuid: testUuid })
            });
            // Second call: check-ownership
            mockHttp.request.mockResolvedValueOnce({
                status: 200,
                body: JSON.stringify({ isHolder: false })
            });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("No qualifying NFTs found"));
            expect(mockPlayer.removeTag).toHaveBeenCalledWith("nft_holder");
        });

        it('should remove nft_holder tag if player is NOT a holder', async () => {
            mockPlayer.getDynamicProperty.mockReturnValue("saved-uuid");
            mockHttp.request.mockResolvedValue({
                status: 200,
                body: JSON.stringify({ isHolder: false })
            });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("No qualifying NFTs found"));
            expect(mockPlayer.removeTag).toHaveBeenCalledWith("nft_holder");
        });

        it('should prompt registration if wallet is not linked (check-platform returns 404)', async () => {
            mockPlayer.getDynamicProperty.mockReturnValue(null);
            mockHttp.request.mockResolvedValue({
                status: 404
            });

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("Your wallet is not linked"));
            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("!register"));
            expect(mockPlayer.removeTag).toHaveBeenCalledWith("nft_holder");
        });

        it('should handle errors gracefully', async () => {
            mockPlayer.xuid = "test-xuid";
            mockHttp.request.mockRejectedValue(new Error("Network Error"));

            const event = { player: mockPlayer, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("Unable to connect"));
        });

        it('should fail gracefully if xuid is missing', async () => {
            const playerWithoutXuid = { ...mockPlayer, xuid: undefined };
            const event = { player: playerWithoutXuid, initialSpawn: true };
            await checkNftStatus(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(playerWithoutXuid.sendMessage).toHaveBeenCalledWith(expect.stringContaining("Xbox Live account"));
            expect(playerWithoutXuid.removeTag).toHaveBeenCalledWith("nft_holder");
            expect(mockHttp.request).not.toHaveBeenCalled();
        });
    });

    describe('handleChat (New Linking Schema)', () => {
        const testUuid = "550e8400-e29b-41d4-a716-446655440000";

        it('should provide registration link and save UUID when !register is typed', async () => {
            const token = "A1B2";
            mockHttp.request.mockResolvedValue({
                status: 200,
                body: JSON.stringify({ token, uuid: testUuid })
            });

            const event = {
                message: "!register",
                sender: mockPlayer,
                cancel: false
            };
            await handleChat(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(event.cancel).toBe(true);
            const expectedRequestUrl = `${GAS_DEPLOY_URL}?path=request-token&platform=minecraft&platformId=${mockPlayer.xuid}`;
            expect(mockHttp.request).toHaveBeenCalledWith(expect.objectContaining({ url: expectedRequestUrl }));
            expect(mockPlayer.setDynamicProperty).toHaveBeenCalledWith("nft_uuid", testUuid);

            const expectedRegUrl = `${GAS_DEPLOY_URL}?path=register&token=${token}`;
            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining(expectedRegUrl));
        });

        it('should handle !link <uuid> and save the UUID', async () => {
            const token = "C3D4";
            mockHttp.request.mockResolvedValue({
                status: 200,
                body: JSON.stringify({ token, uuid: testUuid })
            });

            const event = {
                message: `!link ${testUuid}`,
                sender: mockPlayer,
                cancel: false
            };
            await handleChat(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(event.cancel).toBe(true);
            const expectedRequestUrl = `${GAS_DEPLOY_URL}?path=request-token&platform=minecraft&platformId=${mockPlayer.xuid}&uuid=${testUuid}`;
            expect(mockHttp.request).toHaveBeenCalledWith(expect.objectContaining({ url: expectedRequestUrl }));
            expect(mockPlayer.setDynamicProperty).toHaveBeenCalledWith("nft_uuid", testUuid);
            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("link your existing account"));
        });

        it('should handle !link without args using saved UUID', async () => {
            mockPlayer.getDynamicProperty.mockReturnValue(testUuid);
            const token = "C3D4";
            mockHttp.request.mockResolvedValue({
                status: 200,
                body: JSON.stringify({ token, uuid: testUuid })
            });

            const event = {
                message: "!link",
                sender: mockPlayer,
                cancel: false
            };
            await handleChat(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            const expectedRequestUrl = `${GAS_DEPLOY_URL}?path=request-token&platform=minecraft&platformId=${mockPlayer.xuid}&uuid=${testUuid}`;
            expect(mockHttp.request).toHaveBeenCalledWith(expect.objectContaining({ url: expectedRequestUrl }));
        });

        it('should error on !link if no UUID is available', async () => {
            mockPlayer.xuid = "test-xuid";
            mockPlayer.getDynamicProperty.mockReturnValue(null);
            const event = {
                message: "!link",
                sender: mockPlayer,
                cancel: false
            };
            await handleChat(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(mockPlayer.sendMessage).toHaveBeenCalledWith(expect.stringContaining("Usage: !link <uuid>"));
            expect(mockHttp.request).not.toHaveBeenCalled();
        });

        it('should error on !register if xuid is missing', async () => {
            const playerWithoutXuid = { ...mockPlayer, xuid: undefined };
            const event = {
                message: "!register",
                sender: playerWithoutXuid,
                cancel: false
            };
            await handleChat(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(event.cancel).toBe(true);
            expect(playerWithoutXuid.sendMessage).toHaveBeenCalledWith(expect.stringContaining("Xbox Live"));
            expect(mockHttp.request).not.toHaveBeenCalled();
        });

        it('should not intercept other messages', async () => {
            const event = {
                message: "Hello world",
                sender: mockPlayer,
                cancel: false
            };
            await handleChat(event, mockHttp, mockHttpRequest, mockHttpRequestMethod);

            expect(event.cancel).toBe(false);
            expect(mockHttp.request).not.toHaveBeenCalled();
        });
    });
});
