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
const addressFields = ['addrBragNFT', 'addrExhibitRegistry', 'addrMarketplace'];
addressFields.forEach(id => {
    const saved = localStorage.getItem(id);
    if (saved) document.getElementById(id).value = saved;
    document.getElementById(id).addEventListener('change', (e) => {
        localStorage.setItem(id, e.target.value);
        // Sync with explorer if visible
        const contractName = id.replace('addr', '');
        const explorerInput = document.getElementById(`explorerAddr_${contractName}`);
        if (explorerInput) explorerInput.value = e.target.value;
    });
});

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            log('Wallet not found. Redirecting to MetaMask app...', 'info');
            // Construct deep link: metamask.app.link/dapp/[url_without_protocol]
            const dappUrl = window.location.href.replace(/^https?:\/\//, '');
            const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
            setTimeout(() => {
                window.location.href = metamaskAppDeepLink;
            }, 1200);
        } else {
            log('Web3 Wallet not found! Please install MetaMask or another wallet extension.', 'error');
        }
        return;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        network = await provider.getNetwork();
        const networkName = NETWORK_NAMES[network.chainId] || network.name;

        connectBtn.innerText = `${address.substring(0, 6)}...${address.substring(38)}`;
        networkStatus.innerText = `Network: ${networkName} (${network.chainId})`;
        log(`Connected: ${address} on ${networkName}`, 'success');

        // Auto-fill from deployments if not already set
        const chainId = network.chainId.toString();
        const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
        if (deps) {
            if (deps.BragNFT && !document.getElementById('addrBragNFT').value) document.getElementById('addrBragNFT').value = deps.BragNFT;
            if (deps.ExhibitRegistry && !document.getElementById('addrExhibitRegistry').value) document.getElementById('addrExhibitRegistry').value = deps.ExhibitRegistry;
            const mpAddr = deps.NFTMarketplace || deps.Marketplace;
            if (mpAddr && !document.getElementById('addrMarketplace').value) document.getElementById('addrMarketplace').value = mpAddr;
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
// File Upload Logic
document.getElementById('btnUpload').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 24 * 1024) { // 24KB limit for standard on-chain storage to be safe
        log('Warning: File size is large. Storing on-chain may fail or be extremely expensive.', 'info');
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        document.getElementById('mintTokenURI').value = event.target.result;
        document.getElementById('mintOnChain').checked = true;
        log('File loaded as Data URI. "Store Media On-chain" selected.', 'success');
    };
    reader.readAsDataURL(file);
});

document.getElementById('btnMint').addEventListener('click', async () => {
    const addr = document.getElementById('addrBragNFT').value;
    const amount = document.getElementById('mintAmount').value;
    const message = document.getElementById('mintMessage').value;
    const recipient = document.getElementById('mintRecipient').value;
    const tokenURI = document.getElementById('mintTokenURI').value;
    const onChain = document.getElementById('mintOnChain').checked;

    const contract = getContract('BragNFT', addr);
    const val = ethers.utils.parseEther(amount);

    if (recipient && ethers.utils.isAddress(recipient)) {
        await txHandler(contract["donateTo(address,string,string,bool)"](recipient, message, tokenURI, onChain, { value: val }), 'NFT Minted to recipient');
    } else {
        await txHandler(contract["donate(string,string,bool)"](message, tokenURI, onChain, { value: val }), 'NFT Minted');
    }
});

document.getElementById('btnDeployVault').addEventListener('click', async () => {
    try {
        const factory = new ethers.ContractFactory(
            CONTRACT_DATA.contracts.ExhibitVault.abi,
            CONTRACT_DATA.contracts.ExhibitVault.bytecode,
            signer
        );
        const registry = document.getElementById('addrExhibitRegistry').value;

        log('Deploying ExhibitVault...');
        const contract = await factory.deploy(registry);
        log(`Vault deployment tx: ${contract.deployTransaction.hash}`);
        await contract.deployed();
        log(`ExhibitVault deployed at: ${contract.address}`, 'success');
        document.getElementById('regVaultAddr').value = contract.address;
    } catch (error) {
        log(`Deployment failed: ${error.message}`, 'error');
    }
});

