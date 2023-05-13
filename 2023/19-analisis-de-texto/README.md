# Reto #19: Análisis de texto

## Enunciado

Crea un programa que analice texto y obtenga:

- Número total de palabras.
- Longitud media de las palabras.
- Número de oraciones del texto (cada vez que aparecen un punto).
- Encuentre la palabra más larga.

Todo esto utilizando un único bucle.

## My solution

```js
const analyzeText = (text) => {
  if (text.trim().length === 0) {
    return {
      totalWords: 0,
      mediumWordLength: 0,
      longestWord: '',
      phrases: 0,
    };
  }
  const words = text
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  let longestWord = '';
  let mediumWordLength = 0;
  text = text.split(' ');
  let phrases = 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
    mediumWordLength += words[i].length;
    if (text[i].includes('.') && text[i + 1] !== undefined) phrases++;
  }
  mediumWordLength /= words.length;
  return {
    totalWords: words.length,
    mediumWordLength,
    longestWord,
    phrases,
  };
};
```

## Explanation of my solution

### `analyzeText` function

- First, I create a function that receives a string and returns an object with the analysis of the text.

```js
const analyzeText = (text) => {
  // ...
};
```

- If the text is empty, I return an object with all the values set to 0.

```js
if (text.trim().length === 0) {
  return {
    totalWords: 0,
    mediumWordLength: 0,
    longestWord: '',
    phrases: 0,
  };
}
```

- I create a variable to store the words and I initialize it with the text without special characters, multiple spaces and trimmed.

```js
const words = text
  .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .split(' ');
```

- I create a variable to store the longest word and I initialize it with an empty string.

```js
let longestWord = '';
```

- I create a variable to store the medium word length and I initialize it with 0.

```js
let mediumWordLength = 0;
```

- I create a variable to store the phrases and I initialize it with 1.

```js
text = text.split(' ');
let phrases = 1;
```

- I iterate over the words.

```js
for (let i = 0; i < words.length; i++) {
  // ...
}
```

- If the current word is longer than the longest word, I update the longest word.

```js
if (words[i].length > longestWord.length) longestWord = words[i];
```

- I add the length of the current word to the medium word length.

```js
mediumWordLength += words[i].length;
```

- If the current word includes a dot and the next word is not undefined, I update the phrases.

```js
if (text[i].includes('.') && text[i + 1] !== undefined) phrases++;
```

- I divide the medium word length by the number of words to get the medium word length.

```js
mediumWordLength /= words.length;
```

- I return an object with the total words, the medium word length, the longest word and the phrases.

```js
return {
  totalWords: words.length,
  mediumWordLength,
  longestWord,
  phrases,
};
```
