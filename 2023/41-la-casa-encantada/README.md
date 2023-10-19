# Reto 41: La casa encantada

## Enunciado
 
Este es un reto especial por Halloween.
Te encuentras explorando una mansión abandonada llena de habitaciones.
En cada habitación tendrás que resolver un acertijo para poder avanzar a la siguiente.
Tu misión es encontrar la habitación de los dulces.
Se trata de implementar un juego interactivo de preguntas y respuestas por terminal. (Tienes total libertad para ser creativo con los textos)
- 🏰 Casa: La mansión se corresponde con una estructura cuadrada 4 x 4 que deberás modelar. Las habitaciones de puerta y dulces no tienen enigma. (16 habitaciones, siendo una de entrada y otra donde están los dulces)
Esta podría ser una representación:
```
🚪⬜️⬜️⬜️
⬜️👻⬜️⬜️
⬜️⬜️⬜️👻
⬜️⬜️🍭⬜️
```
- ❓ Enigmas: Cada habitación propone un enigma aleatorio que deberás responder con texto. Si no lo aciertas no podrás desplazarte.
- 🧭 Movimiento: Si resuelves el enigma se te preguntará a donde quieres desplazarte. (Ejemplo: norte/sur/este/oeste. Sólo deben proporcionarse las opciones posibles)
- 🍭 Salida: Sales de la casa si encuentras la habitación de los dulces.
- 👻 (Bonus) Fantasmas: Existe un 10% de que en una habitación aparezca un fantasma y tengas que responder dos preguntas para salir de ella.

## My solution

```js
const readline = require('readline');

const DIFFICULTIES = {
  facil: { rows: 4, cols: 4, ghosts: 0.1 },
  medio: { rows: 5, cols: 5, ghosts: 0.15 },
  dificil: { rows: 6, cols: 6, ghosts: 0.25 },
};

const ENIGMAS = [
  {
    question: '¿Qué criatura vuela en la noche y tiene alas negras?',
    answer: 'murcielago',
  },
  {
    question: '¿Qué ser mountruoso tiene una sola cabeza, pero tres cuerpos?',
    answer: 'cerbero',
  },
  {
    question: '¿Qué crece en la luna llena y convierte a las personas en lobos?',
    answer: 'licantropo',
  },
  {
    question: '¿Qué asusta a los vampiros?',
    answer: 'ajo',
  },
  {
    question: '¿Qué criatura chupa la sangre de sus víctimas?',
    answer: 'vampiro',
  },
  {
    question: '¿Qué ser viste una túnica y se desplaza en una escoba?',
    answer: 'bruja',
  },
  {
    question: '¿Qué criatura se levanta de su tumba en Halloween?',
    answer: 'zombie',
  },
  {
    question: '¿Qué arácnido teje telarañas y tiene ocho patas?',
    answer: 'araña',
  },
  {
    question: '¿Qué ser monstruoso es una construcción de huesos?',
    answer: 'esqueleto',
  },
  {
    question: ' ¿Qué animal negro trae mala suerte en Halloween?',
    answer: 'gato',
  },
  {
    question: '¿Qué objeto tallado con una cara aterradora se ilumina en Halloween?',
    answer: 'calabaza',
  },
  {
    question: '¿Qué palabra significa "travieso o trato" en Halloween?',
    answer: 'truco',
  },
  {
    question: '¿Qué ser peludo aúlla en la luna llena?',
    answer: 'lobo',
  },
  {
    question: '¿Qué insecto representa la transformación y la resurrección?',
    answer: 'escarabajo',
  },
  {
    question: '¿Qué bebida mágica preparan las brujas?',
    answer: 'pocima',
  },
  {
    question: '¿Qué comida se colecciona en una bolsa en Halloween?',
    answer: 'caramelos',
  },
  {
    question: '¿Qué criatura terrorífica vuela por la noche y chilla?',
    answer: 'buho',
  },
  {
    question: '¿Qué actividad espeluznante ocurre en una casa embrujada?',
    answer: 'terror',
  },
  {
    question: '¿Qué animal se asocia con la maldad y las brujas?',
    answer: 'serpiente',
  },
  {
    question: '¿Qué objeto vuela en el cielo de Halloween?',
    answer: 'escoba',
  },
  {
    question: '¿Qué ser no tiene sombra y teme la luz?',
    answer: 'fantasma',
  },
  {
    question: '¿Qué objeto lanza destellos en la noche de Halloween?',
    answer: 'luciernaga',
  },
  {
    question: '¿Qué animal negro se considera un mal presagio en Halloween?',
    answer: 'cuervo',
  },
  {
    question: '¿Qué objeto ilumina el camino en Halloween?',
    answer: 'linterna',
  },
];

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

```	

