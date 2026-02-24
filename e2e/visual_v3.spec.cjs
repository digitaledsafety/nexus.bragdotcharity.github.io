const { test, expect } = require('@playwright/test');
const path = require('path');

test('capture screenshot v3', async ({ page }) => {
  const filePath = 'file://' + path.resolve(__dirname, '../frontend/landing.html');
  await page.goto(filePath);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verify_widget_v3.png', fullPage: true });
});
