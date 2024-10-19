import { test, expect } from '@playwright/test';

test.describe('Cat shelter', () => {
    test('Add new cat', async ({ page }) => {
        await page.goto('/catshelter');
       // await page.getByRole('button', { name: "Add Cat"}).click();
        await page.getByLabel('Add Cat page').click();
        await page.getByLabel('Name').fill('Mr. Whiskers');
        await page.getByLabel('Description').fill('Calico');
        await page.locator('input[value="inside"]').click();
        await page.getByRole('button' , { name:"Add Cat" }).click();
        const mrWhiskers = page.getByText('Mr. Whiskers');
        await expect(mrWhiskers).toBeVisible();
      });

    test('Edit cat', async ({ page }) => {
        await page.goto('/catshelter');
        const mrWhiskers = page.getByText('Mr. Whiskers');
        await mrWhiskers.click();
        await page.locator('input[name="name"]').fill('Joey Donuts');
        await page.getByRole('button', { name: "Save" }).click();
        const joeyDonuts = page.getByText('Joey Donuts');
        await expect(joeyDonuts).toBeVisible();
      });
  
    test('Remove cat from shelter', async ({ page }) => {
        await page.goto('/catshelter');
        const joeyDonuts = page.getByText('Joey Donuts');
        const mrWhiskers = page.getByText('Mr. Whiskers');
        await joeyDonuts.click();
        await page.getByRole('button', { name: "Delete" }).click();
        await expect(mrWhiskers).not.toBeVisible();
        await expect(joeyDonuts).not.toBeVisible();
    });
  });