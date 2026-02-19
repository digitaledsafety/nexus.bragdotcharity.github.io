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
- **Mainnet:** You would fund a "Gas Manager" account with USD/ETH, and Alchemy handles the user's gas. Note that Alchemy typically charges an **~8% admin fee** on sponsored mainnet transactions.

## 3. Cost and Overhead: Paymaster vs. Standard Gas
On Mainnet, using a Paymaster is **not cheaper** than standard gas fees; in fact, it is slightly more expensive due to:
1.  **ERC-4337 Overhead:** Smart accounts require an "Entry Point" contract, adding approximately 20,000 to 40,000 extra gas per transaction compared to a standard EOA (MetaMask) transaction.
2.  **Service Fees:** Providers like Alchemy charge a percentage-based fee (e.g., 8%) for the convenience of sponsoring gas.

However, you can achieve **cost savings** through **Transaction Batching**. ERC-4337 allows you to combine multiple steps (like `approve` and `donate`) into a single transaction, which is cheaper than sending two separate transactions from a standard wallet.

## 4. Why Use a Paymaster on Mainnet?
If it's more expensive, why use it?
-   **Seamless Onboarding:** Users can interact with your non-profit without needing to buy ETH first. This removes the single biggest barrier to entry for new donors.
-   **Pay with Tokens:** You can configure a Paymaster to allow users to pay gas using USDC or your own `BRAG` tokens instead of ETH.
-   **Sponsored UX:** As a non-profit, you can "absorb" the gas cost for the user to make the donation feel "free" and professional, similar to how traditional websites pay for their own server costs.

## 5. Achieving "100% Free" on Mainnet
To truly pay $0 in gas for both the user and the non-profit on Mainnet, you should pursue:
1.  **Gas Grants:** Many chains offer grants specifically for public goods and non-profits.
    -   **Base Build Grants:** High success rate for innovative non-profit apps.
    -   **Optimism RetroPGF:** Large pools of funds for projects that provide value to the ecosystem.
2.  **L2 Migration:** Moving the primary donation logic to **Base** or **Optimism** reduces costs by 95%+, making sponsorship very affordable even without grants.

## 6. Smart Contract Wallets (Account Abstraction)
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

## 7. Implementation Example
A Proof-of-Concept integration script has been created at `frontend/paymaster-poc.js`.

---
*Prepared by Jules, Software Engineer*
