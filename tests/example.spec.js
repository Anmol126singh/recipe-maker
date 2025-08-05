// @ts-check
import { test, expect } from '@playwright/test';

test.describe("Home Page", () => {
  test.beforeEach(async ({page})=>{
        await page.goto("http://localhost:5173/");

  })
  test("should display the correct heading", async ({ page }) => {



    // Replace 'Your Heading Text' with the actual text of your heading
    await expect(page.getByText("Chef Claude")).toBeVisible();

  });
  test("Form should work ",async({page})=>{
    await expect(page.getByPlaceholder("Oregaon etc")).toBeVisible();
    await expect(page.getByRole("button",{name:"+ Add ingredient"})).toBeVisible();

  })
  test("should be empty at the start ",async ({page})=>{
    await expect(page.getByTestId("indgredients")).toBeEmpty();
  })
  test("should add item to the list", async ({page})=>{
    const itembox = page.getByPlaceholder('Oregaon etc');
    itembox.fill("onion");
    await page.getByRole("button",{name:"+ Add ingredient"}).click();
    const item = page.getByTestId("item").nth(0);
    await expect(item).toHaveText("onion")
    await expect(itembox).toBeEmpty();
  })
});
