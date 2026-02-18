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
        if (!silent) await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        network = await provider.getNetwork();
        const networkName = NETWORK_NAMES[network.chainId] || network.name;

        const connectBtn = document.getElementById('connectBtn');
        if (connectBtn) {
            connectBtn.innerText = `${address.substring(0, 6)}...${address.substring(38)}`;
        }

        window.ethereum.on('accountsChanged', () => window.location.reload());
        window.ethereum.on('chainChanged', () => window.location.reload());

        return { provider, signer, address, network };
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

// Discovery Page Logic
async function initDiscovery() {
    const nftGrid = document.getElementById('nftGrid');
    const emptyState = document.getElementById('emptyState');
    if (!nftGrid) return;

    const { network: net } = await connectWallet(true) || {};
    if (!net) return;

    const bragNFTAddr = getDeploymentAddress('BragNFT');
    if (!bragNFTAddr) {
        nftGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    const bragNFT = getContract('BragNFT', bragNFTAddr);

    try {
        const filter = bragNFT.filters.Donated();
        const events = await bragNFT.queryFilter(filter, -10000);

        if (events.length === 0) {
            nftGrid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }

        nftGrid.innerHTML = '';
        const sortedEvents = events.reverse();

        for (const event of sortedEvents) {
            const tokenId = event.args.nftTokenId.toString();
            renderNFTCard(bragNFT, tokenId);
        }
    } catch (e) {
        console.error('Error fetching events:', e);
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

        const mediaHtml = isAudio ?
            `<div class="text-center"><i class="fas fa-music text-5xl text-purple-500 mb-2 block"></i><span class="text-xs text-slate-500">Audio NFT</span></div>` :
            `<img src="${metadata.image}" class="w-full h-full object-cover">`;

        card.innerHTML = `
            <div class="h-64 bg-slate-800 flex items-center justify-center overflow-hidden">
                ${mediaHtml}
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-lg truncate card-title"></h3>
                    <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">#${tokenId}</span>
                </div>
                <p class="text-slate-500 text-xs mb-4 truncate card-desc"></p>
                <div class="flex justify-between items-center">
                    <span class="text-purple-400 font-bold text-sm">View Details</span>
                    <i class="fas fa-arrow-right text-slate-600"></i>
                </div>
            </div>
        `;
        card.querySelector('.card-title').textContent = metadata.name;
        card.querySelector('.card-desc').textContent = metadata.description || 'No description';

        nftGrid.appendChild(card);
    } catch (e) {}
}

// Product Page Logic
async function initProduct() {
    const content = document.getElementById('productContent');
    if (!content) return;

    const urlParams = new URLSearchParams(window.location.search);
    const tokenId = urlParams.get('id');
    const contractAddr = urlParams.get('addr');

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

        const [tokenURI, owner, receiptId] = await Promise.all([
            bragNFT.tokenURI(tokenId),
            bragNFT.ownerOf(tokenId),
            bragNFT.nftToReceipt(tokenId)
        ]);

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

        // Marketplace Info
        if (marketplace) {
            const offer = await marketplace.offers(contractAddr, tokenId);
            if (offer.buyer !== ethers.constants.AddressZero) {
                document.getElementById('noOffer').classList.add('hidden');
                document.getElementById('offerExists').classList.remove('hidden');
                document.getElementById('highestOfferPrice').textContent = `${ethers.utils.formatEther(offer.price)} ETH`;
                document.getElementById('highestOfferBuyer').textContent = `by ${offer.buyer.substring(0, 6)}...${offer.buyer.substring(38)}`;
            }
        }

        // Vault Status
        if (registry) {
            try {
                const vaultInfo = await registry.vaults(owner);
                if (vaultInfo && vaultInfo.isVerified) {
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

        // Action: Make Offer
        document.getElementById('btnMakeOffer').onclick = async () => {
            const amount = document.getElementById('offerAmount').value;
            if (!amount || parseFloat(amount) <= 0) {
                alert('Please enter a valid offer amount.');
                return;
            }

            try {
                const tx = await marketplace.createOffer(contractAddr, tokenId, {
                    value: ethers.utils.parseEther(amount)
                });
                alert('Offer submitted! Awaiting confirmation...');
                await tx.wait();
                alert('Offer confirmed!');
                window.location.reload();
            } catch (e) {
                alert('Transaction failed: ' + (e.reason || e.message));
            }
        };

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

    card.innerHTML = `
        <div class="h-40 bg-slate-800 flex items-center justify-center">
            <img src="${metadata.image}" class="w-full h-full object-cover">
        </div>
        <div class="p-3">
            <h4 class="font-bold truncate card-title"></h4>
            <p class="text-purple-400 font-bold text-xs mt-1">View</p>
        </div>
    `;
    card.querySelector('.card-title').textContent = metadata.name;
    container.appendChild(card);
}

// Initializers
window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('discover.html')) {
        initDiscovery();
    } else if (path.includes('product.html')) {
        initProduct();
    }
});
