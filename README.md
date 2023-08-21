# playwright UI and API tests

This repository contains simple automation tests for UI and API using data-driven approach.

If you want to run test locally, please follow these steps:

Clone this repository
Make sure you have node.js installed. If you don't, please visit official website for instructions
Run npm install to install node modules.

UI tests run is done for in 3 browsers (chromium, firefox, webkit) in parallel.

For UI by default tests running in headless mode.

To run UI tests use command: npx playwright test --headed - or without headed if healess is ok for you.

To run API test: npx playwright test --grep @api --config=api-config.ts

To check the report: npx playwright show-report
