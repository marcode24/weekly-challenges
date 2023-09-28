# Reto #32: La columna de Excel

## Enunciado

Crea una función que calcule el número de la columna de una hoja de Excel teniendo en cuenta su nombre.
- Las columnas se designan por letras de la "A" a la "Z" de forma infinita.
- Ejemplos: A = 1, Z = 26, AA = 27, CA = 79.

## My solution

```js
const columnToNumber = (column) => {
  let number = 0;
  for (let i = 0; i < column.length; i++) {
    number = number * 26 + column.charCodeAt(i) - 64;
  }
  return number;
};
```

## Explanation of my solution

- First, I declare a function that receives a string as a parameter.

```js
const columnToNumber = (column) => { ... };
```

- Then, I declare a variable named `number` that will store the number of the column.

```js
let number = 0;
```

- Then, I iterate over the string.

```js
for (let i = 0; i < column.length; i++) { ... }
```

- Then, I calculate the number of the column.

```js
number = number * 26 + column.charCodeAt(i) - 64;
```

- I multiply the number by 26 because there are 26 letters in the alphabet. This way, I can calculate the number of the column of any length.

- I add the code of the letter minus 64 because the code of the letter "A" is 65. This way, I can calculate the number of the column of any letter.

- Finally, I return the number of the column.

```js
return number;
```
