import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
});