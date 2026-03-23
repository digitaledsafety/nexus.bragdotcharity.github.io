(function() {
    const isCodespaces = window.location.hostname.endsWith('.app.github.dev');

    function getCodespaceUrl(port) {
        const host = window.location.hostname;
        const protocol = port === 9001 ? 'wss' : 'https';
        return protocol + '://' + host.replace(/-\d+(?=\.app\.github\.dev)/, '-' + port);
    }

    const BRAG_CONFIG = {
        BRIDGE_URL: isCodespaces ? getCodespaceUrl(9000) : 'http://localhost:9000',
        WS_BRIDGE_URL: isCodespaces ? getCodespaceUrl(9001) : 'ws://localhost:9001',
        ENV_API: isCodespaces ? getCodespaceUrl(9002) : 'http://localhost:9002',
        FRONTEND_URL: isCodespaces ? getCodespaceUrl(3000) : 'http://localhost:3000',
        HARDHAT_URL: 'http://localhost:8545'
    };

    window.BRAG_CONFIG = BRAG_CONFIG;
    console.log("BRAG Config Loaded:", BRAG_CONFIG);
})();
