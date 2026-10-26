/**
 * Funciones matemáticas básicas para demostración de pruebas unitarias
 */

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  if (b === 0) {
    throw new Error('División por cero no permitida');
  }
  return a / b;
}

function isEven(num) {
  if (typeof num !== 'number') {
    throw new TypeError('El argumento debe ser un número');
  }
  return num % 2 === 0;
}

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  isEven
};
