import os
import time
from playwright.sync_api import sync_playwright, expect

def verify_seeding():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 2000})
        page = context.new_page()

        # Get absolute path to index.html
        current_dir = os.getcwd()
        index_path = f"file://{current_dir}/frontend/index.html"

        print(f"Navigating to {index_path}")
        page.goto(index_path)

        # Wait for the NFT grid to be populated
        # We seeded 50 NFTs, so we expect many cards.
        # Let's wait for at least one card that isn't a skeleton.
        try:
            # Skeletons have 'animate-pulse' class.
            # Real cards have 'brag-card rounded-xl overflow-hidden cursor-pointer'
            page.wait_for_selector(".brag-card.cursor-pointer", timeout=10000)
            print("Detected NFT cards in the grid.")
        except Exception as e:
            print(f"Warning: Timed out waiting for NFT cards: {e}")
            # Take a screenshot anyway to see what's there

        # Give it a bit more time to render more cards if they are coming in batches
        time.sleep(2)

        # Count the cards
        cards = page.locator(".brag-card.cursor-pointer")
        count = cards.count()
        print(f"Found {count} NFT cards.")

        # Capture screenshot
        screenshot_path = "/home/jules/verification/seeding_verification.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_seeding()
