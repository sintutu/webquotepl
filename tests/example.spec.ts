import { test, expect } from '@playwright/test';

test('vehicle quote flow reaches the next step', async ({ page }, testInfo) => {
  try {
    await page.goto('general?utm_source=getaquote', {
      waitUntil: 'domcontentloaded',
    });
    await page.screenshot({
      path: testInfo.outputPath('01-start-page.png'),
      fullPage: true,
    });

    await page.getByRole('button', {
      name: 'Vehicle Vehicle +',
    }).click();
    await page.screenshot({
      path: testInfo.outputPath('02-vehicle-selected.png'),
      fullPage: true,
    });

    await page.getByRole('button', { name: /Let's get started/i }).click();

    await expect(page.getByRole('button', { name: /Next/i })).toBeVisible();
  } finally {
    await page.screenshot({
      path: testInfo.outputPath('03-final-page.png'),
      fullPage: true,
    }).catch(() => {});
  }
});
