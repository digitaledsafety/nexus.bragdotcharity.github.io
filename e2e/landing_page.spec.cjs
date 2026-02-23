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
    const connectBtn = page.locator('#btnConnect');
    await expect(connectBtn).toBeVisible();
    await expect(connectBtn).toHaveText('Connect Wallet');
  });

  test('should have a transparency section', async ({ page }) => {
    await expect(page.getByText('Transparency & Trust')).toBeVisible();
    await expect(page.locator('#displayNftAddr')).toBeVisible();
  });

  test('should show fiat payment modal when clicked', async ({ page }) => {
    await page.click('#btnDonateFiat');
    await expect(page.locator('#fiatOverlay')).toBeVisible();
    await expect(page.getByText('Transak widget would load here')).toBeVisible();
  });
});
