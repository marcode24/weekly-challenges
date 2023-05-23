# Reto #21: Números primos gemelos

## Enunciado

Crea un programa que encuentre y muestre todos los pares de números primos gemelos en un rango concreto.

El programa recibirá el rango máximo como número entero positivo.

- Un par de números primos se considera gemelo si la diferencia entre ellos es exactamente 2. Por ejemplo (3, 5), (11, 13)
- Ejemplo: Rango 14 --> (3, 5), (5, 7), (11, 13)

## My solution

```js
const getPrimeNumbersTwins = (max) => {
  const primeNumbers = [];
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) primeNumbers.push(i);
  }
  const primeNumbersTwins = [];
  for (let i = 0; i < primeNumbers.length; i++) {
    if (primeNumbers[i + 1] - primeNumbers[i] === 2) {
      primeNumbersTwins.push([primeNumbers[i], primeNumbers[i + 1]]);
    }
  }
  return primeNumbersTwins;
};
```

## Explanation of my solution

### `getPrimeNumbersTwins` function

- First, I create a function that receives a number and returns an array with the prime numbers twins.

```js
const getPrimeNumbersTwins = (max) => {
  // ...
};
```

- Then, I create a variable `primeNumbers` that will store the prime numbers.

```js
const primeNumbers = [];
```

- I create a `for` loop that will iterate from 2 to the number received as an argument.

```js
for (let i = 2; i <= max; i++) {
  // ...
}
```

- Inside the `for` loop, I create a variable `isPrime` that will store a boolean value indicating if the current number is prime or not.

```js
let isPrime = true;
```

- I create another `for` loop that will iterate from 2 to the current number.

```js
for (let j = 2; j < i; j++) {
  // ...
}
```

- Inside the `for` loop, I check if the current number is divisible by the current iteration number. If it is, I change the value of `isPrime` to `false`.

```js
if (i % j === 0) isPrime = false;
```

- After the `for` loop, I check if the current number is prime. If it is, I add it to the `primeNumbers` array.

```js
if (isPrime) primeNumbers.push(i);
```

- Then, I create a variable `primeNumbersTwins` that will store the prime numbers twins.

```js
const primeNumbersTwins = [];
```

- I create a `for` loop that will iterate from 0 to the length of the `primeNumbers` array.

```js
for (let i = 0; i < primeNumbers.length; i++) {
  // ...
}
```

- Inside the `for` loop, I check if the difference between the current number and the next number is 2. If it is, I add the pair of numbers to the `primeNumbersTwins` array.

```js
if (primeNumbers[i + 1] - primeNumbers[i] === 2) {
  primeNumbersTwins.push([primeNumbers[i], primeNumbers[i + 1]]);
}
```

- Finally, I return the `primeNumbersTwins` array.

```js
return primeNumbersTwins;
```
