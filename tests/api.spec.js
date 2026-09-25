 import { test, expect } from '@playwright/test';

 //GET API

test('GET Users API', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users?page=2'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.page).toBe(2);
});

//POST API

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



//PUT API

test('Update User API', async ({ request }) => {

    const response = await request.put(
        'https://reqres.in/api/users/2',
        {
            data: {
                name: 'Navin',
                job: 'Senior Automation Tester'
            }
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe('Navin');
    expect(responseBody.job).toBe('Senior Automation Tester');
    expect(responseBody.updatedAt).toBeTruthy();

});


//DELETE API

test('Delete User API', async ({ request }) => {

    const response = await request.delete(
        'https://reqres.in/api/users/2'
    );

    console.log('Status Code:', response.status());

    expect(response.status()).toBe(204);

});