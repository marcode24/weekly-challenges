# Reto #16: La escalera

## Enunciado
Crea una función que dibuje una escalera según su número de escalones.

- Si el número es positivo, será ascendente de izquiera a derecha.
- Si el número es negativo, será descendente de izquiera a derecha.
- Si el número es cero, se dibujarán dos guiones bajos (__).

Ejemplo: 4
```
        _
      _|
    _|
  _|
_|
```

# My solution

```js
const buildStairs = (n) => {
  let stairs = '_';
  if (n < 0) {
    Array.from({ length: Math.abs(n) }, (_, i) => i).forEach((i) => {
      stairs += `\n${' '.repeat(1 + i * 2)}|_`;
    });
    return stairs;
  }
  if (n > 0) {
    let spaces = ' '.repeat(n * 2);
    stairs = `${spaces}${stairs}`;
    Array.from({ length: n }, (_, i) => i + 1).forEach(() => {
      spaces = spaces.slice(0, -2);
      stairs += `\n${spaces}_|`;
    });
    return stairs;
  }
  return `${stairs}_`;
};
```

## Explanation of my solution

### `buildStairs` function

- First, I create a function that receives a number and returns a string with the stairs.

```js
const buildStairs = (n) => {
  let stairs = '_';
  // ...
};
```

- I create a variable to store the stairs and I initialize it with an underscore.

```js
let stairs = '_';
```

- Then, I create an if statement that will run if the number is less than 0.

```js
if (n < 0) {
  // ...
}
```

- Inside the if statement, I create an array with the length of the absolute value of the number and I iterate over it.

```js
Array.from({ length: Math.abs(n) }, (_, i) => i).forEach((i) => {
  // ...
});
```

- Inside the forEach loop, I add a new line and the stairs to the variable.

```js
stairs += `\n${' '.repeat(1 + i * 2)}|_`;
```

- Finally, I return the variable.

```js
return stairs;
```

- Then, I create an if statement that will run if the number is greater than 0.

```js
if (n > 0) {
  // ...
}
```

- Inside the if statement, I create a variable to store the spaces and I initialize it with the number of spaces needed.

```js
let spaces = ' '.repeat(n * 2);
```

- Then, I add the stairs to the variable.

```js
stairs = `${spaces}${stairs}`;
```

- Then, I create an array with the length of the number and I iterate over it.

```js
Array.from({ length: n }, (_, i) => i + 1).forEach(() => {
  // ...
});
```

- Inside the forEach loop, I remove two spaces from the variable.

```js
spaces = spaces.slice(0, -2);
```

- Then, I add a new line and the stairs to the variable.

```js
stairs += `\n${spaces}_|`;
```

- Finally, I return the variable.

```js
return stairs;
```

- If the number is 0, I return the stairs.

```js
return `${stairs}_`;
```

