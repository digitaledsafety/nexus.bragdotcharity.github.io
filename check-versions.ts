import { AccountVersionRegistry, defaultLightAccountVersion } from "@alchemy/aa-accounts";
import { sepolia } from "viem/chains";

console.log("Default LightAccount Version:", defaultLightAccountVersion("MultiOwnerLightAccount"));
const versions = AccountVersionRegistry["MultiOwnerLightAccount"];
for (const [v, data] of Object.entries(versions)) {
    console.log(`Version: ${v}`);
    console.log(`  EntryPoint Version: ${data.entryPointVersion}`);
    // @ts-ignore
    console.log(`  Factory: ${data.address[sepolia.id]?.factory}`);
}
