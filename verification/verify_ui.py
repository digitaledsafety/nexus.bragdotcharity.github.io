from playwright.sync_api import sync_playwright

def verify_product_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Navigate directly to a product page with some dummy params
        page.goto("http://localhost:3000/#/product?id=0&addr=0x0000000000000000000000000000000000000000")

        # Wait for the page to load and JS to execute
        page.wait_for_timeout(5000)

        # Take screenshot
        page.screenshot(path="verification/product_page_ui.png", full_page=True)

        # Check if the new elements are in the DOM (even if hidden)
        listing_exists = page.query_selector("#listingExists")
        seller_actions = page.query_selector("#sellerActions")

        print(f"Listing element found: {listing_exists is not None}")
        print(f"Seller actions element found: {seller_actions is not None}")

        browser.close()

if __name__ == "__main__":
    verify_product_page()
