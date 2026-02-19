# Paymaster and Gas Sponsorship Report for Brag.Charity

This report outlines the research into gas sponsorship (Paymasters) and Smart Contract Wallets to achieve a gasless experience for the Brag.Charity ecosystem.

## 1. Executive Summary
To provide a 100% gasless experience (where neither the user nor the non-profit pays for gas on Mainnet) is only possible through **Network Grants**. Commercially, gas is a hard cost that must be paid by someone. However, for **Testnets (Sepolia)** and **L2s (Base, Optimism)**, 100% sponsorship is highly achievable and cost-effective.

## 2. Paymaster Provider Comparison

| Provider | Testnet (Sepolia) | Mainnet / L2 Model | Non-Profit Suitability |
| :--- | :--- | :--- | :--- |
| **Alchemy** | **100% Free** | Pay-as-you-go + 8% fee | **High** (Current infrastructure) |
| **Pimlico** | **100% Free** | 10% surcharge | **High** (Best-in-class AA infrastructure) |
| **Biconomy** | Free Tier | Transaction fees | **Medium** (Focuses on dApp UX) |
| **Safe{Core}** | Varies | Complex setup | **High** (If using Multi-sigs) |

### Recommendation: Alchemy
Since you are already using Alchemy, their **Account Kit** is the most seamless path.
- **Sepolia:** Use their "Verifying Paymaster" for 100% free gas.
- **Mainnet:** You would fund a "Gas Manager" account with USD/ETH, and Alchemy handles the user's gas.

## 3. Achieving "100% Free" on Mainnet
To truly pay $0 in gas for both the user and the non-profit on Mainnet, you should pursue:
1.  **Gas Grants:** Many chains offer grants specifically for public goods and non-profits.
    -   **Base Build Grants:** High success rate for innovative non-profit apps.
    -   **Optimism RetroPGF:** Large pools of funds for projects that provide value to the ecosystem.
2.  **L2 Migration:** Moving the primary donation logic to **Base** or **Optimism** reduces costs by 95%+, making sponsorship very affordable even without grants.

## 4. Smart Contract Wallets (Account Abstraction)
Smart Contract Wallets (ERC-4337) are the modern standard for gas sponsorship.

### How it works for your system:
1.  **Onboarding:** Instead of asking users to install MetaMask, you can use **Social Login** (Email/Google).
2.  **Smart Account:** The system creates a unique "Light Account" for the user.
3.  **Sponsored Transactions:** When a user clicks "Donate", the app generates a `UserOperation`. The **Paymaster** signs it, and the **Bundler** submits it to the chain.
4.  **No Code Change Needed:** Your existing `BragNFT.sol` and `NFTMarketplace.sol` do not need to be modified. They will simply see the Smart Account address as the `msg.sender`.

### Integration Path:
1.  Install `@alchemy/aa-sdk`.
2.  Configure a **Gas Manager Policy** in your Alchemy Dashboard.
3.  Update the frontend to use `LightAccountClient` for sponsored transactions.

## 5. Implementation Example
A Proof-of-Concept integration script has been created at `frontend/paymaster-poc.js`.

---
*Prepared by Jules, Software Engineer*
