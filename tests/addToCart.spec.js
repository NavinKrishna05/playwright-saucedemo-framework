import { test, expect } from '../fixtures/pagesFixture.js';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});
  

test('@smoke Add Backpack To Cart', async ({  
    inventoryPage
     }) => {

    await inventoryPage.verifyPageTitle();

    await inventoryPage.addBackpackToCart();

    await inventoryPage.verifyRemoveBackpackButton();

    await inventoryPage.removeBackpackFromCart();

    await inventoryPage.verifyAddBackpackButton();

});