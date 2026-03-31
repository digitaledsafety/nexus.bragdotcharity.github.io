/**
 * product.js - Individual NFT detail page logic.
 * Uses core.js for wallet and contract interactions.
 */

async function initProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenId = urlParams.get('id');
    const contractAddr = urlParams.get('addr');

    if (!tokenId || !contractAddr) {
        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productError').classList.remove('hidden');
        return;
    }

    await loadProductData(contractAddr, tokenId);
}

/**
 * Fetch and display NFT data
 */
async function loadProductData(contractAddr, tokenId) {
    try {
        const bragNFT = getContract('BragNFT', contractAddr);
        const marketplace = getContract('NFTMarketplace');
        const registry = getContract('ExhibitRegistry');

        if (!bragNFT) throw new Error("Contract not initialized");

        // Parallel fetch for better performance
        const [tokenURI, owner, receiptId] = await Promise.all([
            bragNFT.tokenURI(tokenId).catch(() => ""),
            bragNFT.ownerOf(tokenId).catch(() => ethers.constants.AddressZero),
            bragNFT.nftToReceipt(tokenId).catch(() => 0)
        ]);

        const metadata = parseMetadata(tokenURI);
        if (!metadata) throw new Error("Metadata parse failed");

        // UI Injection
        document.getElementById('nftName').textContent = metadata.name;
        document.getElementById('breadcrumbName').textContent = metadata.name;
        document.getElementById('nftDescription').textContent = metadata.description || 'Verified impact contribution.';
        document.getElementById('dispOwner').textContent = owner === userAddress ? 'You' : owner;
        document.getElementById('dispContract').textContent = contractAddr;
        document.getElementById('dispTokenId').textContent = tokenId;
        document.getElementById('dispNetwork').textContent = NETWORK_NAMES[network?.chainId] || 'Connected Network';

        const messageAttr = metadata.attributes?.find(a => a.trait_type === 'Message');
        document.getElementById('dispMessage').textContent = messageAttr ? `"${messageAttr.value}"` : 'Impact NFT';

        // Media
        const isAudio = metadata.animation_url && metadata.animation_url.includes('audio');
        if (isAudio) {
            document.getElementById('nftImage').classList.add('hidden');
            document.getElementById('audioPlayer').classList.remove('hidden');
            document.getElementById('nftAudio').src = metadata.animation_url;
        } else {
            document.getElementById('nftImage').src = metadata.image;
        }

        // Marketplace State
        if (marketplace) {
            const offer = await marketplace.offers(contractAddr, tokenId);
            if (offer.buyer !== ethers.constants.AddressZero) {
                document.getElementById('noOffer').classList.add('hidden');
                document.getElementById('offerExists').classList.remove('hidden');
                document.getElementById('highestOfferPrice').textContent = `${ethers.utils.formatEther(offer.price)} BRAG`;
                document.getElementById('highestOfferBuyer').textContent = `by ${offer.buyer.substring(0, 6)}...${offer.buyer.substring(38)}`;
            }
        }

        // Vault State
        if (registry) {
            const isExhibited = await registry.isVerified(owner); // Simplified check for MVP
            if (isExhibited) document.getElementById('vaultBadge').classList.remove('hidden');
        }

        // Buttons
        setupProductActions(contractAddr, tokenId, metadata);

        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productContent').classList.remove('hidden');

    } catch (e) {
        console.error("Product load error", e);
        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productError').classList.remove('hidden');
    }
}

function setupProductActions(contractAddr, tokenId, metadata) {
    document.getElementById('btnMakeOffer').onclick = async () => {
        const priceStr = document.getElementById('offerAmount').value;
        if (!priceStr || parseFloat(priceStr) <= 0) return alert('Enter valid BRAG price');

        const marketplace = getContract('NFTMarketplace');
        const bragToken = getContract('BragToken');
        if (!marketplace || !bragToken) return alert('Marketplace not configured on this network');

        try {
            const price = ethers.utils.parseEther(priceStr);
            const allowance = await bragToken.allowance(userAddress, marketplace.address);

            if (allowance.lt(price)) {
                alert('Approval required for BRAG tokens.');
                const appTx = await bragToken.approve(marketplace.address, price);
                await appTx.wait();
            }

            const tx = await marketplace.createOffer(contractAddr, tokenId, 1, price);
            alert('Offer submitted!');
            await tx.wait();
            window.location.reload();
        } catch (e) {
            alert('Offer failed: ' + (e.reason || e.message));
        }
    };

    document.getElementById('btnAddToCart').onclick = () => {
        addToCart({
            id: tokenId,
            address: contractAddr,
            name: metadata.name,
            image: metadata.image
        });
    };
}


window.addEventListener('load', initProduct);
