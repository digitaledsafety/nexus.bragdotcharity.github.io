# Sample Hardhat 3 Beta Project (`node:test` and `viem`)

[![CI](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml/badge.svg)](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project showcases a Hardhat 3 Beta project using the native Node.js test runner (`node:test`) and the `viem` library for Ethereum interactions.

To learn more about the Hardhat 3 Beta, please visit the [Getting Started guide](https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3). To share your feedback, join our [Hardhat 3 Beta](https://hardhat.org/hardhat3-beta-telegram-group) Telegram group or [open an issue](https://github.com/NomicFoundation/hardhat/issues/new) in our GitHub issue tracker.

## Project Overview

This example project includes:

- A simple Hardhat configuration file.
- Foundry-compatible Solidity unit tests.
- TypeScript integration tests using [`node:test`](nodejs.org/api/test.html), the new Node.js native test runner, and [`viem`](https://viem.sh/).
- Examples demonstrating how to connect to different types of networks, including locally simulating OP mainnet.

## Local Development

You can run a local Ethereum network to test the contracts and addons without deploying to a public testnet.

### 1. Start the Local Node
In a separate terminal, start the Hardhat network:
```shell
npm run node
```
This will start a JSON-RPC server at `http://127.0.0.1:8545`.

### 2. Deploy Contracts Locally
Deploy the contracts to your local node and export the ABIs/addresses for the frontend:
```shell
npm run deploy:local
```

### 3. Start the NFT Bridge (for Addons)
If you are testing the Minecraft addon locally, start the NFT bridge:
```shell
npm run bridge
```
The bridge listens on port 9000 and connects to your local Hardhat node. To use it in Minecraft, ensure you set `USE_LOCAL_BRIDGE = true` in `addons/minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample/scripts/main.js`.

## Usage

### Running Tests

To run all the tests in the project, execute the following command:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `node:test` tests:

```shell
npx hardhat test solidity
npx hardhat test nodejs
```

### Make a deployment to Sepolia

This project includes an example Ignition module to deploy the contract. You can deploy this module to a locally simulated chain or to Sepolia.

To run the deployment to a local chain:

```shell
npx hardhat ignition deploy ignition/modules/App.ts
```

To run the deployment to Sepolia, you need an account with funds to send the transaction. The provided Hardhat configuration includes a Configuration Variable called `SEPOLIA_PRIVATE_KEY`, which you can use to set the private key of the account you want to use.

You can set the `SEPOLIA_PRIVATE_KEY` variable using the `hardhat-keystore` plugin or by setting it as an environment variable.

To set the `SEPOLIA_PRIVATE_KEY` config variable using `hardhat-keystore`:

```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

After setting the variable, you can run the deployment with the Sepolia network:

```shell
npx hardhat ignition deploy --network sepolia ignition/modules/App.ts
```

## CI/CD and Deployment Workflow

This project uses GitHub Actions for continuous testing and manual deployments.

### Continuous Integration

On every push and pull request to the `main` branch:
1. **Run Tests**: Executes the full test suite using `npx hardhat test`.
2. **Verify Local Deployment**: Ensures that the Ignition deployment modules are valid by performing a dry-run deployment against a local Hardhat network.

### Manual Sepolia Deployment

You can manually trigger a deployment to the Sepolia network via the **Actions** tab in GitHub:

1. Go to the **Actions** tab.
2. Select the **Deploy to Sepolia** workflow.
3. Click **Run workflow**.

#### Required GitHub Secrets

To use the Sepolia deployment workflow, you must configure the following [GitHub Repository Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions):

- `SEPOLIA_RPC_URL`: Your Sepolia RPC endpoint (e.g., from Alchemy or Infura).
- `SEPOLIA_PRIVATE_KEY`: The private key of the account used for deployment and as the initial owner.
- `TREASURY_ADDRESS`: (Optional) An external ETH address to receive donations. If provided, the deployment of a new `Treasury` contract will be skipped.

### Treasury Contract

This project includes a `Treasury.sol` contract. It is a simple, secure vault designed to:
- **Receive ETH**: It has a `receive()` function to handle donations from `BragNFT`.
- **Receive NFTs**: It implements `ERC721Holder` and `ERC1155Holder`, making it compatible with all NFT types.
- **Owner Control**: Only the contract owner can withdraw ETH or manage assets within the treasury.

By default, the deployment module will create a new instance of this `Treasury` contract during deployment.

## BragNFT Manager (Web Interface)

This project includes a built-in web-based manager that allows you to interact with all the smart contracts through a user-friendly interface.

- **URL**: Once deployed to GitHub Pages, it is typically available at `https://your-username.github.io/your-repo-name/`.
- **Local Access**: You can also open `frontend/index.html` directly in your browser.

### Key Features:
- **Minting**: Donate ETH to mint BragNFTs.
- **Exhibition**: Deploy and manage "Exhibit Vaults" for your NFTs across games, galleries, and websites.
- **Marketplace**: Create, accept, and cancel offers on NFTs.
- **Contract Explorer**: A dynamic section that automatically generates a UI for **every function** in your smart contracts.

### Auto-Updating ABIs
The interface is powered by a GitHub Action that automatically updates the contract ABIs and deployment addresses whenever you push changes to the `main` branch. This means your web interface is always in sync with your latest Solidity code.

## Cross-Platform Wallet Verification (Best Practices)

This project demonstrates the industry-standard method for verifying wallet ownership across platforms (like Minecraft, Discord, or Websites) where the user does not have their private key directly available.

### The Architecture: "The Verification Handshake"

1.  **Identity Request (In-Game):** The player types `!register` in Minecraft. The game requests a short-lived **Linking Token** from the Bridge.
2.  **Web Proof (Off-Game):** The player visits the BragNFT Manager website and enters the Linking Token.
3.  **Cryptographic Signature (SIWE):** The player signs a "Sign-In with Ethereum" (EIP-4361) message. This proves they own the wallet address without sending a transaction.
4.  **Persistent Mapping (Off-Chain):** The bridge verifies the signature, recovers the address, and **stores the relationship** (e.g., `Minecraft_XUID` -> `Wallet_Address`) in a database.
5.  **Seamless Access:** Every time the player spawns, the game sends their XUID to the bridge. The bridge looks up the mapped wallet and checks for NFTs on-chain.

### Why this method?
-   **Security:** Users never expose their private keys to the game client or the bridge.
-   **Cost-Effective:** Verifying a signature and storing a mapping off-chain is free, whereas storing this relationship on-chain would cost Gas.
-   **UX:** The user only has to "link" once. Afterward, their perks are available automatically.

#### Tracking Deployed Addresses

After a successful manual deployment, you can find the contract addresses by:
1. Opening the specific workflow run.
2. Downloading the `sepolia-deployment` artifact.
3. Inspecting the `deployed_addresses.json` file within the artifact.
