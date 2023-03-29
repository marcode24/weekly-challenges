# Reto #13: Adivina la palabra

## Enunciado

Crea un pequeño juego que consista en adivinar palabras en un número máximo de intentos:
- El juego comienza proponiendo una palabra aleatoria incompleta
  - Por ejemplo "m_ur_d_v", y el número de intentos que le quedan
- El usuario puede introducir únicamente una letra o una palabra (de la misma longitud que la palabra a adivinar)
  - Si escribe una letra y acierta, se muestra esa letra en la palabra. Si falla, se resta uno al número de intentos
  - Si escribe una resolución y acierta, finaliza el juego, en caso contrario, se resta uno al número de intentos
  - Si el contador de intentos llega a 0, el jugador pierde
- La palabra debe ocultar de forma aleatoria letras, y nunca puede comenzar ocultando más del 60%
- Puedes utilizar las palabras que quieras y el número de intentos que consideres

## My solution

```js
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MAX_ATTEMPTS = 5;

const generateWord = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let word = '';
  for (let i = 0; i < length; i++) {
    word += characters[Math.floor(Math.random() * characters.length)];
  }
  return word;
};

const generateRandomLength = (min = 8, max = 12) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const hideSomeLetters = (word) => {
  const percentToHide = Math.floor(Math.random() * 6) + 3;
  const lettersToHide = [...word].filter((_, index) => index % percentToHide === 0);
  return [...word].map((char) => (lettersToHide.includes(char) ? '_' : char)).join('');
};

const start = () => {
  const word = generateWord(generateRandomLength());
  const guessWord = hideSomeLetters(word);
  const results = [...guessWord].map((char) => ({ char, guessed: (char !== '_') }));
  let attempts = 0;
  console.log({word })

  console.log(`Welcome to the game!!! try to guess the word in ${MAX_ATTEMPTS} attempts \n`);
  console.log(`Your word is: ${guessWord}\n`);

  const askQuestion = () => {
    console.log(`You have ${MAX_ATTEMPTS - attempts} attempts left`);
    readLine.question('Enter a word: ', (answer) => {
      if (answer.length !== word.length) {
        console.log('Your word must have the same length as the hidden word\n');
        return askQuestion();
      }

      results.map((result, index) => {
        if (result.char === '_' && word[index] === answer[index]) {
          result.guessed = true;
          result.char = answer[index];
        }
        return result;
      });
      attempts++;

      if (results.every((result) => result.guessed)) {
        readLine.close();
        return console.log('\nYou won :)');
      }

      if (attempts === MAX_ATTEMPTS) {
        readLine.close();
        return console.log(`\nYou lost :( \nThe word was: ${word}`);
      } else {
        console.log(`\ncurrent result: ${results.map((result) => result.char).join('')} \n`);
        return askQuestion();
      }
    });
  };
  askQuestion();
};

start();
```

## Explanation of my solution

- First, I create a function that generates a random word of a random length between 8 and 12 characters.

```js
const generateWord = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let word = '';
  for (let i = 0; i < length; i++) {
    word += characters[Math.floor(Math.random() * characters.length)];
  }
  return word;
};
```

- Then, I create a function that generates a random length between 8 and 12 characters.

```js
const generateRandomLength = (min = 8, max = 12) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```

- Then, I create a function that hides some letters of the word.

```js
const hideSomeLetters = (word) => {
  const percentToHide = Math.floor(Math.random() * 6) + 3;
  const lettersToHide = [...word].filter((_, index) => index % percentToHide === 0);
  return [...word].map((char) => (lettersToHide.includes(char) ? '_' : char)).join('');
};
```

### Explanation of the function `hideSomeLetters`

- First, I generate a random number between 3 and 8, this number will be the percentage of letters that I will hide.

```js
const percentToHide = Math.floor(Math.random() * 6) + 3;
```

- Then, I create an array with the letters that I will hide, I do this by filtering the word and taking the letters that are in the positions that are multiples of the percentage that I generated.

```js
const lettersToHide = [...word].filter((_, index) => index % percentToHide === 0);
```

- Finally, I create a new array with the letters of the word, if the letter is in the array of letters to hide, I replace it with an underscore, otherwise I leave it as it is.

```js
return [...word].map((char) => (lettersToHide.includes(char) ? '_' : char)).join('');
```

- Then, I create a function that starts the game.

```js
const start = () => {
  const word = generateWord(generateRandomLength());
  const guessWord = hideSomeLetters(word);
  const results = [...guessWord].map((char) => ({ char, guessed: (char !== '_') }));
  let attempts = 0;

  console.log(`Welcome to the game!!! try to guess the word in ${MAX_ATTEMPTS} attempts \n`);
  console.log(`Your word is: ${guessWord}\n`);

  const askQuestion = () => {
    console.log(`You have ${MAX_ATTEMPTS - attempts} attempts left`);
    readLine.question('Enter a word: ', (answer) => {
      if (answer.length !== word.length) {
        console.log('Your word must have the same length as the hidden word\n');
        return askQuestion();
      }

      results.map((result, index) => {
        if (result.char === '_' && word[index] === answer[index]) {
          result.guessed = true;
          result.char = answer[index];
        }
        return result;
      });
      attempts++;

      if (results.every((result) => result.guessed)) {
        readLine.close();
        return console.log('\nYou won :)');
      }

      if (attempts === MAX_ATTEMPTS) {
        readLine.close();
        return console.log(`\nYou lost :( \nThe word was: ${word}`);
      } else {
        console.log(`\ncurrent result: ${results.map((result) => result.char).join('')} \n`);
        return askQuestion();
      }
    });
  };
  askQuestion();
};
```

### Explanation of the function `start`

- First, I generate a random word and I hide some letters.

```js
const word = generateWord(generateRandomLength());
const guessWord = hideSomeLetters(word);
```

- Then, I create an array with the letters of the word that I will guess, I also add a property to each letter that indicates if it has been guessed or not.

```js
const results = [...guessWord].map((char) => ({ char, guessed: (char !== '_') }));
```

- Then, I create a variable that will keep track of the number of attempts.

```js
let attempts = 0;
```

- Then, I print a welcome message and the word to guess.

```js
console.log(`Welcome to the game!!! try to guess the word in ${MAX_ATTEMPTS} attempts \n`);
console.log(`Your word is: ${guessWord}\n`);
```

- Then, I create a function that asks the user for a word.

```js
const askQuestion = () => {
  console.log(`You have ${MAX_ATTEMPTS - attempts} attempts left`);
  readLine.question('Enter a word: ', (answer) => {
    if (answer.length !== word.length) {
      console.log('Your word must have the same length as the hidden word\n');
      return askQuestion();
    }

    results.map((result, index) => {
      if (result.char === '_' && word[index] === answer[index]) {
        result.guessed = true;
        result.char = answer[index];
      }
      return result;
    });
    attempts++;

    if (results.every((result) => result.guessed)) {
      readLine.close();
      return console.log('\nYou won :)');
    }

    if (attempts === MAX_ATTEMPTS) {
      readLine.close();
      return console.log(`\nYou lost :( \nThe word was: ${word}`);
    } else {
      console.log(`\ncurrent result: ${results.map((result) => result.char).join('')} \n`);
      return askQuestion();
    }
  });
};
```

### Explanation of the function `askQuestion`

- First, I print the number of attempts that the user has left.

```js
console.log(`You have ${MAX_ATTEMPTS - attempts} attempts left`);
```

- Then, I ask the user for a word and I check if the word has the same length as the hidden word.

```js
readLine.question('Enter a word: ', (answer) => {
  if (answer.length !== word.length) {
    console.log('Your word must have the same length as the hidden word\n');
    return askQuestion();
  }
```

- Then, I check if the letters of the word that the user entered are in the same position as the letters of the hidden word, if they are, I replace the underscore with the letter.

```js
results.map((result, index) => {
  if (result.char === '_' && word[index] === answer[index]) {
    result.guessed = true;
    result.char = answer[index];
  }
  return result;
});
```

- Then, I increase the number of attempts.

```js
attempts++;
```

- Then, I check if the user has guessed all the letters, if so, I close the game and print a message.

```js
if (results.every((result) => result.guessed)) {
  readLine.close();
  return console.log('\nYou won :)');
}
```

- Then, I check if the user has reached the maximum number of attempts, if so, I close the game and print a message.

```js
if (attempts === MAX_ATTEMPTS) {
  readLine.close();
  return console.log(`\nYou lost :( \nThe word was: ${word}`);
} else {
  console.log(`\ncurrent result: ${results.map((result) => result.char).join('')} \n`);
  return askQuestion();
}
```

- Finally, I call the function `start`.

```js
start();
```
