# Reto 36: Permutaciones

## Enunciado

Crea un programa que sea capaz de generar e imprimir todas las permutaciones disponibles formadas por las letras de una palabra.
- Las palabras generadas no tienen por qué existir.
- Deben usarse todas las letras en cada permutación.
- Ejemplo: sol, slo, ols, osl, los, lso

## My solution

```js
const getPermutations = (str) => {
  if (str.length <= 1) return [str];
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = getPermutations(remaining);
    for (let j = 0; j < remainingPermutations.length; j++) {
      const permutation = char + remainingPermutations[j];
      permutations.push(permutation);
    }
  }
  return permutations;
};
```

## Explanation of my solution

- First, I declare a function that receives a string as a parameter.

```js
const getPermutations = (str) => { ... };
```

- Then, I check if the string has a length of 1 or less. If so, I return an array with the string.

```js
if (str.length <= 1) return [str];
```

- Then, I declare a variable named `permutations` that will store the permutations of the string.

```js
const permutations = [];
```

- Then, I iterate over the string.

```js
for (let i = 0; i < str.length; i++) { ... }
```

- Then, I declare a variable named `char` that will store the current character.

```js
const char = str[i];
```

- Then, I declare a variable named `remaining` that will store the remaining characters.

```js
const remaining = str.slice(0, i) + str.slice(i + 1);
```

- Then, I declare a variable named `remainingPermutations` that will store the permutations of the remaining characters.

```js
const remainingPermutations = getPermutations(remaining);
```

- Then, I iterate over the remaining permutations.

```js
for (let j = 0; j < remainingPermutations.length; j++) { ... }
```

- Then, I declare a variable named `permutation` that will store the current permutation.

```js
const permutation = char + remainingPermutations[j];
```

- Then, I add the permutation to the array of permutations.

```js
permutations.push(permutation);
```

- Finally, I return the array of permutations.

```js
return permutations;
```
