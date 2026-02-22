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

  // BragToken Parameters
  const initialSupply = m.getParameter("initialSupply", 0n);
  const maxSupply = m.getParameter("maxSupply", 1000000000000000000000000000n); // 1 Billion BRAG (18 decimals)

  // Deploy BragToken
  const bragToken = m.contract("BragToken", [initialOwner, initialSupply, maxSupply]);

  // Deploy NFTMarketplace
  const refundPeriod = m.getParameter("refundPeriod", 604800n);
  const marketplace = m.contract("NFTMarketplace", [refundPeriod, bragToken]);

  // Setup relationships
  const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  m.call(donationReceipt, "grantRole", [MINTER_ROLE, bragNFT]);
  m.call(bragNFT, "setReceiptContract", [donationReceipt]);
  m.call(bragNFT, "setBragToken", [bragToken]);

  // Grant MINTER_ROLE to BragNFT to authorize it to mint rewards
  m.call(bragToken, "grantRole", [MINTER_ROLE, bragNFT]);

  // We only return the treasury if we deployed it
  const result: any = { exhibitRegistry, donationReceipt, bragNFT, marketplace, bragToken };
  if (typeof treasury !== "string") {
    result.treasury = treasury;
  }

  return result;
});
