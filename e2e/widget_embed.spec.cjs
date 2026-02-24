const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Widget Embed', () => {
  test.beforeEach(async ({ page }) => {
    const filePath = 'file://' + path.resolve(__dirname, '../frontend/embed-test.html');
    await page.goto(filePath);
  });

  test('should render the widget inside shadow dom', async ({ page }) => {
    // Check if the custom element exists
    const widget = page.locator('brag-donation-widget');
    await expect(widget).toBeVisible();

    // Check content inside shadow DOM
    // Playwright can pierce shadow DOM with >>
    const headline = page.locator('brag-donation-widget >> h1');
    await expect(headline).toBeVisible();
    await expect(headline).toContainText('Community Outreach');
  });

  test('should show raised amount in widget', async ({ page }) => {
    const raised = page.locator('brag-donation-widget >> #totalRaisedUSD');
    await expect(raised).toBeVisible();
    await expect(raised).toContainText('$0.00');
  });

  test('should show transparency section in widget', async ({ page }) => {
    const transparency = page.locator('brag-donation-widget >> text=Transparency & Trust');
    await expect(transparency).toBeVisible();
  });
});
