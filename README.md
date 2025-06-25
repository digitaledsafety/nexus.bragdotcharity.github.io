# NFT Marketplace and Reward Smart Contracts

This repository contains Solidity smart contracts for a basic NFT Marketplace and an NFT-based Reward/Donation system.

## Project Description

*   **`NFTMarketplace.sol`**: Allows users to create offers for NFTs, accept offers, cancel offers, and request refunds within a defined period. It includes ownership control for administrative functions like updating the refund period.
*   **`Reward.sol`**: Allows users to donate cryptocurrency and receive an ERC721 NFT as a reward. It features a minimum donation amount and a maximum supply for the reward NFTs. Donations are forwarded to a designated non-profit wallet.

## Setup and Usage (Remix IDE Recommended)

These contracts and scripts are primarily designed and tested for use within the [Remix IDE](https://remix.ethereum.org/).

### 1. Compilation

*   Open the `contracts/` directory in Remix.
*   Select `NFTMarketplace.sol` or `Reward.sol`.
*   Go to the "Solidity compiler" tab.
*   Ensure the compiler version matches the pragma statement in the contract (e.g., `^0.8.0` for `NFTMarketplace.sol`, `^0.8.20` for `Reward.sol`). It's generally good to use the latest version within the compatible range (e.g., `0.8.20` or higher if compatible).
*   Click "Compile". Ensure there are no compilation errors. Artifacts will be stored in Remix's `browser/contracts/artifacts/` directory.

### 2. Deployment

Deployment scripts are provided in the `scripts/` directory and are intended to be run from Remix.

*   **Prerequisites**:
    *   Ensure contracts are compiled (see step 1).
    *   In Remix, under the "Deploy & run transactions" tab, select an environment (e.g., "Remix VM (London)" for testing, or "Injected Provider - MetaMask" for a live/test network). Ensure you have an account with test Ether if not using a VM.

*   **Running a Deployment Script (e.g., for `Reward.sol`):**
    1.  Open `scripts/deploy_with_ethers.ts` or `scripts/deploy_with_web3.ts` in the Remix editor.
    2.  These scripts currently deploy the `Reward` contract.
    3.  The constructor arguments for `Reward` are hardcoded in the scripts:
        *   `_wallet` (address): The recipient wallet for donations.
        *   `_minimumDonation` (uint256): Minimum donation in wei.
        *   `_maxId` (uint256): Maximum supply of reward NFTs.
        *   You may want to modify these placeholder values in the script before running.
    4.  Right-click on the script name in the File Explorer or in the editor tab and select "Run".
    5.  The contract address will be logged in the Remix console.

*   **Deploying `NFTMarketplace.sol`:**
    *   Currently, there isn't a dedicated script for `NFTMarketplace.sol`. You can deploy it manually using the Remix "Deploy & run transactions" tab:
        1.  Select `NFTMarketplace` from the contract dropdown.
        2.  Click "Deploy". The deployer will become the owner.
    *   Alternatively, you can adapt one of the existing deployment scripts for `NFTMarketplace.sol` (it has no constructor arguments by default, but `Ownable` sets the deployer as owner).

### 3. Running Tests

Tests are written in Solidity and are located in the `tests/` directory. They use Remix's testing framework.

*   Open `tests/Reward_test.sol` in Remix.
*   Go to the "Solidity Unit Testing" plugin (you might need to activate it from the Plugin Manager).
*   Click the "Run" button in the testing panel.
*   Test results will be displayed.

## Key Implemented Changes (Summary from Evaluation)

*   **Security:**
    *   Access control (`Ownable`) added to `NFTMarketplace.sol` for `updateRefundPeriod`.
    *   Reentrancy vulnerabilities addressed in `NFTMarketplace.sol` (`acceptOffer`) and `Reward.sol` (`donate`) by applying the Checks-Effects-Interactions pattern.
*   **Event Data:**
    *   `DonationMade` event in `Reward.sol` now emits the correct `tokenId`.
*   **Deployment Scripts:**
    *   Updated to include (placeholder) constructor arguments for `Reward.sol`.
*   **Testing:**
    *   Added basic tests for `Reward.sol` covering successful donations and donations below the minimum.
    *   Added a public getter `getNextTokenId()` to `Reward.sol` for easier testing of `nextTokenId`.

## Further Development / Areas for Improvement

*   **Comprehensive Testing:** Expand test coverage for both contracts, including edge cases, all failure modes, events, and remaining `NFTMarketplace.sol` functionalities.
*   **Deployment Script Parameterization:** Make deployment scripts more flexible by allowing contract names and constructor arguments to be passed dynamically.
*   **Gas Optimization:** Review contracts for further gas optimization opportunities.
*   **Frontend Integration:** Develop a user interface to interact with the smart contracts.
*   **Hardhat/Truffle Project:** For more robust development and testing, consider migrating to a development environment like Hardhat or Truffle.
*   **NFTMarketplace Refund Logic:** Further review and test the refund logic in `NFTMarketplace.sol` to ensure it behaves as intended under all conditions, especially concerning interactions with `acceptOffer`.
---
This README provides a starting point. Feel free to expand it with more details as the project evolves.
