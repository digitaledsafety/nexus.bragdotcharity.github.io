import time
from playwright.sync_api import sync_playwright, expect

def verify_gasless_config():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create a context with local storage
        context = browser.new_context()
        page = context.new_page()

        # Mock wallet connection in localStorage before navigating
        page.add_init_script("""
            localStorage.setItem('wallet_connected', 'true');
            localStorage.setItem('brag_address', '0x1234567890123456789012345678901234567890');
        """)

        # Go to the local server
        page.goto("http://localhost:3000/#/manager")

        # Wait for the page to load
        page.wait_for_selector("#toggleGasless", timeout=10000)

        # Take a screenshot before toggling
        page.screenshot(path="verification/manager_initial.png")

        # Toggle Gasless Mode (use force=True because the input is hidden behind a peer div)
        toggle = page.locator("#toggleGasless")
        toggle.click(force=True)

        # Wait for config fields to appear
        gasless_config = page.locator("#gaslessConfig")
        expect(gasless_config).to_be_visible()

        # Fill in some values
        page.locator("#alchemyApiKey").fill("test-api-key-123")
        page.locator("#alchemyPolicyId").fill("test-policy-id-456")

        # Trigger change to ensure it saves
        page.locator("#alchemyApiKey").evaluate("el => el.dispatchEvent(new Event('change'))")
        page.locator("#alchemyPolicyId").evaluate("el => el.dispatchEvent(new Event('change'))")

        # Take a screenshot after toggling and filling
        page.screenshot(path="verification/gasless_config_visible.png")

        # Refresh the page to verify persistence
        page.reload()
        page.wait_for_selector("#toggleGasless", timeout=10000)

        # Check if values are still there
        expect(page.locator("#alchemyApiKey")).to_have_value("test-api-key-123")
        expect(page.locator("#alchemyPolicyId")).to_have_value("test-policy-id-456")

        page.screenshot(path="verification/gasless_config_persisted.png")

        browser.close()

if __name__ == "__main__":
    verify_gasless_config()
