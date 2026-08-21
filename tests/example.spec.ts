import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('General page appears', async ({ page }) => {
  await page.goto('https://www-acc.santam.co.za/webquotepl/general?utm_source=getaquote');

  const vehicleOption = page.getByRole('button', {
    name: 'Vehicle Vehicle +'
  });
  const getStartedButton = page.getByRole('button', { name: /Let's get started/i });
  await vehicleOption.click();
  await getStartedButton.click();
  const nextButton = page.getByRole('button', { name: /Next/i });
  await expect(nextButton).toBeVisible();
})
