import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Authentication Flow', () => {
  const landingUrl = `file://${path.resolve('frontend/index.html')}`;

  test('should redirect unauthenticated users to login page', async ({ page }) => {
    await page.goto(landingUrl);
    await page.evaluate(() => {
        localStorage.removeItem('wallet_connected');
        localStorage.removeItem('brag_address');
    });

    // Try to access manager page via hash
    await page.goto(`${landingUrl}#/manager`);

    // Should be redirected to login view
    await expect(page).toHaveURL(/#\/login/);
  });

  test('should show linking banner when token is present', async ({ page }) => {
    // Navigate to landing and then set hash with query
    await page.goto(landingUrl);
    await page.evaluate(() => {
        window.location.hash = '#/login?token=LINK123';
    });

    const banner = page.locator('#linkingStatus');
    await expect(banner).toBeVisible({ timeout: 15000 });
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
    });

    await page.goto(landingUrl);
    await page.evaluate(() => {
        window.location.hash = '#/login';
    });

    // Wait for router/view to load
    const btnSiwe = page.locator('#btnSiwe');
    await expect(btnSiwe).toBeVisible({ timeout: 15000 });
    await btnSiwe.click();

    // Should redirect to manager
    await expect(page).toHaveURL(/#\/manager/);

    // Should show the mock address on the connect button
    const connectBtn = page.locator('#btnConnect');
    await expect(connectBtn).toContainText('0x0000...0123');
  });
});
