# Reto #22: La espiral

## Enunciado


Crea una función que dibuje una espiral como la del ejemplo.

- Únicamente se indica de forma dinámica el tamaño del lado.
- Símbolos permitidos: ═ ║ ╗ ╔ ╝ ╚

Ejemplo espiral de lado 5 (5 filas y 5 columnas):
```text
 ════╗
 ╔══╗║
 ║╔╗║║
 ║╚═╝║
 ╚═══╝
```

## My solution
```js
const drawSpiral = (size) => {
  const up = Math.ceil(size / 2);
  let result = `${'═'.repeat(size - 1)}╗\n`;
  for (let row = 1; row < up; row++) {
    result += `${'║'.repeat(row - 1)}╔${'═'.repeat(size - (2 * row) - 1)}╗${'║'.repeat(row)}\n`;
  }
  for (let row = up; row < size; row++) {
    result += `${'║'.repeat(size - row - 1)}╚${'═'.repeat((2 * row) - size)}╝${'║'.repeat(size - row - 1)}\n`;
  }
  return result.slice(0, -1);
};
```

## Explanation of my solution

### `drawSpiral` function

- First, I create a function called `drawSpiral` that receives a `size` parameter.

```js
const drawSpiral = (size) => {
  // ...
}
```

- Then, I create a variable called `up` that will be the number of rows that will be drawn in the first part of the spiral.

```js
const up = Math.ceil(size / 2);
```

- After that, I create a variable called `result` that will be the string that will be returned at the end of the function.

```js
let result = `${'═'.repeat(size - 1)}╗\n`;
```

- Then, I create a `for` loop that will iterate from `1` to `up` and will add a new line to the `result` variable in each iteration.

```js
for (let row = 1; row < up; row++) {
  // ...
}
```

- Inside the `for` loop, I add the first part of the spiral to the `result` variable.

```js
result += `${'║'.repeat(row - 1)}╔${'═'.repeat(size - (2 * row) - 1)}╗${'║'.repeat(row)}\n`;
```

- Then, I create another `for` loop that will iterate from `up` to `size` and will add a new line to the `result` variable in each iteration.

```js
for (let row = up; row < size; row++) {
  // ...
}
```

- Inside the `for` loop, I add the second part of the spiral to the `result` variable.

```js
result += `${'║'.repeat(size - row - 1)}╚${'═'.repeat((2 * row) - size)}╝${'║'.repeat(size - row - 1)}\n`;
```

- Finally, I return the `result` variable.

```js
return result.slice(0, -1);
```

