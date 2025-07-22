import { test, expect,chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
        const context = await browser.newContext();
        const page = await context.newPage();
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('heading', { name: 'All Products' }).click();
  await page.locator('.nav.nav-pills.nav-justified > li > a').first().click();
  await page.getByText('Blue Top Category: Women >').click();
  await page.getByRole('heading', { name: 'Blue Top' }).click();
  await page.getByText('Category: Women > Tops').click();
  await page.getByText('Category: Women > Tops').click();
  await page.getByText('Rs.').click();
  await page.getByText('Availability: In Stock').click();
  await page.getByText('Condition:').click();
  await page.getByText('Condition: New').click();
  await page.getByText('Brand: Polo').click();
});