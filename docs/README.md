# BragNFT Manager Frontend

This is a vanilla HTML/JS interface for interacting with the BragNFT smart contracts.

## Deployment to GitHub Pages

1. Go to your repository settings on GitHub.
2. Select **Pages** from the sidebar.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Choose the branch and folder (e.g., `main` branch and `/frontend` folder, or you can move these files to a `docs/` folder in the root).
5. Click **Save**.

## Local Development

Simply open `index.html` in your browser. You will need MetaMask installed and connected to a network (Localhost, Sepolia, or Mainnet) where the contracts are deployed.

## Contract Addresses

You can find the deployed contract addresses in your Hardhat ignition deployment logs or by running:
```bash
npx hardhat ignition deploy ./ignition/modules/App.ts --network <network>
```
Once you have the addresses, paste them into the **Contract Settings** section in the web interface. They will be saved to your browser's local storage for future use.
