const { chromium } = require('playwright');

async function verifyMarketplace() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log("Navigating to Marketplace...");
  await page.goto('http://localhost:3000/#/marketplace');

  await page.waitForTimeout(5000);

  const nftCount = await page.evaluate(() => {
    return document.querySelectorAll('#nftGrid > div').length;
  });

  console.log(`NFTs found in marketplace: ${nftCount}`);
  await page.screenshot({ path: 'verification/marketplace_debug.png', fullPage: true });
  await browser.close();
}

verifyMarketplace().catch(console.error);
