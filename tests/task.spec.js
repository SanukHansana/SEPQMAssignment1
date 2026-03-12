import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('Setup: opening TodoMVC page');

  await page.goto('https://demo.playwright.dev/todomvc/#/');

  await page.locator('.new-todo').fill('Learn Playwright');
  await page.locator('.new-todo').press('Enter');

  await page.locator('.new-todo').fill('Prepare viva');
  await page.locator('.new-todo').press('Enter');

  await page.locator('.todo-list li .toggle').nth(0).check();

  console.log('Setup complete');
});

test.afterEach(async () => {
  console.log('Teardown: test finished');
});

test('should show completed todo in completed filter', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/completed');

  const completedItems = page.locator('.todo-list li');
  await expect(completedItems).toHaveCount(1);
  await expect(completedItems.nth(0)).toContainText('Learn Playwright');
});

test('should not show active todo in completed filter', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/completed');

  const completedItems = page.locator('.todo-list li');
  await expect(completedItems).not.toContainText(['Prepare viva']);
});