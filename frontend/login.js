const API_BASE = 'http://localhost:9000';

function initLogin() {
    setupLoginTabs();
    setupSiwe();
    setupGoogleLogin();
    setupEmailLogin();
    handleLoginCallbacks();
}

function cleanupLogin() {
    // No specific long-running processes to cleanup here yet
}

function setupLoginTabs() {
    const tabWallet = document.getElementById('tabWallet');
    const tabEmail = document.getElementById('tabEmail');
    const walletSection = document.getElementById('walletSection');
    const emailSection = document.getElementById('emailSection');

    if (!tabWallet || !tabEmail) return;

    tabWallet.onclick = () => {
        tabWallet.classList.add('border-indigo-500', 'text-white');
        tabWallet.classList.remove('border-transparent', 'text-slate-400');
        tabEmail.classList.add('border-transparent', 'text-slate-400');
        tabEmail.classList.remove('border-indigo-500', 'text-white');
        if (walletSection) walletSection.classList.remove('hidden');
        if (emailSection) emailSection.classList.add('hidden');
    };

    tabEmail.onclick = () => {
        tabEmail.classList.add('border-indigo-500', 'text-white');
        tabEmail.classList.remove('border-transparent', 'text-slate-400');
        tabWallet.classList.add('border-transparent', 'text-slate-400');
        tabWallet.classList.remove('border-indigo-500', 'text-white');
        if (emailSection) emailSection.classList.remove('hidden');
        if (walletSection) walletSection.classList.add('hidden');
    };
}

function setupSiwe() {
    const btnSiwe = document.getElementById('btnSiwe');
    if (!btnSiwe) return;

    btnSiwe.onclick = async () => {
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
            const statement = 'Sign in with Ethereum to Brag Charity.';
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

                router.navigateTo('manager');
            } else {
                alert('Authentication failed: ' + result.error);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred during login.');
        }
    };
}

function handleLoginCallbacks() {
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
        router.navigateTo('manager');
        return;
    }

    const token = urlParams.get('token');
    if (token) {
        const linkingStatus = document.getElementById('linkingStatus');
        const displayToken = document.getElementById('displayToken');
        const subtext = document.getElementById('subtext');

        if (linkingStatus) linkingStatus.classList.remove('hidden');
        if (displayToken) displayToken.innerText = token;
        if (subtext) subtext.classList.add('hidden');
    }
}

function setupGoogleLogin() {
    const btnGoogle = document.getElementById('btnGoogle');
    if (!btnGoogle) return;
    btnGoogle.onclick = () => {
        const redirectUri = window.location.origin + '/?page=manager';
        window.location.href = `${API_BASE}/auth/google?redirectUri=${encodeURIComponent(redirectUri)}`;
    };
}

function setupEmailLogin() {
    const emailForm = document.getElementById('emailForm');
    if (!emailForm) return;
    emailForm.onsubmit = async (e) => {
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
                router.navigateTo('manager');
            } else {
                alert('Login failed: ' + result.error);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred during login.');
        }
    };
}
