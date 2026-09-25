import { test, expect } from '@playwright/test';

test('GET Users API', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users?page=2'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.page).toBe(2);
});