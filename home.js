/**
 * home.js - Logic for the home view.
 * Uses core.js for wallet and contract interactions.
 */

let ethPrice = 0;
let selectedUsdAmount = 50; // Default

const CAUSE_NAME = "Empowering STEM Education";

async function initHome() {
    setupHomeListeners();
    await fetchEthPrice();
    await refreshHomeStats();
}

function cleanupHome() {
    // No specific long-running processes to cleanup here yet
}

async function fetchEthPrice() {
    try {
        const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await resp.json();
        ethPrice = data.ethereum.usd;
        updateHomeConversion();
    } catch (e) {
        console.error("Failed to fetch ETH price", e);
        ethPrice = 2500; // Fallback
    }
}

async function refreshHomeStats() {
    const bragNFT = getContract('BragNFT');
    if (!bragNFT) return;

    try {
        // Supply Remaining
        const total = await bragNFT.maxSupply();
        const current = await bragNFT.totalSupply();
        const remaining = total.sub(current);

        const totalEl = document.getElementById('nftsTotal');
        const remEl = document.getElementById('nftsRemaining');
        if (totalEl) totalEl.innerText = total.toString();
        if (remEl) remEl.innerText = remaining.toString();

        // Raised Stats
        const treasuryAddr = await bragNFT.treasury();
        if (treasuryAddr && ethers.utils.isAddress(treasuryAddr)) {
            const balance = await provider.getBalance(treasuryAddr);
            const ethVal = parseFloat(ethers.utils.formatEther(balance));
            const usdVal = ethVal * ethPrice;

            const ethRaisedEl = document.getElementById('totalRaisedETH');
            const usdRaisedEl = document.getElementById('totalRaisedUSD');
            if (ethRaisedEl) ethRaisedEl.innerText = ethVal.toFixed(4);
            if (usdRaisedEl) usdRaisedEl.innerText = `$${usdVal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }

        // Contract Link
        const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/address/" : "https://etherscan.io/address/";
        const link = document.getElementById('contractLink');
        if (link) {
            link.innerText = bragNFT.address;
            link.href = explorerUrl + bragNFT.address;
        }

    } catch (e) {
        console.warn("Failed to refresh home stats", e);
    }
}

function setupHomeListeners() {
    const tierBtns = document.querySelectorAll('.tier-btn');
    tierBtns.forEach(btn => {
        btn.onclick = (e) => {
            tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
            btn.classList.add('active', 'border-indigo-500', 'bg-indigo-500/10');
            selectedUsdAmount = parseFloat(btn.dataset.usd);
            const customInput = document.getElementById('customAmount');
            if (customInput) customInput.value = '';
            updateHomeConversion();
        };
    });

    const customInput = document.getElementById('customAmount');
    if (customInput) {
        customInput.oninput = (e) => {
            tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
            selectedUsdAmount = parseFloat(e.target.value) || 0;
            updateHomeConversion();
        };
    }

    const btnDonate = document.getElementById('btnDonateETH');
    if (btnDonate) btnDonate.onclick = donateETH;
}

function updateHomeConversion() {
    const ethDisplay = document.getElementById('ethConversion');
    if (selectedUsdAmount > 0 && ethPrice > 0) {
        const eth = selectedUsdAmount / ethPrice;
        const ethAmountEl = document.getElementById('ethAmount');
        if (ethAmountEl) ethAmountEl.innerText = eth.toFixed(5);
        if (ethDisplay) ethDisplay.classList.remove('hidden');
    } else {
        if (ethDisplay) ethDisplay.classList.add('hidden');
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

    const bragNFT = getContract('BragNFT');
    if (!bragNFT) {
        alert("BragNFT contract not found. Please check network or manager settings.");
        return;
    }

    const ethValue = ethers.utils.parseEther((selectedUsdAmount / ethPrice).toFixed(18));

    try {
        showModal("Minting in Progress", "Please confirm the transaction in your wallet and wait for blockchain confirmation.");

        const tx = await bragNFT["donate(string,string,bool)"]("Home Page Donation", "", false, { value: ethValue });
        document.getElementById('statusDesc').innerText = "Transaction sent! Waiting for block confirmation...";

        const receipt = await tx.wait();
        handleHomeSuccess(receipt);
    } catch (e) {
        console.error(e);
        showModal("Donation Failed", e.reason || e.message || "Transaction failed.");
        const statusIcon = document.getElementById('statusIcon');
        if (statusIcon) {
            statusIcon.innerHTML = '<i class="fas fa-times text-white"></i>';
            statusIcon.classList.replace('brag-gradient', 'bg-red-500');
        }
    }
}

function showModal(title, desc) {
    const modal = document.getElementById('modalStatus');
    if (!modal) return;
    modal.classList.remove('hidden');
    document.getElementById('statusTitle').innerText = title;
    document.getElementById('statusDesc').innerText = desc;
    const statusIcon = document.getElementById('statusIcon');
    if (statusIcon) {
        statusIcon.innerHTML = '<i class="fas fa-spinner fa-spin text-white"></i>';
        statusIcon.classList.add('brag-gradient');
        statusIcon.classList.remove('bg-red-500', 'bg-green-500');
    }
    const statusActions = document.getElementById('statusActions');
    if (statusActions) statusActions.classList.add('hidden');
}

let lastReceipt = null;

function handleHomeSuccess(receipt) {
    lastReceipt = receipt;
    document.getElementById('statusTitle').innerText = "Impact Verified!";
    document.getElementById('statusDesc').innerText = "Your contribution has been recorded and your NFT minted. Thank you!";
    const statusIcon = document.getElementById('statusIcon');
    if (statusIcon) {
        statusIcon.innerHTML = '<i class="fas fa-check text-white"></i>';
        statusIcon.classList.replace('brag-gradient', 'bg-emerald-500');
    }
    const statusActions = document.getElementById('statusActions');
    if (statusActions) statusActions.classList.remove('hidden');

    const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/tx/" : "https://etherscan.io/tx/";
    const txLink = document.getElementById('txExplorerLink');
    if (txLink) txLink.href = explorerUrl + receipt.transactionHash;
    const downloadBtn = document.getElementById('btnDownloadReceipt');
    if (downloadBtn) downloadBtn.onclick = generateHomePDF;

    refreshHomeStats();
}

function closeModal() {
    const modal = document.getElementById('modalStatus');
    if (modal) modal.classList.add('hidden');
}

async function generateHomePDF() {
    if (!lastReceipt || !window.jspdf) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const date = new Date().toLocaleString();

    doc.setFontSize(22);
    doc.setTextColor(99, 102, 241);
    doc.text("Official Donation Receipt", 105, 40, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139);
    doc.text(`Campaign: ${CAUSE_NAME}`, 20, 60);
    doc.text(`Organization: DESF Inc.`, 20, 70);
    doc.text(`Date: ${date}`, 20, 80);

    doc.line(20, 90, 190, 90);
    doc.text(`Donor Wallet: ${userAddress}`, 20, 105);
    doc.text(`Amount: $${selectedUsdAmount} USD equivalent`, 20, 115);
    doc.text(`Transaction: ${lastReceipt.transactionHash}`, 20, 125, { maxWidth: 160 });

    doc.setFontSize(14);
    doc.text("Thank you for your support!", 105, 160, { align: "center" });

    doc.save(`Brag_Receipt_${lastReceipt.transactionHash.substring(0, 8)}.pdf`);
}
