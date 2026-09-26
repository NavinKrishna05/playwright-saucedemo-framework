import { test,expect } from '../fixtures/pagesFixture.js';
import users from '../test-data/users.json';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});



test('@smaoke Verify Backpack In Cart', async ({
    loginPage,
    inventoryPage,
    cartPage
}) => {      
            await loginPage.login(
            users.validUser.username,
            users.validUser.password);

    await inventoryPage.verifyPageTitle();

    await inventoryPage.addBackpackToCart();

    await inventoryPage.verifyRemoveBackpackButton();

  
    await cartPage.clickCartIcon();
    await cartPage.verifyPageTitle();
    await cartPage.verifyCartItem();
    await cartPage.verifyCartItemName();

});