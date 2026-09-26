# Playwright SauceDemo Automation Framework

## Project Overview

This project is an End-to-End Test Automation Framework developed using Playwright and JavaScript following the Page Object Model (POM) design pattern.

The framework automates key SauceDemo workflows and API validations while maintaining a reusable, scalable, and maintainable automation architecture.

## Features

* UI Automation Testing
* API Testing (GET, POST, PUT, DELETE)
* Page Object Model (POM)
* Playwright Fixtures
* JSON Test Data Management
* Cross Browser Testing (Chromium, Firefox, WebKit)
* Smoke Testing
* Regression Testing
* Git & GitHub Integration
* GitHub Actions CI Workflow

## Project Structure

```text
pages/
├── LoginPage.js
├── InventoryPage.js
├── CartPage.js
└── CheckoutPage.js

fixtures/
└── pagesFixture.js

tests/
├── login.spec.js
├── cart.spec.js
├── checkout.spec.js
└── api.spec.js

test-data/
└── users.json

utils/
└── testDataReader.js
```

## Test Scenarios Covered

### UI Automation

* User Login Validation
* Product Add to Cart Validation
* Cart Validation
* Checkout Process Validation
* Order Completion Validation

### API Automation

* GET Users API Validation
* Create User API (POST)
* Update User API (PUT)
* Delete User API (DELETE)
* Response Body Validation
* Status Code Validation

## Technologies Used

* Playwright
* JavaScript (ES6)
* Page Object Model (POM)
* Playwright Fixtures
* JSON
* REST API Testing
* Git
* GitHub
* GitHub Actions
* Visual Studio Code

## Framework Highlights

* Page Object Model (POM) Architecture
* Reusable Methods and Page Objects
* JSON-Based Test Data Management
* Playwright Hooks (beforeEach)
* Base URL Configuration
* Cross Browser Execution
* Parallel Test Execution
* Smoke and Regression Test Filtering
* API and UI Test Coverage
* Version Control using Git and GitHub

## API Testing Coverage

### GET Request

* Validate Status Code
* Validate Response Body
* Validate User Data
* Validate Array Length

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

## Key Achievements

* Developed a reusable Playwright automation framework from scratch.
* Implemented Page Object Model (POM) architecture for maintainable test automation.
* Integrated UI and API automation testing within a single framework.
* Implemented Playwright Fixtures for reusable page object initialization.
* Executed tests across Chromium, Firefox, and WebKit browsers.
* Managed source code using Git and GitHub.
* Implemented Smoke and Regression test execution strategies.
* Added GitHub Actions workflow for CI/CD execution.

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run Login Test:

```bash
npx playwright test tests/login.spec.js
```

Run Checkout Test:

```bash
npx playwright test tests/checkout.spec.js
```

Run API Tests:

```bash
npx playwright test tests/api.spec.js
```

Run Smoke Tests:

```bash
npx playwright test -g "@smoke"
```

Run Regression Tests:

```bash
npx playwright test -g "@regression"
```

Run Chromium Tests:

```bash
npx playwright test --project=chromium
```

Run Tests in Headed Mode:

```bash
npx playwright test --headed
```

## Future Enhancements

* Custom Login Fixtures
* SQL Database Validation
* Advanced API Assertions
* CI/CD Pipeline Enhancements
* Test Reporting Improvements
* Database Validation Integration

## Author

**Navin Krishna**

Embedded Software Test Engineer

Bengaluru, Karnataka, India

### Technical Skills

* Embedded Software Testing
* Playwright Automation Testing
* API Testing
* Manual Testing
* Functional Testing
* System Testing
* Regression Testing
* Verification & Validation
* MQTT
* Git & GitHub

## GitHub Repository

Source Code:

https://github.com/NavinKrishna05/playwright-saucedemo-framework

## Project Status

Actively maintained and continuously enhanced as part of Playwright Automation Testing learning and framework development.
