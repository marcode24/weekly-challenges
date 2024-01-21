/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// Ejemplos de funciones básicas
function funcionSinParametrosNiRetorno() {
  console.log('¡Hola desde la función sin parámetros ni retorno!');
}

function funcionConParametros(parametro1, parametro2) {
  console.log('Parámetro 1:', parametro1);
  console.log('Parámetro 2:', parametro2);
}

function funcionConRetorno(num1, num2) {
  return num1 + num2;
}

// Funciones dentro de funciones
function funcionExterna() {
  console.log('Función externa');

  function funcionInterna() {
    console.log('Función interna');
  }

  funcionInterna();
}

// Variable GLOBAL y LOCAL
const variableGlobal = 'Soy global';

function funcionConVariables() {
  const variableLocal = 'Soy local';
  console.log(variableGlobal);
  console.log(variableLocal);
}

// Utilizar función ya creada en el lenguaje
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((numero) => numero * numero);

console.log('Cuadrados:', cuadrados);

// Función Extra (DIFICULTAD EXTRA)
function funcionExtra(texto1, texto2) {
  let contador = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(texto1 + texto2);
    } else if (i % 3 === 0) {
      console.log(texto1);
    } else if (i % 5 === 0) {
      console.log(texto2);
    } else {
      console.log(i);
    }

    contador++;
  }

  return contador;
}

console.log('Número de impresiones:', funcionExtra('Fizz', 'Buzz'));
