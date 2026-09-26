import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

import users from '../test-data/users.json';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );
        await use(new InventoryPage(page));
    },

    cartPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await page.goto('/');

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );
        
        await inventoryPage.verifyPageTitle();
        await inventoryPage.addBackpackToCart();
        await inventoryPage.verifyRemoveBackpackButton();

        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        await page.goto('/');

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

        await use(new CheckoutPage(page));
    }

});

export { expect } from '@playwright/test';