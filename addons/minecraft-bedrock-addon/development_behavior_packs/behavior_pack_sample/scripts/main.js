import { world, system, DynamicPropertiesDefinition } from "@minecraft/server";

/**
 * ARCHITECTURE NOTE:
 * The project uses a unified Node.js Bridge (scripts/nft-bridge.js) which supports
 * Sign-In with Ethereum (SIWE) for secure wallet linking and WebSockets for real-time updates.
 */
const WS_URL = "localhost:9001"; // Point to scripts/nft-bridge.js (WS port)
const SERVER_ID = "server-1"; // Unique ID for this Minecraft server

/**
 * Handles checking NFT status when a player spawns.
 * This also registers the player as 'active' on this server in the Bridge.
 */
async function checkNftStatus(player) {
    if (!player.xuid) return;

    try {
        // Send check command via WebSocket
        world.getDimension("overworld").runCommand(`say !check ${player.xuid} ${SERVER_ID} "${player.name}"`);
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
        }, 500);
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

    if (message.toLowerCase() === "!register") {
        event.cancel = true;
        if (!player.xuid) {
            player.sendMessage("§cYou must be signed in to Xbox Live to register.§r");
            return;
        }
        player.sendMessage("§bRequesting registration link...§r");

        try {
            world.getDimension("overworld").runCommand(`say !register ${player.xuid} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            player.sendMessage("§cBridge server is offline.§r");
        }
    } else if (message.toLowerCase() === "!my_nfts") {
        event.cancel = true;
        if (!player.xuid) {
            player.sendMessage("§cYou must be signed in to Xbox Live to view your NFTs.§r");
            return;
        }

        player.sendMessage("§bFetching your NFTs...§r");

        try {
            world.getDimension("overworld").runCommand(`say !my_nfts ${player.xuid} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            player.sendMessage("§cBridge server error.§r");
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
