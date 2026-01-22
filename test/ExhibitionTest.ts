
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress } from "viem";

describe("ExhibitionNFT", async function () {
  const { viem } = await network.connect();
  const publicClient = await viem.getPublicClient();

  async function deployContracts() {
    const [owner, user1] = await viem.getWalletClients();

    const exhibition = await viem.deployContract("Exhibition", []);
    const myNFT = await viem.deployContract("MyNFT", [exhibition.address]);

    // Set NFT contract in Exhibition
    await exhibition.write.setNFTContract([myNFT.address]);

    return { exhibition, myNFT, owner, user1 };
  }

  it("Should allow owner to mint and user to exhibit and retrieve", async function () {
    const { exhibition, myNFT, owner, user1 } = await deployContracts();

    // Mint NFT to user1
    await myNFT.write.safeMint([user1.account.address]);
    const tokenId = 0n;
    assert.equal(await myNFT.read.ownerOf([tokenId]), getAddress(user1.account.address));

    // User1 exhibits NFT
    await myNFT.write.doExhibition([tokenId, 123n], { account: user1.account });

    assert.equal(await myNFT.read.isOnExhibition([tokenId]), true);
    assert.equal(await myNFT.read.ownerOf([tokenId]), getAddress(myNFT.address));

    // Try to retrieve while exhibition is ongoing (should fail)
    await assert.rejects(
        myNFT.write.doRetrieve([tokenId], { account: user1.account }),
        /Exhibition still ongoing/
    );

    // End exhibition (onlyOwner of MyNFT)
    await myNFT.write.endExhibition([tokenId]);
    assert.equal(await myNFT.read.isOnExhibition([tokenId]), false);

    // User1 retrieves NFT
    await myNFT.write.doRetrieve([tokenId], { account: user1.account });
    assert.equal(await myNFT.read.ownerOf([tokenId]), getAddress(user1.account.address));

    const details = await exhibition.read.getExhibitionDetails([tokenId]);
    assert.equal(details.active, false);
  });

  it("Should prevent unauthorized retrieval", async function () {
    const { myNFT, owner, user1 } = await deployContracts();

    await myNFT.write.safeMint([owner.account.address]);
    const tokenId = 0n;

    await myNFT.write.doExhibition([tokenId, 456n]);
    await myNFT.write.endExhibition([tokenId]);

    // User1 tries to retrieve owner's NFT
    await assert.rejects(
        myNFT.write.doRetrieve([tokenId], { account: user1.account }),
        /Not the original owner/
    );
  });
});
