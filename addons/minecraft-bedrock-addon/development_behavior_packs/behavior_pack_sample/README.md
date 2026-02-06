---
page_type: sample
author: docsbryce
description: The sample Behavior Pack used in the Behavior Packs Tutorial.
ms.author: v-bbortree
ms.date: 05/17/2022
languages:
- json
products:
- minecraft
---

# Behavior Pack Sample

This sample is the behavior pack used in the Behavior Pack Tutorial.

See the [Intro to Behavior Packs](https://docs.microsoft.com/minecraft/creator/documents/behaviorpack) documentation for a full tutorial on creating an aggressive cow using a behavior pack.

## Using the Behavior Pack Sample

The behavior pack sample is a useful tool to check your work while completing the Behavior Pack Tutorial. Using it is as simple as adding it to your `development_behavior_pack` folder.

### Locate the com.mojang folder

1. Press Win+R to open Run.
1. Copy and paste the following into the Open field: `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`
1. Click OK.

### Copy Behavior Pack sample into the `com.mojang` folder

1. Click `development_behavior_packs`.
1. Copy `behavior_pack_sample` into the folder.

### Enable the Behavior Pack in Minecraft

1. Launch Minecraft and select Play.
1. Select Create New World.
1. Under Settings, scroll down to the Add-Ons section.
1. Click on Behavior Packs to see all available packs.
1. Click the MY PACKS drop-down to open it.
1. Select My Behavior Pack and click Activate to add the behavior pack to the world.
1. Click Create to create your world.

You now have aggressive cows in your world (for better or worse). Good luck!

## NFT Integration Setup

This behavior pack includes a Script API integration that verifies NFT ownership to grant in-game rewards.

### 1. Prerequisites
*   **Bedrock Dedicated Server (BDS)**: The `@minecraft/server-net` module (used for HTTP requests) is **only supported on Bedrock Dedicated Server**. It will not work on the standard Minecraft Windows/Console client.
*   **Permissions Configuration**: You must enable the `@minecraft/server-net` module in your server's `permissions.json` file.
*   **Node.js**: Required to run the NFT bridge server.

### 2. Installation
1.  **Bridge Server**:
    *   Navigate to the repository root.
    *   Run `npm install` to install dependencies.
    *   Run `node nft-bridge.js` to start the bridge server (listens on port 9000).
2.  **Add-On**:
    *   Copy the `behavior_pack_sample` folder to your server's `behavior_packs` directory.
    *   Copy the `resource_pack_sample` (from the resource packs folder) to your server's `resource_packs` directory.
    *   Navigate to your world's folder (e.g., `worlds/MyWorld/`).
    *   Create or edit `world_behavior_packs.json` and add the following:
        ```json
        [
            {
                "pack_id": "3958f9a2-96e4-4db0-a907-145d065cd7f0",
                "version": [1, 0, 0]
            }
        ]
        ```
    *   Create or edit `world_resource_packs.json` and add the following:
        ```json
        [
            {
                "pack_id": "f792a765-6eec-47e1-baea-599424fec93d",
                "version": [1, 0, 0]
            }
        ]
        ```
3.  **Permissions**:
    *   Locate your server's `config` folder.
    *   Create or edit `config/default/permissions.json` (or use the one provided in the `minecraft-bedrock-addon/config` directory of this repo).
    *   Ensure `@minecraft/server-net` is added to the `allowed_modules` list:
        ```json
        {
            "allowed_modules": [
                "@minecraft/server",
                "@minecraft/server-net"
            ]
        }
        ```

### 3. World Settings
*   Enable the **Beta APIs** experimental toggle in your world settings.

### 4. How it Works
When a player joins:
1.  The script sends a request to `http://localhost:9000/nfts/<address>`.
2.  If NFTs are found, the player receives the `nft_holder` tag.
3.  Aggressive cows will detect this tag and stop attacking the player.

## Manifest

- [entities/cow.json](https://github.com/microsoft/minecraft-samples/blob/main/behavior_pack_sample/entities/cow.json): This is a modified cow entity programmed with aggressive behavior.
- [manifest.json](https://github.com/microsoft/minecraft-samples/blob/main/behavior_pack_sample/manifest.json/): This is the manifest.json folder for the sample behavior pack.
