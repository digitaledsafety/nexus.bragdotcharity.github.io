let provider;
let signer;
let network;

const logElement = document.getElementById('logs');
const connectBtn = document.getElementById('connectBtn');
const networkStatus = document.getElementById('networkStatus');

function log(message, type = 'info') {
    const div = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString();
    div.className = type === 'error' ? 'text-red-400' : (type === 'success' ? 'text-green-400' : 'text-slate-300');
    div.innerText = `[${timestamp}] ${message}`;
    logElement.appendChild(div);
    logElement.scrollTop = logElement.scrollHeight;
}

// Persistent addresses
const addressFields = ['addrBragNFT', 'addrSummonRegistry', 'addrExhibition', 'addrMarketplace'];
addressFields.forEach(id => {
    const saved = localStorage.getItem(id);
    if (saved) document.getElementById(id).value = saved;
    document.getElementById(id).addEventListener('change', (e) => {
        localStorage.setItem(id, e.target.value);
    });
});

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        log('MetaMask not found!', 'error');
        return;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        network = await provider.getNetwork();

        connectBtn.innerText = `${address.substring(0, 6)}...${address.substring(38)}`;
        networkStatus.innerText = `Network: ${network.name} (${network.chainId})`;
        log(`Connected: ${address} on ${network.name}`, 'success');

        // Auto-fill from deployments if not already set
        const chainId = network.chainId.toString();
        if (CONTRACT_DATA.deployments && CONTRACT_DATA.deployments[chainId]) {
            const deps = CONTRACT_DATA.deployments[chainId];
            if (deps.BragNFT && !document.getElementById('addrBragNFT').value) document.getElementById('addrBragNFT').value = deps.BragNFT;
            if (deps.SummonRegistry && !document.getElementById('addrSummonRegistry').value) document.getElementById('addrSummonRegistry').value = deps.SummonRegistry;
            if (deps.Exhibition && !document.getElementById('addrExhibition').value) document.getElementById('addrExhibition').value = deps.Exhibition;
            if (deps.NFTMarketplace && !document.getElementById('addrMarketplace').value) document.getElementById('addrMarketplace').value = deps.NFTMarketplace;
        }

        window.ethereum.on('accountsChanged', () => window.location.reload());
        window.ethereum.on('chainChanged', () => window.location.reload());

    } catch (error) {
        log(`Connection failed: ${error.message}`, 'error');
    }
}

connectBtn.addEventListener('click', connectWallet);

// Contract Helpers
function getContract(name, address) {
    if (!address || !ethers.utils.isAddress(address)) {
        throw new Error(`Invalid address for ${name}`);
    }
    return new ethers.Contract(address, CONTRACT_DATA.contracts[name].abi, signer);
}

async function txHandler(promise, successMsg) {
    try {
        log('Transaction sent... awaiting confirmation.');
        const tx = await promise;
        log(`Tx Hash: ${tx.hash}`);
        const receipt = await tx.wait();
        log(`${successMsg} (Block: ${receipt.blockNumber})`, 'success');
        return receipt;
    } catch (error) {
        console.error(error);
        log(`Transaction failed: ${error.reason || error.message}`, 'error');
    }
}

// Actions
document.getElementById('btnMint').addEventListener('click', async () => {
    const addr = document.getElementById('addrBragNFT').value;
    const amount = document.getElementById('mintAmount').value;
    const message = document.getElementById('mintMessage').value;
    const recipient = document.getElementById('mintRecipient').value;

    const contract = getContract('BragNFT', addr);
    const val = ethers.utils.parseEther(amount);

    if (recipient && ethers.utils.isAddress(recipient)) {
        await txHandler(contract.donateTo(recipient, message, { value: val }), 'NFT Minted to recipient');
    } else {
        await txHandler(contract.donate(message, { value: val }), 'NFT Minted');
    }
});

document.getElementById('btnDeployVault').addEventListener('click', async () => {
    try {
        const factory = new ethers.ContractFactory(
            CONTRACT_DATA.contracts.SummonVault.abi,
            CONTRACT_DATA.contracts.SummonVault.bytecode,
            signer
        );
        const owner = await signer.getAddress();
        const registry = document.getElementById('addrSummonRegistry').value;

        log('Deploying SummonVault...');
        const contract = await factory.deploy(owner, registry);
        log(`Vault deployment tx: ${contract.deployTransaction.hash}`);
        await contract.deployed();
        log(`SummonVault deployed at: ${contract.address}`, 'success');
        document.getElementById('regVaultAddr').value = contract.address;
    } catch (error) {
        log(`Deployment failed: ${error.message}`, 'error');
    }
});

document.getElementById('btnRegisterVault').addEventListener('click', async () => {
    const addr = document.getElementById('addrSummonRegistry').value;
    const vault = document.getElementById('regVaultAddr').value;
    const type = document.getElementById('regVaultType').value;
    const name = document.getElementById('regVaultName').value;
    const desc = document.getElementById('regVaultDesc').value;

    const contract = getContract('SummonRegistry', addr);
    await txHandler(contract.verifyVault(vault, type, name, desc), 'Vault Registered');
});

