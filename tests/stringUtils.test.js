const test = require('node:test');
const assert = require('node:assert/strict');
const { capitalize, reverseString, isPalindrome } = require('../src/stringUtils');

test('Utilidades de Texto - Pruebas Unitarias', async (t) => {
  await t.test('debe capitalizar la primera letra', () => {
    assert.strictEqual(capitalize('jenkins'), 'Jenkins');
    assert.strictEqual(capitalize(''), '');
  });

  await t.test('debe invertir una cadena de texto', () => {
    assert.strictEqual(reverseString('pipeline'), 'enilepip');
  });

  await t.test('debe detectar correctamente palíndromos', () => {
    assert.strictEqual(isPalindrome('reconocer'), true);
    assert.strictEqual(isPalindrome('Anita lava la tina'), true);
    assert.strictEqual(isPalindrome('software'), false);
  });

  await t.test('debe lanzar TypeError si el argumento no es una cadena', () => {
    assert.throws(() => capitalize(123), { name: 'TypeError' });
  });
});
