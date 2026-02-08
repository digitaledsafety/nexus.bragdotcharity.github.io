import { world, DynamicPropertiesDefinition } from "@minecraft/server";
import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";

/**
 * ARCHITECTURE NOTE:
 * The project uses a unified Node.js Bridge (scripts/nft-bridge.js) which supports
 * Sign-In with Ethereum (SIWE) for secure wallet linking.
 *
 * Set BRIDGE_URL to your hosted Node.js bridge endpoint.
 */
const BRIDGE_URL = "http://localhost:9000"; // Point to scripts/nft-bridge.js

/**
 * Handles checking NFT status when a player spawns.
 */
async function checkNftStatus(event) {
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
            const checkUrl = `${BRIDGE_URL}?path=check-platform&platform=minecraft&platformId=${platformId}`;
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
        const url = `${BRIDGE_URL}?path=check-ownership&uuid=${uuid}`;
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
        console.warn("NFT Bridge Error: " + error);
    }
}

/**
 * Handles the !register command.
 */
async function handleChat(event) {
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
            // GAS Routing: path=request-token, platform=minecraft, platformId=...
            const url = `${BRIDGE_URL}?path=request-token&platform=minecraft&platformId=${platformId}`;
            const request = new HttpRequest(url);
            request.method = HttpRequestMethod.Get;

            const response = await http.request(request);

            if (response.status === 200) {
                const data = JSON.parse(response.body);
                const { token, uuid } = data;
                
                // Save the new UUID
                player.setDynamicProperty("nft_uuid", uuid);

                // If using the Node.js bridge, it can provide a direct link to the Web Manager
                const registrationUrl = data.registrationUrl || `${BRIDGE_URL}?path=register&token=${token}`;

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
            console.warn("Registration Error: " + error);
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
                    data.nfts.forEach(nft => {
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
        let uuid = args[1]; // Explicit UUID if provided

        if (!uuid) {
            uuid = player.getDynamicProperty("nft_uuid");
        }

        if (!uuid) {
            player.sendMessage("§cUsage: !link <uuid> (if you have one) or use !register§r");
            return;
        }

        player.sendMessage("§bRequesting link...§r");

        try {
            // GAS Routing: path=request-token, platform=minecraft, platformId=..., uuid=...
            const url = `${BRIDGE_URL}?path=request-token&platform=minecraft&platformId=${platformId}&uuid=${uuid}`;
            const request = new HttpRequest(url);
            request.method = HttpRequestMethod.Get;

            const response = await http.request(request);

            if (response.status === 200) {
                const data = JSON.parse(response.body);
                const { token, uuid: returnedUuid } = data;

                // Update saved UUID
                player.setDynamicProperty("nft_uuid", returnedUuid);

                const registrationUrl = data.registrationUrl || `${BRIDGE_URL}?path=register&token=${token}`;

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
            console.warn("Linking Error: " + error);
        }
    }
}

// Register dynamic properties
world.afterEvents.worldInitialize.subscribe((event) => {
    const def = new DynamicPropertiesDefinition();
    def.defineString("nft_uuid", 100);
    event.propertyRegistry.registerEntityTypeDynamicProperties(def, "minecraft:player");
});

// Subscribe to events
world.afterEvents.playerSpawn.subscribe(checkNftStatus);
world.beforeEvents.chatSend.subscribe(handleChat);

export { checkNftStatus, handleChat };
