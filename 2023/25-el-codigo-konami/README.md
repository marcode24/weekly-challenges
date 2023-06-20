# Reto #25: El código Konami

## Enunciado

Crea un programa que detecte cuando el famoso "Código Konami" se ha introducido correctamente desde el teclado.

Si sucede esto, debe notificarse mostrando un mensaje en la terminal.

## My solution

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const konami = ['u', 'u', 'd', 'd', 'l', 'r', 'l', 'r', 'b', 'a'];

let index = 0;

rl.on('line', (input) => {
  index = input.replace(/\s+/g, '').trim() === konami[index] ? index + 1 : 0;
  if (index === konami.length) {
    console.log('Konami code!');
    rl.close();
  }
});
```

## Explanation of my solution

### `readline` module

- First, I import the `readline` module from Node.js.

```js
const readline = require('readline');
```

- Then, I create an interface with the `readline.createInterface` method.

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

- The `readline.createInterface` method receives an object with two properties: `input` and `output`.

- The `input` property is the input stream where the data will be read from. In this case, it will be the `process.stdin` stream.

- The `output` property is the output stream where the data will be written to. In this case, it will be the `process.stdout` stream.

- The `readline.createInterface` method returns an instance of the `readline.Interface` class.

- The `readline.Interface` class is an event emitter that emits a `line` event when the `input` stream receives a new line.

- The `readline.Interface` class also has a `close` method that closes the `input` and `output` streams.

### `konami` array

- Then, I create a variable called `konami` that will be an array with the keys of the Konami code.

```js
const konami = ['u', 'u', 'd', 'd', 'l', 'r', 'l', 'r', 'b', 'a'];
```

### `index` variable

- After that, I create a variable called `index` that will be the index of the `konami` array.

```js
let index = 0;
```

### `rl.on` method

- Then, I use the `rl.on` method to listen to the `line` event.

```js
rl.on('line', (input) => {
  // ...
});
```

- The `rl.on` method receives two parameters: the name of the event and a callback function.

- The callback function receives the `input` as a parameter.

### `index` variable

- Then, I update the `index` variable.

```js
index = input.replace(/\s+/g, '').trim() === konami[index] ? index + 1 : 0;
```

- The `index` variable will be the `index` variable if the `input` is equal to the `konami` array at the `index` position.

- If the `input` is not equal to the `konami` array at the `index` position, the `index` variable will be `0`.

### `if` statement

- Then, I use an `if` statement to check if the `index` variable is equal to the `konami.length` variable.

```js
if (index === konami.length) {
  // ...
}
```

- If the `index` variable is equal to the `konami.length` variable, I use the `console.log` method to print a message in the terminal.

```js
console.log('Konami code!');
```

- Then, I use the `rl.close` method to close the `input` and `output` streams.

```js
rl.close();
```