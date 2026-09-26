import { test } from '../fixtures/pagesFixture.js';

test('@smoke Add Backpack To Cart', async ({
    inventoryPage
}) => {

    await inventoryPage.verifyPageTitle();

    await inventoryPage.addBackpackToCart();

    await inventoryPage.verifyRemoveBackpackButton();

    await inventoryPage.removeBackpackFromCart();

    await inventoryPage.verifyAddBackpackButton();
});