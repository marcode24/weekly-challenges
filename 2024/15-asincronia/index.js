/* eslint-disable no-console */
/* eslint-disable func-names */
function executeTask(name, duration) {
  return new Promise((resolve) => {
    console.log(`${name} empieza. Duración: ${duration} segundos.`);
    setTimeout(() => {
      console.log(`${name} ha finalizado.`);
      resolve();
    }, duration * 1000); // Convertir segundos a milisegundos
  });
}

(async function () {
  const taskC = executeTask('Función C', 3);
  const taskB = executeTask('Función B', 2);
  const taskA = executeTask('Función A', 1);

  // Ejecutar C, B y A en paralelo
  await Promise.all([taskC, taskB, taskA]);

  // Ejecutar D cuando C, B y A hayan finalizado
  await executeTask('Función D', 1);
}());
