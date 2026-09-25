 import { test, expect } from '@playwright/test';

// test('GET Users API', async ({ request }) => {

//     const response = await request.get(
//         'https://reqres.in/api/users?page=2'
//     );

//     expect(response.status()).toBe(200);

//     const responseBody = await response.json();

//     console.log(responseBody);

//     expect(responseBody.page).toBe(2);
// });



test('Create User API', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'Navin',
                job: 'Automation Tester'
            }
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe('Navin');
    expect(responseBody.job).toBe('Automation Tester');
});