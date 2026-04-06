import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AppModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", m.getAccount(0));
  const minimumDonation = m.getParameter("minimumDonation", 1n);
  const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

  // --- Treasury ---
  const treasuryImpl = m.contract("Treasury", []);
  const treasuryProxy = m.contract("BragProxy", [treasuryImpl, "0x"], { id: "TreasuryProxy" });
  const treasury = m.contractAt("Treasury", treasuryProxy, { id: "TreasuryInstance" });
  const treasuryInit = m.call(treasury, "initialize", [[initialOwner], 1n, entryPointAddress]);

  // --- ExhibitRegistry ---
  const registryImpl = m.contract("ExhibitRegistry", []);
  const registryProxy = m.contract("BragProxy", [registryImpl, "0x"], { id: "ExhibitRegistryProxy" });
  const exhibitRegistry = m.contractAt("ExhibitRegistry", registryProxy, { id: "ExhibitRegistryInstance" });
  const registryInit = m.call(exhibitRegistry, "initialize", [initialOwner]);

  // --- DonationReceipt ---
  const receiptImpl = m.contract("DonationReceipt", []);
  const receiptProxy = m.contract("BragProxy", [receiptImpl, "0x"], { id: "DonationReceiptProxy" });
  const donationReceipt = m.contractAt("DonationReceipt", receiptProxy, { id: "DonationReceiptInstance" });
  const receiptInit = m.call(donationReceipt, "initialize", [initialOwner]);

  // --- BragToken ---
  const initialSupply = m.getParameter("initialSupply", 0n);
  const maxSupply = m.getParameter("maxSupply", 1000000000000000000000000000n);
  const tokenImpl = m.contract("BragToken", []);
  const tokenProxy = m.contract("BragProxy", [tokenImpl, "0x"], { id: "BragTokenProxy" });
  const bragToken = m.contractAt("BragToken", tokenProxy, { id: "BragTokenInstance" });
  const tokenInit = m.call(bragToken, "initialize", [initialOwner, initialSupply, maxSupply]);

  // --- BragNFT ---
  const nftImpl = m.contract("BragNFT", []);
  const nftProxy = m.contract("BragProxy", [nftImpl, "0x"], { id: "BragNFTProxy" });
  const bragNFT = m.contractAt("BragNFT", nftProxy, { id: "BragNFTInstance" });
  const nftInit = m.call(bragNFT, "initialize", [initialOwner, treasury, minimumDonation]);

  // --- NFTMarketplace ---
  const marketplaceImpl = m.contract("NFTMarketplace", []);
  const marketplaceProxy = m.contract("BragProxy", [marketplaceImpl, "0x"], { id: "NFTMarketplaceProxy" });
  const marketplace = m.contractAt("NFTMarketplace", marketplaceProxy, { id: "NFTMarketplaceInstance" });
  const marketplaceInit = m.call(marketplace, "initialize", [initialOwner, bragToken]);

  // --- Setup relationships ---
  const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  // Ensure initialization is complete before granting roles
  m.call(donationReceipt, "grantRole", [MINTER_ROLE, bragNFT], { id: "ReceiptGrantMinter", after: [receiptInit, nftInit] });
  m.call(bragNFT, "setReceiptContract", [donationReceipt], { id: "NFTSetReceipt", after: [nftInit, receiptInit] });
  m.call(bragNFT, "setBragToken", [bragToken], { id: "NFTSetToken", after: [nftInit, tokenInit] });
  m.call(bragToken, "grantRole", [MINTER_ROLE, bragNFT], { id: "TokenGrantMinter", after: [tokenInit, nftInit] });

  return {
    exhibitRegistry,
    donationReceipt,
    bragNFT,
    marketplace,
    bragToken,
    treasury,
    treasuryProxy,
    registryProxy,
    receiptProxy,
    tokenProxy,
    nftProxy,
    marketplaceProxy
  };
});
