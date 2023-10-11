# Reto 38: Las sumas

## Enunciado

Crea una función que encuentre todas las combinaciones de los números de una lista que suman el valor objetivo.

- La función recibirá una lista de números enteros positivos y un valor objetivo.
- Para obtener las combinaciones sólo se puede usar una vez cada elemento de la lista (pero pueden existir elementos repetidos en ella).
- Ejemplo: Lista = [1, 5, 3, 2],  Objetivo = 6

  Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6)
  (Si no existen combinaciones, retornar una lista vacía)

## My solution

```js
const getCombinations = ({ values, target }) => {
  const combinations = [];
  const find = (index, sum, combination) => {
    if (sum === target) {
      combinations.push(combination);
      return;
    }
    if (sum > target || index >= values.length) {
      return;
    }
    find(index + 1, sum, combination);
    find(index + 1, sum + values[index], [...combination, values[index]]);
  };
  find(0, 0, []);
  return combinations;
};
```

## Explanation of my solution

### `getCombinations`

- First, I declare a function that receives an object as a parameter.

```js
const getCombinations = ({ values, target }) => { ... };
```

- Then, I declare a variable named `combinations` that will store the combinations of the numbers of the list that sum the target value.

```js
const combinations = [];
```

- Then, I declare a function named `find` that receives three parameters: `index`, `sum` and `combination`.

```js
const find = (index, sum, combination) => { ... };
```

- Then, I check if the sum is equal to the target value.

```js
if (sum === target) { ... }
```

- If the sum is equal to the target value, I push the combination to the `combinations` array.

```js
combinations.push(combination);
```

- Then, I check if the sum is greater than the target value or if the index is greater than or equal to the length of the values array.

```js
if (sum > target || index >= values.length) { ... }
```

- If the sum is greater than the target value or if the index is greater than or equal to the length of the values array, I return.

```js
return;
```

- Then, I call the `find` function recursively.

```js
find(index + 1, sum, combination);
find(index + 1, sum + values[index], [...combination, values[index]]);
```

- Finally, I call the `find` function with the initial values.

```js
find(0, 0, []);
```

- Finally, I return the `combinations` array.

```js
return combinations;
```

