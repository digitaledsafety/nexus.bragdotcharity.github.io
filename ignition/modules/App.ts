import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AppModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1n);

  const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

  const treasury = m.contract("Treasury", [[initialOwner], 1n, entryPointAddress]);
  const exhibitRegistry = m.contract("ExhibitRegistry", [initialOwner]);
  const mockPriceFeed = m.contract("MockPriceFeed", [250000000000n]);

  const bragNFT = m.contract("BragNFT", [initialOwner, treasury, minimumDonation, mockPriceFeed]);

  const initialSupply = m.getParameter("initialSupply", 0n);
  const maxSupply = m.getParameter("maxSupply", 1000000000000000000000000000n);
  const bragToken = m.contract("BragToken", [initialOwner, initialSupply, maxSupply]);
  const refundPeriod = m.getParameter("refundPeriod", 604800n); // Default: 7 days
  const marketplace = m.contract("NFTMarketplace", [initialOwner, refundPeriod, bragToken]);

  const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  m.call(bragNFT, "setBragToken", [bragToken]);
  m.call(bragToken, "grantRole", [MINTER_ROLE, bragNFT]);

  return { exhibitRegistry, bragNFT, marketplace, bragToken, treasury };
});
