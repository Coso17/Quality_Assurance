import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByRole('textbox', { name: 'Your email address' }).click();
    await page.getByRole('textbox', { name: 'Your email address' }).fill('carmensorina17@gmail.com');
    await page.getByRole('button', { name: '' }).click();
    await page.getByText('You have been successfully').click();
});