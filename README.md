# brag.charity

[![CI](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml/badge.svg)](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Status: Beta](https://img.shields.io/badge/status-beta-orange.svg)

brag.charity is a next-generation NFT ecosystem designed to bridge the gap between blockchain assets and real-world utility—starting with Minecraft. It features gasless transactions, dynamic on-chain metadata, and a secure "Verification Handshake" that lets players bring their digital collections into any game environment.

Whether you're building a decentralized gallery, a cross-platform gaming reward system, or a high-fidelity NFT marketplace, brag.charity provides the tools to make it happen.

---

## What's Inside?

1.  **Gasless Experience:** Built-in support for Alchemy Smart Accounts and Paymasters, allowing users to interact with your ecosystem without needing to hold native gas tokens.
2.  **On-Chain Art & Receipts:** `DonationReceipt.sol` generates beautiful, dynamic SVG artwork directly on the blockchain, providing a visual and immutable record of every contribution.
3.  **The "Verification Handshake":** A secure, off-chain identity mapping system (SIWE) that connects Minecraft XUIDs to Ethereum wallets without ever exposing private keys.
4.  **Exhibit Vaults:** Purpose-built smart contracts for escrowing NFTs. Use them to "display" items in virtual galleries, lock them for in-game perks, or manage them across different web platforms.
5.  **Multi-Offer Marketplace:** A flexible NFT marketplace that supports multiple simultaneous offers on a single item, including built-in refund protections and token-based trading (`BragToken`).
6.  **High-Fidelity Frontend:** A complete e-commerce experience including a discovery gallery, detailed product pages with media support (images/audio), and a comprehensive admin manager.

---

## 1. Prerequisites

*   **Node.js and npm:** The project runs on Node.js (v18+ recommended).
*   **Hardhat 3 Beta:** This project utilizes the latest Hardhat 3 features for faster development and testing.
*   **Alchemy API Key:** Required for gasless features and Sepolia deployments.

---

## 2. Application Setup (Local Development)

You can run the entire brag.charity ecosystem locally to test contracts, the bridge, and the frontend without spending real ETH.

### 1. Start the Local Node
In a separate terminal, start the Hardhat network:
```shell
npm run node
```

### 2. Deploy Contracts Locally
Deploy the smart contracts and automatically export ABIs for the frontend:
```shell
npm run deploy:local
```

### 3. Start the Minecraft Bridge
The bridge coordinates between the game and the blockchain, handling the Verification Handshake.
```shell
npm run bridge
```

### 4. Serve the Frontend
Open the interactive gallery and manager:
```shell
npx serve frontend -p 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 3. Seeding Test Data

Jumpstart your local environment with realistic data (minted NFTs, active vaults, and marketplace offers).

### Local Seeding
After your local node is running, execute:
```shell
npm run seed:local
```
This script automates the creation of 5 `ExhibitVault` instances (e.g., `server-1`, `gallery-1`), mints a BragNFT, and creates a sample marketplace offer.

### Sepolia Seeding (Gasless)
To test the full account abstraction flow on the Sepolia testnet:
```shell
# Set your environment variables
export SEPOLIA_RPC_URL="your-rpc-url"
export ALCHEMY_API_KEY="your-alchemy-api-key"
export ALCHEMY_GAS_POLICY_ID="your-gas-manager-policy-id"

npm run seed:sepolia
```

---

## 4. Testing

brag.charity uses the native Node.js test runner (`node:test`) alongside `viem` for lightning-fast, type-safe integration tests.

To run the full test suite:
```shell
npx hardhat test
```

You can also target specific areas:
- `npx hardhat test solidity`: Run Foundry-compatible unit tests.
- `npx hardhat test nodejs`: Run the TypeScript integration tests.

---

## 5. Troubleshooting

If you encounter environment-specific errors like "not a valid Win32 application" on Windows or port conflicts, refer to our [Troubleshooting Guide](./TROUBLESHOOTING.md).

---

## 6. Core Features & Possibilities

### The Verification Handshake (SIWE)
brag.charity demonstrates how to verify wallet ownership across platforms where the user doesn't have a private key (like a game console or a chat bot).
1.  **Request:** A player requests a linking token in-game.
2.  **Sign:** The player signs a "Sign-In with Ethereum" message on the brag.charity Manager website.
3.  **Map:** The bridge verifies the signature and maps the player's identity to their wallet address.
4.  **Utility:** The game now knows exactly which NFTs the player owns on-chain.

### Exhibit Vaults
Vaults aren't just for storage—they are the key to utility. By moving an NFT into an `ExhibitVault`, a user can "check-in" to a specific server or gallery. This proves intent and allows platform owners to grant specific permissions or display the item safely.

### On-Chain SVG Receipts
Every donation triggers the creation of a `DonationReceipt`. Because the SVG is generated on-chain, the receipt's appearance (donor name, amount, timestamp) is guaranteed by the blockchain itself, ensuring it will always be viewable as long as the network exists.

---

## 7. Deployment Workflow (CI/CD)

This project uses GitHub Actions for continuous testing and automated deployments to Sepolia.

*   **Continuous Integration:** Every PR is tested against a local Hardhat node to ensure contract integrity.
*   **Manual Deployment:** Trigger a "Deploy to Sepolia" workflow from the Actions tab. This will deploy the `BragNFT`, `Treasury`, and `NFTMarketplace` contracts using deterministic addresses.
*   **Auto-Updating ABIs:** Pushing to `main` automatically updates the frontend with the latest contract ABIs and addresses.

---

Have fun building with brag.charity!
