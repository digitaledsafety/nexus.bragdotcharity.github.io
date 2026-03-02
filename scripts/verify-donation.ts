import { createWalletClient, createPublicClient, http, parseEther, formatEther } from "viem";
import { mainnet, hardhat } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import assert from "node:assert/strict";

async function verify() {
    const transport = http("http://127.0.0.1:8545");
    const publicClient = createPublicClient({
        chain: hardhat,
        transport
    });

    // Hardhat Account #0
    const account = privateKeyToAccount("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");
    const walletClient = createWalletClient({
        account,
        chain: hardhat,
        transport
    });

    // Addresses from deployment
    const ADDR_BRAG_NFT = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
    const ADDR_TREASURY = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

    console.log("Checking initial stats...");
    const initialBalance = await publicClient.getBalance({ address: ADDR_TREASURY });
    console.log(`Initial Treasury Balance: ${formatEther(initialBalance)} ETH`);

    const totalSupply = await publicClient.readContract({
        address: ADDR_BRAG_NFT,
        abi: [
            { name: "totalSupply", type: "function", inputs: [], outputs: [{ type: "uint256" }] },
            { name: "maxSupply", type: "function", inputs: [], outputs: [{ type: "uint256" }] }
        ],
        functionName: "totalSupply"
    });
    const maxSupply = await publicClient.readContract({
        address: ADDR_BRAG_NFT,
        abi: [
            { name: "totalSupply", type: "function", inputs: [], outputs: [{ type: "uint256" }] },
            { name: "maxSupply", type: "function", inputs: [], outputs: [{ type: "uint256" }] }
        ],
        functionName: "maxSupply"
    });
    console.log(`Initial NFT Supply: ${totalSupply} / ${maxSupply}`);

    console.log("Performing a donation...");
    const donationAmount = parseEther("0.05");
    const hash = await walletClient.writeContract({
        address: ADDR_BRAG_NFT,
        abi: [
            { name: "donate", type: "function", inputs: [{ name: "message", type: "string" }, { name: "media", type: "string" }, { name: "onChain", type: "bool" }], outputs: [] }
        ],
        functionName: "donate",
        args: ["Verification Donation", "", false],
        value: donationAmount
    });
    console.log(`Donation tx: ${hash}`);
    await publicClient.waitForTransactionReceipt({ hash });

    console.log("Checking updated stats...");
    const finalBalance = await publicClient.getBalance({ address: ADDR_TREASURY });
    console.log(`Final Treasury Balance: ${formatEther(finalBalance)} ETH`);

    const finalTotalSupply = await publicClient.readContract({
        address: ADDR_BRAG_NFT,
        abi: [
            { name: "totalSupply", type: "function", inputs: [], outputs: [{ type: "uint256" }] }
        ],
        functionName: "totalSupply"
    });
    console.log(`Final NFT Supply: ${finalTotalSupply} / ${maxSupply}`);

    assert.equal(finalBalance, initialBalance + donationAmount, "Treasury balance should increase by donation amount");
    assert.equal(finalTotalSupply, BigInt(totalSupply) + 1n, "Total supply should increase by 1");

    console.log("Verification successful!");
}

verify().catch(console.error);
