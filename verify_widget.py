import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Verify landing.html (Widget in dark theme container)
        file_path = "file://" + os.path.abspath("frontend/landing.html")
        await page.goto(file_path)
        await page.wait_for_selector('brag-donation-widget')
        # Wait a bit for shadow DOM to settle
        await asyncio.sleep(1)
        await page.screenshot(path="verify_widget_landing.png", full_page=True)

        # Verify embed-test.html (Widget in light theme host site)
        file_path = "file://" + os.path.abspath("frontend/embed-test.html")
        await page.goto(file_path)
        await asyncio.sleep(1)
        await page.screenshot(path="verify_widget_embed.png", full_page=True)

        print("Screenshots captured.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
