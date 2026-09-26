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

pages/

* LoginPage.js
* InventoryPage.js
* CartPage.js
* CheckoutPage.js

fixtures/

* pagesFixture.js

tests/

* login.spec.js
* cart.spec.js
* checkout.spec.js
* api.spec.js

test-data/

* users.json

utils/

* testDataReader.js

## Test Scenarios Covered

### UI Automation

* Verify Valid User Login
* Verify Product Add To Cart
* Verify Cart Functionality
* Verify Checkout Process
* Verify Order Completion

### API Automation

* GET Users API
* Create User API (POST)
* Update User API (PUT)
* Delete User API (DELETE)

## Technologies Used

* Playwright
* JavaScript (ES6)
* Page Object Model (POM)
* Fixtures
* JSON
* REST API Testing
* Git
* GitHub
* GitHub Actions

## Framework Highlights

* Reusable Page Object Model Architecture
* Centralized Test Data Management using JSON
* Reusable Playwright Fixtures
* Cross Browser Execution
* Parallel Test Execution
* Smoke & Regression Test Filtering
* API and UI Test Coverage
* Version Control using Git and GitHub

## Installation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

## Execute Tests

Run all tests:

npx playwright test

Run Login Test:

npx playwright test tests/login.spec.js

Run Checkout Test:

npx playwright test tests/checkout.spec.js

Run API Tests:

npx playwright test tests/api.spec.js

Run Smoke Tests:

npx playwright test -g "@smoke"

Run Regression Tests:

npx playwright test -g "@regression"

Run Chromium Only:

npx playwright test --project=chromium

## Future Enhancements

* Custom Login Fixtures
* SQL Database Validation
* Advanced API Assertions
* CI/CD Pipeline Enhancements
* Test Reporting Improvements

## Author

**Navin Krishna**

Embedded Software Test Engineer

Bengaluru, Karnataka, India

### Skills

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

### GitHub Repository

https://github.com/NavinKrishna05/playwright-saucedemo-framework

## Project Status

Actively maintained and enhanced as part of Playwright Automation Testing learning and framework development.
