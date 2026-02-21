let provider;
let signer;
let network;

const NETWORK_NAMES = {
    1: 'mainnet',
    11155111: 'sepolia',
    17000: 'holesky',
    31337: 'hardhat',
    137: 'polygon',
    80001: 'mumbai',
    42161: 'arbitrum',
    10: 'optimism',
    8453: 'base'
};

// Reusable Wallet Connection
async function connectWallet(silent = false) {
    if (typeof window.ethereum === 'undefined') {
        // Fallback to localhost if available (for testing/verification)
        provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
        try {
            network = await provider.getNetwork();
            return { provider, network };
        } catch (e) {
            if (!silent) alert('Web3 Wallet not found! Please install MetaMask.');
            return;
        }
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);

        // Use eth_accounts to check if we already have permission
        const accounts = await provider.send("eth_accounts", []);

        if (accounts.length === 0 && !silent) {
            await provider.send("eth_requestAccounts", []);
        }

        const currentAccounts = await provider.listAccounts();
        if (currentAccounts.length > 0) {
            signer = provider.getSigner();
            const address = await signer.getAddress();
            network = await provider.getNetwork();

            const connectBtn = document.getElementById('connectBtn');
            if (connectBtn) {
                connectBtn.innerText = `${address.substring(0, 6)}...${address.substring(38)}`;
            }

            localStorage.setItem('wallet_connected', 'true');

            window.ethereum.on('accountsChanged', (newAccounts) => {
                if (newAccounts.length === 0) {
                    localStorage.removeItem('wallet_connected');
                }
                window.location.reload();
            });
            window.ethereum.on('chainChanged', () => window.location.reload());

            return { provider, signer, address, network };
        } else {
            // Not connected with accounts, but we still have a provider for read-only
            network = await provider.getNetwork();
            return { provider, network };
        }
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

const connectBtn = document.getElementById('connectBtn');
if (connectBtn) {
    connectBtn.addEventListener('click', connectWallet);
}

// Contract Helpers
function getContract(name, address) {
    if (!address || !ethers.utils.isAddress(address)) {
        return null;
    }
    const abi = CONTRACT_DATA.contracts[name].abi;
    return new ethers.Contract(address, abi, signer || provider);
}

function getDeploymentAddress(name) {
    // Priority 1: Check localStorage for manual overrides (from Manager page)
    const override = localStorage.getItem(`addr${name}`);
    if (override && ethers.utils.isAddress(override)) {
        return override;
    }

    // Priority 2: Check hardcoded deployments
    if (!network) return null;
    const chainId = network.chainId.toString();
    const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
    return deps ? (deps[name] || deps[name === 'NFTMarketplace' ? 'Marketplace' : name]) : null;
}

// Metadata Parsing
function parseMetadata(tokenURI) {
    try {
        if (tokenURI.startsWith('data:application/json;base64,')) {
            const base64 = tokenURI.split(',')[1];
            const json = atob(base64);
            return JSON.parse(json);
        }
        return null;
    } catch (e) {
        console.error('Error parsing metadata:', e);
        return null;
    }
}

// Cart Logic
let cart = [];

function loadCart() {
    const saved = localStorage.getItem('brag_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('brag_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const count = document.getElementById('cartCount');
    if (count) {
        count.textContent = cart.length;
        count.classList.toggle('hidden', cart.length === 0);
    }

    const itemsContainer = document.getElementById('cartItems');
    if (itemsContainer) {
        if (cart.length === 0) {
            itemsContainer.innerHTML = '<p class="text-slate-500 text-center py-8">Your cart is empty</p>';
            return;
        }

        itemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'flex items-center space-x-3 bg-slate-800 p-2 rounded-lg group';
            div.innerHTML = `
                <div class="h-12 w-12 bg-slate-700 rounded overflow-hidden flex-shrink-0">
                    <img src="" class="w-full h-full object-cover cart-img">
                </div>
                <div class="flex-grow min-w-0">
                    <p class="text-sm font-bold truncate item-name"></p>
                    <p class="text-[10px] text-slate-500 font-mono">ID: ${item.id}</p>
                </div>
                <button class="text-slate-600 hover:text-red-500 p-1 remove-item">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            div.querySelector('.cart-img').src = item.image;
            div.querySelector('.item-name').textContent = item.name;
            div.querySelector('.remove-item').onclick = () => {
                cart.splice(index, 1);
                saveCart();
            };
            itemsContainer.appendChild(div);
        });
    }
}

function initCartUI() {
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const clearCart = document.getElementById('clearCart');

    if (cartBtn && cartSidebar) {
        cartBtn.onclick = () => cartSidebar.classList.remove('translate-x-full');
        closeCart.onclick = () => cartSidebar.classList.add('translate-x-full');
    }

    if (clearCart) {
        clearCart.onclick = () => {
            cart = [];
            saveCart();
        };
    }

    loadCart();
}

// Discovery Page Logic
async function initDiscovery() {
    const nftGrid = document.getElementById('nftGrid');
    const emptyState = document.getElementById('emptyState');
    if (!nftGrid) return;

    const { network: net } = await connectWallet(true) || {};
    if (!net) return;

    const bragNFTAddr = getDeploymentAddress('BragNFT');
    if (!bragNFTAddr) {
        console.warn("BragNFT address not found.");
        nftGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    const bragNFT = getContract('BragNFT', bragNFTAddr);
    console.log("Fetching events for BragNFT at:", bragNFTAddr);

    try {
        let events = [];
        try {
            const filter = bragNFT.filters.Donated();
            // Try last 10000 blocks first
            events = await bragNFT.queryFilter(filter, -10000);
        } catch (e) {
            console.warn("Could not fetch events from last 10000 blocks, trying from block 0", e);
            try {
                const filter = bragNFT.filters.Donated();
                events = await bragNFT.queryFilter(filter, 0);
            } catch (e2) {
                console.error("Failed to fetch events even from block 0", e2);
            }
        }

        console.log(`Found ${events.length} Donated events.`);

        if (events.length === 0) {
            nftGrid.innerHTML = '';
            // Add a demo card
            const demoCard = document.createElement('div');
            demoCard.className = 'brag-card rounded-xl overflow-hidden cursor-pointer';
            demoCard.onclick = () => window.location.href = 'product.html?id=demo';
            demoCard.innerHTML = `
                <div class="h-64 bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover">
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-lg truncate">Eco-Warrior #1337</h3>
                        <span class="text-[10px] bg-purple-900/50 px-2 py-0.5 rounded text-purple-300">DEMO</span>
                    </div>
                    <p class="text-slate-500 text-xs mb-4 truncate">Protecting our forests for future generations.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-purple-400 font-bold text-sm">View Demo</span>
                        <i class="fas fa-arrow-right text-slate-600"></i>
                    </div>
                </div>
            `;
            nftGrid.appendChild(demoCard);

            // Still show empty state text below if truly empty
            // emptyState.classList.remove('hidden');
            return;
        }

        nftGrid.innerHTML = '';
        const sortedEvents = events.reverse();

        for (const event of sortedEvents) {
            const tokenId = event.args.nftTokenId.toString();
            renderNFTCard(bragNFT, tokenId).catch(err => {
                console.error(`Failed to render NFT card for token ${tokenId}:`, err);
            });
        }
    } catch (e) {
        console.error('Error in Discovery Gallery:', e);
        nftGrid.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            renderNFTCard(bragNFT, i.toString());
        }
    }
}

async function renderNFTCard(contract, tokenId) {
    const nftGrid = document.getElementById('nftGrid');
    try {
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = parseMetadata(tokenURI);
        if (!metadata) return;

        const card = document.createElement('div');
        card.className = 'brag-card rounded-xl overflow-hidden cursor-pointer';
        card.onclick = () => window.location.href = `product.html?id=${tokenId}&addr=${contract.address}`;

        const isAudio = metadata.animation_url && metadata.animation_url.includes('audio');

        const mediaContainer = document.createElement('div');
        mediaContainer.className = 'h-64 bg-slate-800 flex items-center justify-center overflow-hidden';

        if (isAudio) {
            mediaContainer.innerHTML = `<div class="text-center"><i class="fas fa-music text-5xl text-purple-500 mb-2 block"></i><span class="text-xs text-slate-500">Audio NFT</span></div>`;
        } else {
            const img = document.createElement('img');
            img.className = 'w-full h-full object-cover';
            img.src = metadata.image;
            mediaContainer.appendChild(img);
        }
        card.appendChild(mediaContainer);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'p-4';
        infoDiv.innerHTML = `
            <div class="flex justify-between items-start mb-1">
                <h3 class="font-bold text-lg truncate card-title"></h3>
                <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">#${tokenId}</span>
            </div>
            <p class="text-slate-500 text-xs mb-4 truncate card-desc"></p>
            <div class="flex justify-between items-center">
                <span class="text-purple-400 font-bold text-sm">View Details</span>
                <i class="fas fa-arrow-right text-slate-600"></i>
            </div>
        `;
        card.appendChild(infoDiv);

        infoDiv.querySelector('.card-title').textContent = metadata.name;
        infoDiv.querySelector('.card-desc').textContent = metadata.description || 'No description';

        nftGrid.appendChild(card);
    } catch (e) {
        console.error(`Error rendering NFT card for token ${tokenId}:`, e);
    }
}

// Product Page Logic
async function initProduct() {
    const content = document.getElementById('productContent');
    if (!content) return;

    const urlParams = new URLSearchParams(window.location.search);
    const tokenId = urlParams.get('id');
    const contractAddr = urlParams.get('addr');

    if (tokenId === 'demo' || (!tokenId && !contractAddr)) {
        renderDemoData();
        return;
    }

    if (!tokenId || !contractAddr) {
        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productError').classList.remove('hidden');
        return;
    }

    const { network: net, address: userAddress } = await connectWallet(true) || {};
    if (!net) return;

    try {
        const bragNFT = getContract('BragNFT', contractAddr);
        const marketplaceAddr = getDeploymentAddress('NFTMarketplace');
        const marketplace = getContract('NFTMarketplace', marketplaceAddr);
        const registryAddr = getDeploymentAddress('ExhibitRegistry');
        const registry = getContract('ExhibitRegistry', registryAddr);

        let tokenURI, owner, receiptId;
        let isERC1155 = false;

        try {
            isERC1155 = await bragNFT.supportsInterface('0xd9b67a26');
        } catch (e) {
            console.warn("Interface detection failed, assuming ERC721");
        }

        if (isERC1155) {
            const erc1155 = new ethers.Contract(contractAddr, [
                "function uri(uint256) view returns (string)",
                "function balanceOf(address, uint256) view returns (uint256)"
            ], signer || provider);
            [tokenURI, owner] = await Promise.all([
                erc1155.uri(tokenId),
                userAddress ? erc1155.balanceOf(userAddress, tokenId) : Promise.resolve(0)
            ]);
            // For 1155 display owner as "You" if balance > 0, otherwise generic
            owner = (parseInt(owner) > 0) ? userAddress : "Multiple Owners";
            receiptId = 0;
        } else {
            [tokenURI, owner, receiptId] = await Promise.all([
                bragNFT.tokenURI(tokenId).catch(() => ""),
                bragNFT.ownerOf(tokenId).catch(() => ethers.constants.AddressZero),
                bragNFT.nftToReceipt(tokenId).catch(() => 0)
            ]);
        }

        const metadata = parseMetadata(tokenURI);
        if (!metadata) throw new Error('Invalid metadata');

        // Update UI with textContent for safety
        document.getElementById('nftName').textContent = metadata.name;
        document.getElementById('breadcrumbName').textContent = metadata.name;
        document.getElementById('nftDescription').textContent = metadata.description || 'No description provided.';
        document.getElementById('dispOwner').textContent = owner === userAddress ? 'You' : owner;
        document.getElementById('dispContract').textContent = contractAddr;
        document.getElementById('dispTokenId').textContent = tokenId;
        document.getElementById('dispNetwork').textContent = NETWORK_NAMES[network.chainId] || network.name;

        const messageAttr = metadata.attributes ? metadata.attributes.find(a => a.trait_type === 'Message') : null;
        document.getElementById('dispMessage').textContent = messageAttr ? `"${messageAttr.value}"` : 'No message.';

        // Populate Receipt Link
        const receiptContractAddr = await bragNFT.receiptContract();
        const dispReceipt = document.getElementById('dispReceipt');
        if (dispReceipt && receiptContractAddr !== ethers.constants.AddressZero) {
            dispReceipt.textContent = receiptId.toString();
            // Optional: link to block explorer or manager
            // dispReceipt.href = `index.html?receipt=${receiptId}`;
        }

        // Media display
        const isAudio = metadata.animation_url && metadata.animation_url.includes('audio');
        if (isAudio) {
            document.getElementById('nftImage').classList.add('hidden');
            document.getElementById('audioPlayer').classList.remove('hidden');
            document.getElementById('nftAudio').src = metadata.animation_url;
        } else {
            document.getElementById('nftImage').src = metadata.image;
        }

        // Marketplace Info & Price History
        if (marketplace) {
            try {
                const filter = marketplace.filters.OfferCreated(contractAddr, tokenId);
                const events = await marketplace.queryFilter(filter, -10000);

                let highestOffer = null;
                for (const event of events) {
                    const buyerAddr = event.args.buyer;
                    const offer = await marketplace.offers(contractAddr, tokenId, buyerAddr);
                    if (offer.buyer !== ethers.constants.AddressZero) {
                        if (!highestOffer || offer.price.gt(highestOffer.price)) {
                            highestOffer = offer;
                        }
                    }
                }

                if (highestOffer) {
                    document.getElementById('noOffer').classList.add('hidden');
                    document.getElementById('offerExists').classList.remove('hidden');
                    const priceFormatted = `${ethers.utils.formatEther(highestOffer.price)} BRAG`;
                    document.getElementById('highestOfferPrice').textContent = priceFormatted;
                    document.getElementById('highestOfferBuyer').textContent = `by ${highestOffer.buyer.substring(0, 6)}...${highestOffer.buyer.substring(38)}`;

                    // Show in history
                    const histItem = document.getElementById('offerHistoryItem');
                    if (histItem) {
                        histItem.classList.remove('hidden');
                        document.getElementById('histOfferPrice').textContent = priceFormatted;
                    }
                }
            } catch (e) {
                console.warn("Could not fetch offers:", e);
            }
        }

        // Vault Status
        if (registry) {
            try {
                const vaultInfo = await registry.vaults(owner);
                if (vaultInfo && vaultInfo.verified) {
                    const badge = document.getElementById('vaultBadge');
                    badge.classList.remove('hidden');
                    // name is from contract, but let's be safe
                    badge.innerHTML = `<i class="fas fa-shield-check mr-2"></i>Exhibited in <span id="vaultName"></span>`;
                    document.getElementById('vaultName').textContent = vaultInfo.name;
                }
            } catch (e) {}
        }

        document.getElementById('productLoading').classList.add('hidden');
        content.classList.remove('hidden');

        // Actions
        document.getElementById('btnMakeOffer').onclick = async () => {
            const priceStr = document.getElementById('offerAmount').value;
            if (!priceStr || parseFloat(priceStr) <= 0) {
                alert('Please enter a valid offer price.');
                return;
            }

            try {
                const bragTokenAddr = getDeploymentAddress('BragToken');
                const bragToken = getContract('BragToken', bragTokenAddr);
                const price = ethers.utils.parseEther(priceStr);

                // Check allowance
                const allowance = await bragToken.allowance(userAddress, marketplaceAddr);
                if (allowance.lt(price)) {
                    const approveTx = await bragToken.approve(marketplaceAddr, price);
                    alert('Approval transaction submitted! Please wait...');
                    await approveTx.wait();
                }

                // Defaulting amount to 1 for now as UI doesn't have an amount field for buying multiple
                const tx = await marketplace.createOffer(contractAddr, tokenId, 1, price);
                alert('Offer submitted! Awaiting confirmation...');
                await tx.wait();
                alert('Offer confirmed!');
                window.location.reload();
            } catch (e) {
                alert('Transaction failed: ' + (e.reason || e.message));
            }
        };

        const btnAddToCart = document.getElementById('btnAddToCart');
        if (btnAddToCart) {
            btnAddToCart.onclick = () => {
                const exists = cart.find(item => item.id === tokenId && item.address === contractAddr);
                if (exists) {
                    alert('Item already in cart!');
                    return;
                }
                cart.push({
                    id: tokenId,
                    address: contractAddr,
                    name: metadata.name,
                    image: metadata.image
                });
                saveCart();
                document.getElementById('cartSidebar').classList.remove('translate-x-full');
            };
        }

        // Related Items
        loadRelatedItems(bragNFT, tokenId);

    } catch (e) {
        console.error(e);
        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productError').classList.remove('hidden');
    }
}

async function loadRelatedItems(contract, currentId) {
    const grid = document.getElementById('relatedGrid');
    if (!grid) return;

    let count = 0;
    let id = parseInt(currentId) + 1;
    // Simple heuristic for discovery
    while (count < 4 && id < parseInt(currentId) + 10) {
        try {
            await renderNFTCardSmall(contract, id.toString(), grid);
            count++;
        } catch (e) {}
        id++;
    }
}

async function renderNFTCardSmall(contract, tokenId, container) {
    const tokenURI = await contract.tokenURI(tokenId);
    const metadata = parseMetadata(tokenURI);
    if (!metadata) return;

    const card = document.createElement('div');
    card.className = 'brag-card rounded-xl overflow-hidden cursor-pointer text-sm';
    card.onclick = () => window.location.href = `product.html?id=${tokenId}&addr=${contract.address}`;

    const mediaContainer = document.createElement('div');
    mediaContainer.className = 'h-40 bg-slate-800 flex items-center justify-center';
    const img = document.createElement('img');
    img.className = 'w-full h-full object-cover';
    img.src = metadata.image;
    mediaContainer.appendChild(img);
    card.appendChild(mediaContainer);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'p-3';
    infoDiv.innerHTML = `
        <h4 class="font-bold truncate card-title"></h4>
        <p class="text-purple-400 font-bold text-xs mt-1">View</p>
    `;
    card.appendChild(infoDiv);
    infoDiv.querySelector('.card-title').textContent = metadata.name;
    container.appendChild(card);
}

function renderDemoData() {
    const content = document.getElementById('productContent');
    const metadata = {
        name: "Eco-Warrior #1337 (Demo)",
        description: "This is a demonstration NFT. In a live environment, this would represent a verified donation to global reforestation efforts. Ownership is tracked on-chain, and this page provides a seamless interface for trading and verification.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
        attributes: [
            { trait_type: "Message", value: "Protecting our forests for future generations." }
        ]
    };

    document.getElementById('nftName').textContent = metadata.name;
    document.getElementById('breadcrumbName').textContent = metadata.name;
    document.getElementById('nftDescription').textContent = metadata.description;
    document.getElementById('dispOwner').textContent = '0xDemoOwner...1234';
    document.getElementById('dispContract').textContent = '0xDemoContract...5678';
    document.getElementById('dispTokenId').textContent = '1337';
    document.getElementById('dispNetwork').textContent = 'Hardhat (Local)';
    document.getElementById('dispMessage').textContent = `"${metadata.attributes[0].value}"`;
    document.getElementById('nftImage').src = metadata.image;
    document.getElementById('dispReceipt').textContent = '42';

    const badge = document.getElementById('vaultBadge');
    badge.classList.remove('hidden');
    badge.innerHTML = `<i class="fas fa-shield-check mr-2"></i>Exhibited in <span id="vaultName">Amazonia Sanctuary</span>`;

    document.getElementById('productLoading').classList.add('hidden');
    content.classList.remove('hidden');

    document.getElementById('btnMakeOffer').onclick = () => {
        alert("This is a demo! In production, this would trigger a MetaMask transaction.");
    };

    const btnAddToCart = document.getElementById('btnAddToCart');
    if (btnAddToCart) {
        btnAddToCart.onclick = () => {
            cart.push({
                id: '1337',
                address: '0xDemoContract',
                name: metadata.name,
                image: metadata.image
            });
            saveCart();
            document.getElementById('cartSidebar').classList.remove('translate-x-full');
        };
    }
}

// Initializers
window.addEventListener('DOMContentLoaded', () => {
    initCartUI();

    // Auto-reconnect if previously connected
    if (localStorage.getItem('wallet_connected') === 'true') {
        connectWallet(true);
    }

    const path = window.location.pathname;
    // index.html is the new discovery page. Also handle root path.
    if (path.includes('index.html') || path.endsWith('/') || path === '') {
        initDiscovery();
    } else if (path.includes('product.html')) {
        initProduct();
    }
});
