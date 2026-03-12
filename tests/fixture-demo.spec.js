import { test, expect } from '@playwright/test';

// This runs automatically before every test
test.beforeEach(async ({ page }) => {
  console.log('Opening website before test...');
  await page.goto('https://example.com');
});

test('check page title', async ({ page }) => {
  await expect(page).toHaveTitle('Example Domain');
});

test('check heading text', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Example Domain');
});