## Explanation of my solution

### `DIFFICULTIES`

- First, I declare an object named `DIFFICULTIES` that contains the different difficulties of the game.
- Each difficulty has a number of rows, a number of columns and a percentage of ghosts.

```js
const DIFFICULTIES = {
  facil: { rows: 4, cols: 4, ghosts: 0.1 },
  medio: { rows: 5, cols: 5, ghosts: 0.15 },
  dificil: { rows: 6, cols: 6, ghosts: 0.25 },
};
```

### `ENIGMAS`

- Then, I declare an array named `ENIGMAS` that contains the different enigmas of the game.
- Each enigma has a question and an answer.

```js
const ENIGMAS = [...];
```

### `rl`

- Then, I declare a `readline` interface that will be used to ask questions to the user.

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

### `askQuestion`

- Then, I declare a function named `askQuestion` that will be used to ask a question to the user.
- This function receives a question as a parameter.
- This function returns a promise that resolves to the answer of the user.

```js
const askQuestion = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => {
    resolve(answer.trim());
  });
});
```

### `MANSION`

- Then, I declare a variable named `MANSION` that will store the mansion of the game.
- This variable is initialized to an empty array.

```js
let MANSION = [];
```

### `CURRENT_POSITION`

- Then, I declare a constant named `CURRENT_POSITION` that will store the current position of the player.
- This constant is initialized to an object with the `row` and `col` properties.

```js
const CURRENT_POSITION = { row: 0, col: 0 }; // Posición inicial
```

### `generateRandomMansion`

- Then, I declare a function named `generateRandomMansion` that will generate a random mansion.
- This function receives a difficulty as a parameter.
- This function returns a random mansion.

```js
const generateRandomMansion = (difficulty) => { ... };
```

#### `rows`, `cols` and `ghosts`

- First, I declare three constants named `rows`, `cols` and `ghosts` that will store the number of rows, the number of columns and the percentage of ghosts of the mansion.
- These constants are initialized to the values of the `rows`, `cols` and `ghosts` properties of the `DIFFICULTIES` object.

```js
const { rows, cols, ghosts } = DIFFICULTIES[difficulty];
```

#### `newMansion`

- Then, I declare a variable named `newMansion` that will store the new mansion.
- This variable is initialized to an empty array.

```js
const newMansion = [];
```

#### `for` loop

- Then, I declare a `for` loop that will iterate `rows` times.
- This `for` loop will be used to generate the rows of the mansion.

```js
for (let i = 0; i < rows; i++) { ... }
```

##### `row`

- Then, I declare a variable named `row` that will store the current row.
- This variable is initialized to an empty array.

```js
const row = [];
```

##### `for` loop

- Then, I declare a `for` loop that will iterate `cols` times.
- This `for` loop will be used to generate the columns of the current row.

```js
for (let j = 0; j < cols; j++) { ... }
```

###### `random`

- Then, I declare a variable named `random` that will store a random number.

```js
const random = Math.random();
```

###### `if` statement

- Then, I declare an `if` statement that will check if the random number is less than the percentage of ghosts.
- If the random number is less than the percentage of ghosts, a ghost will be added to the current room.

```js
if (random < ghosts) row.push('👻');
```

###### `else` statement

- Then, I declare an `else` statement that will be executed if the random number is not less than the percentage of ghosts.

```js
else row.push('⬜️');
```

##### `newMansion`

- Then, I push the current row to the `newMansion` array.

```js
newMansion.push(row);
```

#### `dulcesRow` and `dulcesCol`

- Then, I declare two constants named `dulcesRow` and `dulcesCol` that will store the row and the column of the room of the candies.
- These constants are initialized to random numbers.

