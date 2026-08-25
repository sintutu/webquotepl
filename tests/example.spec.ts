import { test, expect } from '@playwright/test';

test('vehicle quote flow reaches the next step', async ({ page }) => {
  await page.goto('/general?utm_source=getaquote', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByRole('button', {
    name: 'Vehicle Vehicle +',
  }).click();
  await page.getByRole('button', { name: /Let's get started/i }).click();

  await expect(page.getByRole('button', { name: /Next/i })).toBeVisible();
});
