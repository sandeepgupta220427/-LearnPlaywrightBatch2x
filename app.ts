import { chromium } from 'playwright';

(async () => {
  // 1. Launch actual Google Chrome and make it visible (headless: false)
  const browser = await chromium.launch({ 
    headless: false,
    channel: 'chrome' 
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();

  // 2. Navigate to Google
  await page.goto('https://www.google.com');

  // 3. Accept Google cookie consent if it pops up (common in many regions)
  try {
    // Looks for the "Accept all" button and clicks it if it appears
    await page.locator('button:has-text("Accept all")').click({ timeout: 3000 });
  } catch (e) {
    // If no popup appears, just move on
  }

  // 4. Find the search box, type "wikipedia", and press Enter
  const searchBox = page.locator('textarea[name="q"], input[name="q"]');
  await searchBox.fill('wikipedia');
  await searchBox.press('Enter');

  // 5. Wait for the search results page to load
  await page.waitForLoadState('networkidle');

  // 6. Pause for 5 seconds (5000 milliseconds)
  console.log("Waiting for 5 seconds...");
  await page.waitForTimeout(5000);

  // 7. Close the browser
  await browser.close();
  console.log("Browser closed successfully!");
})();