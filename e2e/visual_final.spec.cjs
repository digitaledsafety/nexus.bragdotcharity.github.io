const { test, expect } = require('@playwright/test');
const path = require('path');

test('capture landing and embed', async ({ page }) => {
  const landingPath = 'file://' + path.resolve(__dirname, '../frontend/landing.html');
  await page.goto(landingPath);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'final_landing.png', fullPage: true });

  const embedPath = 'file://' + path.resolve(__dirname, '../frontend/embed-test.html');
  await page.goto(embedPath);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'final_embed.png', fullPage: true });
});
