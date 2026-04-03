const API_BASE = 'http://localhost:9000';

// Wallet Connection and Linking Logic
const btnSiwe = document.getElementById('btnSiwe');

btnSiwe.addEventListener('click', async () => {
    try {
        if (!window.ethereum) {
            alert('Please install MetaMask or another Ethereum wallet.');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const network = await provider.getNetwork();

        // 1. Prepare SIWE-like Message (Local proof of ownership)
        const domain = window.location.host;
        const origin = window.location.origin;
        const statement = 'Connect your wallet to Brag Charity.';
        const message = `${domain} wants you to connect your Ethereum account:\n${address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nIssued At: ${new Date().toISOString()}`;

        // 2. Sign Message
        const signature = await signer.signMessage(message);

        // 3. Store locally (instead of session-based auth)
        localStorage.setItem('wallet_connected', 'true');
        localStorage.setItem('brag_address', address);

        // 4. Handle Account Linking if token present
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            console.log('Attempting to link account with token:', token);
            try {
                const linkRes = await fetch(`${API_BASE}/verify-link`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token, address, message, signature })
                });
                if (!linkRes.ok) {
                   const err = await linkRes.json();
                   alert('Linking failed: ' + err.error);
                }
            } catch (e) {
                console.error('Linking failed', e);
                alert('Connection to bridge failed. Is it running?');
            }
        }

        window.location.href = 'manager.html';
    } catch (err) {
        console.error(err);
        alert('An error occurred during connection.');
    }
});

// Initialize UI & Handle Linking State
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
        document.getElementById('linkingStatus').classList.remove('hidden');
        document.getElementById('displayToken').innerText = token;
    }
});