```js
const dulcesRow = Math.floor(Math.random() * rows);
const dulcesCol = Math.floor(Math.random() * cols);
```

#### `newMansion[dulcesRow][dulcesCol]`

- Then, I set the room of the candies in the `newMansion` array.

```js
newMansion[dulcesRow][dulcesCol] = '🍭';
```

#### `do...while` loop

- Then, I declare a `do...while` loop that will be used to generate the room of the player.
- This `do...while` loop will be executed while the room of the player is not the room of the candies.

```js
do { ... } while (true);
```

##### `randomBorder`

- Then, I declare a variable named `randomBorder` that will store a random number between 0 and the number of rows minus 1.

```js
const randomBorder = Math.floor(Math.random() * rows);
```

##### `doorPosition`

- Then, I declare a variable named `doorPosition` that will store the position of the door of the room of the player.
- This variable is initialized to an object with the `row` and `col` properties.

```js
const doorPosition = { row: 0, col: 0 };
```

##### `switch` statement

- Then, I declare a `switch` statement that will check the value of the `randomBorder` variable.
- This `switch` statement will be used to set the position of the door of the room of the player.

```js
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
```

##### `CURRENT_POSITION`

- Then, I set the position of the player in the `CURRENT_POSITION` constant.

```js
CURRENT_POSITION.row = doorPosition.row;
CURRENT_POSITION.col = doorPosition.col;
```

##### `if` statement

- Then, I declare an `if` statement that will check if the room of the player is not the room of the candies.
- If the room of the player is not the room of the candies, the door of the room of the player will be set in the `newMansion` array.

```js
if (newMansion[doorPosition.row][doorPosition.col] === '⬜️') {
  newMansion[doorPosition.row][doorPosition.col] = '🚪';
  break;
}
```

#### `MANSION`

- Then, I set the `MANSION` variable to the `newMansion` array.

```js
MANSION = newMansion;
```

#### `return` statement

- Finally, I return the `newMansion` array.

```js
return newMansion;
```

### `displayMansion`

- Then, I declare a function named `displayMansion` that will display the mansion of the game.

```js
const displayMansion = () => { ... };
```

#### `row` and `col`

- Then, I declare two constants named `row` and `col` that will store the row and the column of the player.
- These constants are initialized to the `row` and `col` properties of the `CURRENT_POSITION` constant.

```js
const { row, col } = CURRENT_POSITION;
```

#### `for` loop

- Then, I declare a `for` loop that will iterate the number of rows of the mansion times.
- This `for` loop will be used to display the rows of the mansion.

```js
for (let i = 0; i < MANSION.length; i++) { ... }
```

##### `rowString`

- Then, I declare a variable named `rowString` that will store the current row.
- This variable is initialized to an empty string.

```js
let rowString = '';
```

##### `for` loop

- Then, I declare a `for` loop that will iterate the number of columns of the mansion times.
- This `for` loop will be used to display the columns of the current row.

```js
for (let j = 0; j < MANSION[i].length; j++) { ... }
```

###### `rowString`

- Then, I add the emoji of the candies to the `rowString` variable if the current position is the position of the player.
- Otherwise, I add the current room to the `rowString` variable.

```js
rowString += (i === row && j === col) ? '🍭' : MANSION[i][j];
```

##### `console.log`

- Then, I display the `rowString` variable in the console.

```js
console.log(rowString);
```

### `displayCurrentRoom`

- Then, I declare a function named `displayCurrentRoom` that will display the current room of the player.

```js
const displayCurrentRoom = () => { ... };
```

#### `row` and `col`

- Then, I declare two constants named `row` and `col` that will store the row and the column of the player.
- These constants are initialized to the `row` and `col` properties of the `CURRENT_POSITION` constant.

```js
const { row, col } = CURRENT_POSITION;
```

#### `console.log`

- Then, I display the current room of the player in the console.

```js
console.log('\nTu posición actual es: \n');
```

#### `for` loop

- Then, I declare a `for` loop that will iterate the number of rows of the mansion times.
- This `for` loop will be used to display the rows of the current room.

```js
for (let i = 0; i < MANSION.length; i++) { ... }
```

##### `rowString`

- Then, I declare a variable named `rowString` that will store the current row.
- This variable is initialized to an empty string.

```js
let rowString = '';
```

