import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AppModule", (m) => {
  // Parameters with default values for local development
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1n);

  // Deploy Treasury
  const treasury = m.contract("Treasury", [initialOwner]);

  // Deploy SummonRegistry
  const summonRegistry = m.contract("SummonRegistry", [initialOwner]);

  // Deploy Exhibition
  const exhibition = m.contract("Exhibition", [initialOwner]);

  // Deploy DonationReceipt
  const donationReceipt = m.contract("DonationReceipt", [initialOwner]);

  // Deploy BragNFT
  const bragNFT = m.contract("BragNFT", [initialOwner, treasury, minimumDonation]);

  // Setup relationships
  m.call(donationReceipt, "setMinter", [bragNFT, true]);
  m.call(bragNFT, "setReceiptContract", [donationReceipt]);

  return { treasury, summonRegistry, exhibition, donationReceipt, bragNFT };
});
