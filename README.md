# brag.charity 🏆 🎗️

### *The De-Fi Way to Flex Your Philanthropy*

[![CI](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml/badge.svg)](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **brag.charity**, the ultimate protocol for turning your altruism into on-chain influence. We believe that doing good should be rewarded, verified, and—most importantly—shown off.

Whether you're a developer building the next generation of social-impact dApps or a degen looking to offset those gas fees with some positive karma, brag.charity has the infrastructure you need.

---

## 💎 The Ecosystem

Our protocol is built on a stack of highly-optimized, "atomic" smart contracts designed for transparency and flex-ability.

### 1. The Mint-to-Donate Engine (`BragNFT` & `DonationReceipt`)
When you donate, we don't just send a "thank you" email. We mint history.
- **BragNFT (ERC-721)**: A transferable, high-status NFT that proves you're a patron of the protocol. Trade it, exhibit it, or hold it as a badge of honor.
- **DonationReceipt (Soulbound)**: A permanent, non-transferable record of your specific contribution. Linked on-chain to your BragNFT, ensuring your legacy is immutable even if the NFT changes hands.

### 2. The Exhibition System (`ExhibitVault` & `ExhibitRegistry`)
Don't just keep your NFTs in a cold wallet. Put them on the stage.
- **Verified Vaults**: Our exhibition system uses a registry of verified vaults (galleries, games, websites) where you can "lock" your NFTs for a duration.
- **Atomic Exhibition**: Move your NFTs between verified locations without ever losing proof of ownership. Perfect for non-profit showcases and digital art festivals.

### 3. NFT Marketplace
A purpose-built marketplace for trading your BragNFTs.
- **Native Bidding**: Create and accept offers with built-in refund periods.
- **Philanthropy Liquidity**: Turn your charitable status into a liquid asset.

### 4. The Treasury
The protocol's multi-asset war chest. Securely manages ETH, ERC-721s, and ERC-1155s, ensuring every wei is accounted for before it's deployed for good.

---

## 🎮 Gaming Integration: Minecraft Bedrock

We're bringing the blockchain to the block-game. brag.charity includes a native **Minecraft Bedrock Addon** that bridges your on-chain assets into the virtual world.

- **Proof of Ownership**: A Google Apps Script bridge verifies your wallet's NFT status in real-time.
- **In-Game Perks**: Holding a BragNFT isn't just a flex—it's survival. Verified holders unlock exclusive perks, like making **aggressive cows** ignore you. (Seriously, those cows are mean.)

---

## 🛠️ Developer Guide

Built for the modern Ethereum stack using **Hardhat 3 (Beta)**, **Viem**, and the native **Node.js test runner**.

### Prerequisites
- Node.js 20+
- A burning desire to make the world better (and more decentralized)

### Getting Started
1. **Install Dependencies**:
   ```shell
   npm install
   ```

2. **Run the Test Suite**:
   We use `node:test` for lightning-fast execution.
   ```shell
   npx hardhat test
   ```

3. **Deploy to Sepolia**:
   Configure your `SEPOLIA_RPC_URL` and `SEPOLIA_PRIVATE_KEY` in your environment or via Hardhat variables.
   ```shell
   npx hardhat ignition deploy --network sepolia ignition/modules/App.ts
   ```

---

## 🌐 Web Interface (BragNFT Manager)

Manage your donations, exhibitions, and marketplace offers through our built-in frontend.
- **URL**: [https://digitaledsafety.github.io/smart-contracts/](https://digitaledsafety.github.io/smart-contracts/)
- **Features**: Contract explorer, ABI auto-sync, and a direct interface for every protocol function.

---

## 📜 License
MIT. Build it, fork it, give it away. Just remember to brag about it. 🚀