##### `for` loop

- Then, I declare a `for` loop that will iterate the number of columns of the mansion times.

```js
for (let j = 0; j < MANSION[i].length; j++) { ... }
```

###### `rowString`

- Then, I add the emoji of the player to the `rowString` variable if the current position is the position of the player.

```js
rowString += (i === row && j === col) ? '😄' : '⬜️';
```

##### `console.log`

- Then, I display the `rowString` variable in the console.

```js
console.log(rowString);
```

### `getRandomEnigma`

- Then, I declare a function named `getRandomEnigma` that will return a random enigma.

```js
const getRandomEnigma = () => { ... };
```

#### `randomIndex`

- Then, I declare a variable named `randomIndex` that will store a random index.
- This variable is initialized to a random number between 0 and the length of the `ENIGMAS` array minus 1.

```js
const randomIndex = Math.floor(Math.random() * ENIGMAS.length);
```

#### `return` statement

- Finally, I return the enigma at the `randomIndex` index of the `ENIGMAS` array.

```js
return ENIGMAS[randomIndex];
```

### `checkAnswer`

- Then, I declare a function named `checkAnswer` that will check if the answer of the user is correct.
- This function receives an answer and an enigma index as parameters.

```js
const checkAnswer = (answer, enigmaIndex) => { ... };
```

#### `enigma`

- Then, I declare a variable named `enigma` that will store the enigma at the `enigmaIndex` index of the `ENIGMAS` array.

```js
const enigma = ENIGMAS[enigmaIndex];
```

#### `return` statement

- Finally, I return a boolean that indicates if the answer of the user is correct.

```js
return answer.toLowerCase() === enigma.answer;
```

### `movePlayer`

- Then, I declare a function named `movePlayer` that will move the player to a new room.
- This function receives a direction as a parameter.
- This function returns a boolean that indicates if the player has moved to a new room.

```js
const movePlayer = (direction) => { ... };
```

#### `row` and `col`

- Then, I declare two constants named `row` and `col` that will store the row and the column of the player.

```js
const { row, col } = CURRENT_POSITION;
```

#### `movements`

- Then, I declare a constant named `movements` that will store the possible movements of the player.
- This constant is initialized to an object with the `norte`, `sur`, `este` and `oeste` properties.

```js
const movements = {
  norte: { row: row - 1, col },
  sur: { row: row + 1, col },
  este: { row, col: col + 1 },
  oeste: { row, col: col - 1 },
};
```

#### `nextPosition`

- Then, I declare a constant named `nextPosition` that will store the next position of the player.
- This constant is initialized to the value of the `direction` property of the `movements` object.

```js
const nextPosition = movements[direction.toLowerCase()];
```

#### `if` statement

- Then, I declare an `if` statement that will check if the `nextPosition` constant is not `undefined`.
- If the `nextPosition` constant is not `undefined`, the player will move to the next position.

```js
if (!nextPosition) return false;
```

#### `row` and `col`

- Then, I declare two constants named `row` and `col` that will store the row and the column of the next position of the player.
- These constants are initialized to the `row` and `col` properties of the `nextPosition` constant.

```js
const { row: nextRow, col: nextCol } = nextPosition;
```

#### `isValidPosition`

- Then, I declare a constant named `isValidPosition` that will store a boolean that indicates if the next position of the player is valid.
- This constant is initialized to a boolean that indicates if the next position of the player is inside the mansion.

```js
const isValidPosition = nextRow >= 0
                    && nextRow < MANSION.length
                    && nextCol >= 0
                    && nextCol < MANSION[0].length;
```

#### `if` statement

- Then, I declare an `if` statement that will check if the next position of the player is valid.
- If the next position of the player is valid, the player will move to the next position.

```js
if (isValidPosition) {
  CURRENT_POSITION.row = nextRow;
  CURRENT_POSITION.col = nextCol;
  return true;
}
```

#### `console.log`

- Then, I display a message in the console if the next position of the player is not valid.

```js
console.log('\nNo puedes moverte en esa dirección. Inténtalo de nuevo.');
```

#### `return` statement

- Finally, I return a boolean that indicates if the player has moved to a new room.

```js
return false;
```

### `checkDulcesRoom`

