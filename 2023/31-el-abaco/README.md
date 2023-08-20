# Reto #31: El Ábaco

## Enunciado

Crea una función que sea capaz de leer el número representado por el ábaco.
- El ábaco se representa por un array con 7 elementos.
- Cada elemento tendrá 9 "O" (aunque habitualmente tiene 10 para realizar operaciones) para las cuentas y una secuencia de "---" para el alambre.
- El primer elemento del array representa los millones, y el último las unidades.
- El número en cada elemento se representa por las cuentas que están a la izquierda del alambre.

Ejemplo de array y resultado:

```txt
["O---OOOOOOOO",
 "OOO---OOOOOO",
 "---OOOOOOOOO",
 "OO---OOOOOOO",
 "OOOOOOO---OO",
 "OOOOOOOOO---",
 "---OOOOOOOOO"]

Resultado: 1.302.790
```

## My solution

```js
const getNumber = (abacus) => {
  let number = 0;
  const abacusLength = abacus.length;

  for (let rowIndex = 0; rowIndex < abacusLength; rowIndex++) {
    const row = abacus[rowIndex];
    if (!/^[^-]*-{3}[^-]*$/.test(row) || row.length !== 12) {
      number = 'Invalid abacus';
      break;
    }
    number += row.split('---')[0].length * (10 ** (abacusLength - rowIndex - 1));
  }
  return number.toLocaleString('en-US');
};
```

## Explanation of my solution

### `getNumber` function

- First, I declare a function named `getNumber` that receives a parameter named `abacus`.

```js
const getNumber = (abacus) => {
```

- Then, I declare a variable named `number` that will store the number represented by the `abacus` parameter.

```js
  let number = 0;
```

- Then, I declare a variable named `abacusLength` that will store the length of the `abacus` parameter.

```js
  const abacusLength = abacus.length;
```

- Then, I iterate over the `abacus` parameter using a `for` statement.

```js
  for (let rowIndex = 0; rowIndex < abacusLength; rowIndex++) {
    const row = abacus[rowIndex];
```

- Then, I test if the current row is valid. If it is not valid, I assign the string `'Invalid abacus'` to the `number` variable and break the loop.

```js
    if (!/^[^-]*-{3}[^-]*$/.test(row) || row.length !== 12) {
      number = 'Invalid abacus';
      break;
    }
```

- Then, I add the number represented by the current row to the `number` variable.

```js
    number += row.split('---')[0].length * (10 ** (abacusLength - rowIndex - 1));
```

- Finally, I return the `number` variable formatted as a string with the `toLocaleString` method.

```js
  return number.toLocaleString('en-US');
};
```
