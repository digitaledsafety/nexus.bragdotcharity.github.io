import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AppModule", (m) => {
  // Parameters with default values for local development
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1n);
  const refundPeriod = m.getParameter("refundPeriod", 604800n);

  // We check for an environment variable during module definition.
  // This allows us to conditionally deploy the Treasury contract.
  const externalTreasury = process.env.TREASURY_ADDRESS;

  let treasury;
  if (externalTreasury && externalTreasury !== "") {
    treasury = externalTreasury;
  } else {
    treasury = m.contract("Treasury", [initialOwner]);
  }

  // Deploy ExhibitRegistry
  const exhibitRegistry = m.contract("ExhibitRegistry", [initialOwner]);

  // Deploy DonationReceipt
  const donationReceipt = m.contract("DonationReceipt", [initialOwner]);

  // Deploy Nexus
  const nexus = m.contract("Nexus", [initialOwner, treasury, minimumDonation]);

  // NexusToken Parameters
  const initialSupply = m.getParameter("initialSupply", 0n);
  const maxSupply = m.getParameter("maxSupply", 1000000000000000000000000000n); // 1 Billion NEXUS (18 decimals)

  // Deploy NexusToken
  const nexusToken = m.contract("NexusToken", [initialOwner, initialSupply, maxSupply]);

  // Deploy NFTMarketplace
  const marketplace = m.contract("NFTMarketplace", [refundPeriod, nexusToken]);

  // Setup relationships
  const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  m.call(donationReceipt, "grantRole", [MINTER_ROLE, nexus]);
  m.call(nexus, "setReceiptContract", [donationReceipt]);
  m.call(nexus, "setNexusToken", [nexusToken]);

  // Grant MINTER_ROLE to Nexus to authorize it to mint rewards
  m.call(nexusToken, "grantRole", [MINTER_ROLE, nexus]);

  // We only return the treasury if we deployed it
  const result: any = { exhibitRegistry, donationReceipt, nexus, marketplace, nexusToken };
  if (typeof treasury !== "string") {
    result.treasury = treasury;
  }

  return result;
});
