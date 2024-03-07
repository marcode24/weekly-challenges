/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
// Función que procesa parámetros y lanza excepciones
function procesarParametros(param) {
  try {
    if (param === 1) {
      throw 'Excepción personalizada: El parámetro no puede ser igual a 1';
    } else if (param === 2) {
      throw new RangeError('Excepción: El parámetro no puede ser igual a 2');
    } else if (param === 3) {
      throw new Error('Excepción: El parámetro no puede ser igual a 3');
    } else {
      console.log('Parámetro procesado correctamente:', param);
    }
  } catch (error) {
    console.error('Se ha producido un error:', error);
  } finally {
    console.log('La ejecución ha finalizado.');
  }
}

// Ejemplos de llamada a la función procesarParametros
console.log('Llamada con parámetro 0:');
procesarParametros(0);

console.log('\nLlamada con parámetro 1:');
procesarParametros(1);

console.log('\nLlamada con parámetro 2:');
procesarParametros(2);

console.log('\nLlamada con parámetro 3:');
procesarParametros(3);

// Provocando errores adicionales
try {
  console.log('\nIntentando dividir por cero (10/0):');
  const resultado = 10 / 0;
  console.log('Resultado:', resultado);
} catch (error) {
  console.error('Se ha producido un error:', error);
} finally {
  console.log('La ejecución ha finalizado.');
}

try {
  console.log('\nIntentando acceder a un índice no existente:');
  const array = [1, 2, 3];
  console.log('Elemento en el índice 5:', array[5]);
} catch (error) {
  console.error('Se ha producido un error:', error);
} finally {
  console.log('La ejecución ha finalizado.');
}
