/* eslint-disable no-console */
function processNumber(number, callback) {
  const result = number * number;
  callback(result);
}

function printResult(result) {
  // eslint-disable-next-line no-console
  console.log('El resultado es:', result);
}

// Usando la función con el callback
processNumber(5, printResult);

// DIFICULTAD
function processOrder(dish, onConfirmation, onReady, onDelivered) {
  // Imprimir confirmación cuando empiece el procesamiento
  onConfirmation(dish);

  // Simular un tiempo aleatorio entre 1 a 10 segundos para cada etapa del proceso
  const randomDelay = () => Math.floor(Math.random() * 10000) + 1000;

  // Simular la confirmación del pedido
  setTimeout(() => {
    onReady(dish); // Notificar que el plato está listo

    // Simular la entrega del pedido
    setTimeout(() => {
      onDelivered(dish); // Notificar que el pedido ha sido entregado
    }, randomDelay());
  }, randomDelay());
}

// Callbacks para manejar las etapas del pedido
function confirmOrder(dish) {
  console.log(`Pedido confirmado para: ${dish}`);
}

function dishReady(dish) {
  console.log(`El plato ${dish} está listo.`);
}

function orderDelivered(dish) {
  console.log(`El plato ${dish} ha sido entregado.`);
}

// Usando la función con los callbacks
processOrder('Pizza Margherita', confirmOrder, dishReady, orderDelivered);
