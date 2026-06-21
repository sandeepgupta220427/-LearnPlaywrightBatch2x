import { test, expect } from '@playwright/test';

test('should successfully log into the secure area', async ({ page }) => {
    // 1. Navigate to the login page
    await page.goto('https://the-internet.herokuapp.com/login');

    // 2. Fill out the login form using explicit locators
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    // 3. Click the submit button
    await page.locator("button[type='submit']").click();

    // 4. Locate the success banner element in the DOM
    const flashMessage = page.locator('#flash');

    // 5. Get the text content to print it (optional)
    const successText = await flashMessage.textContent();
    console.log('Full message:', successText);

    // 6. Modern Assertion: Playwright automatically waits for the text to appear
    await expect(flashMessage).toContainText('You logged into a secure area!');

    // 7. Wait for 3 seconds before closing
    await page.waitForTimeout(3000);
});