- Then, I declare a function named `checkDulcesRoom` that will check if the current room of the player is the room of the candies.
- This function returns a boolean that indicates if the current room of the player is the room of the candies.

```js
const checkDulcesRoom = () => { ... };
```

#### `row` and `col`

- Then, I declare two constants named `row` and `col` that will store the row and the column of the player.

```js
const { row, col } = CURRENT_POSITION;
```

#### `return` statement

- Finally, I return a boolean that indicates if the current room of the player is the room of the candies.

```js
return MANSION[row][col] === '🍭';
```

### `checkGhosts`

- Then, I declare a function named `checkGhosts` that will check if the current room of the player is the room of the ghosts.
- This function returns a boolean that indicates if the current room of the player is the room of the ghosts.

```js
const checkGhosts = () => { ... };
```

#### `row` and `col`

- Then, I declare two constants named `row` and `col` that will store the row and the column of the player.

```js
const { row, col } = CURRENT_POSITION;
```

#### `return` statement

- Finally, I return a boolean that indicates if the current room of the player is the room of the ghosts.

```js
return MANSION[row][col] === '👻';
```

### `playGame`

- Then, I declare a function named `playGame` that will play the game.

```js
const playGame = async () => { ... };
```

#### `moveAndCheckDulces`

- Then, I declare a function named `moveAndCheckDulces` that will move the player to a new room and check if the current room of the player is the room of the candies.

```js
const moveAndCheckDulces = async () => { ... };
```

##### `direction`

- Then, I declare a variable named `direction` that will store the direction of the player.
- This variable is initialized to an empty string.

```js
let direction;
```

##### `do...while` loop

- Then, I declare a `do...while` loop that will be used to move the player to a new room.

```js
do { ... } while (!movePlayer(direction));
```

###### `direction`

- Then, I ask the user for a direction and I store the answer in the `direction` variable.

```js
direction = await askQuestion('\nHacia dónde quieres moverte? (norte/sur/este/oeste): ');
```

###### `if` statement

- Then, I declare an `if` statement that will check if the current room of the player is the room of the candies.
- If the current room of the player is the room of the candies, the mansion will be displayed in the console and a message will be displayed in the console.

```js
if (checkDulcesRoom()) {
  displayMansion();
  console.log('\n¡Felicidades! Has encontrado la habitación de los dulces. ¡Has ganado!');
  rl.close();
  return true; // El juego ha terminado
}
```

###### `displayCurrentRoom`

- Then, I display the current room of the player in the console.

```js
displayCurrentRoom();
```

###### `return` statement

- Finally, I return a boolean that indicates if the game has finished.

```js
return false; // El juego continúa
```

#### `solveEnigma`

- Then, I declare a function named `solveEnigma` that will solve an enigma.
- This function receives an enigma as a parameter.
- This function returns a boolean that indicates if the enigma has been solved.

```js
const solveEnigma = async (enigma) => { ... };
```

##### `console.log`

- Then, I display the question of the enigma in the console.

```js
console.log('\nEnigma:', enigma.question);
```

##### `userAnswer`

- Then, I ask the user for an answer and I store the answer in the `userAnswer` variable.

```js
const userAnswer = await askQuestion('Tu respuesta: ');
```

##### `return` statement

- Finally, I return a boolean that indicates if the enigma has been solved.

```js
return checkAnswer(userAnswer, ENIGMAS.indexOf(enigma));
```

#### `solveGhostsRoom`

- Then, I declare a function named `solveGhostsRoom` that will solve the enigmas of the room of the ghosts.
- This function returns a boolean that indicates if the game has finished.

```js
const solveGhostsRoom = async () => { ... };
```

##### `console.log`

- Then, I display a message in the console.

```js
console.log('\n¡Oh no! Has caído en la habitación de los fantasmas. Debes resolver 2 enigmas para poder moverte.');
```

##### `correctAnswers`

- Then, I declare a variable named `correctAnswers` that will store the number of correct answers.
- This variable is initialized to 0.

```js
let correctAnswers = 0;
```

##### `while` loop

- Then, I declare a `while` loop that will be used to solve the enigmas of the room of the ghosts.
- This `while` loop will be executed while the number of correct answers is less than 2.

```js
while (correctAnswers < 2) { ... }
```

