import { test, expect } from '../fixtures/pagesFixture.js';
import users from '../test-data/users.json';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('@smoke Login And Add To Cart Test', async ({
    page,
    loginPage,
    inventoryPage,
}) => {

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    await inventoryPage.verifyPageTitle();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyRemoveBackpackButton();

});