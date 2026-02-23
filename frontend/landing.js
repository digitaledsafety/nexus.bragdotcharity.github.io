let provider;
let signer;
let network;
let ethPrice = 0;
let selectedUsdAmount = 0;

const CAUSE_NAME = "Empowering STEM Education";
const MISSION_DESC = "Providing modern STEM/STEAM education to underserved communities.";

// Contract Addresses (Will be updated from CONTRACT_DATA if available)
let ADDR_BRAG_NFT = "";
let ADDR_TREASURY = "";
let ADDR_BRAG_TOKEN = "";

async function init() {
    setupUIListeners();
    await fetchEthPrice();
    await connectWallet(true); // Silent connect
    await refreshStats();
}

async function fetchEthPrice() {
    try {
        const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await resp.json();
        ethPrice = data.ethereum.usd;
        updateConversion();
    } catch (e) {
        console.error("Failed to fetch ETH price", e);
        ethPrice = 2500; // Fallback
    }
}

async function connectWallet(silent = false) {
    if (typeof window.ethereum === 'undefined') {
        if (!silent) alert("Please install MetaMask or another Web3 wallet.");
        return;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send(silent ? "eth_accounts" : "eth_requestAccounts", []);

        if (accounts.length > 0) {
            signer = provider.getSigner();
            const address = await signer.getAddress();
            network = await provider.getNetwork();

            document.getElementById('btnConnect').innerText = `${address.substring(0, 6)}...${address.substring(38)}`;
            document.getElementById('networkBadge').innerText = getNetworkName(network.chainId);
            document.getElementById('walletDisplay').classList.remove('hidden');

            // Auto-detect addresses
            const chainId = network.chainId.toString();
            const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
            if (deps) {
                ADDR_BRAG_NFT = deps.BragNFT;
                ADDR_TREASURY = deps.Treasury;
                ADDR_BRAG_TOKEN = deps.BragToken;
                updateContractLinks();
            }
        }
    } catch (e) {
        console.error("Connection failed", e);
    }
}

function getNetworkName(chainId) {
    const names = { 1: 'Mainnet', 11155111: 'Sepolia', 31337: 'Hardhat Local' };
    return names[chainId] || 'Unknown Network';
}

function updateContractLinks() {
    const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/address/" : "https://etherscan.io/address/";
    const link = document.getElementById('contractLink');
    link.innerText = ADDR_BRAG_NFT;
    link.href = explorerUrl + ADDR_BRAG_NFT;
}

