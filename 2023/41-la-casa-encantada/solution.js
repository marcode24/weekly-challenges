/* eslint-disable no-constant-condition */
/* eslint-disable max-len */
/* eslint-disable no-console */
const readline = require('readline');
const { ENIGMAS, DIFFICULTIES } = require('./constants');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => {
    resolve(answer.trim());
  });
});

let MANSION = [];
const CURRENT_POSITION = { row: 0, col: 0 }; // Posición inicial

const generateRandomMansion = (difficulty) => {
  const { rows, cols, ghosts } = DIFFICULTIES[difficulty];
  const newMansion = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const random = Math.random();
      // Si el número aleatorio es menor que el porcentaje de fantasmas, se añade un fantasma
      row.push(random < ghosts ? '👻' : '⬜️');
    }
    newMansion.push(row);
  }
  const dulcesRow = Math.floor(Math.random() * rows);
  const dulcesCol = Math.floor(Math.random() * cols);
  // Añade la habitación de los dulces en una posición aleatoria
  newMansion[dulcesRow][dulcesCol] = '🍭';

  // el jugador empieza en una habitación aleatoria solo en los bordes
  do {
    const randomBorder = Math.floor(Math.random() * rows);
    const doorPosition = { row: 0, col: 0 };
    switch (randomBorder) {
      case 0: // norte
        doorPosition.row = 0;
        doorPosition.col = Math.floor(Math.random() * cols);
        break;
      case 1: // sur
        doorPosition.row = rows - 1;
        doorPosition.col = Math.floor(Math.random() * cols);
        break;
      case 2: // este
        doorPosition.row = Math.floor(Math.random() * rows);
        doorPosition.col = cols - 1;
        break;
      case 3: // oeste
        doorPosition.row = Math.floor(Math.random() * rows);
        doorPosition.col = 0;
        break;
      default:
        break;
    }
    CURRENT_POSITION.row = doorPosition.row;
    CURRENT_POSITION.col = doorPosition.col;

    // verifica que la habitación no sea de los dulces
    if (newMansion[doorPosition.row][doorPosition.col] === '⬜️') {
      newMansion[doorPosition.row][doorPosition.col] = '🚪';
      break;
    }
  } while (true);

  return newMansion;
};

const displayMansion = () => {
  const { row, col } = CURRENT_POSITION;
  for (let i = 0; i < MANSION.length; i++) {
    let rowString = '';
    for (let j = 0; j < MANSION[i].length; j++) {
      // Si es la posición actual, muestra el emoji de la habitación de los dulces
      rowString += (i === row && j === col) ? '🍭' : MANSION[i][j];
    }
    console.log(rowString);
  }
};

const displayCurrentRoom = () => {
  const { row, col } = CURRENT_POSITION;
  console.log('\nTu posición actual es: \n');
  for (let i = 0; i < MANSION.length; i++) {
    let rowString = '';
    for (let j = 0; j < MANSION[i].length; j++) {
      rowString += (i === row && j === col) ? '😄' : '⬜️';
    }
    console.log(rowString);
  }
};

const getRandomEnigma = () => {
  const randomIndex = Math.floor(Math.random() * ENIGMAS.length);
  return ENIGMAS[randomIndex];
};

const checkAnswer = (answer, enigmaIndex) => {
  const enigma = ENIGMAS[enigmaIndex];
  return answer.toLowerCase() === enigma.answer;
};

const movePlayer = (direction) => {
  const { row, col } = CURRENT_POSITION;

  const movements = {
    norte: { row: row - 1, col },
    sur: { row: row + 1, col },
    este: { row, col: col + 1 },
    oeste: { row, col: col - 1 },
  };

  const nextPosition = movements[direction.toLowerCase()];
  if (!nextPosition) return false;

  const { row: nextRow, col: nextCol } = nextPosition;
  const isValidPosition = nextRow >= 0
                    && nextRow < MANSION.length
                    && nextCol >= 0
                    && nextCol < MANSION[0].length;
  // Comprueba que la siguiente posición esté dentro de los límites de la mansión
  if (isValidPosition) {
    CURRENT_POSITION.row = nextRow;
    CURRENT_POSITION.col = nextCol;
    return true;
  }
  console.log('\nNo puedes moverte en esa dirección. Inténtalo de nuevo.');
  return false;
};

const checkDulcesRoom = () => {
  const { row, col } = CURRENT_POSITION;
  // Comprueba si es la habitación de los dulces
  return MANSION[row][col] === '🍭';
};

const checkGhosts = () => {
  const { row, col } = CURRENT_POSITION;
  // Comprueba si es la habitación de los fantasmas
  return MANSION[row][col] === '👻';
};

const playGame = async () => {
  const moveAndCheckDulces = async () => {
    let direction;
    do {
      // eslint-disable-next-line no-await-in-loop
      direction = await askQuestion('\nHacia dónde quieres moverte? (norte/sur/este/oeste): ');
    } while (!movePlayer(direction));

    if (checkDulcesRoom()) {
      displayMansion();
      console.log('\n¡Felicidades! Has encontrado la habitación de los dulces. ¡Has ganado!');
      rl.close();
      return true; // El juego ha terminado
    }
    displayCurrentRoom();
    return false; // El juego continúa
  };

  const solveEnigma = async (enigma) => {
    console.log('\nEnigma:', enigma.question);
    const userAnswer = await askQuestion('Tu respuesta: ');
    return checkAnswer(userAnswer, ENIGMAS.indexOf(enigma));
  };

  const solveGhostsRoom = async () => {
    console.log('\n¡Oh no! Has caído en la habitación de los fantasmas. Debes resolver 2 enigmas para poder moverte.');
    let correctAnswers = 0;
    while (correctAnswers < 2) {
      // eslint-disable-next-line no-await-in-loop
      if (await solveEnigma(getRandomEnigma())) {
        // Si resuelve el enigma correctamente aumenta el contador de respuestas correctas en 1
        correctAnswers++;
        console.log(correctAnswers === 1
          ? '\n¡Respuesta correcta! Te falta 1 enigma para poder moverte.'
          : '\n¡Respuesta correcta! Ya puedes moverte.');
      } else {
        console.log('\nRespuesta incorrecta. Debes resolver el enigma de nuevo.');
      }
    }
    return moveAndCheckDulces(); // El juego ha terminado
  };

  const playRound = async () => {
    if (checkGhosts() && await solveGhostsRoom()) return; // El juego ha terminado

    const enigma = getRandomEnigma();
    if (await solveEnigma(enigma)) {
      console.log('\n¡Respuesta correcta! Puedes moverte.');
      if (await moveAndCheckDulces()) return; // El juego ha terminado
    } else console.log('\nRespuesta incorrecta. Debes resolver el enigma de nuevo.');
    await playRound();
  };
  await playRound();
};

const start = async () => {
  let difficulty;
  do {
    // eslint-disable-next-line no-await-in-loop
    difficulty = await askQuestion('Selecciona la dificultad (facil/medio/dificil): ');
    if (!DIFFICULTIES[difficulty]) {
      console.log('\nDificultad incorrecta. Inténtalo de nuevo.');
    } else break;
  } while (true);

  MANSION = generateRandomMansion(difficulty);
  console.log('\n¡Bienvenido a la mansión abandonada! Resuelve los enigmas para encontrar la habitación de los dulces.');
  displayCurrentRoom();
  playGame();
};

start();
