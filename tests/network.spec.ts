import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Network Detection', () => {
  const landingUrl = `file://${path.resolve('frontend/index.html')}`;
  const managerUrl = `file://${path.resolve('frontend/manager.html')}`;
  const loginUrl = `file://${path.resolve('frontend/login.html')}`;

  test('should display Sepolia network badge on landing page when connected to chain 11155111', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).ethereum = {
        isMetaMask: true,
        request: async (request: { method: string, params?: any[] }) => {
          if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') {
            return ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'];
          }
          if (request.method === 'eth_chainId') {
            return '0xaa36a7'; // 11155111 in hex
          }
          if (request.method === 'net_version') {
            return '11155111';
          }
          return null;
        },
        on: () => {},
        removeListener: () => {}
      };
    });

    await page.goto(landingUrl);
    await page.click('#btnConnect');
    const networkBadge = page.locator('#networkBadge');
    await expect(networkBadge).toContainText('Sepolia');
  });

  test('should display Sepolia network status on manager page when connected to chain 11155111', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).ethereum = {
        isMetaMask: true,
        request: async (request: { method: string, params?: any[] }) => {
          if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') {
            return ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'];
          }
          if (request.method === 'eth_chainId') {
            return '0xaa36a7';
          }
          if (request.method === 'net_version') {
            return '11155111';
          }
          return null;
        },
        on: () => {},
        removeListener: () => {}
      };
      localStorage.setItem('wallet_connected', 'true');
      localStorage.setItem('brag_address', '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
    });

    await page.goto(managerUrl);
    // Button ID is #btnConnect in manager.html
    await page.click('#btnConnect');
    const networkBadge = page.locator('#networkBadge');
    await expect(networkBadge).toContainText('Sepolia');
  });

  test('Login page should use correct Chain ID in SIWE message', async ({ page }) => {
    let siweMessage = '';
    await page.exposeFunction('captureMessage', (msg: string) => {
      if (msg.startsWith('0x')) {
        let str = '';
        for (let i = 2; i < msg.length; i += 2) {
          str += String.fromCharCode(parseInt(msg.substr(i, 2), 16));
        }
        siweMessage = str;
      } else {
        siweMessage = msg;
      }
    });

    await page.addInitScript(() => {
      (window as any).ethereum = {
        isMetaMask: true,
        request: async (request: { method: string, params?: any[] }) => {
          if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') {
            return ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'];
          }
          if (request.method === 'eth_chainId') {
            return '0xaa36a7';
          }
          if (request.method === 'personal_sign') {
            await (window as any).captureMessage(request.params[0]);
            return '0xmocksignature';
          }
          return null;
        },
        on: () => {},
        removeListener: () => {}
      };
    });

    await page.goto(loginUrl);
    await page.route('**/auth/nonce*', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ nonce: '12345678' }) });
    });

    // Silence alerts
    page.on('dialog', dialog => dialog.dismiss());

    await page.click('#btnSiwe');

    // Wait for message to be captured
    await expect.poll(() => siweMessage).toContain('Chain ID: 11155111');
  });
});