async function refreshStats() {
    if (!ADDR_TREASURY || !ADDR_BRAG_NFT) return;

    try {
        const publicProvider = provider || new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // Fallback to local for dev

        // Total Raised (Balance of Treasury)
        const balance = await publicProvider.getBalance(ADDR_TREASURY);
        const ethVal = parseFloat(ethers.utils.formatEther(balance));
        const usdVal = ethVal * ethPrice;

        document.getElementById('totalRaisedETH').innerText = ethVal.toFixed(4);
        document.getElementById('totalRaisedUSD').innerText = `$${usdVal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

        // Supply Remaining
        const bragNFT = new ethers.Contract(ADDR_BRAG_NFT, CONTRACT_DATA.contracts.BragNFT.abi, publicProvider);
        const total = await bragNFT.maxSupply();
        const current = await bragNFT.totalSupply();

        document.getElementById('nftsTotal').innerText = total.toString();
        document.getElementById('nftsRemaining').innerText = (total.sub(current)).toString();
    } catch (e) {
        console.error("Failed to refresh stats", e);
    }
}

function setupUIListeners() {
    document.getElementById('btnConnect').addEventListener('click', () => connectWallet());
    document.getElementById('btnConnectMobile').addEventListener('click', () => connectWallet());

    const tierBtns = document.querySelectorAll('.tier-btn');
    tierBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
            btn.classList.add('active', 'border-indigo-500', 'bg-indigo-500/10');
            selectedUsdAmount = parseFloat(btn.dataset.usd);
            document.getElementById('customAmount').value = '';
            updateConversion();
        });
    });

    document.getElementById('customAmount').addEventListener('input', (e) => {
        tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
        selectedUsdAmount = parseFloat(e.target.value) || 0;
        updateConversion();
    });

    document.getElementById('btnDonateETH').addEventListener('click', donateETH);
    document.getElementById('btnDonateFiat').addEventListener('click', () => {
        document.getElementById('modalFiat').classList.remove('hidden');
    });
}

function updateConversion() {
    const ethDisplay = document.getElementById('ethConversion');
    if (selectedUsdAmount > 0 && ethPrice > 0) {
        const eth = selectedUsdAmount / ethPrice;
        document.getElementById('ethAmount').innerText = eth.toFixed(5);
        ethDisplay.classList.remove('hidden');
    } else {
        ethDisplay.classList.add('hidden');
    }
}

async function donateETH() {
    if (!signer) {
        await connectWallet();
        if (!signer) return;
    }

    if (selectedUsdAmount <= 0) {
        alert("Please select or enter a donation amount.");
        return;
    }

    const ethValue = ethers.utils.parseEther((selectedUsdAmount / ethPrice).toFixed(18));
    const bragNFT = new ethers.Contract(ADDR_BRAG_NFT, CONTRACT_DATA.contracts.BragNFT.abi, signer);

    try {
        showModal("Minting in Progress", "Please confirm the transaction in your wallet and wait for blockchain confirmation.");

        const tx = await bragNFT["donate(string,string)"]("Landing Page Donation", "", { value: ethValue });

        document.getElementById('statusDesc').innerText = "Transaction sent! Waiting for block confirmation...";
        const receipt = await tx.wait();

        // Success
        handleSuccess(receipt);
    } catch (e) {
        console.error(e);
        showModal("Donation Failed", e.reason || e.message || "Transaction was cancelled or failed.");
        document.getElementById('statusIcon').innerHTML = '<i class="fas fa-times"></i>';
        document.getElementById('statusIcon').classList.replace('brag-gradient', 'bg-red-500');
    }
}

function showModal(title, desc) {
    document.getElementById('modalStatus').classList.remove('hidden');
    document.getElementById('statusTitle').innerText = title;
    document.getElementById('statusDesc').innerText = desc;
    document.getElementById('statusIcon').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    document.getElementById('statusIcon').classList.add('brag-gradient');
    document.getElementById('statusIcon').classList.remove('bg-red-500', 'bg-green-500');
    document.getElementById('statusActions').classList.add('hidden');
}

let lastReceipt = null;

function handleSuccess(receipt) {
    lastReceipt = receipt;
    document.getElementById('statusTitle').innerText = "Donation Successful!";
    document.getElementById('statusDesc').innerText = "Thank you for your generous contribution! Your NFT has been minted.";
    document.getElementById('statusIcon').innerHTML = '<i class="fas fa-check"></i>';
    document.getElementById('statusIcon').classList.replace('brag-gradient', 'bg-green-500');

    document.getElementById('statusActions').classList.remove('hidden');

    const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/tx/" : "https://etherscan.io/tx/";
    document.getElementById('txExplorerLink').href = explorerUrl + receipt.transactionHash;

    document.getElementById('btnDownloadReceipt').onclick = generatePDF;

    refreshStats();
}

function closeModal() {
    document.getElementById('modalStatus').classList.add('hidden');
}

function closeFiatModal() {
    document.getElementById('modalFiat').classList.add('hidden');
}

async function generatePDF() {
    if (!lastReceipt) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const donorAddr = await signer.getAddress();
    const date = new Date().toLocaleString();

    // Stylize PDF
    doc.setFontSize(22);
    doc.setTextColor(99, 102, 241); // Indigo
    doc.text("Official Donation Receipt", 105, 40, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139); // Slate 500
    doc.text(`Campaign: ${CAUSE_NAME}`, 20, 60);
    doc.text(`Organization: Digital Education & Safety Foundation Inc.`, 20, 70);
    doc.text(`Date: ${date}`, 20, 80);

    doc.setDrawColor(226, 232, 240);
    doc.line(20, 90, 190, 90);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text("Donation Details", 20, 105);

    doc.setFont("helvetica", "normal");
    doc.text(`Donor Wallet: ${donorAddr}`, 20, 115);
    doc.text(`Amount: ${selectedUsdAmount} USD equivalent`, 20, 125);
    doc.text(`Transaction Hash:`, 20, 135);
    doc.setFontSize(8);
    doc.setFont("courier");
    doc.text(lastReceipt.transactionHash, 20, 142);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("NFT Received:", 20, 155);
    doc.text(`Contract: ${ADDR_BRAG_NFT}`, 20, 165);

    doc.line(20, 180, 190, 180);

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("This receipt verifies your contribution to our mission of providing STEM education to underserved communities.", 20, 195, { maxWidth: 170 });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Thank you for your support!", 105, 220, { align: "center" });

    doc.save(`Donation_Receipt_${lastReceipt.transactionHash.substring(0, 10)}.pdf`);
}

window.addEventListener('DOMContentLoaded', init);
