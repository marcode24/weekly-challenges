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
