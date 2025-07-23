import { test, expect,chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
        const context = await browser.newContext();
        const page = await context.newPage();
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await expect(page.locator('section')).toContainText('Women - Dress Products');
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Tshirts' }).click();
  await expect(page.locator('section')).toContainText('Men - Tshirts Products');
});