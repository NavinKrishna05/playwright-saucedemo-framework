# Playwright SauceDemo Automation Framework

## Project Overview

This project is an End-to-End Test Automation Framework developed using Playwright and JavaScript following the Page Object Model (POM) design pattern.

The framework automates key SauceDemo workflows and API validations while maintaining reusable, scalable, and maintainable test scripts.

## Features

### UI Automation

* User Login Validation
* Product Add to Cart Validation
* Cart Validation
* Checkout Process Validation
* Order Completion Validation

### API Automation

* GET User API Validation
* Create User API (POST)
* Update User API (PUT)
* Delete User API (DELETE)
* Response Body Validation
* Status Code Validation

## Framework Structure

```text
pages/
├── LoginPage.js
├── InventoryPage.js
├── CartPage.js
├── CheckoutPage.js

tests/
├── login.spec.js
├── addToCart.spec.js
├── cart.spec.js
├── checkout.spec.js
├── api.spec.js

test-data/
├── users.json

utils/
├── testDataReader.js
```

## Technologies Used

* Playwright
* JavaScript
* Page Object Model (POM)
* JSON
* API Testing
* Git
* GitHub
* VS Code

## Framework Design

* Page Object Model (POM)
* Reusable Methods
* JSON Test Data Management
* Playwright Hooks (beforeEach)
* Base URL Configuration
* Cross Browser Execution

## API Testing Coverage

### GET Request

* Validate Status Code
* Validate User Data
* Validate Response Body

### POST Request

* Create User
* Validate Created Data
* Validate Status Code

### PUT Request

* Update User Details
* Validate Updated Response
* Validate Status Code

### DELETE Request

* Delete User
* Validate Status Code

## How to Run Tests

### Install Dependencies

```bash
npm install
```

### Run All Tests

```bash
npx playwright test
```

### Run Login Test

```bash
npx playwright test tests/login.spec.js
```

### Run Checkout Test

```bash
npx playwright test tests/checkout.spec.js
```

### Run API Tests

```bash
npx playwright test tests/api.spec.js
```

### Run Tests in Chromium

```bash
npx playwright test --project=chromium
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## GitHub Repository

Source Code:
https://github.com/NavinKrishna05/playwright-saucedemo-framework

## Author

**Navin Krishna**

Embedded Software Test Engineer

Bengaluru, Karnataka, India

### Skills

* Embedded Software Testing
* Manual Testing
* Playwright Automation Testing
* API Testing
* Functional Testing
* System Testing
* Regression Testing
* Verification & Validation
* Git & GitHub
