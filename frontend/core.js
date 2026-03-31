/**
 * core.js - Shared infrastructure for Brag Charity Frontend
 * Consolidates wallet connection, contract interaction, and shared UI logic.
 */

let provider;
let signer;
let network;
let userAddress;
let cart = [];

const NETWORK_NAMES = {
    1: 'Mainnet',
    11155111: 'Sepolia',
    17000: 'Holesky',
    31337: 'Hardhat Local',
    137: 'Polygon',
    8453: 'Base'
};

/**
 * Initialize core wallet logic
 */
async function initCore() {
    // 1. Try to connect wallet (silent)
    if (localStorage.getItem('wallet_connected') === 'true') {
        await connectWallet(true);
    }

    // 2. Fallback to read-only provider if still not connected
    if (!provider) {
        try {
            // Default to local hardhat if no wallet
            provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
            network = await provider.getNetwork();
            console.log("Using read-only fallback provider on chain", network.chainId);
        } catch (e) {
            console.warn("No fallback provider available.");
        }
    }

    // 3. Initialize Cart
    initCart();

    // 4. Handle auth for manager page
    if (window.location.pathname.includes('manager.html')) {
        await checkAuth();
    }

    initNavbarUI();
}

/**
 * Common metadata parser for Base64 JSON
 */
function parseMetadata(tokenURI) {
    try {
        if (!tokenURI) return null;
        if (tokenURI.startsWith('data:application/json;base64,')) {
            const base64 = tokenURI.split(',')[1];
            return JSON.parse(atob(base64));
        }
        // Handle raw JSON string if any
        if (tokenURI.startsWith('{')) return JSON.parse(tokenURI);
        return null;
    } catch (e) {
        console.warn("Metadata parse error", e);
        return null;
    }
}

/**
 * Connect to Web3 Wallet
 * @param {boolean} silent - If true, won't prompt for connection if not authorized
 */
async function connectWallet(silent = false) {
    if (typeof window.ethereum === 'undefined') {
        if (!silent) {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile) {
                const dappUrl = window.location.href.replace(/^https?:\/\//, '');
                window.location.href = "https://metamask.app.link/dapp/" + dappUrl;
            } else {
                alert("Web3 Wallet not found! Please install MetaMask.");
            }
        }
        return null;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send(silent ? "eth_accounts" : "eth_requestAccounts", []);

        if (accounts.length > 0) {
            signer = provider.getSigner();
            userAddress = await signer.getAddress();
            network = await provider.getNetwork();

            localStorage.setItem('wallet_connected', 'true');
            localStorage.setItem('brag_address', userAddress);

            updateWalletUI();

            // Event Listeners
            window.ethereum.on('accountsChanged', (newAccounts) => {
                if (newAccounts.length === 0) {
                    localStorage.removeItem('wallet_connected');
                    localStorage.removeItem('brag_address');
                }
                window.location.reload();
            });
            window.ethereum.on('chainChanged', () => window.location.reload());

            return { provider, signer, address: userAddress, network };
        }
    } catch (e) {
        console.error("Connection failed", e);
    }
    return null;
}

/**
 * Update wallet-related UI elements across pages
 */
function updateWalletUI() {
    const connectBtns = document.querySelectorAll('.btn-connect, #btnConnect, #connectBtn, #btnConnectMobile');
    const networkBadges = document.querySelectorAll('.network-badge, #networkBadge, #networkStatus');
    const addressDisplays = document.querySelectorAll('.user-address');

    if (userAddress) {
        const shortAddr = `${userAddress.substring(0, 6)}...${userAddress.substring(38)}`;
        connectBtns.forEach(btn => {
            btn.innerText = shortAddr;
            btn.classList.add('connected');
        });

        const netName = NETWORK_NAMES[network?.chainId] || 'Unknown Network';
        networkBadges.forEach(badge => {
            badge.innerText = netName;
            badge.classList.remove('hidden');
        });

        addressDisplays.forEach(disp => {
            disp.innerText = shortAddr;
            disp.classList.remove('hidden');
        });
    }
}

