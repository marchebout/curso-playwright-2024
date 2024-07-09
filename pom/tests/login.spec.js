import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');
const { InventoryPage } = require('../pages/inventory-page');
const { CREDENTIALS, URLS, MESSAGES } = require('../data/constants')

test('Login functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await page.goto(URLS.URL);
  await loginPage.submitLoginForm(CREDENTIALS.USR,CREDENTIALS.PSW);
  await inventoryPage.validateTitle();
});

test('Login functionality - bad username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(URLS.URL);
  await loginPage.submitLoginForm(CREDENTIALS.WRONGUSR,CREDENTIALS.PSW);
  await expect(loginPage.wrongmessage).toHaveText(MESSAGES.WRONGUSRMESSAGE)
});