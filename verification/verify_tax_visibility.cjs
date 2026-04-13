const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log('Navigating to home...');
  await page.goto('http://localhost:3000');

  console.log('Setting localStorage...');
  await page.evaluate(() => {
    localStorage.setItem('brag_address', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    localStorage.setItem('wallet_connected', 'true');
    // Also set contract address just in case it's not in contracts.js for some reason
    localStorage.setItem('addrBragNFT_31337', '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9');
  });

  console.log('Navigating to product 1...');
  await page.goto('http://localhost:3000/#/product/1');

  console.log('Waiting for load...');
  await page.waitForTimeout(5000); // Give it plenty of time

  const content = await page.content();
  console.log('Page content length:', content.length);

  const isTaxVisible = await page.isVisible('#tax-record-section');
  console.log('Is Tax Record Section Visible:', isTaxVisible);

  const isVitalityVisible = await page.isVisible('.bg-blue-900\\/20'); // The vitality box
  console.log('Is Vitality Box Visible:', isVitalityVisible);

  await page.screenshot({ path: 'verification/product_debug.png', fullPage: true });

  await browser.close();
})();
