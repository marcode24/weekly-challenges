# Reto #28: Expresión matemática

## Enunciado

Crea una función que reciba una expresión matemática (String) y compruebe si es correcta. Retornará true o false.

- Para que una expresión matemática sea correcta debe poseer un número, una operación y otro número separados por espacios. Tantos números y operaciones como queramos.
- Números positivos, negativos, enteros o decimales.
- Operaciones soportadas: + - * / %

Ejemplos:

```txt
"5 + 6 / 7 - 4" -> true
"5 a 6" -> false
```

## My solution

```js
const isMathExpresion = (str) => {
  str = str.replace(/\s+/g, ' ').split(' ').join('');
  const regex = /^(\d+[\\+\-\\*\\/%]?)+\d+$/;
  return regex.test(str);
};
```

## Explanation of my solution

### `isMathExpresion` function

- First, I declare a function named `isMathExpresion` that receives a parameter named `str`.

```js
const isMathExpresion = (str) => {
```

- Then, I replace all the spaces in the `str` parameter with a single space.

```js
  str = str.replace(/\s+/g, ' ');
```

- Then, I split the `str` parameter by spaces and join the resulting array into a string.

```js
  str = str.replace(/\s+/g, ' ').split(' ').join('');
```

- Then, I declare a variable named `regex` that will store a regular expression that will be used to test if the `str` parameter is a valid mathematical expression.

```js
  const regex = /^(\d+[\\+\-\\*\\/%]?)+\d+$/;
```

- The regular expression stored in the `regex` variable will match the following:

  - `^`: The beginning of the string.
  - `(`: The beginning of a capturing group.
  - `\d+`: One or more digits.
  - `[\\+\-\\*\\/%]?`: An optional `+`, `-`, `*`, `/` or `%` character.
  - `)`: The end of the capturing group.
  - `+`: One or more times.
  - `\d+`: One or more digits.
  - `$`: The end of the string.

- Then, I return the result of testing if the `str` parameter matches the regular expression stored in the `regex` variable.

```js
  return regex.test(str);
};
```

- The `test` method of the `RegExp` object receives a string as a parameter and returns `true` if the string matches the regular expression, or `false` otherwise.
