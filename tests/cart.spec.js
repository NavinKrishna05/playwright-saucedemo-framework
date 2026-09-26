import { test,expect } from '../fixtures/pagesFixture.js';


test('@smoke Verify Backpack In Cart', async ({
    cartPage
}) => {

    await cartPage.clickCartIcon();
    await cartPage.verifyPageTitle();
    await cartPage.verifyCartItem();
    await cartPage.verifyCartItemName();

});