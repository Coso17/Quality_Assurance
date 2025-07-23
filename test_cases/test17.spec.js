import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.locator('.btn.btn-default').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('ol')).toContainText('Home Shopping Cart');
  await page.getByRole('cell', { name: '' }).locator('a').click();
  await expect(page.locator('#empty_cart')).toContainText('Cart is empty! Click here to buy products.');
});