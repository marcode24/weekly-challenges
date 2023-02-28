# Reto #4: Primo Fibonnaci y Par

## Enunciado

Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.

Ejemplos:

- Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
- Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"

## My solution

```js
const isPrimeFibonnaciEven = (n) => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const isFibonnaci = (num) => {
    const fibonnaci = [0, 1];
    let i = 2;
    while (fibonnaci[i - 1] < num) {
      fibonnaci.push(fibonnaci[i - 1] + fibonnaci[i - 2]);
      i += 1;
    }
    return fibonnaci.includes(num);
  };

  const isEven = (num) => num % 2 === 0;

  return {
    prime: isPrime(n),
    fibonnaci: isFibonnaci(n),
    even: isEven(n),
  };
};
```

## Explanation of my solution

- First, I create three functions to check if a number is prime, fibonacci and even.

### isPrime

- I create a function that receives a number and returns a boolean.

```js
const isPrime = (num) => {
  // ...
};
```

- I create a for loop that iterates from 2 to the number received as a parameter.

```js
for (let i = 2; i < num; i++) {
  // ...
}
```

- Inside the loop, I check if the number is divisible by the current iteration. If it is, I return false because it is not a prime number and I stop the loop.

```js
if (num % i === 0) return false;
```

- If the number is not divisible by the current iteration, I continue the loop.

- After the loop, I check if the number is greater than 1. If it is, I return true because it is a prime number. If it is not, I return false because it is not a prime number.

```js
return num > 1;
```

### isFibonnaci

- I create a function that receives a number and returns a boolean.

```js
const isFibonnaci = (num) => {
  // ...
};
```

- I create an array with the first two numbers of the Fibonacci sequence.

```js
const fibonnaci = [0, 1];
```

- I create a variable to keep track of the current index of the array and I initialize it to 2 because the first two numbers are already in the array.

```js
let i = 2;
```

- I create a while loop that iterates while the last number of the array is less than the number received as a parameter.

```js
while (fibonnaci[i - 1] < num) {
  // ...
}
```

- Inside the loop, I push the sum of the last two numbers of the array to the array and I increment the index variable.

```js
fibonnaci.push(fibonnaci[i - 1] + fibonnaci[i - 2]);
i += 1;
```

- After the loop, I return true if the array includes the number received as a parameter and false if it does not.

```js
return fibonnaci.includes(num);
```

### isEven

- I create a function that receives a number and returns a boolean.

```js
const isEven = (num) => {
  // ...
};
```

- I return true if the number is divisible by 2 and false if it is not.

```js
return num % 2 === 0;
```

- Then, I create the main function that receives a number and returns an object with the results of the three functions.

```js
const isPrimeFibonnaciEven = (n) => {
  // ...
};
```

- I call the three functions and I return an object with the results.

```js
return {
  prime: isPrime(n),
  fibonnaci: isFibonnaci(n),
  even: isEven(n),
};
```
