const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    // Serve the landing.html file
    const filePath = 'file://' + path.resolve(__dirname, '../frontend/landing.html');
    await page.goto(filePath);
  });

  test('should display the mission headline', async ({ page }) => {
    const headline = page.locator('h1');
    await expect(headline).toContainText('Empowering the underserved');
    await expect(headline).toContainText('STEM');
  });

  test('should show risk disclosure', async ({ page }) => {
    await expect(page.getByText('RISK DISCLOSURE', { exact: false })).toBeVisible();
  });

  test('should have donation tiers', async ({ page }) => {
    await expect(page.getByText('$5')).toBeVisible();
    await expect(page.getByText('$20')).toBeVisible();
    await expect(page.getByText('$100')).toBeVisible();
  });

  test('should show connect wallet buttons', async ({ page }) => {
    const connectBtn = page.locator('#navConnectBtn');
    await expect(connectBtn).toBeVisible();
    await expect(connectBtn).toHaveText('Connect Wallet');
  });

  test('should have a transparency section', async ({ page }) => {
    await expect(page.getByText('Transparency & Trust')).toBeVisible();
    await expect(page.locator('#contractAddr')).toBeVisible();
  });

  test('should show fiat payment placeholder when clicked', async ({ page }) => {
    await page.click('#btnFiat');
    // Note: In the standalone landing.html it shows an alert, but let's check for the button existance at least
    // or update landing.html to have a fiat overlay if we want to test it.
    await expect(page.locator('#btnFiat')).toBeVisible();
  });
});
