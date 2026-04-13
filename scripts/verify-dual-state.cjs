const { chromium } = require('playwright');

async function verifyDualState() {
  const browser = await chromium.launch({ headless: true });

  const donorAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const nonDonorAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const tokenId = "1";
  const contractAddr = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  console.log("--- TEST 1: DONOR ---");
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  page1.on('console', msg => console.log('DONOR PAGE LOG:', msg.text()));

  await page1.addInitScript(({ address }) => {
    window.localStorage.setItem('brag_address', address);
    window.localStorage.setItem('wallet_connected', 'true');
  }, { address: donorAddress });

  await page1.goto(`http://localhost:3000/#/product?id=${tokenId}&addr=${contractAddr}`);
  await page1.waitForTimeout(4000);

  const donorVisibility = await page1.evaluate(() => {
    const sec = document.getElementById('taxRecordSection');
    return {
      taxVisible: sec && !sec.classList.contains('hidden'),
      localStorageAddress: localStorage.getItem('brag_address')
    };
  });

  console.log('Donor Result:', donorVisibility);
  await page1.screenshot({ path: 'verification/donor_view.png', fullPage: true });
  if (!donorVisibility.taxVisible) throw new Error("Tax section should be visible for donor");


  console.log("\n--- TEST 2: NON-DONOR ---");
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  page2.on('console', msg => console.log('NON-DONOR PAGE LOG:', msg.text()));

  await page2.addInitScript(({ address }) => {
    window.localStorage.setItem('brag_address', address);
    window.localStorage.setItem('wallet_connected', 'true');
  }, { address: nonDonorAddress });

  await page2.goto(`http://localhost:3000/#/product?id=${tokenId}&addr=${contractAddr}`);
  await page2.waitForTimeout(4000);

  const nonDonorVisibility = await page2.evaluate(() => {
    const sec = document.getElementById('taxRecordSection');
    return {
      taxVisible: sec && !sec.classList.contains('hidden'),
      localStorageAddress: localStorage.getItem('brag_address')
    };
  });

  console.log('Non-Donor Result:', nonDonorVisibility);
  await page2.screenshot({ path: 'verification/non_donor_view.png', fullPage: true });
  if (nonDonorVisibility.taxVisible) throw new Error("Tax section should be hidden for non-donor");

  await browser.close();
  console.log("\nDual-State verification successful!");
}

verifyDualState().catch(err => {
  console.error(err);
  process.exit(1);
});
