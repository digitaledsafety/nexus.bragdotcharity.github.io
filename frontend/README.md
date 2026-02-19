# BragNFT Frontend

This is a vanilla HTML/JS interface for interacting with the BragNFT ecosystem.

## Deployment to GitHub Pages

This project is configured with a GitHub Action (`.github/workflows/deploy-pages.yml`) that automatically handles deployment for you.

1. Push your changes to the `main` branch.
2. The Action will compile your contracts, update the ABIs, and push the site to a `gh-pages` branch.
3. In your GitHub Repo settings, under **Pages**, ensure the source is set to **Deploy from a branch** and the branch is set to **gh-pages**.

## Local Development

Simply open `index.html` (Discovery) or `manager.html` (Admin) in your browser. You will need MetaMask installed and connected to a network (Localhost, Sepolia, or Mainnet) where the contracts are deployed.

## Contract Addresses

You can find the deployed contract addresses in your Hardhat ignition deployment logs or by running:
```bash
npx hardhat ignition deploy ./ignition/modules/App.ts --network <network>
```
Once you have the addresses, paste them into the **Contract Settings** section in the web interface. They will be saved to your browser's local storage for future use.

## Viewing NFTs

The product page identifies NFTs using URL parameters.

**URL Template:**
`product.html?id=<TOKEN_ID>&addr=<CONTRACT_ADDRESS>`

**Example:**
`product.html?id=0&addr=0x5FC8d32690cc91D4c39d9d3abcBD16989F875707`

The **Discovery Gallery** (`index.html`) automatically switches from demo data to real blockchain data once it detects `Donated` events from the BragNFT contract.

### Compatibility Note
Currently, the frontend only parses `tokenURI` data that is provided as a **Base64 Data URI** (on-chain metadata). Standard NFTs using external IPFS or HTTP links will require a frontend update to fetch external content.