document.getElementById('btnRegisterVault').addEventListener('click', async () => {
    const addr = document.getElementById('addrExhibitRegistry').value;
    const vault = document.getElementById('regVaultAddr').value;
    const type = document.getElementById('regVaultType').value;
    const name = document.getElementById('regVaultName').value;
    const desc = document.getElementById('regVaultDesc').value;

    const contract = getContract('ExhibitRegistry', addr);
    await txHandler(contract.verifyVault(vault, type, name, desc), 'Vault Registered');
});

// Exhibiting from Wallet
document.getElementById('btnExhibit721').addEventListener('click', async () => {
    const vault = document.getElementById('exhVault').value;
    const nftAddr = document.getElementById('exhNFT').value;
    const id = document.getElementById('exhId').value;
    const dur = document.getElementById('exhDuration').value;

    const nft = new ethers.Contract(nftAddr, ["function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) public"], signer);
    const data = dur > 0 ? ethers.utils.defaultAbiCoder.encode(['uint256'], [dur]) : "0x";
    const from = await signer.getAddress();

    await txHandler(nft["safeTransferFrom(address,address,uint256,bytes)"](from, vault, id, data), 'ERC721 Exhibited');
});

document.getElementById('btnExhibit1155').addEventListener('click', async () => {
    const vault = document.getElementById('exhVault').value;
    const nftAddr = document.getElementById('exhNFT').value;
    const id = document.getElementById('exhId').value;
    const amount = document.getElementById('exhAmount').value;
    const dur = document.getElementById('exhDuration').value;

    const nft = new ethers.Contract(nftAddr, ["function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) public"], signer);
    const data = dur > 0 ? ethers.utils.defaultAbiCoder.encode(['uint256'], [dur]) : "0x";
    const from = await signer.getAddress();

    await txHandler(nft.safeTransferFrom(from, vault, id, amount, data), 'ERC1155 Exhibited');
});

// Move
document.getElementById('btnMove721').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('moveFromVault').value;
    const destVault = document.getElementById('moveToVault').value;
    const nft = document.getElementById('moveNFTContract').value;
    const id = document.getElementById('moveNFTId').value;
    const dur = document.getElementById('moveDuration').value;

    const vault = getContract('ExhibitVault', vaultAddr);
    if (dur > 0) {
        await txHandler(vault.move721WithDuration(nft, id, destVault, dur), 'ERC721 Moved with duration');
    } else {
        await txHandler(vault.move721(nft, id, destVault), 'ERC721 Moved');
    }
});

document.getElementById('btnMove1155').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('moveFromVault').value;
    const destVault = document.getElementById('moveToVault').value;
    const nft = document.getElementById('moveNFTContract').value;
    const id = document.getElementById('moveNFTId').value;
    const amount = document.getElementById('moveAmount').value;
    const dur = document.getElementById('moveDuration').value;

    const vault = getContract('ExhibitVault', vaultAddr);
    if (dur > 0) {
        await txHandler(vault.move1155WithDuration(nft, id, amount, destVault, dur), 'ERC1155 Moved with duration');
    } else {
        await txHandler(vault.move1155(nft, id, amount, destVault), 'ERC1155 Moved');
    }
});

// Withdraw
document.getElementById('btnWithdraw721').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('withdrawVault').value;
    const nft = document.getElementById('withdrawNFTContract').value;
    const id = document.getElementById('withdrawNFTId').value;

    const vault = getContract('ExhibitVault', vaultAddr);
    await txHandler(vault.withdraw721(nft, id), 'ERC721 Withdrawn');
});

