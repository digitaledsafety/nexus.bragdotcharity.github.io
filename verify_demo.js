import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Test the demo product page
    console.log('Navigating to product.html?id=demo...');
    await page.goto('http://localhost:8080/product.html?id=demo');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/home/jules/verification/product_demo.png', fullPage: true });

    // Test the discover page with demo link
    console.log('Navigating to discover.html...');
    await page.goto('http://localhost:8080/discover.html');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/home/jules/verification/discover_with_demo_link.png', fullPage: true });

    await browser.close();
    console.log('Screenshots saved.');
})();
