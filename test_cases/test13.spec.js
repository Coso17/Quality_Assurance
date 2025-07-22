import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.locator('.nav.nav-pills.nav-justified > li > a').first().click();
    await page.locator('#quantity').click();
    await page.locator('#quantity').fill('4');
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator('#product-1')).toContainText('4');
});