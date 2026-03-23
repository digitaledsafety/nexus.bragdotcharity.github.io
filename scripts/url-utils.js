export function getExternalUrl(port, defaultUrl) {
    if (process.env.CODESPACE_NAME && process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN) {
        const protocol = port === 9001 ? 'wss' : 'https'; // 9001 is WS_PORT in bridge
        return `${protocol}://${process.env.CODESPACE_NAME}-${port}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`;
    }
    const protocol = port === 9001 ? 'ws' : 'http';
    return defaultUrl || `${protocol}://localhost:${port}`;
}
