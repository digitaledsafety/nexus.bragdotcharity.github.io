/**
 * product.js - Individual NFT detail page logic.
 * Uses core.js for wallet and contract interactions.
 */

async function initProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenId = urlParams.get('id');
    const contractAddr = urlParams.get('addr');

    if (!tokenId || !contractAddr) {
        const loadingEl = document.getElementById('productLoading');
        const errorEl = document.getElementById('productError');
        if (loadingEl) loadingEl.classList.add('hidden');
        if (errorEl) errorEl.classList.remove('hidden');
        return;
    }

    await loadProductData(contractAddr, tokenId);
}

function cleanupProduct() {
    // No specific long-running processes to cleanup here yet
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

        // Receipt Link
        if (receiptId > 0) {
            const receiptContract = getContract('DonationReceipt');
            const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/address/" : "https://etherscan.io/address/";
            const receiptLink = document.getElementById('dispReceipt');
            if (receiptLink && receiptContract) {
                receiptLink.href = `${explorerUrl}${receiptContract.address}?a=${receiptId}`;
            }
        }

        // UI Injection
        const nftNameEl = document.getElementById('nftName');
        const breadcrumbEl = document.getElementById('breadcrumbName');
        const descEl = document.getElementById('nftDescription');
        const ownerEl = document.getElementById('dispOwner');
        const contractEl = document.getElementById('dispContract');
        const tokenIdEl = document.getElementById('dispTokenId');
        const networkEl = document.getElementById('dispNetwork');
        const messageEl = document.getElementById('dispMessage');

        if (nftNameEl) nftNameEl.textContent = metadata.name;
        if (breadcrumbEl) breadcrumbEl.textContent = metadata.name;
        if (descEl) descEl.textContent = metadata.description || 'Verified impact contribution.';
        if (ownerEl) ownerEl.textContent = owner === userAddress ? 'You' : owner;
        if (contractEl) contractEl.textContent = contractAddr;
        if (tokenIdEl) tokenIdEl.textContent = tokenId;
        if (networkEl) networkEl.textContent = NETWORK_NAMES[network?.chainId] || 'Connected Network';

        const messageAttr = metadata.attributes?.find(a => a.trait_type === 'Message');
        if (messageEl) messageEl.textContent = messageAttr ? `"${messageAttr.value}"` : 'Impact NFT';

        // Media
        const isAudio = metadata.animation_url && metadata.animation_url.includes('audio');
        const nftImageEl = document.getElementById('nftImage');
        const audioPlayerEl = document.getElementById('audioPlayer');
        const nftAudioEl = document.getElementById('nftAudio');

        if (isAudio) {
            if (nftImageEl) nftImageEl.classList.add('hidden');
            if (audioPlayerEl) audioPlayerEl.classList.remove('hidden');
            if (nftAudioEl) nftAudioEl.src = metadata.animation_url;
        } else {
            if (nftImageEl) nftImageEl.src = metadata.image;
        }

        // Marketplace State - Find highest active offer
        if (marketplace) {
            try {
                const offerFilter = marketplace.filters.OfferCreated(contractAddr, tokenId);
                const offerEvents = await marketplace.queryFilter(offerFilter, -50000);

                let highestOffer = { price: ethers.BigNumber.from(0), buyer: ethers.constants.AddressZero };

                // Track unique buyers to check their current offer state
                const buyers = [...new Set(offerEvents.map(e => e.args.buyer))];

                for (const buyer of buyers) {
                    const currentOffer = await marketplace.offers(contractAddr, tokenId, buyer);
                    if (currentOffer.price.gt(highestOffer.price)) {
                        highestOffer = { price: currentOffer.price, buyer: buyer };
                    }
                }

                if (highestOffer.price.gt(0)) {
                    const noOfferEl = document.getElementById('noOffer');
                    const offerExistsEl = document.getElementById('offerExists');
                    const highestPriceEl = document.getElementById('highestOfferPrice');
                    const highestBuyerEl = document.getElementById('highestOfferBuyer');

                    if (noOfferEl) noOfferEl.classList.add('hidden');
                    if (offerExistsEl) offerExistsEl.classList.remove('hidden');
                    if (highestPriceEl) highestPriceEl.textContent = `${ethers.utils.formatEther(highestOffer.price)} BRAG`;
                    if (highestBuyerEl) highestBuyerEl.textContent = `by ${highestOffer.buyer.substring(0, 6)}...${highestOffer.buyer.substring(38)}`;
                }
            } catch (err) {
                console.warn("Failed to load offers", err);
            }
        }

        // Vault State
        if (registry) {
            const isExhibited = await registry.isVerified(owner); // Simplified check for MVP
            const vaultBadgeEl = document.getElementById('vaultBadge');
            if (isExhibited && vaultBadgeEl) vaultBadgeEl.classList.remove('hidden');
        }

        // Buttons
        setupProductActions(contractAddr, tokenId, metadata);

        const loadingEl = document.getElementById('productLoading');
        const contentEl = document.getElementById('productContent');
        if (loadingEl) loadingEl.classList.add('hidden');
        if (contentEl) contentEl.classList.remove('hidden');

    } catch (e) {
        console.error("Product load error", e);
        const loadingEl = document.getElementById('productLoading');
        const errorEl = document.getElementById('productError');
        if (loadingEl) loadingEl.classList.add('hidden');
        if (errorEl) errorEl.classList.remove('hidden');
    }
}

function setupProductActions(contractAddr, tokenId, metadata) {
    const btnMakeOffer = document.getElementById('btnMakeOffer');
    if (btnMakeOffer) {
        btnMakeOffer.onclick = async () => {
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
                router.handleRoute(); // Refresh view
            } catch (e) {
                alert('Offer failed: ' + (e.reason || e.message));
            }
        };
    }

    const btnAddToCart = document.getElementById('btnAddToCart');
    if (btnAddToCart) {
        btnAddToCart.onclick = () => {
            addToCart({
                id: tokenId,
                address: contractAddr,
                name: metadata.name,
                image: metadata.image
            });
        };
    }
}