###### `if` statement

- Then, I declare an `if` statement that will check if the enigma has been solved correctly.
- If the enigma has been solved correctly, the number of correct answers will be increased by 1.

```js
if (await solveEnigma(getRandomEnigma())) {
  // Si resuelve el enigma correctamente aumenta el contador de respuestas correctas en 1
  correctAnswers++;
  console.log(correctAnswers === 1
    ? '\n¡Respuesta correcta! Te falta 1 enigma para poder moverte.'
    : '\n¡Respuesta correcta! Ya puedes moverte.');
}
```

###### `else` statement

- Then, I declare an `else` statement that will be executed if the enigma has not been solved correctly.

```js
else {
  console.log('\nRespuesta incorrecta. Debes resolver el enigma de nuevo.');
}
```

##### `return` statement

- Finally, I return a boolean that indicates if the game has finished.

```js
return moveAndCheckDulces(); // El juego ha terminado
```

#### `playRound`

- Then, I declare a function named `playRound` that will play a round of the game.
- This function returns a boolean that indicates if the game has finished.

```js
const playRound = async () => { ... };
```

##### `if` statement

- Then, I declare an `if` statement that will check if the current room of the player is the room of the ghosts.
- If the current room of the player is the room of the ghosts, the enigmas of the room of the ghosts will be solved.

```js
if (checkGhosts() && await solveGhostsRoom()) return; // El juego ha terminado
```

##### `enigma`

- Then, I declare a variable named `enigma` that will store a random enigma.

```js
const enigma = getRandomEnigma();
```

##### `if` statement

- Then, I declare an `if` statement that will check if the enigma has been solved correctly.
- If the enigma has been solved correctly, a message will be displayed in the console.

```js
if (await solveEnigma(enigma)) {
  console.log('\n¡Respuesta correcta! Puedes moverte.');
  if (await moveAndCheckDulces()) return; // El juego ha terminado
}
```

##### `else` statement

- Then, I declare an `else` statement that will be executed if the enigma has not been solved correctly.
- If the enigma has not been solved correctly, a message will be displayed in the console.

```js
else console.log('\nRespuesta incorrecta. Debes resolver el enigma de nuevo.');
```

##### `await` statement

- Then, I wait for the user to press the `Enter` key.

```js
await askQuestion('Presiona Enter para continuar...');
```

##### `await` statement

- Then, I wait for the user to press the `Enter` key.

```js
await playRound();
```

#### `await` statement

- Then, I wait for the user to press the `Enter` key.

```js
await playRound();
```

### `start`

- Then, I declare a function named `start` that will start the game.

```js
const start = async () => { ... };
```

#### `difficulty`

- Then, I declare a variable named `difficulty` that will store the difficulty of the game.
- This variable is initialized to an empty string.

```js
let difficulty;
```

#### `do...while` loop

- Then, I declare a `do...while` loop that will be used to ask the user for a difficulty.
- This `do...while` loop will be executed while the difficulty is not valid.

```js
do { ... } while (true);
```

##### `difficulty`

- Then, I ask the user for a difficulty and I store the answer in the `difficulty` variable.

```js
difficulty = await askQuestion('Selecciona la dificultad (facil/medio/dificil): ');
```

##### `if` statement

- Then, I declare an `if` statement that will check if the difficulty is not valid.
- If the difficulty is not valid, a message will be displayed in the console.

```js
if (!DIFFICULTIES[difficulty]) {
  console.log('\nDificultad incorrecta. Inténtalo de nuevo.');
} else break;
```

#### `MANSION`

- Then, I set the `MANSION` variable to a random mansion.

```js
MANSION = generateRandomMansion(difficulty);
```

#### `console.log`

- Then, I display a message in the console.

```js
console.log('\n¡Bienvenido a la mansión abandonada! Resuelve los enigmas para encontrar la habitación de los dulces.');
```

#### `displayCurrentRoom`

- Then, I display the current room of the player in the console.

```js
displayCurrentRoom();
```

#### `playGame`

- Then, I play the game.

```js
playGame();
```

#### `await` statement

- Then, I wait for the user to press the `Enter` key.

```js
await askQuestion('Presiona Enter para continuar...');
```

#### `start`

- Then, I start the game.

```js
start();
```
