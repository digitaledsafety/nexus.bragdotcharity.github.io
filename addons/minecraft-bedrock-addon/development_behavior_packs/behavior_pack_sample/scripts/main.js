import { world, system, DynamicPropertiesDefinition } from "@minecraft/server";
import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";

/**
 * ARCHITECTURE NOTE:
 * The project uses a unified Node.js Bridge (scripts/nft-bridge.js) which supports
 * Sign-In with Ethereum (SIWE) for secure wallet linking and WebSockets for real-time updates.
 */
const BRIDGE_URL = "http://localhost:9000"; // Point to scripts/nft-bridge.js
const WS_URL = "localhost:9001"; // Point to scripts/nft-bridge.js (WS port)
const SERVER_ID = "server-1"; // Unique ID for this Minecraft server

/**
 * Handles checking NFT status when a player spawns.
 * This also registers the player as 'active' on this server in the Bridge.
 */
async function checkNftStatus(player) {
    const platformId = player.xuid;
    if (!platformId) return;

    try {
        let uuid = player.getDynamicProperty("nft_uuid");

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

        if (!uuid) return;

        // Check initial ownership and REGISTER active status with bridge
        // We pass playerName so the Bridge knows how to target this player via WebSocket
        const url = `${BRIDGE_URL}?path=check-ownership&uuid=${uuid}&serverId=${SERVER_ID}&playerName=${encodeURIComponent(player.name)}`;
        const request = new HttpRequest(url);
        request.method = HttpRequestMethod.Get;

        const response = await http.request(request);

        if (response.status === 200) {
            const data = JSON.parse(response.body);

            if (data.isHolder) {
                player.sendMessage(`§a[NFT] Verified NFT Holder!§r`);
                player.addTag("nft_holder");
            } else {
                player.removeTag("nft_holder");
            }
        }
    } catch (error) {
        console.warn("NFT Bridge Error: " + error);
    }
}

/**
 * Automatically connect to the Bridge WebSocket and perform handshake.
 */
function initiateBridgeConnection() {
    try {
        // 1. Establish the WebSocket link
        world.getDimension("overworld").runCommand(`connect ${WS_URL}`);

        // 2. Perform handshake so bridge identifies this server instance
        // We delay to allow the connection to potentially be established
        system.runTimeout(() => {
            world.getDimension("overworld").runCommand(`say !handshake ${SERVER_ID}`);
            console.warn(`[NFT] Handshaked with bridge as ${SERVER_ID}`);
        }, 100);
    } catch (e) {
        console.warn(`[NFT] Connection/Handshake failed: ${e}`);
    }
}

// Initial connection on startup
world.afterEvents.worldInitialize.subscribe(() => {
    system.runTimeout(initiateBridgeConnection, 100);
});

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
            const url = `${BRIDGE_URL}?path=request-token&platform=minecraft&platformId=${platformId}`;
            const request = new HttpRequest(url);
            request.method = HttpRequestMethod.Get;

            const response = await http.request(request);

            if (response.status === 200) {
                const data = JSON.parse(response.body);
                const { token, uuid } = data;
                
                player.setDynamicProperty("nft_uuid", uuid);
                const registrationUrl = data.registrationUrl || `${BRIDGE_URL}?path=register&token=${token}`;

                player.sendMessage("§e====================================§r");
                player.sendMessage("§aTo link your wallet, visit this URL:§r");
                player.sendMessage(`§f${registrationUrl}§r`);
                player.sendMessage("§7(The link is valid for 10 minutes)§r");
                player.sendMessage("§e====================================§r");
            } else {
                player.sendMessage("§cFailed to get registration token.§r");
            }
        } catch (error) {
            player.sendMessage("§cBridge server is offline.§r");
        }
    } else if (message.toLowerCase() === "!reconnect") {
        event.cancel = true;
        player.sendMessage("§bAttempting to reconnect to bridge...§r");
        initiateBridgeConnection();
    }
}

// Register dynamic properties
world.afterEvents.worldInitialize.subscribe((event) => {
    const def = new DynamicPropertiesDefinition();
    def.defineString("nft_uuid", 100);
    event.propertyRegistry.registerEntityTypeDynamicProperties(def, "minecraft:player");
});

// Subscribe to events
world.afterEvents.playerSpawn.subscribe((event) => checkNftStatus(event.player));
world.beforeEvents.chatSend.subscribe(handleChat);
