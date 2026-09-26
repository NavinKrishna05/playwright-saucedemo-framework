import { test } from '../fixtures/pagesFixture.js';
import users from '../test-data/users.json';


test('@smoke valid login test', async ({
    loginPage
}) => {

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

});