document.getElementById('btnWithdraw1155').addEventListener('click', async () => {
    const vaultAddr = document.getElementById('withdrawVault').value;
    const nft = document.getElementById('withdrawNFTContract').value;
    const id = document.getElementById('withdrawNFTId').value;
    const amount = document.getElementById('withdrawAmount').value;

    const vault = getContract('ExhibitVault', vaultAddr);
    await txHandler(vault.withdraw1155(nft, id, amount), 'ERC1155 Withdrawn');
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

document.getElementById('btnAutofill').addEventListener('click', () => {
    if (!network) {
        log('Please connect wallet first', 'error');
        return;
    }
    const chainId = network.chainId.toString();
    const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
    if (deps) {
        Object.entries(deps).forEach(([name, addr]) => {
            // Handle name mapping for Marketplace
            const fieldId = name === 'NFTMarketplace' ? 'addrMarketplace' : `addr${name}`;
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = addr;
                localStorage.setItem(fieldId, addr);
            }
            const explorerInput = document.getElementById(`explorerAddr_${name}`);
            if (explorerInput) explorerInput.value = addr;
        });
        log('Addresses pre-filled from deployment data', 'success');
    } else {
        log('No deployment data found for this network', 'error');
    }
});

// --- Dynamic Contract Explorer ---

function initContractExplorer() {
    const tabsContainer = document.getElementById('contractTabs');
    const functionsContainer = document.getElementById('contractFunctions');
    const contracts = Object.keys(CONTRACT_DATA.contracts);

    contracts.forEach((name, index) => {
        const button = document.createElement('button');
        button.className = `px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${index === 0 ? 'border-purple-500 text-purple-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`;
        button.innerText = name;
        button.onclick = () => {
            // Update tabs UI
            Array.from(tabsContainer.children).forEach(btn => {
                btn.className = 'px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-transparent text-slate-400 hover:text-slate-200';
            });
            button.className = 'px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-purple-500 text-purple-500';

            renderContractFunctions(name);
        };
        tabsContainer.appendChild(button);
    });

    if (contracts.length > 0) {
        renderContractFunctions(contracts[0]);
    }
}

function renderContractFunctions(name) {
    const container = document.getElementById('contractFunctions');
    container.innerHTML = '';

    const contractInfo = CONTRACT_DATA.contracts[name];
    const abi = contractInfo.abi;

    // Add address input for this specific contract instance
    const addrDiv = document.createElement('div');
    addrDiv.className = 'mb-6 p-4 bg-slate-800 rounded-lg border border-slate-700';
    addrDiv.innerHTML = `
        <label class="block text-xs font-bold uppercase text-slate-500 mb-1">Target Address for ${name}</label>
        <div class="flex space-x-2">
            <input type="text" id="explorerAddr_${name}" class="input-field flex-1" placeholder="0x...">
            <button class="btn-secondary text-xs" onclick="useLatestDeployment('${name}')">Use Latest</button>
        </div>
    `;
    container.appendChild(addrDiv);

    // Attempt to pre-fill from persistent settings or latest deployment
    const saved = document.getElementById(`addr${name}`)?.value || "";
    document.getElementById(`explorerAddr_${name}`).value = saved;

    window.useLatestDeployment = (contractName) => {
        if (!network) {
            log('Please connect wallet first to detect network', 'error');
            return;
        }
        const chainId = network.chainId.toString();
        const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
        const addr = deps ? deps[contractName] : null;
        if (addr) {
            document.getElementById(`explorerAddr_${contractName}`).value = addr;
        } else {
            log(`No deployment found for ${contractName} on this network`, 'error');
        }
    };

    // Group by Read / Write
    const reads = abi.filter(f => f.type === 'function' && (f.stateMutability === 'view' || f.stateMutability === 'pure'));
    const writes = abi.filter(f => f.type === 'function' && f.stateMutability !== 'view' && f.stateMutability !== 'pure');

    const renderGroup = (title, functions, isWrite) => {
        if (functions.length === 0) return;

        const groupHeader = document.createElement('h3');
        groupHeader.className = 'text-sm font-bold text-slate-400 uppercase mt-4 mb-2';
        groupHeader.innerText = title;
        container.appendChild(groupHeader);

        functions.forEach(f => {
            const funcDiv = document.createElement('div');
            funcDiv.className = 'bg-slate-800 p-4 rounded-lg border border-slate-700 space-y-3 mb-3';

            let inputsHtml = f.inputs.map((input, i) => `
                <div>
                    <label class="block text-xs text-slate-400 mb-1">${input.name || 'input_' + i} (${input.type})</label>
                    <input type="text" class="input-field text-sm" data-type="${input.type}" placeholder="${input.type}">
                </div>
            `).join('');

            if (f.stateMutability === 'payable') {
                inputsHtml += `
                    <div>
                        <label class="block text-xs text-purple-400 mb-1">Value (ETH)</label>
                        <input type="text" class="input-field text-sm eth-value" placeholder="0.0">
                    </div>
                `;
            }

            funcDiv.innerHTML = `
                <div class="flex justify-between items-center">
                    <span class="font-mono text-blue-400 font-bold">${f.name}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 uppercase">${f.stateMutability}</span>
                </div>
                <div class="space-y-2">
                    ${inputsHtml}
                </div>
                <div class="flex space-x-2 items-center">
                    <button class="${isWrite ? 'btn-primary' : 'btn-secondary'} text-xs py-1" onclick="callExplorerFunction('${name}', '${f.name}', this)">
                        ${isWrite ? 'Transact' : 'Query'}
                    </button>
                    <div class="result-area text-xs font-mono text-slate-500 truncate flex-1"></div>
                </div>
            `;
            container.appendChild(funcDiv);
        });
    };

    renderGroup('Read Functions', reads, false);
    renderGroup('Write Functions', writes, true);
}

async function callExplorerFunction(contractName, funcName, btnElement) {
    if (!signer) {
        log('Please connect wallet first', 'error');
        return;
    }

    const container = btnElement.closest('.bg-slate-800');
    const address = document.getElementById(`explorerAddr_${contractName}`).value;
    const resultArea = container.querySelector('.result-area');

    try {
        const contract = new ethers.Contract(address, CONTRACT_DATA.contracts[contractName].abi, signer);
        const inputs = Array.from(container.querySelectorAll('input:not(.eth-value)')).map(input => {
            let val = input.value;
            const type = input.dataset.type;
            if (type.includes('[]')) return JSON.parse(val); // Simple array support
            if (type.includes('uint')) return ethers.BigNumber.from(val);
            if (type === 'bool') return val.toLowerCase() === 'true';
            return val;
        });

        const overrides = {};
        const ethInput = container.querySelector('.eth-value');
        if (ethInput && ethInput.value) {
            overrides.value = ethers.utils.parseEther(ethInput.value);
        }

        const funcInfo = CONTRACT_DATA.contracts[contractName].abi.find(f => f.name === funcName);
        const isWrite = funcInfo.stateMutability !== 'view' && funcInfo.stateMutability !== 'pure';

        resultArea.innerText = 'Calling...';

        if (isWrite) {
            await txHandler(contract[funcName](...inputs, overrides), `${funcName} executed`);
            resultArea.innerText = 'Success (Check Activity Log)';
        } else {
            const result = await contract[funcName](...inputs);
            resultArea.innerText = `Result: ${result.toString()}`;
            log(`${contractName}.${funcName} result: ${result.toString()}`);
        }
    } catch (error) {
        console.error(error);
        resultArea.innerText = 'Error (Check Log)';
        log(`Explorer Error: ${error.message}`, 'error');
    }
}

// Global exposure for onclick handlers
window.callExplorerFunction = callExplorerFunction;

// --- Wallet Verification (SIWE) Logic ---

let currentSignature = "";
let currentNonce = "";

function generateNonce() {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
}

function updateSIWEMessage() {
    currentNonce = generateNonce();
    const linkToken = document.getElementById('linkToken').value;
    const messageBox = document.getElementById('siweMessage');

    // Use the link token as part of the message if available to prevent replay attacks
    const nonceText = linkToken ? `${currentNonce}-${linkToken}` : currentNonce;

    messageBox.value = `Welcome to brag.charity!

Click to sign in and accept the Terms of Service.

Domain: brag.charity
Statement: Securely verify wallet ownership.
Nonce: ${nonceText}`;
}

document.getElementById('btnSignSIWE').addEventListener('click', async () => {
    if (!signer) {
        log('Please connect wallet first', 'error');
        return;
    }

    try {
        updateSIWEMessage();
        const message = document.getElementById('siweMessage').value;
        log('Requesting signature...');

        currentSignature = await signer.signMessage(message);

        const resultDiv = document.getElementById('siweResult');
        resultDiv.classList.remove('hidden', 'bg-red-900/20', 'border-red-500', 'text-red-400', 'bg-green-900/20', 'border-green-500', 'text-green-400');
        resultDiv.classList.add('block', 'bg-blue-900/20', 'border-blue-500', 'text-blue-300');
        resultDiv.innerText = `Signature generated: ${currentSignature.substring(0, 20)}...`;

        log('Signature generated successfully', 'success');
    } catch (error) {
        log(`Signing failed: ${error.message}`, 'error');
    }
});

document.getElementById('btnVerifySIWE').addEventListener('click', async () => {
    if (!currentSignature) {
        log('No signature found. Please sign the message first.', 'error');
        return;
    }

    try {
        const message = document.getElementById('siweMessage').value;
        const address = await signer.getAddress();
        const linkToken = document.getElementById('linkToken').value;

        // Recover the address from the signature
        const recoveredAddress = ethers.utils.verifyMessage(message, currentSignature);

        const resultDiv = document.getElementById('siweResult');
        resultDiv.classList.remove('hidden', 'bg-blue-900/20', 'border-blue-500', 'text-blue-300');

        if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
            let extraMsg = "Match confirmed for your wallet.";

            // If a link token is provided, send to bridge
            if (linkToken) {
                log(`Sending link verification for token ${linkToken}...`);
                try {
                    const resp = await fetch('http://localhost:9000/verify-link', {
                        method: 'POST',
                        body: JSON.stringify({
                            token: linkToken,
                            signature: currentSignature,
                            message: message,
                            address: recoveredAddress
                        })
                    });
                    const data = await resp.json();
                    if (data.success) {
                        extraMsg += `<br><strong>Linked to Minecraft!</strong> (XUID: ${data.platformId})`;
                        log(`Successfully linked to Minecraft (XUID: ${data.platformId})`, 'success');
                    } else {
                        extraMsg += `<br><strong>Bridge Error:</strong> ${data.error}`;
                        log(`Bridge linking failed: ${data.error}`, 'error');
                    }
                } catch (e) {
                    log(`Bridge unavailable (is 'npm run bridge' running?)`, 'error');
                }
            }

            resultDiv.classList.add('bg-green-900/20', 'border-green-500', 'text-green-400');
            resultDiv.innerHTML = `<strong>Verification Successful!</strong><br>Recovered: ${recoveredAddress}<br>${extraMsg}`;
            log('Wallet verification successful!', 'success');
        } else {
            resultDiv.classList.add('bg-red-900/20', 'border-red-500', 'text-red-400');
            resultDiv.innerHTML = `<strong>Verification Failed!</strong><br>Recovered: ${recoveredAddress}<br>Does not match your wallet: ${address}`;
            log('Wallet verification failed!', 'error');
        }
    } catch (error) {
        log(`Verification error: ${error.message}`, 'error');
    }
});

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    initContractExplorer();
    updateSIWEMessage();

    // Check for registration token in URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
        const tokenInput = document.getElementById('linkToken');
        if (tokenInput) {
            tokenInput.value = token;
            log(`Pre-filled registration token from URL: ${token}`, 'info');
            updateSIWEMessage(); // Refresh message with token
        }
    }

    document.getElementById('linkToken').addEventListener('input', updateSIWEMessage);
});
