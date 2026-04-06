import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AppModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1n);
  const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

  // --- Treasury ---
  const treasuryImpl = m.contract("Treasury", []);
  const treasuryInitData = m.encodeFunctionData(treasuryImpl, "initialize", [[initialOwner], 1n, entryPointAddress]);
  const treasuryProxy = m.contract("BragProxy", [treasuryImpl, treasuryInitData], { id: "TreasuryProxy" });
  const treasury = m.getContractAt("Treasury", treasuryProxy, { id: "TreasuryInstance" });

  // --- ExhibitRegistry ---
  const registryImpl = m.contract("ExhibitRegistry", []);
  const registryInitData = m.encodeFunctionData(registryImpl, "initialize", [initialOwner]);
  const registryProxy = m.contract("BragProxy", [registryImpl, registryInitData], { id: "ExhibitRegistryProxy" });
  const exhibitRegistry = m.getContractAt("ExhibitRegistry", registryProxy, { id: "ExhibitRegistryInstance" });

  // --- DonationReceipt ---
  const receiptImpl = m.contract("DonationReceipt", []);
  const receiptInitData = m.encodeFunctionData(receiptImpl, "initialize", [initialOwner]);
  const receiptProxy = m.contract("BragProxy", [receiptImpl, receiptInitData], { id: "DonationReceiptProxy" });
  const donationReceipt = m.getContractAt("DonationReceipt", receiptProxy, { id: "DonationReceiptInstance" });

  // --- BragToken ---
  const initialSupply = m.getParameter("initialSupply", 0n);
  const maxSupply = m.getParameter("maxSupply", 1000000000000000000000000000n);
  const tokenImpl = m.contract("BragToken", []);
  const tokenInitData = m.encodeFunctionData(tokenImpl, "initialize", [initialOwner, initialSupply, maxSupply]);
  const tokenProxy = m.contract("BragProxy", [tokenImpl, tokenInitData], { id: "BragTokenProxy" });
  const bragToken = m.getContractAt("BragToken", tokenProxy, { id: "BragTokenInstance" });

  // --- BragNFT ---
  const nftImpl = m.contract("BragNFT", []);
  const nftInitData = m.encodeFunctionData(nftImpl, "initialize", [initialOwner, treasury, minimumDonation]);
  const nftProxy = m.contract("BragProxy", [nftImpl, nftInitData], { id: "BragNFTProxy" });
  const bragNFT = m.getContractAt("BragNFT", nftProxy, { id: "BragNFTInstance" });

  // --- NFTMarketplace ---
  const marketplaceImpl = m.contract("NFTMarketplace", []);
  const marketplaceInitData = m.encodeFunctionData(marketplaceImpl, "initialize", [initialOwner, bragToken]);
  const marketplaceProxy = m.contract("BragProxy", [marketplaceImpl, marketplaceInitData], { id: "NFTMarketplaceProxy" });
  const marketplace = m.getContractAt("NFTMarketplace", marketplaceProxy, { id: "NFTMarketplaceInstance" });

  // --- Setup relationships ---
  const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  m.call(donationReceipt, "grantRole", [MINTER_ROLE, bragNFT]);
  m.call(bragNFT, "setReceiptContract", [donationReceipt]);
  m.call(bragNFT, "setBragToken", [bragToken]);
  m.call(bragToken, "grantRole", [MINTER_ROLE, bragNFT]);

  return {
    exhibitRegistry,
    donationReceipt,
    bragNFT,
    marketplace,
    bragToken,
    treasury,
    // Export proxies too for transparency if needed, but the instances are what we use
    treasuryProxy,
    registryProxy,
    receiptProxy,
    tokenProxy,
    nftProxy,
    marketplaceProxy
  };
});
