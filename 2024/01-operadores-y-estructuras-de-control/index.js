/* eslint-disable no-console */
/* eslint-disable no-bitwise */
// Operadores aritméticos
const suma = 5 + 3;
const resta = 10 - 4;
const multiplicacion = 6 * 7;
const division = 20 / 4;
const modulo = 15 % 4;

console.log('Operadores Aritméticos:');
console.log('Suma:', suma);
console.log('Resta:', resta);
console.log('Multiplicación:', multiplicacion);
console.log('División:', division);
console.log('Módulo:', modulo);

// Operadores lógicos
const and = true && false;
const or = true || false;
const not = !true;

console.log('\nOperadores Lógicos:');
console.log('AND:', and);
console.log('OR:', or);
console.log('NOT:', not);

// Operadores de comparación
// eslint-disable-next-line eqeqeq
const igual = 5 == '5';
const estrictamenteIgual = 5 === '5';
const diferente = 10 !== 5;
const mayorQue = 15 > 10;
const menorQue = 7 < 12;

console.log('\nOperadores de Comparación:');
console.log('Igual (==):', igual);
console.log('Estrictamente Igual (===):', estrictamenteIgual);
console.log('Diferente (!=):', diferente);
console.log('Mayor Que (>):', mayorQue);
console.log('Menor Que (<):', menorQue);

// Operadores de asignación
let x = 10;
x += 5; // equivalente a x = x + 5
let y = 20;
y *= 2; // equivalente a y = y * 2

console.log('\nOperadores de Asignación:');
console.log('x:', x);
console.log('y:', y);

// Operadores bitwise
const bitwiseAnd = 5 & 3; // AND
const bitwiseOr = 5 | 3; // OR
const bitwiseXor = 5 ^ 3; // XOR
const bitwiseNot = ~5; // NOT
const leftShift = 5 << 1; // Left Shift
const rightShift = 5 >> 1; // Right Shift
const zeroFillRightShift = 5 >>> 1; // Zero-fill Right Shift

console.log('\nOperadores Bitwise:');
console.log('Bitwise AND (&):', bitwiseAnd);
console.log('Bitwise OR (|):', bitwiseOr);
console.log('Bitwise XOR (^):', bitwiseXor);
console.log('Bitwise NOT (~):', bitwiseNot);
console.log('Left Shift (<<):', leftShift);
console.log('Right Shift (>>):', rightShift);
console.log('Zero-fill Right Shift (>>>):', zeroFillRightShift);

// Estructuras de control
// Condicionales
const edad = 18;
if (edad >= 18) {
  console.log('\nEres mayor de edad.');
} else {
  console.log('\nEres menor de edad.');
}

// Iterativas
console.log('\nNúmeros entre 10 y 55 (pares, no 16 ni múltiplos de 3):');
for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}

// Excepciones
try {
  throw new Error('Este es un ejemplo de excepción.');
} catch (error) {
  console.error('\nExcepción:', error.message);
}
