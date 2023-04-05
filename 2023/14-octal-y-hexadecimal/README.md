# Reto #14: Octal y Hexadecimal

## Enunciado

Crea una función que reciba un número decimal y lo trasforme a Octal y Hexadecimal.
- No está permitido usar funciones propias del lenguaje de programación que realicen esas operaciones directamente.

## My solution

```js
const decimalToOctal = (number) => {
  let octal = '';
  while (number > 0) {
    octal = (number % 8) + octal;
    number = Math.floor(number / 8);
  }
  return octal;
};

const convertToHexadecimal = (number) => {
  let hexadecimal = '';
  while (number > 0) {
    const remainder = number % 16;
    const char = remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
    hexadecimal = char + hexadecimal;
    number = Math.floor(number / 16);
  }
  return hexadecimal;
};
```

## Explanation of my solution

### `decimalToOctal` function

- First, I create a function that receives a decimal number and returns the octal number.

```js
const decimalToOctal = (decimal) => {
  let octal = '';
  while (decimal > 0) {
    octal = (decimal % 8) + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal;
};
```

- I create a variable to store the octal number and I initialize it with an empty string.

```js
let octal = '';
```

- Then, I create a while loop that will run until the decimal number is greater than 0.

```js
while (decimal > 0) {
  // ...
}
```

- Inside the while loop, I calculate the remainder of the division of the decimal number by 8 and I add it to the octal number.

```js
octal = (decimal % 8) + octal;
```

- Then, I divide the decimal number by 8 and I round it down to the nearest integer.

```js
decimal = Math.floor(decimal / 8);
```

- Finally, I return the octal number.

```js
return octal;
```

### `decimalToHexadecimal` function

- First, I create a function that receives a decimal number and returns the hexadecimal number.

```js
const decimalToHexadecimal = (decimal) => {
  let hexadecimal = '';
  while (decimal > 0) {
    const remainder = decimal % 16;
    const char = remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
    hexadecimal = char + hexadecimal;
    decimal = Math.floor(decimal / 16);
  }
  return hexadecimal;
};
```

- I create a variable to store the hexadecimal number and I initialize it with an empty string.

```js
let hexadecimal = '';
```

- Then, I create a while loop that will run until the decimal number is greater than 0.

```js
while (decimal > 0) {
  // ...
}
```

- Inside the while loop, I calculate the remainder of the division of the decimal number by 16 and I store it in a variable.

```js
const remainder = decimal % 16;
```

- Then, I check if the remainder is less than 10.

```js
const char = remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
```

- If it is, I store the remainder in the variable `char`.

```js
const char = remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
```

- If it is not, I convert the remainder to a character using the `String.fromCharCode` function and I store it in the variable `char`.

```js
const char = remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
```

- Then, I add the character to the hexadecimal number.

```js
hexadecimal = char + hexadecimal;
```

- Finally, I divide the decimal number by 16 and I round it down to the nearest integer.

```js
decimal = Math.floor(decimal / 16);
```

- Finally, I return the hexadecimal number.

```js
return hexadecimal;
```
