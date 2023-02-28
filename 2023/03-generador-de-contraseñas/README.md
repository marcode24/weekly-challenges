# Reto 3: Generador de contraseñas

## Enunciado

Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.

Podrás configurar generar contraseñas con los siguientes parámetros:

- Longitud: Entre 8 y 16.
- Con o sin letras mayúsculas.
- Con o sin números.
- Con o sin símbolos.

**Pudiendo combinar todos estos parámetros entre ellos**

## My solution

```js
const generatePassword = ({
  length = 8,
  upperCase = true,
  numbers = true,
  symbols = true,
}) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numbersString = "0123456789";
  const symbolsString = "!@#$%^&*()_+-=[]{}/<>?";
  if (length < 8 || length > 16) return "Invalid length";
  let password = "";
  let characters = alphabet;
  if (upperCase) characters += alphabet.toUpperCase();
  if (numbers) characters += numbersString;
  if (symbols) characters += symbolsString;
  while (password.length < length) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};
```

## Explanation of my solution

- First, I create a function that receives an object with the parameters to generate the password, these parameters have a default value in case they are not passed.

```js
const generatePassword = ({
  length = 8,
  upperCase = true,
  numbers = true,
  symbols = true,
}) => {
  // ...
};
```

- Then, I create a string with the lowercase alphabet, numbers and symbols.

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbersString = "0123456789";
const symbolsString = "!@#$%^&*()_+-=[]{}/<>?";
```

- I check if the length is between 8 and 16, if not, I return an error message.

```js
if (length < 8 || length > 16) return "Invalid length";
```

- I create a variable to store the password and another to store the characters that will be used to generate the password.

```js
let password = "";
let characters = alphabet;
```

- I add the uppercase letters, numbers and symbols to the characters string if the corresponding parameter is true.

```js
if (upperCase) characters += alphabet.toUpperCase();
if (numbers) characters += numbersString;
if (symbols) characters += symbolsString;
```

- I create a while loop that will run until the password has the length specified in the parameters.

```js
while (password.length < length) {
  // ...
}
```

- Inside the while loop, I add a random character from the characters string to the password.

```js
password += characters[Math.floor(Math.random() * characters.length)];
```

- Finally, I return the password.

```js
return password;
```
