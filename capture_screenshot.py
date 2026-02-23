import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        # Set viewport to a common desktop size
        await page.set_viewport_size({"width": 1280, "height": 800})

        file_path = "file://" + os.path.abspath("frontend/landing.html")
        await page.goto(file_path)

        # Wait for some content to load if needed (though it's local)
        await page.wait_for_selector('h1')

        # Capture screenshot
        await page.screenshot(path="landing_page_latest.png", full_page=True)
        print("Screenshot captured as landing_page_latest.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
