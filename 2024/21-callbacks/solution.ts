/* eslint-disable no-console */

// Definir el tipo para el callback
type Callback = (result: number) => void;

function processNumber(number: number, callback: Callback): void {
  const result = number * number;
  callback(result);
}

function printResult(result: number): void {
  console.log('El resultado es:', result);
}

// Usando la función con el callback
processNumber(5, printResult);

// DIFICULTAD
type OrderCallback = (dish: string) => void;

function processOrder(dish: string, onConfirmation: OrderCallback, onReady: OrderCallback, onDelivered: OrderCallback): void {
  // Imprimir confirmación cuando empiece el procesamiento
  onConfirmation(dish);

  // Simular un tiempo aleatorio entre 1 a 10 segundos para cada etapa del proceso
  const randomDelay = (): number => Math.floor(Math.random() * 10000) + 1000;

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
function confirmOrder(dish: string): void {
  console.log(`Pedido confirmado para: ${dish}`);
}

function dishReady(dish: string): void {
  console.log(`El plato ${dish} está listo.`);
}

function orderDelivered(dish: string): void {
  console.log(`El plato ${dish} ha sido entregado.`);
}

// Usando la función con los callbacks
processOrder('Pizza Margherita', confirmOrder, dishReady, orderDelivered);
