# Reto #9: Hetrograma, Isograma y Pangrama

## Enunciado

Crea 3 funciones, cada una encargada de detectar si una cadena de texto es un heterograma, un isograma o un pangrama.

- Debes buscar la definición de cada uno de estos términos.

## My solution

```js
const isHeterogram = (str) => {
  const strArr = [...str.trim().toLowerCase().replace(/\s/g, "")];
  const strSet = new Set(strArr);
  return strArr.length === strSet.size;
};

const isIsogram = (str) => isHeterogram(str);

const isPangram = (str) => {
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  str = str.replace(/[\d\W]/g, "").trim();
  const strArr = [...str.trim().toLowerCase().replace(/\s/g, "")];
  const strSet = new Set(strArr);
  return strSet.size === 26;
};
```

## Explanation of my solution

### isHeterogram

- First, I convert the string to an array of characters using the spread operator transforming the string into lowercase and removing the spaces.

```js
const strArr = [...str.trim().toLowerCase().replace(/\s/g, "")];
```

- Then, I create a set from the array of characters to remove the duplicates.

```js
const strSet = new Set(strArr);
```

- Finally, I compare the length of the array with the size of the set and return the result.

```js
return strArr.length === strSet.size;
```

### isIsogram

- I use the same function as isHeterogram.

```js
const isIsogram = (str) => isHeterogram(str);
```

### isPangram

- First, I remove all the accents from the string using the normalize method.

```js
str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
```

**Note:** u3000-u036f is the range of Unicode characters that are diacritics.

- Then, I remove all the numbers and special characters replacing them with an empty string.

```js
str = str.replace(/[\d\W]/g, "").trim();
```

- Finally, I use the same function as isHeterogram to check if the string is a pangram validating that the set has 26 characters (the number of letters in the alphabet).

```js
const strArr = [...str.trim().toLowerCase().replace(/\s/g, "")];
const strSet = new Set(strArr);
return strSet.size === 26;
```
