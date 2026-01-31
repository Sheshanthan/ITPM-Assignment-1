# ITPM-Assignment-1
# IT23712690-P Sheshanthan
# Singlish to Sinhala Transliteration Testing

## Student Details
- *Name:* P Sheshanthan
- *Registration Number:* IT23712690
- *Batch:* BSc (Hons) in Information Technology - Year 3

## Project Overview
This project focuses on automated functional and UI testing for a Singlish-to-Sinhala transliteration system (https://www.swifttranslator.com/). The testing is performed using *Playwright* to ensure accuracy, robustness, and usability of the application.

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation Guide
1. *Clone the repository:*
   ```bash
   git clone https://github.com/Sheshanthan/ITPM-Assignment-1.git

2 Navigate to the project directory:cd ITPM-Assignment-1

3 Install necessary dependencies:npm install

4 Install Playwright Browsers:npx playwright install

5 Running the Tests
  Run all tests (Chromium, Firefox, Webkit):npx playwright test
  Run tests in headed mode (to see the browser):npx playwright test --headed

6 Run a specific test file:npx playwright test tests/positivetest.spec.js

7 After running the tests, a detailed HTML report is generated:npx playwright show-report