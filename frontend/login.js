const API_BASE = 'http://localhost:9000';

// Tab Switching Logic
const tabWallet = document.getElementById('tabWallet');
const tabEmail = document.getElementById('tabEmail');
const walletSection = document.getElementById('walletSection');
const emailSection = document.getElementById('emailSection');

tabWallet.addEventListener('click', () => {
    tabWallet.classList.add('border-indigo-500', 'text-white');
    tabWallet.classList.remove('border-transparent', 'text-slate-400');
    tabEmail.classList.add('border-transparent', 'text-slate-400');
    tabEmail.classList.remove('border-indigo-500', 'text-white');
    walletSection.classList.remove('hidden');
    emailSection.classList.add('hidden');
});

tabEmail.addEventListener('click', () => {
    tabEmail.classList.add('border-indigo-500', 'text-white');
    tabEmail.classList.remove('border-transparent', 'text-slate-400');
    tabWallet.classList.add('border-transparent', 'text-slate-400');
    tabWallet.classList.remove('border-indigo-500', 'text-white');
    emailSection.classList.remove('hidden');
    walletSection.classList.add('hidden');
});

// SIWE Logic
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

        // 1. Get Nonce
        const nonceRes = await fetch(`${API_BASE}/auth/nonce?address=${address}`);
        const { nonce } = await nonceRes.json();

        // 2. Prepare SIWE Message
        const domain = window.location.host;
        const origin = window.location.origin;
        const statement = 'Sign in with Ethereum to brag.charity.';
        const message = `${domain} wants you to sign in with your Ethereum account:\n${address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${new Date().toISOString()}`;

        // 3. Sign Message
        const signature = await signer.signMessage(message);

        // 4. Verify on Backend
        const verifyRes = await fetch(`${API_BASE}/auth/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address, message, signature })
        });

        const result = await verifyRes.json();
        if (result.success) {
            localStorage.setItem('brag_session', result.sessionId);
            localStorage.setItem('brag_address', result.address);

            // Handle Account Linking if token present
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            if (token) {
                console.log('Attempting to link account with token:', token);
                try {
                    await fetch(`${API_BASE}/verify-link`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token, address, message, signature })
                    });
                } catch (e) {
                    console.error('Linking failed, continuing to manager', e);
                }
            }

            window.location.href = 'manager.html';
        } else {
            alert('Authentication failed: ' + result.error);
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred during login.');
    }
});

// Initialize UI & Handle Callback Redirects
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Handle session returned in URL (from Google OAuth redirect)
    const sessionId = urlParams.get('sessionId');
    const address = urlParams.get('address');
    const email = urlParams.get('email');

    if (sessionId && address) {
        localStorage.setItem('brag_session', sessionId);
        localStorage.setItem('brag_address', address);
        if (email) localStorage.setItem('brag_email', email);

        // Clean up URL and redirect to manager
        window.location.href = 'manager.html';
        return;
    }

    const token = urlParams.get('token');
    if (token) {
        document.getElementById('linkingStatus').classList.remove('hidden');
        document.getElementById('displayToken').innerText = token;
        document.getElementById('subtext').classList.add('hidden');
    }
});

// Google Login Logic
const btnGoogle = document.getElementById('btnGoogle');
btnGoogle.addEventListener('click', () => {
    const redirectUri = window.location.origin + '/manager.html';
    window.location.href = `${API_BASE}/auth/google?redirectUri=${encodeURIComponent(redirectUri)}`;
});

// Email Login Logic
const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch(`${API_BASE}/auth/login-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await res.json();
        if (result.success) {
            localStorage.setItem('brag_session', result.sessionId);
            localStorage.setItem('brag_address', result.address);
            localStorage.setItem('brag_email', result.email);
            window.location.href = 'manager.html';
        } else {
            alert('Login failed: ' + result.error);
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred during login.');
    }
});
