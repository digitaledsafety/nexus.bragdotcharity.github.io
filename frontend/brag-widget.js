const BRAG_NFT_ABI = [
    "function donate(string message, string tokenURI_) payable",
    "function maxSupply() view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function campaignId() view returns (string)"
];

class BragDonationWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.ethPrice = 0;
        this.selectedUsdAmount = 0;
        this.provider = null;
        this.signer = null;
        this.network = null;
        this.lastReceipt = null;
    }

    static get observedAttributes() {
        return ['brag-nft-address', 'treasury-address', 'campaign-name', 'campaign-desc'];
    }

    get nftAddress() { return this.getAttribute('brag-nft-address'); }
    get treasuryAddress() { return this.getAttribute('treasury-address'); }
    get campaignName() { return this.getAttribute('campaign-name') || "STEM/STEAM Education"; }
    get campaignDesc() { return this.getAttribute('campaign-desc') || "Providing modern STEM education to underserved communities."; }

    async connectedCallback() {
        this.render();
        await this.init();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
                :host {
                    display: block;
                    font-family: 'Inter', sans-serif;
                    color: #f8fafc;
                }
                .brag-container {
                    background-color: #0f172a;
                    border-radius: 1rem;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    max-width: 1000px;
                    margin: auto;
                }
                .brag-gradient {
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                }
                .brag-gradient-text {
                    background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glass-card {
                    background: rgba(30, 41, 59, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .tier-btn {
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    border: 1px solid #334155;
                    background: #1e293b;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .tier-btn:hover { border-color: #6366f1; }
                .tier-btn.active {
                    border-color: #818cf8;
                    background-color: rgba(99, 102, 241, 0.2);
                }
                .hidden { display: none !important; }

                .p-8 { padding: 2rem; }
                .flex { display: flex; }
                .flex-col { flex-direction: column; }
                .items-center { align-items: center; }
                .justify-center { justify-content: center; }
                .justify-between { justify-content: space-between; }
                .space-x-2 > * + * { margin-left: 0.5rem; }
                .space-x-4 > * + * { margin-left: 1rem; }
                .space-x-8 > * + * { margin-left: 2rem; }
                .space-y-1 > * + * { margin-top: 0.25rem; }
                .space-y-2 > * + * { margin-top: 0.5rem; }
                .space-y-3 > * + * { margin-top: 0.75rem; }
                .space-y-4 > * + * { margin-top: 1rem; }
                .space-y-6 > * + * { margin-top: 1.5rem; }
                .grid { display: grid; }
                .gap-4 { gap: 1rem; }
                .w-full { width: 100%; }
                .text-center { text-align: center; }
                .text-xs { font-size: 0.75rem; }
                .text-sm { font-size: 0.875rem; }
                .text-xl { font-size: 1.25rem; }
                .text-3xl { font-size: 1.875rem; }
                .font-bold { font-weight: 700; }
                .font-black { font-weight: 900; }
                .uppercase { text-transform: uppercase; }
                .tracking-widest { letter-spacing: 0.1em; }
                .text-slate-400 { color: #94a3b8; }
                .text-slate-500 { color: #64748b; }
                .text-indigo-400 { color: #818cf8; }

                @media (min-width: 768px) {
                    .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
                    .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
                    .md\\:gap-12 { gap: 3rem; }
                }

                .risk-disclosure {
                    background: rgba(127, 29, 29, 0.3);
                    border-bottom: 1px solid rgba(239, 68, 68, 0.2);
                    color: #fca5a5;
                    font-size: 0.65rem;
                    padding: 0.6rem;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: bold;
                }

                .badge-footer {
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.2);
                    display: flex;
                    justify-content: center;
                }
                .brag-badge {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.4rem 1rem;
                    border-radius: 2rem;
                    text-decoration: none;
                    color: #94a3b8;
                    font-size: 0.7rem;
                    font-weight: bold;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .brag-badge img { height: 14px; margin-right: 8px; border-radius: 50%; }

                .main-btn {
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    font-weight: 700;
                    cursor: pointer;
                    border: none;
                    width: 100%;
                    transition: opacity 0.2s;
                }
                .main-btn:hover {
                    opacity: 0.9;
                }
                .status-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                }
            </style>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

            <div class="brag-container">
                <div class="risk-disclosure">
                    Risk Disclosure: Crypto donations involve inherent risks. NFTs are commemorative.
                </div>

                <div class="p-8">
                    <div class="grid md:grid-cols-2 md:gap-12 items-start">
                        <div class="space-y-6">
                            <div style="background: rgba(99, 102, 241, 0.1); color: #818cf8; padding: 4px 12px; border-radius: 99px; display: inline-block; font-size: 0.7rem; font-weight: bold; text-transform: uppercase; border: 1px solid rgba(99, 102, 241, 0.2);">
                                Active Campaign
                            </div>
                            <h1 class="text-3xl font-black">${this.campaignName}</h1>
                            <p class="text-slate-400 text-sm leading-relaxed">${this.campaignDesc}</p>

                            <div class="flex space-x-8">
                                <div>
                                    <div class="text-slate-500 text-xs font-bold uppercase mb-1">Raised</div>
                                    <div id="totalRaisedUSD" class="text-xl font-bold">$0.00</div>
                                    <div id="totalRaisedETH" class="text-xs text-slate-500">0.00 ETH</div>
                                </div>
                                <div>
                                    <div class="text-slate-500 text-xs font-bold uppercase mb-1">NFTs Left</div>
                                    <div class="text-xl font-bold"><span id="nftsRemaining">--</span> / <span id="nftsTotal">--</span></div>
                                </div>
                            </div>

                            <div id="walletInfo" class="hidden">
                                <div class="text-xs text-slate-500">Connected: <span id="walletAddr" class="font-mono text-indigo-400">0x...</span></div>
                            </div>
                            <button id="btnConnect" class="main-btn brag-gradient">Connect Wallet</button>
                        </div>

                        <div class="glass-card p-6 rounded-xl space-y-4">
                            <div class="flex items-center space-x-2 mb-2">
                                <svg style="width:16px;height:16px;fill:#ec4899" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                <span class="font-bold">Donate to Support</span>
                            </div>

                            <div class="grid grid-cols-3 gap-3">
                                <button data-usd="5" class="tier-btn">$5</button>
                                <button data-usd="20" class="tier-btn">$20</button>
                                <button data-usd="100" class="tier-btn">$100</button>
                            </div>

                            <div style="position: relative;">
                                <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #64748b; font-weight: bold;">$</span>
                                <input type="number" id="customAmount" style="width: 100%; background: #020617; border: 1px solid #334155; border-radius: 0.5rem; padding: 0.8rem 1rem 0.8rem 2rem; color: white; font-weight: bold; box-sizing: border-box;" placeholder="Other">
                            </div>

                            <div id="ethConversion" class="text-center text-xs text-slate-500 italic hidden">
                                ≈ <span id="ethAmount">0.000</span> ETH
                            </div>

                            <div class="space-y-3 pt-2">
                                <button id="btnDonateETH" class="main-btn brag-gradient">Donate ETH</button>
                                <button id="btnDonateFiat" class="main-btn bg-white text-slate-900">Card / PayPal</button>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 pt-8 border-t border-slate-800">
                        <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">Transparency & Trust</h3>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="glass-card p-4 rounded-xl text-center">
                                <div class="text-indigo-400 mb-2">
                                    <svg style="width:20px;height:20px;margin:auto;display:block;fill:currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                                </div>
                                <div class="text-xs font-bold mb-1">Verified Contract</div>
                                <div class="text-[10px] text-slate-500 font-mono break-all" id="displayNftAddr">--</div>
                            </div>
                            <div class="glass-card p-4 rounded-xl text-center">
                                <div class="text-green-400 mb-2">
                                    <svg style="width:20px;height:20px;margin:auto;display:block;fill:currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                </div>
                                <div class="text-xs font-bold mb-1">Audit Status</div>
                                <div class="text-[10px] text-slate-500 uppercase">Mock Audit Passed</div>
                            </div>
                            <div class="glass-card p-4 rounded-xl text-center">
                                <div class="text-slate-400 mb-2">
                                    <svg style="width:20px;height:20px;margin:auto;display:block;fill:currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                                </div>
                                <div class="text-xs font-bold mb-1">Compliance</div>
                                <div class="flex justify-center space-x-4 text-[10px]">
                                    <a href="#" class="text-indigo-400 hover:underline">Privacy Policy</a>
                                    <a href="#" class="text-indigo-400 hover:underline">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="badge-footer">
                    <a href="https://brag.charity" target="_blank" class="brag-badge">
                        <img src="https://digitaleducationsafety.org/assets/img/logo.jpg">
                        Powered by brag.charity
                    </a>
                </div>

                <div id="statusOverlay" class="status-overlay hidden">
                    <div class="text-center p-8 space-y-4">
                        <div id="statusIcon" class="w-16 h-16 brag-gradient rounded-full flex items-center justify-center mx-auto text-2xl">
                            <i class="fas fa-spinner fa-spin"></i>
                        </div>
                        <h3 id="statusTitle" class="text-xl font-bold">Processing</h3>
                        <p id="statusDesc" class="text-slate-400 text-sm">Waiting for wallet...</p>
                        <div id="statusActions" class="hidden flex flex-col space-y-2">
                            <button id="btnDownload" class="main-btn brag-gradient">Download Receipt</button>
                            <button id="btnCloseStatus" class="text-slate-500 text-xs">Close</button>
                        </div>
                    </div>
                </div>

                <div id="fiatOverlay" class="status-overlay hidden">
                    <div class="bg-white text-slate-900 p-8 rounded-xl w-full max-w-xs text-center space-y-4">
                        <h3 class="font-bold text-lg">Fiat Payment</h3>
                        <div class="p-6 border-2 border-dashed border-slate-200 rounded-lg text-slate-400">
                            <svg style="width:48px;height:48px;margin:0 auto 8px;fill:#cbd5e1" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                            <p class="text-xs">Transak widget would load here.</p>
                        </div>
                        <button id="btnReturn" class="main-btn bg-indigo-600 text-white">Return</button>
                    </div>
                </div>
            </div>
        `;
    }

    async init() {
        this.setupListeners();
        await this.fetchEthPrice();
        await this.connectWallet(true);
        this.refreshStats();
        setInterval(() => this.refreshStats(), 15000);
    }

    setupListeners() {
        const r = this.shadowRoot;
        r.getElementById('btnConnect').onclick = () => this.connectWallet();

        r.querySelectorAll('.tier-btn').forEach(btn => {
            btn.onclick = () => {
                r.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedUsdAmount = parseFloat(btn.dataset.usd);
                r.getElementById('customAmount').value = '';
                this.updateConv();
            };
        });

        r.getElementById('customAmount').oninput = (e) => {
            r.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
            this.selectedUsdAmount = parseFloat(e.target.value) || 0;
            this.updateConv();
        };

        r.getElementById('btnDonateETH').onclick = () => this.donate();
        r.getElementById('btnDonateFiat').onclick = () => r.getElementById('fiatOverlay').classList.remove('hidden');
        r.getElementById('btnReturn').onclick = () => r.getElementById('fiatOverlay').classList.add('hidden');
        r.getElementById('btnCloseStatus').onclick = () => r.getElementById('statusOverlay').classList.add('hidden');
    }

    async fetchEthPrice() {
        try {
            const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
            const data = await resp.json();
            this.ethPrice = data.ethereum.usd;
        } catch(e) { this.ethPrice = 2500; }
    }

    updateConv() {
        const r = this.shadowRoot;
        const eth = this.selectedUsdAmount / this.ethPrice;
        if (eth > 0) {
            r.getElementById('ethAmount').innerText = eth.toFixed(5);
            r.getElementById('ethConversion').classList.remove('hidden');
        } else {
            r.getElementById('ethConversion').classList.add('hidden');
        }
    }

    async connectWallet(silent=false) {
        if (!window.ethereum) return;
        try {
            this.provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await this.provider.send(silent ? "eth_accounts" : "eth_requestAccounts", []);
            if (accounts.length > 0) {
                this.signer = this.provider.getSigner();
                const addr = await this.signer.getAddress();
                const r = this.shadowRoot;
                r.getElementById('walletAddr').innerText = `${addr.slice(0,6)}...${addr.slice(-4)}`;
                r.getElementById('walletInfo').classList.remove('hidden');
                r.getElementById('btnConnect').classList.add('hidden');
                this.detectAddrs();
            }
        } catch(e) {}
    }

    detectAddrs() {
        if (typeof CONTRACT_DATA !== 'undefined' && !this.nftAddress) {
            const chainId = (window.ethereum?.chainId ? parseInt(window.ethereum.chainId, 16) : 31337).toString();
            const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
            if (deps) {
                this.setAttribute('brag-nft-address', deps.Nexus || deps.BragNFT);
                this.setAttribute('treasury-address', deps.Treasury);
            }
        }
    }

    async refreshStats() {
        if (!this.nftAddress || !this.treasuryAddress) return;
        const r = this.shadowRoot;
        r.getElementById('displayNftAddr').innerText = this.nftAddress;
        try {
            const p = this.provider || new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
            const balance = await p.getBalance(this.treasuryAddress);
            const eth = parseFloat(ethers.utils.formatEther(balance));
            r.getElementById('totalRaisedETH').innerText = `${eth.toFixed(4)} ETH`;
            r.getElementById('totalRaisedUSD').innerText = `$${(eth * this.ethPrice).toLocaleString(undefined, {minimumFractionDigits:2})}`;

            const c = new ethers.Contract(this.nftAddress, BRAG_NFT_ABI, p);
            const total = await c.maxSupply();
            const curr = await c.totalSupply();
            r.getElementById('nftsTotal').innerText = total.toString();
            r.getElementById('nftsRemaining').innerText = total.sub(curr).toString();
        } catch(e) {}
    }

    async donate() {
        if (!this.signer) return this.connectWallet();
        if (this.selectedUsdAmount <= 0) return alert("Select amount");
        const eth = ethers.utils.parseEther((this.selectedUsdAmount / this.ethPrice).toFixed(18));
        const c = new ethers.Contract(this.nftAddress, BRAG_NFT_ABI, this.signer);
        try {
            this.showStatus("Confirming", "Approve in wallet");
            const tx = await c.donate("Widget", "", { value: eth });
            this.showStatus("Pending", "Waiting for blocks...");
            const receipt = await tx.wait();
            this.handleSuccess(receipt);
        } catch(e) {
            this.showStatus("Error", e.reason || e.message);
            this.shadowRoot.getElementById('statusIcon').innerHTML = '<i class="fas fa-times"></i>';
        }
    }

    showStatus(t, d) {
        const r = this.shadowRoot;
        r.getElementById('statusOverlay').classList.remove('hidden');
        r.getElementById('statusTitle').innerText = t;
        r.getElementById('statusDesc').innerText = d;
        r.getElementById('statusActions').classList.add('hidden');
        r.getElementById('statusIcon').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    }

    handleSuccess(receipt) {
        this.lastReceipt = receipt;
        const r = this.shadowRoot;
        r.getElementById('statusTitle').innerText = "Success!";

        const txHash = receipt.transactionHash;
        const explorerUrl = window.ethereum?.chainId === '0x1' ? 'https://etherscan.io/tx/' :
                           (window.ethereum?.chainId === '0x89' ? 'https://polygonscan.com/tx/' :
                           'https://sepolia.etherscan.io/tx/');

        r.getElementById('statusDesc').innerHTML = `
            NFT Minted!<br>
            <a href="${explorerUrl}${txHash}" target="_blank" style="color: #818cf8; text-decoration: underline; font-size: 0.65rem; font-family: monospace; display: block; margin-top: 8px;">View on Explorer</a>
        `;
        r.getElementById('statusIcon').innerHTML = '<i class="fas fa-check"></i>';
        r.getElementById('statusActions').classList.remove('hidden');
        r.getElementById('btnDownload').onclick = () => this.pdf();
        this.refreshStats();
    }

    async pdf() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const addr = await this.signer.getAddress();

        doc.setFontSize(22);
        doc.text("DONATION RECEIPT", 105, 30, { align: "center" });

        doc.setFontSize(10);
        doc.text(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(), 105, 38, { align: "center" });

        doc.setFontSize(12);
        doc.text("Thank you for your generous contribution to our mission.", 105, 48, { align: "center" });

        doc.line(20, 55, 190, 55);

        doc.setFont("helvetica", "bold");
        doc.text("Campaign:", 20, 70);
        doc.setFont("helvetica", "normal");
        doc.text(this.campaignName, 60, 70);

        doc.setFont("helvetica", "bold");
        doc.text("Donor Address:", 20, 80);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text(addr, 60, 80);

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Amount (USD eq.):", 20, 90);
        doc.setFont("helvetica", "normal");
        doc.text(`$${this.selectedUsdAmount.toFixed(2)}`, 60, 90);

        doc.setFont("helvetica", "bold");
        doc.text("Transaction Hash:", 20, 100);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text(this.lastReceipt.transactionHash, 60, 100);

        doc.setFontSize(12);
        doc.line(20, 110, 190, 110);

        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text("This receipt confirms your donation and the minting of your commemorative NFT.", 105, 125, { align: "center" });
        doc.text("Powered by brag.charity", 105, 135, { align: "center" });

        doc.save(`Donation_Receipt_${this.lastReceipt.transactionHash.slice(0,8)}.pdf`);
    }
}
customElements.define('brag-donation-widget', BragDonationWidget);
