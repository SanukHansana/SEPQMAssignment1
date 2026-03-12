import { test as base, expect } from '@playwright/test';

// Create a custom fixture
const test = base.extend({
  myPage: async ({ page }, use) => {
    
    console.log("Setting up custom fixture");

    // setup
    await page.goto('https://example.com');

    // provide the prepared page to the test
    await use(page);

    console.log("Teardown after test");
  },
});

// Test using the custom fixture
test('check title using custom fixture', async ({ myPage }) => {
  await expect(myPage).toHaveTitle('Example Domain');
});

test('check heading using custom fixture', async ({ myPage }) => {
  await expect(myPage.locator('h1')).toHaveText('Example Domain');
});