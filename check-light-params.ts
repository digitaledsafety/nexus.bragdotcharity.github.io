import { AccountVersionRegistry } from "@alchemy/aa-accounts";
import { sepolia } from "viem/chains";
const v110 = AccountVersionRegistry["LightAccount"]["v1.1.0"];
console.log("v1.1.0 EP:", v110.entryPointVersion);
// @ts-ignore
console.log("v1.1.0 Factory:", v110.address[sepolia.id]?.factory);
