
import { test, expect, chromium } from '@playwright/test';
test('test 6', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('dan');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('dan.cosolan11@gmail.come');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('dan.cosolan11@gmail.comefr');
  await page.getByRole('textbox', { name: 'Subject' }).fill('ewfrr');
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('ewfrre');
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('gstdhfdjnfc gfncgn');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
});