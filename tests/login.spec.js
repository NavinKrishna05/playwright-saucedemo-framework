import {test} from '@playwright/test';
import users from '../test-data/users.json';    
import {LoginPage} from '../pages/LoginPage.js';
import {InventoryPage} from '../pages/InventoryPage.js';    

test('Valid Login Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    await inventoryPage.verifyPageTitle();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyRemoveBackpackButton();

});
