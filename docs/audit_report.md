# Audit Report: Brag Charity Smart Contracts

This report documents identified bugs, security vulnerabilities, and enhancement opportunities in the Brag Charity ecosystem smart contracts.

## Identified Bugs and Vulnerabilities

### 1. BragNFT: Incomplete JSON Escaping
**File:** `contracts/BragNFT.sol`
**Function:** `_escapeJSON`
**Issue:** The current implementation only escapes double quotes (`"`) and backslashes (`\`). However, the JSON standard requires control characters (0x00 through 0x1F) to be escaped (e.g., `\u0001`, `\n`, `\r`, `\t`). If a user provides a donation message with these characters, it can result in invalid on-chain metadata that fails to parse in marketplaces and wallets.

### 2. BragNFT: Missing SVG Escaping
**File:** `contracts/BragNFT.sol`
**Function:** `_generateSVG`
**Issue:** The donation message is directly embedded into the SVG string without any escaping. Characters like `<` (less than), `>` (greater than), and `&` (ampersand) can break the SVG structure, causing the image to fail to render.

### 3. ExhibitVault: Ownership Spoofing in Receivers
**File:** `contracts/ExhibitVault.sol`
**Functions:** `onERC721Received`, `onERC1155Received`, `onERC1155BatchReceived`
**Issue:** These functions allow an `actualOwner` to be specified in the `data` parameter. While there is a check `registry.isVerified(from)` for 32-byte data, the 64-byte data path (which sets both `actualOwner` and `duration`) lacks any verification of the sender (`from`) or the `operator`. This allows any user or malicious contract to exhibit an NFT and claim it belongs to someone else on-chain, potentially spoofing history or rewards.

## Enhancement Opportunities

### 1. NFTMarketplace: Protocol Fees
**File:** `contracts/NFTMarketplace.sol`
**Issue:** The marketplace currently lacks a protocol fee mechanism. All proceeds from a sale go directly to the seller. Implementing a configurable fee (in basis points) would allow the project to sustain itself.

### 2. NFTMarketplace: Offer Rejection
**File:** `contracts/NFTMarketplace.sol`
**Issue:** Sellers currently have no way to explicitly reject an offer. They must either wait for the buyer to cancel or accept it. Adding a `rejectOffer` function allows sellers to clear unwanted offers and return funds to the buyer immediately.

### 3. NFTMarketplace: Redundant Refund Logic
**File:** `contracts/NFTMarketplace.sol`
**Functions:** `requestRefund`
**Issue:** The `requestRefund` function is redundant with `cancelOffer`. Both allow the buyer to retrieve their funds and delete the offer. `requestRefund` is even more restrictive due to the `refundPeriod`. Removing it simplifies the contract and reduces gas costs.

### 4. BatchGrant: Native ETH Distribution
**File:** `contracts/BatchGrant.sol`
**Issue:** The `BatchGrant` contract only supports ERC20 token distribution. Adding support for native ETH distribution would make it a more versatile utility for the ecosystem.
