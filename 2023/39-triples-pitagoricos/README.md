# Reto 39: Triples pitagóricos

## Enunciado

Crea una función que encuentre todos los triples pitagóricos (ternas) menores o iguales a un número dado.

- Debes buscar información sobre qué es un triple pitagórico.
- La función únicamente recibe el número máximo que puede aparecer en el triple.
- Ejemplo: Los triples menores o iguales a 10 están formados por (3, 4, 5) y (6, 8, 10).

## My solution

```js
const pythagoreanTriple = (n) => {
  const triples = [];

  for (let a = 1; a <= n; a++) {
    const aSquared = a * a;

    for (let b = a + 1; b <= n; b++) {
      const bSquared = b * b;
      const cSquared = aSquared + bSquared;
      const c = Math.sqrt(cSquared);

      if (c <= n && c === Math.floor(c)) {
        triples.push([a, b, c]);
      }
    }
  }

  return triples;
};
```

## Explanation of my solution

### `pythagoreanTriple`

- First, I declare a function that receives a number as a parameter.

```js
const pythagoreanTriple = (n) => { ... };
``` 

- Then, I declare a variable named `triples` that will store the triples.

```js
const triples = [];
```

- Then, I declare a `for` loop that will iterate from 1 to `n`.

```js
for (let a = 1; a <= n; a++) { ... }
```

- Then, I declare a variable named `aSquared` that will store the square of `a`.

```js
const aSquared = a * a;
```

- Then, I declare a `for` loop that will iterate from `a + 1` to `n`.

```js
for (let b = a + 1; b <= n; b++) { ... }
```

- Then, I declare a variable named `bSquared` that will store the square of `b`.

```js
const bSquared = b * b;
```

- Then, I declare a variable named `cSquared` that will store the sum of `aSquared` and `bSquared`.

```js
const cSquared = aSquared + bSquared;
```

- Then, I declare a variable named `c` that will store the square root of `cSquared`.

```js
const c = Math.sqrt(cSquared);
```

- Then, I check if `c` is less than or equal to `n` and if `c` is an integer. If so, I push the triple to the `triples` array.

```js
if (c <= n && c === Math.floor(c)) {
  triples.push([a, b, c]);
}
```

- Finally, I return the `triples` array.

```js
return triples;
```
