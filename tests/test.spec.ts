import { test, expect } from '@playwright/test';


test('log first notebook', async ({ page }) => {
  await page.goto('https://rozetka.com.ua/');
  await expect(page).toHaveURL('https://rozetka.com.ua/');

  await page.getByRole('link', { name: 'Ноутбуки та комп’ютери' }).click();
  await page.locator('div').filter({ hasText: 'Ноутбуки' }).nth(4).click();

  const firstNotebook = {
    name: await page.locator('rz-product-tile .tile-title').first().textContent(),
    price: await page.locator('rz-product-tile .price').first().textContent(),
  }
  
  console.log(firstNotebook);
});