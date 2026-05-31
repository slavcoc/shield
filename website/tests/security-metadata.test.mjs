import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const filePath = path.resolve(process.cwd(), 'app/security/page.jsx');

test('security page metadata keeps the English ternary branch', () => {
  const source = fs.readFileSync(filePath, 'utf8');

  const hasEnglishBranch =
    /description:\s*isEn\s*\?\s*'Security architecture overview for Shield invoice and payment fraud detection workflows\.'/m.test(
      source
    );

  const hasMacedonianBranch =
    /:\s*'Преглед на безбедносната архитектура за процес на детекција на измами со фактури и плаќања\.'/m.test(
      source
    );

  assert.equal(hasEnglishBranch, true);
  assert.equal(hasMacedonianBranch, true);
});
