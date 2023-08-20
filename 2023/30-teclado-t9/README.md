# Reto #30: El Teclado T9

## Enunciado

Los primeros dispositivos móviles tenían un teclado llamado T9 con el que se podía escribir texto utilizando únicamente su teclado numérico (del 0 al 9).

Crea una función que transforme las pulsaciones del T9 a su representación con letras.
- Debes buscar cuál era su correspondencia original.
- Cada bloque de pulsaciones va separado por un guión.
- Si un bloque tiene más de un número, debe ser siempre el mismo.
- Ejemplo:
  - Entrada: 6-666-88-777-33-3-33-888
  - Salida: MOUREDEV

## My solution

```js
const getKeyboardT9Text = (numbers) => {
  const KEYBOARD = {
    1: '',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
    0: ' ',
  };
  return numbers
    .split('-')
    .reduce((acc, number) => acc + KEYBOARD[number[0]][number.length - 1], '');
};
```

## Explanation of my solution

### `getKeyboardT9Text` function

- First, I declare a function named `getKeyboardT9Text` that receives a parameter named `numbers`.

```js
const getKeyboardT9Text = (numbers) => {
```

- Then, I declare a constant named `KEYBOARD` that will store an object with the T9 keyboard numbers as keys and the corresponding letters as values.

```js
  const KEYBOARD = {
    1: '',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
    0: ' ',
  };
```

- Then, I split the `numbers` parameter by the `-` character and store the resulting array in a variable named `numbersArray`.

```js
  return numbers
    .split('-')
```

- Then, I reduce the `numbersArray` array into a string by using the `KEYBOARD` object to get the corresponding letter for each number in the `numbersArray` array.

```js
    .reduce((acc, number) => acc + KEYBOARD[number[0]][number.length - 1], '');
```

- The `reduce` method receives a callback function as a parameter. This callback function receives two parameters:
  - `acc`: The accumulator.
  - `number`: The current number in the `numbersArray` array.
  - The callback function returns the accumulator plus the letter corresponding to the current number in the `numbersArray` array.
  - The `reduce` method also receives an initial value for the accumulator. In this case, the initial value is an empty string.
