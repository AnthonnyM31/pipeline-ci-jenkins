/**
 * Funciones de manipulación de cadenas de texto
 */

function capitalize(text) {
  if (typeof text !== 'string') {
    throw new TypeError('El argumento debe ser una cadena');
  }
  if (text.length === 0) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text) {
  if (typeof text !== 'string') {
    throw new TypeError('El argumento debe ser una cadena');
  }
  return text.split('').reverse().join('');
}

function isPalindrome(text) {
  if (typeof text !== 'string') {
    throw new TypeError('El argumento debe ser una cadena');
  }
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

module.exports = {
  capitalize,
  reverseString,
  isPalindrome
};
