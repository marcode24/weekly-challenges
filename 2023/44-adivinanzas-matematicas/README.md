# Reto 44: Adivinanzas matemáticas

## Enunciado

Crea un juego interactivo por terminal en el que tendrás que adivinar el resultado de diferentes operaciones matemáticas aleatorias (suma, resta, multiplicación o división de dos números enteros).

- Tendrás 3 segundos para responder correctamente.
- El juego finaliza si no se logra responder en ese tiempo.
- Al finalizar el juego debes mostrar cuántos cálculos has acertado.
- Cada 5 aciertos debes aumentar en uno el posible número de cifras de la operación (cada vez en un operando):
  - Preguntas 1 a 5: X (entre 0 y 9) operación Y (entre 0 y 9)
  - Preguntas 6 a 10: XX (entre 0 y 99) operación Y (entre 0 y 9)
  - Preguntas 11 a 15: XX operación YY
  - Preguntas 16 a 20: XXX (entre 0 y 999) operación YY
  ...

## My solution

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let score = 0;
let digitCount = 1;
const MAX_SECONDS = 3000;

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generateRandomOperation() {
  const operators = ['+', '-', '*', '/'];
  const operator = operators[getRandomNumber(operators.length - 1)];
  let operand1;
  let operand2;

  switch (digitCount) {
    case 1:
      operand1 = getRandomNumber(9);
      operand2 = getRandomNumber(9);
      break;
    case 2:
      operand1 = getRandomNumber(99);
      operand2 = getRandomNumber(9);
      break;
    case 3:
      operand1 = getRandomNumber(99);
      operand2 = getRandomNumber(99);
      break;
    default:
      operand1 = getRandomNumber(999);
      operand2 = getRandomNumber(99);
  }

  return `${operand1} ${operator} ${operand2}`;
}

function playRound() {
  const operation = generateRandomOperation();
  console.log(`\nPregunta ${score + 1}: ${operation}`);

  const startTime = Date.now();
  rl.question('Tu respuesta: ', (answer) => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    // eslint-disable-next-line no-eval
    if (parseInt(answer, 10) === eval(operation) && elapsedTime < MAX_SECONDS) {
      console.log('\n¡Correcto!');
      score++;
    } else {
      console.log('\nRespuesta incorrecta o fuera de tiempo. Fin del juego.');
      console.log(`Preguntas acertadas: ${score}`);
      rl.close();
      return;
    }

    if (score % 5 === 0) {
      digitCount++;
    }

    playRound();
  });
}

function startGame() {
  console.log('¡Bienvenido al juego matemático!');
  console.log('Tienes 3 segundos para responder cada pregunta.');
  playRound();
}

startGame();

```

## Explanation of my solution with code

First, I import the `readline` module to be able to interact with the user through the terminal.

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

Then I declare the variables that I will need to keep track of the score and the number of digits of the operands of the operations.

```js
let score = 0;
let digitCount = 1;
```

I also declare a constant with the maximum time in milliseconds that the user has to answer each question.

```js
const MAX_SECONDS = 3000;
```

I create a function that returns a random number between 0 and the maximum number passed as a parameter.

```js
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}
```

I create another function that returns a string with a random operation. The operands of the operations will have as many digits as the value of the `digitCount` variable.

```js
function generateRandomOperation() {
  const operators = ['+', '-', '*', '/'];
  const operator = operators[getRandomNumber(operators.length - 1)];
  let operand1;
  let operand2;

  switch (digitCount) {
    case 1:
      operand1 = getRandomNumber(9);
      operand2 = getRandomNumber(9);
      break;
    case 2:
      operand1 = getRandomNumber(99);
      operand2 = getRandomNumber(9);
      break;
    case 3:
      operand1 = getRandomNumber(99);
      operand2 = getRandomNumber(99);
      break;
    default:
      operand1 = getRandomNumber(999);
      operand2 = getRandomNumber(99);
  }

  return `${operand1} ${operator} ${operand2}`;
}
```

I create a function that will be in charge of playing a round of the game. It will show the operation to the user and ask him to enter the result.

```js
function playRound() {
  const operation = generateRandomOperation();
  console.log(`\nPregunta ${score + 1}: ${operation}`);

  const startTime = Date.now();
  rl.question('Tu respuesta: ', (answer) => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    // eslint-disable-next-line no-eval
    if (parseInt(answer, 10) === eval(operation) && elapsedTime < MAX_SECONDS) {
      console.log('\n¡Correcto!');
      score++;
    } else {
      console.log('\nRespuesta incorrecta o fuera de tiempo. Fin del juego.');
      console.log(`Preguntas acertadas: ${score}`);
      rl.close();
      return;
    }

    if (score % 5 === 0) {
      digitCount++;
    }

    playRound();
  });
}
```

Finally, I create a function that will start the game. It will show a welcome message and call the `playRound` function to start the first round.

```js
function startGame() {
  console.log('¡Bienvenido al juego matemático!');
  console.log('Tienes 3 segundos para responder cada pregunta.');
  playRound();
}

startGame();
```
