/**
 * marketplace.js - NFT Listing and Filtering Logic
 * Uses core.js for wallet and contract interactions.
 */

async function initMarketplace() {
    await coreReady;
    // Shared cart already initialized in core.js initCore
    await loadNFTs();
}

/**
 * Load and display NFTs from the blockchain
 */
async function loadNFTs() {
    const nftGrid = document.getElementById('nftGrid');
    const emptyState = document.getElementById('emptyState');
    if (!nftGrid) return;

    const bragNFT = getContract('BragNFT');
    if (!bragNFT) {
        nftGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    try {
        // Fetch Donated events to find all minted NFTs
        const filter = bragNFT.filters.Donated();
        // Try to get events from the last 50,000 blocks
        let events = [];
        try {
            events = await bragNFT.queryFilter(filter, -50000);
        } catch (e) {
            events = await bragNFT.queryFilter(filter, 0);
        }

        if (events.length === 0) {
            renderDemoMarketCard(); // Show at least one demo card if empty
            return;
        }

        nftGrid.innerHTML = '';
        emptyState.classList.add('hidden');

        // Sort by newest first
        const sortedEvents = events.reverse();
        const seenTokens = new Set();

        for (const event of sortedEvents) {
            const tokenId = event.args.nftTokenId.toString();
            if (seenTokens.has(tokenId)) continue;
            seenTokens.add(tokenId);

            renderNFTCard(bragNFT, tokenId).catch(console.error);
        }
    } catch (e) {
        console.error('Error loading marketplace NFTs:', e);
        nftGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
    }
}

/**
 * Render a single NFT card
 */
async function renderNFTCard(contract, tokenId) {
    const nftGrid = document.getElementById('nftGrid');
    try {
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = parseMetadata(tokenURI);
        if (!metadata) return;

        const card = document.createElement('div');
        card.className = 'glass-card rounded-[2rem] overflow-hidden group cursor-pointer transition-all hover:translate-y-[-8px] border-white/5 hover:border-indigo-500/30';
        card.onclick = (e) => {
            if (e.target.closest('.add-to-cart-btn')) return;
            router.navigateTo('product', `?id=${tokenId}&addr=${contract.address}`);
        };

        const isAudio = metadata.animation_url && metadata.animation_url.includes('audio');

        card.innerHTML = `
            <div class="aspect-square bg-slate-900 flex items-center justify-center overflow-hidden relative">
                ${isAudio
                    ? `<div class="text-center"><i class="fas fa-music text-4xl text-indigo-500 mb-2"></i></div>`
                    : `<img src="${metadata.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">`
                }
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-black text-white/50 border border-white/5">#${tokenId}</span>
                </div>
            </div>
            <div class="p-6 space-y-4">
                <div>
                    <h3 class="font-bold text-lg truncate mb-1">${metadata.name}</h3>
                    <p class="text-slate-500 text-xs truncate uppercase tracking-widest font-black">${metadata.attributes?.find(a => a.trait_type === 'Message')?.value || 'Impact NFT'}</p>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-white/5">
                    <div class="text-[10px] font-black uppercase tracking-widest text-indigo-400">View Details</div>
                    <button class="add-to-cart-btn w-8 h-8 rounded-full bg-white/5 hover:bg-indigo-500 text-slate-400 hover:text-white transition-colors flex items-center justify-center">
                        <i class="fas fa-cart-plus text-xs"></i>
                    </button>
                </div>
            </div>
        `;

        card.querySelector('.add-to-cart-btn').onclick = () => addToCart({
            id: tokenId,
            address: contract.address,
            name: metadata.name,
            image: metadata.image
        });

        nftGrid.appendChild(card);
    } catch (e) {
        console.warn(`Failed to render token ${tokenId}`, e);
    }
}


/**
 * Demo Card for Empty State
 */
function renderDemoMarketCard() {
    const nftGrid = document.getElementById('nftGrid');
    const card = document.createElement('div');
    card.className = 'glass-card rounded-[2rem] overflow-hidden group cursor-pointer border-white/5';
    card.innerHTML = `
        <div class="aspect-square bg-slate-900 flex items-center justify-center overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover opacity-40">
            <div class="absolute inset-0 flex items-center justify-center">
                <span class="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/50 text-[10px] font-black uppercase tracking-widest">Demo Asset</span>
            </div>
        </div>
        <div class="p-6">
            <h3 class="font-bold text-lg mb-1 italic text-slate-500">Nature Reserve #0</h3>
            <p class="text-slate-600 text-xs uppercase tracking-widest font-black">Minted by DESF</p>
        </div>
    `;
    card.onclick = () => window.location.href = 'index.html#donate';
    nftGrid.innerHTML = '';
    nftGrid.appendChild(card);
}


