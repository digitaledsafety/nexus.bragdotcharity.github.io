/**
 * offers.js - Logic for the Batch Offers page
 * Manages processing cart items into marketplace offers.
 */

async function initOffers() {
    await coreReady;
    renderOffers();
    setupOffersListeners();
}

function renderOffers() {
    const container = document.getElementById('offersContainer');
    const emptyState = document.getElementById('offersEmpty');
    const footer = document.getElementById('offersFooter');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        footer.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    footer.classList.remove('hidden');
    container.innerHTML = '';

    cart.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'glass-card p-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 border-white/5';
        div.innerHTML = `
            <div class="h-24 w-24 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-900 border border-white/5">
                <img src="${item.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="flex-grow min-w-0 text-center md:text-left">
                <h3 class="font-bold text-lg truncate">${item.name || 'Brag NFT'}</h3>
                <p class="text-[10px] text-slate-500 font-black uppercase tracking-tighter mb-4">ID: ${item.id} | ${item.address.substring(0, 10)}...</p>
                <div class="flex items-center justify-center md:justify-start gap-4">
                     <div class="relative w-48">
                        <input type="number" class="offer-price-input input-field w-full pl-4 pr-16 py-3 rounded-xl text-sm font-bold" value="1000" step="100" data-idx="${idx}">
                        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600 uppercase">BRAG</span>
                     </div>
                </div>
            </div>
            <button class="remove-offer text-slate-600 hover:text-red-400 p-4 transition-colors" data-idx="${idx}">
                <i class="fas fa-times text-xl"></i>
            </button>
        `;
        container.appendChild(div);
    });

    updateTotalOfferValue();
}

function updateTotalOfferValue() {
    const inputs = document.querySelectorAll('.offer-price-input');
    let total = 0;
    inputs.forEach(input => {
        total += parseFloat(input.value || 0);
    });
    document.getElementById('totalOfferValue').innerText = `${total.toLocaleString()} BRAG`;
}

function setupOffersListeners() {
    document.getElementById('offersContainer')?.addEventListener('input', (e) => {
        if (e.target.classList.contains('offer-price-input')) {
            updateTotalOfferValue();
        }
    });

    document.getElementById('offersContainer')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.remove-offer');
        if (btn) {
            const idx = parseInt(btn.dataset.idx);
            cart.splice(idx, 1);
            saveCart();
            renderOffers();
        }
    });

    document.getElementById('btnClearOffers')?.addEventListener('click', () => {
        if (confirm('Clear all items?')) {
            cart = [];
            saveCart();
            renderOffers();
        }
    });

    document.getElementById('btnSubmitAllOffers')?.addEventListener('click', async () => {
        await submitOffers();
    });
}

async function submitOffers() {
    if (!userAddress) return alert('Please connect your wallet first.');

    const marketplace = getContract('NFTMarketplace');
    const bragToken = getContract('BragToken');
    if (!marketplace || !bragToken) return alert('Marketplace not configured.');

    const btn = document.getElementById('btnSubmitAllOffers');
    const originalText = btn.innerText;
    btn.disabled = true;

    try {
        const inputs = document.querySelectorAll('.offer-price-input');
        const offerData = [];

        for (const input of inputs) {
            const val = input.value;
            if (!val || parseFloat(val) <= 0) {
                input.focus();
                throw new Error("All offers must have a price greater than 0 BRAG.");
            }
            const idx = parseInt(input.dataset.idx);
            offerData.push({
                ...cart[idx],
                price: ethers.utils.parseEther(val)
            });
        }

        // 1. Bulk check allowances
        const owner = isGaslessMode ? scaAddress : userAddress;
        let totalNeeded = ethers.BigNumber.from(0);
        offerData.forEach(o => totalNeeded = totalNeeded.add(o.price));

        const currentAllowance = await bragToken.allowance(owner, marketplace.address);

        if (currentAllowance.lt(totalNeeded)) {
            btn.innerText = 'Approving BRAG...';
            const appTx = await txHandler(bragToken, 'approve', [marketplace.address, totalNeeded], 'Approval successful');
            if (!appTx) throw new Error('Approval cancelled or failed');
            if (appTx.wait) await appTx.wait();
        }

        // 2. Submit offers sequentially
        for (let i = 0; i < offerData.length; i++) {
            const item = offerData[i];
            btn.innerText = `Submitting Offer ${i+1}/${offerData.length}...`;

            // Check if offer already exists to avoid revert
            const existing = await marketplace.offers(item.address, item.id, owner);
            if (existing.price.gt(0)) {
                console.log(`Offer for ${item.id} already exists, updating...`);
                await txHandler(marketplace, 'updateOffer', [item.address, item.id, 1, item.price], `Offer ${i+1} Updated`);
            } else {
                await txHandler(marketplace, 'createOffer', [item.address, item.id, 1, item.price], `Offer ${i+1} Created`);
            }
        }

        alert('All offers submitted successfully!');
        cart = [];
        saveCart();
        router.navigateTo('marketplace');

    } catch (e) {
        console.error(e);
        alert(`Failed to submit offers: ${e.reason || e.message}`);
    } finally {
        btn.disabled = false;
        btn.innerText = originalText;
    }
}
