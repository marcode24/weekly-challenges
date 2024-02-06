/* eslint-disable no-console */
/* eslint-disable max-len */
// Función recursiva para imprimir números del 100 al 0
function imprimirNumeros(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
  imprimirNumeros(num - 1);
}

console.log('Imprimiendo números del 100 al 0:');
imprimirNumeros(100);

// Función recursiva para calcular el factorial de un número
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const numero = 5;
console.log(`Factorial de ${numero}:`, factorial(numero));

// Función recursiva para calcular el valor de un elemento en la sucesión de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const posicion = 6;
console.log(`Valor en la posición ${posicion} de la sucesión de Fibonacci:`, fibonacci(posicion));
