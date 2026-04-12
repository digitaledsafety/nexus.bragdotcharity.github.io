const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1200 });
  // Navigate to product 0
  await page.goto('http://localhost:3000/#/product?id=0&addr=0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/product_final_dual_state.png', fullPage: true });
  await browser.close();
})();
