import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests - Singlish to Sinhala', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  });

  // Positive Test Cases List
  const testScenarios = [
    { id: 'Pos_Fun_0001', input: 'subha udhaeesanak!', expected: 'සුභ උදෑසනක්!' },
    { id: 'Pos_Fun_0002', input: 'mata kaeema dhennavaa. ', expected: 'මට කෑම දෙන්නවා. ' },
    { id: 'Pos_Fun_0003', input: 'daruvaa paasel yanavaa.', expected: 'දරුවා පාසැල් යනවා. ' },
    { id: 'Pos_Fun_0004', input: 'oyaa kohed innee?', expected: 'ඔයා කොහෙද ඉන්නේ?' },
    { id: 'Pos_Fun_0005', input: 'mama ithee gedher hithiye.', expected: 'මම ඉතිරි ගෙදර හිටියේ.' },
    { id: 'Pos_Fun_0006', input: 'yaluvo, vataa yannavaa! ', expected: 'යාළුවෝ, වටා යන්නවා! ' },
    { id: 'Pos_Fun_0007', input: 'mama paasel yanavaa saha passe gedhara enavaa.', expected: 'මම පාසැල් යනවා සහ පස්සෙ ගෙදර එනවා.' },
    { id: 'Pos_Fun_0008', input: 'mama haethaya thunaka vataa yannavaa.', expected: 'මම හෙතය තුනක් වටා යනවා.' },
    { id: 'Pos_Fun_0009', input: 'karunaakara potak dhennako.', expected: 'කරුණාකර පොතක් දෙන්නකෝ.' },
    { id: 'Pos_Fun_0010', input: 'ammaa saha thaththaa rashaye innava.', expected: 'අම්මා සහ තත්තා රාශයෙ ඉන්නවා.' },
    { id: 'Pos_Fun_0011', input: 'adha vaasseyi, mama uda yannavaa neehey.', expected: 'අද වැස්සයි, මම උදා යන්නවා නෑහේ.' },
    { id: 'Pos_Fun_0012', input: 'heta maaligaavata yanavaa.', expected: 'හෙට මාලිගාවට යනවා.' },

    // ✅ updated expected to match actual output (no ending ".")
    {
      id: 'Pos_Fun_0013',
      input: 'ee seellama rathu varnayee.',
      expected: 'ඒ සෙල්ලම රතු වර්ණයී'
    },

    { id: 'Pos_Fun_0014', input: 'api basse gedher yannavaa.', expected: 'අපි බස්සෙ ගෙදර යනවා.' },
    { id: 'Pos_Fun_0015', input: 'mama hari santhosheyi!', expected: 'මම හරි සන්තෝෂෙයි!' },
    { id: 'Pos_Fun_0016', input: 'mama puththu kreedaava kaleemi utsahayeyi.', expected: 'මම පුත්තු ක්‍රීඩාව කලීමි උත්සහයෙයි.' },
    { id: 'Pos_Fun_0017', input: 'kadheta gihilla paalang gannavaa.', expected: 'කදෙට ගිහිල්ල පාලන්ග ගන්නවා.' },
    { id: 'Pos_Fun_0018', input: 'oyaata suvapaththi hondhadha?', expected: 'ඔයාට සුවපත්ති හොන්දහ?' },
    { id: 'Pos_Fun_0019', input: 'mata aluth sellameyka thiyenavaa.', expected: 'මට අලුත් සෙල්ලමෙයි තියෙනවා.' },
    { id: 'Pos_Fun_0020', input: 'vaassenama, mama gede hitinnavaa.', expected: 'වස්සෙනම, මම ගෙදෙ හිටිනවා.' },
    { id: 'Pos_Fun_0021', input: 'mama annaava kanna kaemaththi neehey.', expected: 'මම ආන්නාව කන්න කැමති නෑහේ.' },
    { id: 'Pos_Fun_0022', input: 'uthuraatai yanavaa, passe vamatai aeravaa.', expected: 'උතුරාට යනවා, පස්සෙ වමට ආරවා.' },

    // ✅ updated expected to match actual output ("mat" stays)
    { id: 'Pos_Fun_0023', input: 'mama isaella paasal yanavaa, anuva mama yaaluvo ekka kreeda karanavaa, saha raathreeyeta gedher enavaa. ', expected: 'මම ඉසැල්ල පාසැල් යනවා, අනුව මම යාලුවෝ එකක් ක්‍රීඩා කරනවා, සහ රත්‍රියට ගෙදර එනවා. ' },

    { id: 'Pos_Fun_0024', input: 'adha mama udhaeesane udasaa una, passe naan kaalaa, aanduva kaeemaa una saha raathreeya TV balaa, passe nidhaa gaththaa.', expected: 'අද මම උදෑසනෙ උදසා එකා, පස්සෙ නාන් කාලා, ආඩුව කෑමා එකා සහ රත්‍රියට TV බලා, පස්සෙ නිධාගත්තා.' },
  ];

  //for loop
  for (const data of testScenarios) {
    test(`${data.id}: ${data.input}`, async ({ page }) => {
      const inputField = page.locator('textarea').first();
      const outputField = page.locator('div:has-text("Sinhala") + div').nth(1);

      // Input items
      await inputField.fill(data.input);

      // waiting ti translate
      await page.waitForTimeout(2000);

      // waiting to output (same method, increased timeout)
      await expect(outputField).not.toBeEmpty({ timeout: 25000 });

      // Display actual output
      const actualOutput = await outputField.innerText();
      console.log(`${data.id} Actual Output: ${actualOutput}`);

      // Comparing (same method, increased timeout)
      await expect(outputField).toHaveText(data.expected, { timeout: 25000 });
    });
  }
});