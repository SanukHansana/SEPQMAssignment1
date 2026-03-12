import { test, expect } from '@playwright/test';

test('Assertions Demo', async ({ page }) => {

  await page.goto('https://kitchen.applitools.com/');

  const kitchenTitle = page.locator('text=The Kitchen');

  // Check element present
  await expect(kitchenTitle).toHaveCount(1);

  // Check element visible
  await expect(kitchenTitle).toBeVisible();

  // Check text matches
  await expect(kitchenTitle).toHaveText('The Kitchen');

  // Check text does not match
  await expect(kitchenTitle).not.toHaveText('ABCD');

});