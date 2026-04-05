/**
 * product.js - Individual NFT detail page logic.
 * Uses core.js for wallet and contract interactions.
 */

async function initProduct() {
    await coreReady;
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const urlParams = new URLSearchParams(queryString);
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
        const genericNFT = getContract('IERC721', contractAddr);
        const marketplace = getContract('NFTMarketplace');
        const registry = getContract('ExhibitRegistry');

        if (!genericNFT) throw new Error("Contract not initialized");

        // Parallel fetch for better performance
        // Try tokenURI (721) then uri (1155)
        let tokenURI;
        try {
            tokenURI = await genericNFT.tokenURI(tokenId);
        } catch (e) {
            const erc1155 = getContract('IERC1155', contractAddr);
            tokenURI = await erc1155.uri(tokenId);
        }

        let owner = ethers.constants.AddressZero;
        try {
            owner = await genericNFT.ownerOf(tokenId);
        } catch (e) {
            // Might be ERC1155 or other
        }

        const [receiptId] = await Promise.all([
            genericNFT.nftToReceipt ? genericNFT.nftToReceipt(tokenId).catch(() => 0) : Promise.resolve(0)
        ]);

        const metadata = await fetchMetadata(tokenURI, tokenId);
        if (!metadata) throw new Error("Metadata parse failed");

        // Receipt Link
        if (receiptId && receiptId > 0) {
            const receiptContract = getContract('DonationReceipt');
            const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/address/" : "https://etherscan.io/address/";
            const receiptLink = document.getElementById('dispReceipt');
            if (receiptLink && receiptContract) {
                receiptLink.href = `${explorerUrl}${receiptContract.address}?a=${receiptId}`;
            }
        }

        // UI Injection
        document.getElementById('nftName').textContent = metadata.name || "Unnamed NFT";
        document.getElementById('breadcrumbName').textContent = metadata.name || "Asset Detail";
        document.getElementById('nftDescription').textContent = metadata.description || 'Verified impact contribution.';
        document.getElementById('dispOwner').textContent = owner === userAddress ? 'You' : (owner === ethers.constants.AddressZero ? 'Unknown' : owner);
        document.getElementById('dispContract').textContent = contractAddr;
        document.getElementById('dispTokenId').textContent = tokenId.length > 20 ? tokenId.substring(0, 8) + '...' + tokenId.substring(tokenId.length - 8) : tokenId;
        document.getElementById('dispNetwork').textContent = NETWORK_NAMES[network?.chainId] || 'Connected Network';

        // Detect Standard
        let standard = "ERC-721 Impact Asset";
        let isERC1155 = false;
        try {
            const contract = getContract('IERC165', contractAddr);
            isERC1155 = await contract.supportsInterface("0xd9b67a26");
            if (isERC1155) standard = "ERC-1155 Collection";
        } catch (e) {}
        const stdDisp = document.getElementById('dispTokenId').closest('.grid').querySelector('div:nth-child(3) p:nth-child(2)');
        if (stdDisp) stdDisp.textContent = standard;

        const messageAttr = metadata.attributes?.find(a => a.trait_type === 'Message');
        const messageDisp = document.getElementById('dispMessage');
        if (messageDisp) {
            messageDisp.textContent = messageAttr ? `"${messageAttr.value}"` : 'Impact NFT';
        }

        // Hide impact-specific section if no message and no receipt
        const isNative = contractAddr.toLowerCase() === getDeploymentAddress('BragNFT')?.toLowerCase();
        const impactSection = document.getElementById('dispReceipt')?.closest('.grid');
        if (impactSection && !isNative && !messageAttr) {
            impactSection.classList.add('hidden');
        } else if (impactSection) {
            impactSection.classList.remove('hidden');
        }

        // Media
        const animUrl = metadata.animation_url || '';
        const isAudio = animUrl.includes('audio') || animUrl.match(/\.(mp3|wav|ogg|m4a|aac)$/i);
        const isVideo = animUrl.includes('video') || animUrl.match(/\.(mp4|mov|ogv|webm|m4v)$/i);
        const isGif = animUrl.includes('image/gif') || animUrl.match(/\.gif$/i);

        if (isAudio) {
            document.getElementById('nftImage').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            document.getElementById('audioPlayer').classList.remove('hidden');
            document.getElementById('nftAudio').src = animUrl;
        } else if (isVideo) {
            document.getElementById('nftImage').classList.add('hidden');
            document.getElementById('audioPlayer').classList.add('hidden');
            document.getElementById('videoPlayer').classList.remove('hidden');
            document.getElementById('nftVideo').src = animUrl;
        } else if (isGif) {
            document.getElementById('audioPlayer').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            document.getElementById('nftImage').classList.remove('hidden');
            document.getElementById('nftImage').src = animUrl;
        } else {
            document.getElementById('audioPlayer').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            document.getElementById('nftImage').classList.remove('hidden');
            document.getElementById('nftImage').src = metadata.image;
        }

        // Marketplace State - Find highest active offer
        if (marketplace) {
            try {
                const offerFilter = marketplace.filters.OfferCreated(contractAddr, tokenId);
                let offerEvents = [];
                try {
                    offerEvents = await marketplace.queryFilter(offerFilter, -50000);
                } catch (e) {
                    offerEvents = await marketplace.queryFilter(offerFilter, 0);
                }

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
                    document.getElementById('noOffer').classList.add('hidden');
                    document.getElementById('offerExists').classList.remove('hidden');
                    document.getElementById('highestOfferPrice').textContent = `${ethers.utils.formatEther(highestOffer.price)} BRAG`;
                    document.getElementById('highestOfferBuyer').textContent = `by ${highestOffer.buyer.substring(0, 6)}...${highestOffer.buyer.substring(38)}`;
                }
            } catch (err) {
                console.warn("Failed to load offers", err);
            }
        }

        // Vault State
        if (registry) {
            const isExhibited = await registry.isVerified(owner); // Simplified check for MVP
            if (isExhibited) document.getElementById('vaultBadge').classList.remove('hidden');
        }

        // Detect and display collection name if external
        const externalCollections = CONTRACT_DATA.externalCollections || [];
        const externalColl = externalCollections.find(c => c.address.toLowerCase() === contractAddr.toLowerCase());
        if (externalColl) {
            const collBadge = document.createElement('span');
            collBadge.className = 'px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[8px] font-black uppercase tracking-widest ml-2';
            collBadge.textContent = externalColl.name;
            document.getElementById('nftName').appendChild(collBadge);
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
            const amount = 1; // Default to 1 for now
            const allowance = await bragToken.allowance(userAddress, marketplace.address);

            if (allowance.lt(price)) {
                alert('Approval required for BRAG tokens.');
                const appTx = await bragToken.approve(marketplace.address, price);
                await appTx.wait();
            }

            const tx = await marketplace.createOffer(contractAddr, tokenId, amount, price);
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


