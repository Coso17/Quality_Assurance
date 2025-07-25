import { test, expect, chromium } from '@playwright/test';

test('should add a candidate in OrangeHRM recruitment module', async () => {


  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Recruitment' }).click();

  await page.getByRole('button', { name: ' Add' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('fgdfgdf');

  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('gd');

  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('fdg');
  
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'Junior Account Assistant' }).click();
  await page.getByRole('textbox', { name: 'Type here' }).first().click();
  await page.getByRole('textbox', { name: 'Type here' }).first().fill('fd@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#oxd-toaster_1')).toContainText('SuccessSuccessfully Saved×');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/207');
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await expect(page.getByRole('table')).toContainText('Junior Account Assistantfgdfgdf gd fdg (Deleted)2025-25-07Application Initiated');
  await browser.close();
});
