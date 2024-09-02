/* eslint-disable func-names */
/* eslint-disable no-console */
function decorador(func) {
  return function (...args) {
    console.log('Función decorada, argumentos:', args);
    return func(...args);
  };
}

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

const saludarDecorado = decorador(saludar);

console.log(saludarDecorado('Carlos'));

// Dificultad extra
function contabilizarLlamadas(func) {
  let contador = 0;

  return function (...args) {
    contador++;
    console.log(`La función ha sido llamada ${contador} veces`);
    return func(...args);
  };
}

function decirHola(nombre) {
  return `Hola, ${nombre}!`;
}

const decirHolaContabilizado = contabilizarLlamadas(decirHola);

console.log(decirHolaContabilizado('Carlos'));
console.log(decirHolaContabilizado('María'));
console.log(decirHolaContabilizado('Juan'));
