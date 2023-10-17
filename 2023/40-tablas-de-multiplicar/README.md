# Reto 40: Tablas de multiplicar

## Enunciado

Crea un programa que sea capaz de solicitarte un número y se encargue de imprimir su tabla de multiplicar entre el 1 y el 10.

- Debe visualizarse qué operación se realiza y su resultado

```txt
  Ej: 1 x 1 = 1
      1 x 2 = 2
      1 x 3 = 3
      ... 
```

## My solution

```js
const printMutliplications = (num) => {
  const results = [];
  for (let index = 0; index < 10; index++) {
    const legend = `${num} x ${index + 1} = ${num * (index + 1)}`;
    results.push(legend);
  }
  return results;
};
```

## Explanation of my solution

### `printMutliplications`

- First, I declare a function that receives a number as a parameter.

```js
const printMutliplications = (num) => { ... };
```

- Then, I declare a variable named `results` that will store the results of the multiplications.

```js
const results = [];
```

- Then, I declare a `for` loop that will iterate 10 times.

```js
for (let index = 0; index < 10; index++) { ... }
```

- Then, I declare a variable named `legend` that will store the legend of the multiplication.

```js
const legend = `${num} x ${index + 1} = ${num * (index + 1)}`;
```

- Then, I push the legend to the `results` array.

```js
results.push(legend);
```

- Finally, I return the `results` array.

```js
return results;
```
