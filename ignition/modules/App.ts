import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * AppModule - Deployment of the brag.charity ecosystem using upgradeable proxies.
 */
export default buildModule("AppModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1000000000000000n); // 0.001 ETH default

  // Mainnet/Sepolia EntryPoint v0.7.0
  const entryPointAddress = m.getParameter("entryPoint", "0x0000000071727De22E5E9d8BAf0edAc6f37da032");

  // 1. Deploy Treasury Implementation and Proxy
  const treasuryImpl = m.contract("Treasury", []);

  const treasuryInitData = m.encodeFunctionCall(treasuryImpl, "initialize", [
    [initialOwner],
    1n, // Threshold
    entryPointAddress
  ]);

  const treasuryProxy = m.contract("BragProxy", [treasuryImpl, treasuryInitData], { id: "TreasuryProxy" });
  const treasury = m.contractAt("Treasury", treasuryProxy, { id: "TreasuryInstance" });

  // 2. Deploy BragNFT Implementation and Proxy
  const nftImpl = m.contract("BragNFT", []);

  // Note: We need a price feed address for mainnet/sepolia. Defaulting to a mock if not provided.
  const priceFeed = m.getParameter("priceFeed", "0x0000000000000000000000000000000000000000"); // Should be updated in parameters for real deployment

  const nftInitData = m.encodeFunctionCall(nftImpl, "initialize", [
    initialOwner,
    treasury,
    minimumDonation,
    priceFeed
  ]);

  const nftProxy = m.contract("BragProxy", [nftImpl, nftInitData], { id: "BragNFTProxy" });
  const bragNFT = m.contractAt("BragNFT", nftProxy, { id: "BragNFTInstance" });

  // 3. Deploy BragToken (Standard ERC20)
  const initialSupply = m.getParameter("initialSupply", 0n);
  const maxSupply = m.getParameter("maxSupply", 1000000000000000n * 10n**18n); // 1 Quadrillion
  const bragToken = m.contract("BragToken", [initialOwner, initialSupply, maxSupply]);

  // 4. Setup Roles and Token Link
  const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  m.call(bragNFT, "setBragToken", [bragToken], { id: "setBragTokenCall" });
  m.call(bragToken, "grantRole", [MINTER_ROLE, bragNFT], { id: "grantMinterRoleCall" });

  // 5. Deploy Registry (Coming Soon - non-critical for core MVP)
  const exhibitRegistry = m.contract("ExhibitRegistry", [initialOwner]);

  // 6. Deploy Marketplace (Coming Soon - non-critical for core MVP)
  const marketplace = m.contract("NFTMarketplace", [initialOwner, bragToken]);

  return { exhibitRegistry, bragNFT, marketplace, bragToken, treasury };
});
