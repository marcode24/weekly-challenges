# Reto #27: Carácter infiltrado

## Enunciado

Crea una función que reciba dos cadenas de texto casi iguales, a excepción de uno o varios caracteres.

La función debe encontrarlos y retornarlos en formato lista/array.

- Ambas cadenas de texto deben ser iguales en longitud.
- Las cadenas de texto son iguales elemento a elemento.
- No se pueden utilizar operaciones propias del lenguaje que lo resuelvan directamente.

Ejemplos:
- Me llamo mouredev / Me llemo mouredov -> ["e", "o"]
- Me llamo.Brais Moure / Me llamo brais moure -> [" ", "b", "m"]

## My solution

```js
const findCharInfiltrated = (str1, str2) => {
  if (str1.length !== str2.length) {
    return 'Las cadenas no tienen la misma longitud';
  }

  const charInfiltrated = [];
  str1.split('').forEach((char, index) => {
    if (char !== str2[index]) {
      charInfiltrated.push(str2[index]);
    }
  });

  return charInfiltrated;
};
```

## Explanation of my solution

### `findCharInfiltrated` function

- First, I declare a function named `findCharInfiltrated` that receives two parameters: `str1` and `str2`.

```js
const findCharInfiltrated = (str1, str2) => {
```

- Then, I check if the `str1` parameter and the `str2` parameter have the same length. If they don't, I return a string that says that the strings don't have the same length.

```js
  if (str1.length !== str2.length) {
    return 'Las cadenas no tienen la misma longitud';
  }
```

- Then, I declare a variable named `charInfiltrated` that will store the characters that are different in the `str1` parameter and the `str2` parameter.

```js
  const charInfiltrated = [];
```

- Then, I split the `str1` parameter into an array of characters and iterate over it using the `forEach` method.

```js
  str1.split('').forEach((char, index) => {
```

- Then, I check if the current character in the iteration is different from the character in the same position in the `str2` parameter. If it is, I push the character in the same position in the `str2` parameter into the `charInfiltrated` array.

```js
    if (char !== str2[index]) {
      charInfiltrated.push(str2[index]);
    }
  });
```

- Finally, I return the `charInfiltrated` array.

```js
  return charInfiltrated;
};
```
