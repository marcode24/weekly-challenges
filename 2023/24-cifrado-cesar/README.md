# Reto #24: Cifrado César

## Enunciado

Crea un programa que realize el cifrado César de un texto y lo imprima.

También debe ser capaz de descifrarlo cuando así se lo indiquemos.

Te recomiendo que busques información para conocer en profundidad cómo realizar el cifrado. Esto también forma parte del reto.

## My solution

```js
const cesarEncrypt = (str, offset) => {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  const alphabetLength = alphabet.length;
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => word.split('').reduce((acc, letter) => {
      const isUpperCase = letter === letter.toUpperCase();

      if (isUpperCase) letter = letter.toLowerCase();

      const index = alphabet.indexOf(letter);
      let newIndex = index + offset;

      if (newIndex >= alphabetLength) newIndex -= alphabetLength;
      const newLetter = alphabet[newIndex];

      return acc + (isUpperCase ? newLetter.toUpperCase() : newLetter);
    }, ''))
    .join(' ');
};
```

## Explanation of my solution

### `cesarEncrypt` function

- First, I create a function called `cesarEncrypt` that receives two parameters: `str` and `offset`.

```js
const cesarEncrypt = (str, offset) => {
  // ...
};
```

- Then, I create a variable called `alphabet` that will be a string with all the letters of the alphabet.

```js
const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
```

- After that, I create a variable called `alphabetLength` that will be the length of the `alphabet` variable.

```js
const alphabetLength = alphabet.length;
```

- Then, I return the result of the following operations:

  - I trim the `str` parameter.
  - I replace all the spaces with a single space.
  - I split the string by spaces.
  - I map the array of words and for each word I split it by letters and reduce it to a single value.
  - I return the result of the reduce method.

```js
return str
  .trim()
  .replace(/\s+/g, ' ')
  .split(' ')
  .map((word) => word.split('').reduce((acc, letter) => {
    // ...
  }, ''))
  .join(' ');
```

- Then, I create a variable called `isUpperCase` that will be `true` if the `letter` is uppercase.

```js
const isUpperCase = letter === letter.toUpperCase();
```

- After that, I convert the `letter` to lowercase.

```js
if (isUpperCase) letter = letter.toLowerCase();
```

- Then, I create a variable called `index` that will be the index of the `letter` in the `alphabet` variable.

```js
const index = alphabet.indexOf(letter);
```

- After that, I create a variable called `newIndex` that will be the sum of the `index` and the `offset` parameters.

```js
let newIndex = index + offset;
```

- Then, I check if the `newIndex` is greater than or equal to the `alphabetLength` variable.

```js
if (newIndex >= alphabetLength) newIndex -= alphabetLength;
```

- After that, I create a variable called `newLetter` that will be the letter in the `newIndex` position of the `alphabet` variable.

```js
const newLetter = alphabet[newIndex];
```

- Then, I return the `acc` parameter plus the `newLetter` variable converted to uppercase if the `isUpperCase` variable is `true`.

```js
return acc + (isUpperCase ? newLetter.toUpperCase() : newLetter);
```

