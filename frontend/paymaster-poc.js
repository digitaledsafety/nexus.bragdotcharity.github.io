import { createLightAccountClient } from "@alchemy/aa-accounts";
import { LocalAccountSigner } from "@alchemy/aa-core";
import { sepolia } from "viem/chains";
import { http } from "viem";

/**
 * PROOF OF CONCEPT: Sponsored Transactions with Alchemy Paymaster
 *
 * This script demonstrates how to send a gasless transaction using Alchemy's Account Kit.
 * To use this in production, you would need:
 * 1. An Alchemy API Key
 * 2. An Alchemy Gas Manager Policy ID
 */

const ALCHEMY_API_KEY = "YOUR_ALCHEMY_API_KEY";
const GAS_MANAGER_POLICY_ID = "YOUR_POLICY_ID";
const PRIVATE_KEY = "0x..."; // The signer (e.g., from an EOA or Social Login)

async function sendSponsoredDonation(message) {
    console.log("Donation message:", message);
    // 1. Initialize the Signer
    const signer = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY);

    // 2. Initialize the Alchemy Client
    const client = createLightAccountClient({
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`),
        chain: sepolia,
        signer,
        // The magic happens here: Gas Manager configuration
        gasManagerConfig: {
            policyId: GAS_MANAGER_POLICY_ID,
        },
    });

    console.log("Smart Account Address:", client.getAddress());

    // 3. Send a sponsored transaction (UserOperation)
    // In this example, we call the 'donate' function on the BragNFT contract
    const BRAG_NFT_ADDRESS = "0x...";
    const donateData = "0x..."; // encoded function call

    console.log("Sending sponsored transaction...");

    const { hash } = await client.sendUserOperation({
        uo: {
            target: BRAG_NFT_ADDRESS,
            data: donateData,
            value: 0n, // Sponsorship covers gas, but the user might still send ETH for donation
        },
    });

    console.log("UserOperation Hash:", hash);

    // 4. Wait for the transaction to be mined
    const txHash = await client.waitForUserOperationTransaction(hash);
    console.log("Transaction Mined! Hash:", txHash);
}

// Note: This is a conceptual script. In a real frontend, you'd use
// @alchemy/aa-alchemy and integrate with the existing 'ethers' logic or
// transition fully to 'viem' + 'aa-sdk'.
