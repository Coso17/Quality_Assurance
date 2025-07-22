import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByRole('link', { name: ' Products' }).click();
    await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.locator('.btn.btn-default.add-to-cart').first().click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator('#product-1 .cart_description')).toContainText('Blue Top');
    await expect(page.locator('#product-1 .cart_price')).toContainText('Rs. 500');
    await expect(page.locator('#product-1 .cart_quantity')).toContainText('1');
    await expect(page.locator('#product-1 .cart_total')).toContainText('Rs. 500');
    await expect(page.locator('#product-2 .cart_description')).toContainText('Men Tshirt');
    await expect(page.locator('#product-2 .cart_price')).toContainText('Rs. 400');
    await expect(page.locator('#product-2 .cart_quantity')).toContainText('1');
    await expect(page.locator('#product-2 .cart_total')).toContainText('Rs. 400');
});