// Summoning
document.getElementById('btnMove721').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('moveFromVault').value;
    const destVault = document.getElementById('moveToVault').value;
    const nft = document.getElementById('moveNFTContract').value;
    const id = document.getElementById('moveNFTId').value;

    const vault = getContract('SummonVault', vaultAddr);
    await txHandler(vault.move721(nft, id, destVault), 'ERC721 Moved');
});

document.getElementById('btnMove1155').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('moveFromVault').value;
    const destVault = document.getElementById('moveToVault').value;
    const nft = document.getElementById('moveNFTContract').value;
    const id = document.getElementById('moveNFTId').value;
    const amount = document.getElementById('moveAmount').value;

    const vault = getContract('SummonVault', vaultAddr);
    await txHandler(vault.move1155(nft, id, amount, destVault), 'ERC1155 Moved');
});

document.getElementById('btnWithdraw721').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('withdrawVault').value;
    const nft = document.getElementById('withdrawNFTContract').value;
    const id = document.getElementById('withdrawNFTId').value;

    const vault = getContract('SummonVault', vaultAddr);
    await txHandler(vault.withdraw721(nft, id), 'ERC721 Withdrawn');
});

document.getElementById('btnWithdraw1155').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('withdrawVault').value;
    const nft = document.getElementById('withdrawNFTContract').value;
    const id = document.getElementById('withdrawNFTId').value;
    const amount = document.getElementById('withdrawAmount').value;

    const vault = getContract('SummonVault', vaultAddr);
    await txHandler(vault.withdraw1155(nft, id, amount), 'ERC1155 Withdrawn');
});

// Exhibition
document.getElementById('btnExhibit721').addEventListener('click', async () => {
    const addr = document.getElementById('addrExhibition').value;
    const nft = document.getElementById('exhNFTContract').value;
    const id = document.getElementById('exhTokenId').value;
    const dur = document.getElementById('exhDuration').value;

    // First approve
    const nftContract = new ethers.Contract(nft, ["function approve(address to, uint256 tokenId) public"], signer);
    log('Approving NFT...');
    const appTx = await nftContract.approve(addr, id);
    await appTx.wait();

    const contract = getContract('Exhibition', addr);
    await txHandler(contract.exhibit721(nft, id, dur), 'ERC721 Exhibited');
});

document.getElementById('btnExhibit1155').addEventListener('click', async () => {
    const addr = document.getElementById('addrExhibition').value;
    const nft = document.getElementById('exhNFTContract').value;
    const id = document.getElementById('exhTokenId').value;
    const amount = document.getElementById('exhAmount').value;
    const dur = document.getElementById('exhDuration').value;

    // First approve
    const nftContract = new ethers.Contract(nft, ["function setApprovalForAll(address operator, bool approved) public"], signer);
    log('Approving NFT...');
    const appTx = await nftContract.setApprovalForAll(addr, true);
    await appTx.wait();

    const contract = getContract('Exhibition', addr);
    await txHandler(contract.exhibit1155(nft, id, amount, dur), 'ERC1155 Exhibited');
});

document.getElementById('btnReclaim').addEventListener('click', async () => {
    const addr = document.getElementById('addrExhibition').value;
    const id = document.getElementById('reclaimId').value;
    const contract = getContract('Exhibition', addr);
    await txHandler(contract.reclaim(id), 'NFT Reclaimed');
});

// Marketplace
document.getElementById('btnCreateOffer').addEventListener('click', async () => {
    const addr = document.getElementById('addrMarketplace').value;
    const nft = document.getElementById('offNFTContract').value;
    const id = document.getElementById('offTokenId').value;
    const price = document.getElementById('offPrice').value;

    const contract = getContract('NFTMarketplace', addr);
    await txHandler(contract.createOffer(nft, id, { value: ethers.utils.parseEther(price) }), 'Offer Created');
});

document.getElementById('btnAcceptOffer').addEventListener('click', async () => {
    const addr = document.getElementById('addrMarketplace').value;
    const nft = document.getElementById('accNFTContract').value;
    const id = document.getElementById('accTokenId').value;

    // Approve marketplace
    const nftContract = new ethers.Contract(nft, ["function approve(address to, uint256 tokenId) public"], signer);
    log('Approving NFT...');
    const appTx = await nftContract.approve(addr, id);
    await appTx.wait();

    const contract = getContract('NFTMarketplace', addr);
    await txHandler(contract.acceptOffer(nft, id), 'Offer Accepted');
});

document.getElementById('btnCancelOffer').addEventListener('click', async () => {
    const addr = document.getElementById('addrMarketplace').value;
    const nft = document.getElementById('accNFTContract').value;
    const id = document.getElementById('accTokenId').value;

    const contract = getContract('NFTMarketplace', addr);
    await txHandler(contract.cancelOffer(nft, id), 'Offer Canceled');
});
