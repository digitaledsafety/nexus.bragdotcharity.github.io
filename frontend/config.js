/**
 * config.js - Global configuration for brag.charity frontend.
 * Source Alchemy credentials and other environment-specific settings here.
 */

const APP_CONFIG = {
    // Alchemy Account Abstraction Settings
    alchemy: {
        // Sepolia (Chain ID: 11155111)
        11155111: {
            apiKey: "REPLACE_WITH_ALCHEMY_API_KEY",
            gasPolicyId: "REPLACE_WITH_ALCHEMY_GAS_POLICY_ID",
            rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/REPLACE_WITH_ALCHEMY_API_KEY",
            // For v0.7 compatibility
            entryPointAddress: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
            factoryAddress: "0x00000055C0b539bb096732644b679ae3218d1217"
        },
        // Local Hardhat (Chain ID: 31337) - Usually no paymaster needed but can be configured
        31337: {
            apiKey: "LOCAL",
            gasPolicyId: "",
            rpcUrl: "http://127.0.0.1:8545",
            entryPointAddress: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
            factoryAddress: "0x00000055C0b539bb096732644b679ae3218d1217"
        }
    },

    // Maximum gas limits for Account Abstraction transactions (UserOperations)
    // Useful for sponsoring large calldata (on-chain media)
    gasLimits: {
        maxFeePerGas: "100000000000", // 100 Gwei
        maxPriorityFeePerGas: "2000000000", // 2 Gwei
        // We'll let the SDK estimate normally but provide a way to override if needed
        hugeCalldataGasLimit: 25000000 // Very high cap for sponsored large files
    }
};
