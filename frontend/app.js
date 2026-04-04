/**
 * app.js - Admin Manager Logic
 * Uses core.js for shared Web3 functionality.
 */

const logElement = document.getElementById('logs');

function log(message, type = 'info') {
    if (!logElement) return;
    const div = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString();
    div.className = type === 'error' ? 'text-red-400' : (type === 'success' ? 'text-emerald-400' : 'text-slate-400');
    div.innerHTML = `<span class="text-slate-600 mr-2">[${timestamp}]</span> ${message}`;
    logElement.appendChild(div);
    logElement.scrollTop = logElement.scrollHeight;
}

// Persistent addresses logic for Admin
const addressFields = ['addrBragNFT', 'addrExhibitRegistry', 'addrNFTMarketplace'];

function setupManagerListeners() {
    const chainId = network?.chainId?.toString();
    addressFields.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        // Load saved value (prefer chain-scoped)
        let saved = chainId ? localStorage.getItem(`${id}_${chainId}`) : null;
        if (!saved && id === 'addrNFTMarketplace' && chainId) saved = localStorage.getItem(`addrMarketplace_${chainId}`);

        // Fallback to legacy non-scoped if no scoped value exists
        if (!saved) saved = localStorage.getItem(id);
        if (!saved && id === 'addrNFTMarketplace') saved = localStorage.getItem('addrMarketplace');

        if (saved) el.value = saved;

        // Save on any change (input or change event)
        const saver = (e) => {
            const currentChainId = network?.chainId?.toString();
            if (currentChainId) {
                localStorage.setItem(`${id}_${currentChainId}`, e.target.value);
                if (id === 'addrNFTMarketplace') localStorage.setItem(`addrMarketplace_${currentChainId}`, e.target.value);
            }

            // Legacy updates for backward compatibility
            localStorage.setItem(id, e.target.value);
            if (id === 'addrNFTMarketplace') localStorage.setItem('addrMarketplace', e.target.value);

            // Sync with any hidden explorer fields if they exist
            const contractName = id.replace('addr', '');
            const explorerInput = document.getElementById(`explorerAddr_${contractName}`);
            if (explorerInput) explorerInput.value = e.target.value;
        };

        el.addEventListener('change', saver);
        el.addEventListener('input', saver);
    });

    // File Upload Logic
    const btnUpload = document.getElementById('btnUpload');
    if (btnUpload) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,audio/*';
        btnUpload.onclick = () => fileInput.click();

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('mintTokenURI').value = event.target.result;
                document.getElementById('mintOnChain').checked = true;
                log(`File loaded as Data URI. On-chain storage selected.`, 'success');
                document.getElementById('aiPreview').classList.add('hidden');
            };
            reader.readAsDataURL(file);
        };
    }

    const btnAI = document.getElementById('btnGenerateAI');
    if (btnAI) {
        btnAI.onclick = async () => {
            try {
                btnAI.disabled = true;
                const originalHtml = btnAI.innerHTML;
                btnAI.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                log('Requesting AI NFT generation...');

                const response = await fetch('http://localhost:9000/generate-nft', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) throw new Error('AI Generation failed');
                const data = await response.json();

                document.getElementById('mintTokenURI').value = data.image;
                document.getElementById('mintOnChain').checked = true;

                const preview = document.getElementById('aiPreview');
                const previewImg = document.getElementById('aiPreviewImg');
                previewImg.src = data.image;
                preview.classList.remove('hidden');

                log(`AI Image generated!`, 'success');
            } catch (error) {
                log(`AI Generation error: ${error.message}`, 'error');
            } finally {
                btnAI.disabled = false;
                btnAI.innerHTML = '<i class="fas fa-robot"></i>';
            }
        };
    }

    const btnMint = document.getElementById('btnMint');
    if (btnMint) {
        btnMint.onclick = async () => {
            const addr = document.getElementById('addrBragNFT').value;
            const amount = document.getElementById('mintAmount').value;
            const message = document.getElementById('mintMessage').value;
            const tokenURI = document.getElementById('mintTokenURI').value;
            const onChain = document.getElementById('mintOnChain').checked;

            try {
                const contract = getAdminContract('BragNFT', addr);
                const val = ethers.utils.parseEther(amount);
                await txHandler(contract["donate(string,string,bool)"](message, tokenURI, onChain, { value: val }), 'NFT Minted');
            } catch (e) {
                log(e.message, 'error');
            }
        };
    }

    const btnDeployVault = document.getElementById('btnDeployVault');
    if (btnDeployVault) {
        btnDeployVault.onclick = async () => {
            try {
                const factory = new ethers.ContractFactory(
                    CONTRACT_DATA.contracts.ExhibitVault.abi,
                    CONTRACT_DATA.contracts.ExhibitVault.bytecode,
                    signer
                );
                const registry = document.getElementById('addrExhibitRegistry').value;

                log('Deploying ExhibitVault...');
                const contract = await factory.deploy(registry);
                await contract.deployed();
                log(`ExhibitVault deployed at: ${contract.address}`, 'success');
                document.getElementById('regVaultAddr').value = contract.address;
            } catch (error) {
                log(`Deployment failed: ${error.message}`, 'error');
            }
        };
    }

    const btnRegisterVault = document.getElementById('btnRegisterVault');
    if (btnRegisterVault) {
        btnRegisterVault.onclick = async () => {
            const addr = document.getElementById('addrExhibitRegistry').value;
            const vault = document.getElementById('regVaultAddr').value;
            const contract = getAdminContract('ExhibitRegistry', addr);
            await txHandler(contract.verifyVault(vault, 0, "Managed Vault", "Registry via Manager"), 'Vault Registered');
        };
    }

    const btnAutofill = document.getElementById('btnAutofill');
    if (btnAutofill) {
        btnAutofill.onclick = () => {
            if (!network) return log('Connect wallet first', 'error');
            const chainId = network.chainId.toString();
            const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
            if (deps) {
                Object.entries(deps).forEach(([name, addr]) => {
                    let fieldId = `addr${name}`;
                    // Special mapping for Marketplace alias
                    if (name === 'Marketplace' || name === 'NFTMarketplace') {
                        fieldId = 'addrNFTMarketplace';
                    }

                    const field = document.getElementById(fieldId);
                    if (field) {
                        field.value = addr;
                        localStorage.setItem(fieldId, addr);
                        if (fieldId === 'addrNFTMarketplace') {
                            localStorage.setItem('addrMarketplace', addr);
                        }
                    }
                });
                log('Addresses pre-filled from deployment data', 'success');
            }
        };
    }
}

/**
 * Get Admin contract instance (with signer for writing)
 */
function getAdminContract(name, addressOverride = null) {
    const address = addressOverride || getDeploymentAddress(name);
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


// Initializer for Manager specific UI
async function initManager() {
    await coreReady;
    setupManagerListeners();
    if (typeof initEnvControl === 'function') initEnvControl();

    // Auto-fill empty fields if we can find them in deployment data
    const chainId = network?.chainId?.toString();
    addressFields.forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.value) {
            const contractName = id.replace('addr', '');
            const addr = getDeploymentAddress(contractName);
            if (addr) {
                el.value = addr;
                if (chainId) {
                    localStorage.setItem(`${id}_${chainId}`, addr);
                    if (id === 'addrNFTMarketplace') localStorage.setItem(`addrMarketplace_${chainId}`, addr);
                }
                localStorage.setItem(id, addr);
                if (id === 'addrNFTMarketplace') localStorage.setItem('addrMarketplace', addr);
            }
        }
    });

    // Re-trigger wallet UI update specifically for manager elements
    if (userAddress) updateWalletUI();
}
