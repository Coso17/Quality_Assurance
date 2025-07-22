import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('heading', { name: 'All Products' }).click();
    await page.getByRole('textbox', { name: 'Search Product' }).click();
    await page.getByRole('textbox', { name: 'Search Product' }).fill('Blue Top');
    await page.getByRole('button', { name: '' }).click();
});