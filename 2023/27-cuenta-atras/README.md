# Reto #26: Cuenta atrás

## Enunciado

Crea una función que reciba dos parámetros para crear una cuenta atrás.

- El primero, representa el número en el que comienza la cuenta.
- El segundo, los segundos que tienen que transcurrir entre cada cuenta.
- Sólo se aceptan números enteros positivos.
- El programa finaliza al llegar a cero.
- Debes imprimir cada número de la cuenta atrás.

## My solution

```js
const countBack = (start, interval) => {
  if (start <= 0 || interval <= 0 || !Number.isInteger(start)
    || !Number.isInteger(interval)) {
    return;
  }
  const counter = setInterval(() => {
    console.log(start);
    start--;
    if (start <= 0) {
      clearInterval(counter);
      console.log('Termino!!!');
    }
  }, interval);
};
```

## Explanation of my solution

### `countBack` function

- First, I declare a function named `countBack` that receives two parameters: `start` and `interval`.

```js
const countBack = (start, interval) => {
```

- Then, I check if the `start` parameter is less than or equal to zero, if the `interval` parameter is less than or equal to zero, if the `start` parameter is not an integer, or if the `interval` parameter is not an integer. If any of these conditions is true, I return `undefined`.

```js
  if (start <= 0 || interval <= 0 || !Number.isInteger(start)
    || !Number.isInteger(interval)) {
    return;
  }
```

- Then, I declare a variable named `counter` that will store the return value of the `setInterval` method.

```js
  const counter = setInterval(() => {
```

- The `setInterval` method receives two parameters: a function and a number.

- The function passed as the first parameter will be executed every `interval` milliseconds.

- The `setInterval` method returns a value that can be used to stop the execution of the function passed as the first parameter.

- The function passed as the first parameter receives no parameters.

- Inside the function passed as the first parameter, I print the value of the `start` parameter to the console.

```js
    console.log(start);
```

- Then, I decrease the value of the `start` parameter by one.

```js
    start--;
```

- Then, I check if the value of the `start` parameter is less than or equal to zero. If this condition is true, I stop the execution of the function passed as the first parameter to the `setInterval` method, I print a message to the console, and I return `undefined`.

```js
    if (start <= 0) {
      clearInterval(counter);
      console.log('Termino!!!');
      return;
    }
```

- Then, I close the function passed as the first parameter to the `setInterval` method and the `countBack` function.

```js
  }, interval);
};
```
