from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto("https://the-internet.herokuapp.com/dynamic_loading/1")
    
    page.get_by_text("Start").click()
    
    # Wait for the 'Loading...' text to completely disappear
    loading_bar = page.locator("#loading")
    expect(loading_bar).to_be_hidden(timeout=10000)
    
    # Now it is safe to read the success message
    print("Loading finished! Message is:", page.locator("#finish").inner_text())
    browser.close()