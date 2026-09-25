import { test } from '@playwright/test';
import users from '../test-data/users.json';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Verify Checkout Process', async ({ page }) => {

    //await page.goto('/');

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    await inventoryPage.verifyPageTitle();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyRemoveBackpackButton();

    await cartPage.clickCartIcon();
    await cartPage.verifyPageTitle();
    await cartPage.verifyCartItem();
    await cartPage.verifyCartItemName();

    // Checkout
    await checkoutPage.clickCheckoutButton();

    await checkoutPage.verifyCheckoutTitle();

    await checkoutPage.fillCheckoutInformation(
        users.checkoutUser.firstName,
        users.checkoutUser.lastName,
        users.checkoutUser.postalCode
    );

    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();

    await checkoutPage.verifycompleteTitle();
    await checkoutPage.verifysuccessMessage();

});