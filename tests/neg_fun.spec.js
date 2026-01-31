import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests - Singlish to Sinhala Robustness', () => {

  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  });

  // Negative Test Cases List
  const negativeScenarios = [
    { id: 'Neg_Fun_0001', input: 'mama ගෙදර yanavaa.', expected: 'මම ගෙදර යනවා.' },
    { id: 'Neg_Fun_0002', input: '', expected: '' },
    { id: 'Neg_Fun_0003', input: '@#$%^&*()!', expected: '@#$%^&*()!' },
    { id: 'Neg_Fun_0004', input: 'mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama yanavaa', expected: 'මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම යනවා' },
    { id: 'Neg_Fun_0005', input: '12345678', expected: '12345678' },
    { id: 'Neg_Fun_0006', input: 'hello world', expected: 'හෙල්ලෝ වෝර්ල්ඩ්' },
    { id: 'Neg_Fun_0007', input: 'mmm gggddr ynvvv', expected: 'ම්ම්ම් ග්ග්ග්ද්ද්ර් ය්න්ව්ව්ව්' },
    { id: 'Neg_Fun_0008', input: '<script>alert(test)/script', expected: '<script>alert(test)/script' },
    { id: 'Neg_Fun_0009', input: '7.30AMta karala office eken off wenna ona.', expected: '7.30 ට කරලා ඔෆිස් එකෙන් off වෙන්න ඕන.' },
    { id: 'Neg_Fun_0010', input: 'mama 你好 yanavaa', expected: 'මම 你好 යනවා' },
  ];

  for (const scenario of negativeScenarios) {
    test(`${scenario.id}: Testing Robustness with "${scenario.input}"`, async ({ page }) => {
      const inputField = page.locator('textarea').first();
      const outputField = page.locator('div:has-text("Sinhala") + div').nth(1);

      // Single Input 
      await inputField.fill(scenario.input);

      // waiting 2 minitues to translate sentence 
      await page.waitForTimeout(2000);

      // Actual Output
      const actualOutput = await outputField.innerText();
      
      // Display in Terminal
      console.log(`${scenario.id} Actual Output: ${actualOutput}`);

    
      await expect(outputField).not.toHaveText(scenario.expected);
    });
  }
});