/* eslint-disable no-console */
// Función para extraer todos los números de un texto
function extractNumbers(text) {
  const numbers = text.match(/\d+/g);
  return numbers.map(Number) || [];
}

// Función para validar un email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para validar un número de teléfono
function validatePhoneNumber(phoneNumber) {
  // eslint-disable-next-line max-len
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?(\d{1,3}?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})$/;
  return phoneRegex.test(phoneNumber);
}

// Función para validar una URL
function validateURL(url) {
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*\/?(\?.*)?(#.*)?$/i;
  return urlRegex.test(url);
}

// Extracción de números
const text = 'El precio es 1234, la cantidad es 5678, y el código es 90.';
const numbers = extractNumbers(text);
console.log('Números encontrados:', numbers); // ["1234", "5678", "90"]

// Validación de email
const email = 'ejemplo@dominio.com';
console.log('Email válido:', validateEmail(email)); // true

// Validación de número de teléfono
const phoneNumber = '+123-456-7890';
console.log('Número de teléfono válido:', validatePhoneNumber(phoneNumber)); // true

// Validación de URL
const url = 'https://www.ejemplo.com';
console.log('URL válida:', validateURL(url)); // true