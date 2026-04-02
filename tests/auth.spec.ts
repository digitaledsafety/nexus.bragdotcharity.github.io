import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Authentication Flow', () => {
  const loginUrl = `file://${path.resolve('frontend/login.html')}`;
  const managerUrl = `file://${path.resolve('frontend/manager.html')}`;

  test('should redirect unauthenticated users to login page', async ({ page }) => {
    // Clear any existing connection
    await page.goto(loginUrl);
    await page.evaluate(() => {
        localStorage.removeItem('wallet_connected');
        localStorage.removeItem('brag_address');
    });

    // Try to access manager page
    await page.goto(managerUrl);

    // Should be redirected to login
    await expect(page).toHaveURL(/login\.html/);
  });

  test('should show linking banner when token is present', async ({ page }) => {
    await page.goto(`${loginUrl}?token=LINK123`);

    const banner = page.locator('#linkingStatus');
    await expect(banner).toBeVisible();
    await expect(page.locator('#displayToken')).toHaveText('LINK123');
  });

  test('should connect wallet and see address', async ({ page }) => {
    // Mock ethers and window.ethereum - MUST BE BEFORE page.goto
    await page.addInitScript(() => {
        const mockAddress = '0x0000000000000000000000000000000000000123';
        (window as any).ethereum = {
            request: async (request: any) => {
                if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') return [mockAddress];
                if (request.method === 'eth_chainId') return '0x1';
                if (request.method === 'personal_sign') return '0xmocksignature';
                return null;
            },
            on: () => {},
            removeListener: () => {}
        };
        (window as any).ethers = {
            providers: {
                Web3Provider: class {
                    constructor() {}
                    async send(method: string) {
                        if (method === 'eth_requestAccounts' || method === 'eth_accounts') return [mockAddress];
                        return null;
                    }
                    getSigner() {
                        return {
                            getAddress: async () => mockAddress,
                            signMessage: async () => '0xmocksignature'
                        };
                    }
                    async getNetwork() { return { chainId: 1 }; }
                },
                JsonRpcProvider: class {
                    constructor() {}
                    async getNetwork() { return { chainId: 1 }; }
                }
            },
            utils: {
                isAddress: (addr: string) => addr.startsWith('0x') && addr.length === 42
            }
        };
    });

    await page.goto(loginUrl);

    await page.click('#btnSiwe');

    // Should redirect to manager
    await expect(page).toHaveURL(/manager\.html/);

    // Should show the mock address on the connect button
    const connectBtn = page.locator('#btnConnect');
    await expect(connectBtn).toContainText('0x0000...0123');
  });
});
