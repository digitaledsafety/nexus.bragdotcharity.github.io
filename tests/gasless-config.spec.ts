import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Gasless Configuration', () => {
  const landingUrl = `file://${path.resolve('frontend/index.html')}`;

  test.beforeEach(async ({ page }) => {
    // Mock wallet connection and AA SDK
    await page.addInitScript(() => {
        const mockAddress = '0x1234567890123456789012345678901234567890';
        (window as any).ethereum = {
            request: async (request: any) => {
                if (request.method === 'eth_accounts' || request.method === 'eth_requestAccounts') return [mockAddress];
                if (request.method === 'eth_chainId') return '0x1'; // Mainnet
                return null;
            },
            on: () => {},
            removeListener: () => {}
        };

        // Mock AlchemyAA to avoid esm.sh loads
        (window as any).AlchemyAA = {
            createPublicClient: () => ({}),
            http: () => ({}),
            alchemy: () => ({}),
            custom: () => ({}),
            createWalletClient: () => ({}),
            sepolia: {},
            localhost: {},
            createMultiOwnerLightAccount: async () => ({}),
            createAlchemySmartAccountClient: async () => ({
                account: { address: '0xSCA_ADDRESS' }
            }),
            WalletClientSigner: class { constructor() {} }
        };

        // Pre-set wallet connected in localStorage
        localStorage.setItem('wallet_connected', 'true');
        localStorage.setItem('brag_address', mockAddress);
    });

    // Block esm.sh to speed up and use mock
    await page.route('https://esm.sh/**', route => route.abort());

    // We need to fetch the local views and other local assets relative to the landingUrl
    await page.route('**/*', async (route) => {
        const url = route.request().url();
        console.log('Requesting:', url);
        if (url.startsWith('file://')) {
            if (url.includes('views/')) {
                const viewName = url.split('/').pop();
                const filePath = path.resolve(`frontend/views/${viewName}`);
                await route.fulfill({ path: filePath });
            } else if (url.endsWith('.js') || url.endsWith('.css')) {
                const fileName = url.split('/').pop();
                if (fileName === 'index.html') return route.continue();
                const filePath = path.resolve(`frontend/${fileName}`);
                await route.fulfill({ path: filePath });
            } else {
                await route.continue();
            }
        } else {
            await route.continue();
        }
    });

    await page.goto(landingUrl + '#/manager');

    // Wait for the manager view to be loaded
    await page.waitForLoadState('networkidle');
    await page.locator('#toggleGasless').waitFor({ state: 'visible', timeout: 30000 });
  });

  test('should show gasless config fields when toggled', async ({ page }) => {
    const gaslessConfig = page.locator('#gaslessConfig');
    const toggleGasless = page.locator('#toggleGasless');

    // Initially hidden
    await expect(gaslessConfig).toBeHidden();

    // Toggle on
    await toggleGasless.check();
    await expect(gaslessConfig).toBeVisible();

    // Toggle off
    await toggleGasless.uncheck();
    await expect(gaslessConfig).toBeHidden();
  });

  test('should save and load gasless config from localStorage', async ({ page }) => {
    const toggleGasless = page.locator('#toggleGasless');
    const apiKeyInput = page.locator('#alchemyApiKey');
    const policyIdInput = page.locator('#alchemyPolicyId');

    // Toggle on to see fields
    await toggleGasless.check();

    // Set values
    await apiKeyInput.fill('test-api-key');
    await policyIdInput.fill('test-policy-id');

    // Trigger change event (fill might not always trigger it depending on implementation)
    await apiKeyInput.dispatchEvent('change');
    await policyIdInput.dispatchEvent('change');

    // Verify localStorage
    const savedApiKey = await page.evaluate(() => localStorage.getItem('alchemyApiKey'));
    const savedPolicyId = await page.evaluate(() => localStorage.getItem('alchemyPolicyId'));

    expect(savedApiKey).toBe('test-api-key');
    expect(savedPolicyId).toBe('test-policy-id');

    // Reload page
    await page.reload();
    await page.evaluate(() => {
        window.location.hash = '#/manager';
    });

    // Toggle should still be on
    await expect(toggleGasless).toBeChecked();
    await expect(page.locator('#gaslessConfig')).toBeVisible();

    // Values should be loaded
    await expect(apiKeyInput).toHaveValue('test-api-key');
    await expect(policyIdInput).toHaveValue('test-policy-id');
  });
});
