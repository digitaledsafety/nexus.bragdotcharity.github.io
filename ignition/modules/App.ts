import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AppModule", (m) => {
  // Parameters with default values for local development
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1n);

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

  // Deploy BragNFT
  const bragNFT = m.contract("BragNFT", [initialOwner, treasury, minimumDonation]);

  // Setup relationships
  m.call(donationReceipt, "setMinter", [bragNFT, true]);
  m.call(bragNFT, "setReceiptContract", [donationReceipt]);

  // We only return the treasury if we deployed it
  const result: any = { exhibitRegistry, donationReceipt, bragNFT };
  if (typeof treasury !== "string") {
    result.treasury = treasury;
  }

  return result;
});
