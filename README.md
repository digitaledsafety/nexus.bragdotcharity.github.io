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
- `TREASURY_ADDRESS`: (Optional) The ETH address that will receive donations. Defaults to the deployer address if not provided.

#### Tracking Deployed Addresses

After a successful manual deployment, you can find the contract addresses by:
1. Opening the specific workflow run.
2. Downloading the `sepolia-deployment` artifact.
3. Inspecting the `deployed_addresses.json` file within the artifact.
