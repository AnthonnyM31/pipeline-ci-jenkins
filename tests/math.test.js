const test = require('node:test');
const assert = require('node:assert/strict');
const { sum, subtract, multiply, divide, isEven } = require('../src/math');

test('Operaciones Matemáticas - Pruebas Unitarias', async (t) => {
  await t.test('debe sumar dos números correctamente', () => {
    assert.strictEqual(sum(2, 3), 999); // Error provocado: 2+3 no es 999
    assert.strictEqual(sum(-1, 1), 0);
  });

  await t.test('debe restar dos números correctamente', () => {
    assert.strictEqual(subtract(10, 4), 6);
  });

  await t.test('debe multiplicar dos números correctamente', () => {
    assert.strictEqual(multiply(3, 5), 15);
  });

  await t.test('debe dividir dos números correctamente', () => {
    assert.strictEqual(divide(10, 2), 5);
  });

  await t.test('debe lanzar error al dividir por cero', () => {
    assert.throws(() => divide(10, 0), {
      name: 'Error',
      message: 'División por cero no permitida'
    });
  });

  await t.test('debe verificar si un número es par', () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(7), false);
  });

  await t.test('debe lanzar TypeError si los argumentos no son números', () => {
    assert.throws(() => sum('2', 3), { name: 'TypeError' });
  });
});
