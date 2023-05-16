# Reto #20: La trifuerza

## Enunciado

¡El nuevo "The Legend of Zelda: Tears of the Kingdom" ya está disponible!

Crea un programa que dibuje una Trifuerza de "Zelda" formada por asteriscos.

- Debes indicarle el número de filas de los triángulos con un entero positivo (n).
- Cada triángulo calculará su fila mayor utilizando la fórmula 2n-1.

 Ejemplo: Trifuerza 2
 
```
    *
   ***
  *   *
 *** ***
```

## My solution

```js
const buildTreeForce = (n) => {
  let tree = '';
  const width = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    const upSpaces = ' '.repeat(width + 2 - i * 2);
    const upAsterisks = `${upSpaces}${'*   '.repeat(i - 1)}*${upSpaces}`;
    const downSpaces = ' '.repeat(2 * n - i * 2);
    const downAsterisks = `${`${'*'.repeat(3)} `.repeat(i - 1)}${'*'.repeat(3)}`;
    const downAsterisksCompleted = downSpaces + downAsterisks + downSpaces;
    tree += `${upAsterisks}\n${downAsterisksCompleted}\n`;
  }
  return tree.slice(0, -1);
};
```

## Explanation of my solution

### `buildTreeForce` function

- First, I create a function that receives a number and returns a string with the tree force.

```js
const buildTreeForce = (n) => {
  // ...
};
```

- Then, I create a variable `tree` that will store the tree force.

```js
let tree = '';
```

- I create a variable `width` that will store the width of the tree force.

```js
const width = 2 * n - 1;
```

- I create a `for` loop that will iterate from 1 to `n` (the number of rows of the tree force).

```js
for (let i = 1; i <= n; i++) {
  // ...
}
```

- Inside the `for` loop, I create a variable `upSpaces` that will store the spaces of the upper part of the tree force.

```js
const upSpaces = ' '.repeat(width + 2 - i * 2);
```

- I create a variable `upAsterisks` that will store the asterisks of the upper part of the tree force.

```js
const upAsterisks = `${upSpaces}${'*   '.repeat(i - 1)}*${upSpaces}`;
```

- I create a variable `downSpaces` that will store the spaces of the lower part of the tree force.

```js
const downSpaces = ' '.repeat(2 * n - i * 2);
```

- I create a variable `downAsterisks` that will store the asterisks of the lower part of the tree force.

```js
const downAsterisks = `${`${'*'.repeat(3)} `.repeat(i - 1)}${'*'.repeat(3)}`;
```

- I create a variable `downAsterisksCompleted` that will store the lower part of the tree force completed with spaces.

```js
const downAsterisksCompleted = downSpaces + downAsterisks + downSpaces;
```

- I add the upper part and the lower part of the tree force to the `tree` variable.

```js
tree += `${upAsterisks}\n${downAsterisksCompleted}\n`;
```

- Finally, I return the `tree` variable without the last line break.

```js
return tree.slice(0, -1);
```
