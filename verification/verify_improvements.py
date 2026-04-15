from playwright.sync_api import sync_playwright
import time
import os

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Set mock wallet state
        page.goto("http://localhost:3000")
        page.evaluate("""
            localStorage.setItem('wallet_connected', 'true');
            localStorage.setItem('brag_address', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        """)

        # 1. Verify Manager Page & Address Config
        page.goto("http://localhost:3000/#/manager")
        page.wait_for_selector("#badgeBragNFT")

        # Take screenshot of Manager setup
        page.screenshot(path="verification/manager_setup.png")
        print("Captured manager_setup.png")

        # 2. Verify Marketplace and Cart
        page.goto("http://localhost:3000/#/marketplace")

        # Wait for demo card or real card
        # Since I deployed, there might not be any minted NFTs yet, so demo card should show.
        page.wait_for_selector(".glass-card")

        # Add to cart
        page.click(".add-to-cart-btn")
        time.sleep(1) # wait for sidebar animation

        page.screenshot(path="verification/cart_sidebar.png")
        print("Captured cart_sidebar.png")

        # Proceed to Offers
        page.click("button:has-text('Proceed to Offers')")

        # Wait for Offers view
        page.wait_for_selector("#offersContainer")
        time.sleep(1)

        page.screenshot(path="verification/batch_offers.png")
        print("Captured batch_offers.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
