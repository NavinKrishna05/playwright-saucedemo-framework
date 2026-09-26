import { test,expect } from '../fixtures/pagesFixture.js';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});



test('@smaoke Verify Backpack In Cart', async ({
    cartPage
}) => {

    await cartPage.clickCartIcon();
    await cartPage.verifyPageTitle();
    await cartPage.verifyCartItem();
    await cartPage.verifyCartItemName();

});