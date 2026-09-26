import { test, expect } from '../fixtures/pagesFixture.js';
import users from '../test-data/users.json';

test('@regression Verify Checkout Process', async ({
    checkoutPage
}) => {

 
    await checkoutPage.clickCheckoutButton();

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