/**
 * Get contract instance
 */
function getContract(name, addressOverride = null) {
    const address = addressOverride || getDeploymentAddress(name);
    if (!address || !ethers.utils.isAddress(address)) {
        console.warn(`No valid address for contract ${name} on network ${network?.chainId}`);
        return null;
    }
    const abi = CONTRACT_DATA.contracts[name].abi;
    // Use signer if available (for writes), otherwise fallback to provider (read-only)
    return new ethers.Contract(address, abi, signer || provider);
}

/**
 * Get deployment address for current network
 */
function getDeploymentAddress(name) {
    // Priority 1: localStorage overrides (from Manager)
    const override = localStorage.getItem(`addr${name}`);
    if (override && ethers.utils.isAddress(override)) return override;

    // Priority 2: CONTRACT_DATA
    if (!network) return null;
    const chainId = network.chainId.toString();
    const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];

    // Support name mapping (Marketplace -> NFTMarketplace)
    if (deps) {
        return deps[name] || deps[name === 'NFTMarketplace' ? 'Marketplace' : name] || null;
    }
    return null;
}

/**
 * Shared navbar and mobile menu logic
 */
function initNavbarUI() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.onclick = () => {
            mobileMenu.classList.toggle('hidden');
        };
    }

    // Highight active link
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && path.includes(href)) {
            link.classList.add('active');
        } else if (path.endsWith('/') && href === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Cart Logic (DRY)
 */
function initCart() {
    const saved = localStorage.getItem('brag_cart');
    if (saved) cart = JSON.parse(saved);
    updateCartUI();

    const closeCart = document.getElementById('closeCart');
    if (closeCart) closeCart.onclick = () => document.getElementById('cartSidebar')?.classList.add('translate-x-full');

    const clearCart = document.getElementById('clearCart');
    if (clearCart) clearCart.onclick = () => { cart = []; saveCart(); };

    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) cartBtn.onclick = () => document.getElementById('cartSidebar')?.classList.remove('translate-x-full');
}

function addToCart(item) {
    if (cart.find(i => i.id === item.id && i.address === item.address)) {
        alert('Item already in cart!');
        return;
    }
    cart.push(item);
    saveCart();
    // Open sidebar on add
    document.getElementById('cartSidebar')?.classList.remove('translate-x-full');
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

    const container = document.getElementById('cartItems');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p class="text-slate-500 text-center py-12 text-sm italic">Your cart is empty</p>';
        return;
    }

    container.innerHTML = '';
    cart.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'flex items-center space-x-4 bg-white/5 p-3 rounded-2xl group';
        div.innerHTML = `
            <div class="h-12 w-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                <img src="${item.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="flex-grow min-w-0">
                <p class="text-xs font-bold truncate">${item.name || 'Brag NFT'}</p>
                <p class="text-[8px] text-slate-500 font-black uppercase tracking-tighter">ID: ${item.id}</p>
            </div>
            <button class="text-slate-600 hover:text-red-400 p-2 transition-colors remove-item">
                <i class="fas fa-trash-alt text-xs"></i>
            </button>
        `;
        div.querySelector('.remove-item').onclick = () => {
            cart.splice(idx, 1);
            saveCart();
        };
        container.appendChild(div);
    });
}

/**
 * Session verification helper
 */
async function checkAuth() {
    const sessionId = localStorage.getItem('brag_session');
    if (!sessionId) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const res = await fetch(`http://localhost:9000/auth/session?sessionId=${sessionId}`);
        if (!res.ok) {
            localStorage.removeItem('brag_session');
            window.location.href = 'login.html';
        }
    } catch (e) {
        console.warn("Auth server unavailable.");
    }
}

// Global initialization
window.addEventListener('DOMContentLoaded', initCore);
