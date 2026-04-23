# Mainnet Deployment Checklist - brag.charity MVP

This document outlines the steps required to deploy the core brag.charity ecosystem to Ethereum Mainnet.

## 1. Prerequisites
- [ ] Deployer wallet funded with at least 0.5 ETH (for gas).
- [ ] Verified Chainlink ETH/USD Price Feed address for Mainnet: `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`.
- [ ] EntryPoint v0.7.0 address: `0x0000000071727De22E5E9d8BAf0edAc6f37da032`.
- [ ] Finalize `initialOwner` address (e.g., a hardware wallet or existing Foundation multi-sig).

## 2. Configuration
Update `ignition/parameters.json` for mainnet:
```json
{
  "AppModule": {
    "initialOwner": "0xYourMainnetOwnerAddress",
    "priceFeed": "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    "minimumDonation": "1000000000000000"
  }
}
```

## 3. Deployment Steps
1. **Compile Contracts:**
   ```bash
   npx hardhat compile
   ```
2. **Deploy to Mainnet (using Ignition):**
   ```bash
   npx hardhat ignition deploy ignition/modules/App.ts --network mainnet --parameters ignition/parameters.json
   ```
3. **Verify Contracts:**
   ```bash
   npx hardhat ignition verify AppModule --network mainnet
   ```
4. **Sync Frontend:**
   ```bash
   node scripts/export-abis.cjs
   ```

## 4. Post-Deployment Verification
- [ ] Check `BragNFT` proxy is correctly initialized with the `Treasury` address.
- [ ] Check `BragToken` has granted `MINTER_ROLE` to the `BragNFT` proxy.
- [ ] Test a small donation on Mainnet to verify:
    - [ ] ETH is received by the Treasury.
    - [ ] BragNFT is minted to the donor.
    - [ ] BRAG tokens are rewarded at the 1,000,000 : $1 ratio.
    - [ ] PDF Receipt can be generated with correct info.

## 5. Contract Addresses (Mainnet)
*Keep this updated after deployment*
- **BragNFT (Proxy):** `0x...`
- **BragToken:** `0x...`
- **Treasury (Proxy):** `0x...`
- **ExhibitRegistry:** `0x...`
- **NFTMarketplace:** `0x...`

## 6. Tokenomics Summary
- **Ratio:** $1.00 USD -> 1,000,000 BRAG.
- **Max Supply:** 1 Quadrillion BRAG.
- **Royalties:** 8% hardcoded to Treasury.
- **Glow Recharge:** 1,000,000 BRAG or $1.00 USD worth of ETH.
