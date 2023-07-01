# Reto #26: Testing

## Enunciado

Crea tres test sobre el reto 12: "Viernes 13".

- Puedes copiar una solución ya creada por otro usuario en el lenguaje que estés utilizando.
- Debes emplear un mecanismo de ejecución de test que posea el lenguaje de programación que hayas seleccionado.
- Los tres test deben de funcionar y comprobar diferentes situaciones (a tu elección).

## My solution

```js
const includesFriday13 = require('../12-viernes-13/solution');

describe('Challenge 12: Viernes 13', () => {
  const testCases = [
    {
      input: [2, 2016],
      output: false,
    },
    {
      input: [4, 1990],
      output: true,
    },
    {
      input: [7, 1990],
      output: true,
    },
    {
      input: [11, 2009],
      output: true,
    },
    {
      input: [8, 2010],
      output: true,
    },
    {
      input: [5, 2011],
      output: true,
    },
    {
      input: [1, 1985],
      output: false,
    },
    {
      input: [8, 2021],
      output: true,
    },
    {
      input: [1, 2023],
      output: true,
    },
    {
      input: [10, 2023],
      output: true,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof includesFriday13(1, 2023)).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(includesFriday13(...testCase.input)).toBe(testCase.output);
  });
});

```

## Explanation of my solution

### `describe` function

- First, I use the `describe` function to group the tests.

```js
describe('Challenge 12: Viernes 13', () => {
  // ...
});
```

### `testCases` variable

- Then, I create a variable called `testCases` that contains the test cases.

```js
const testCases = [
  {
    input: [2, 2016],
    output: false,
  },
  {
    input: [4, 1990],
    output: true,
  },
  {
    input: [7, 1990],
    output: true,
  },
  {
    input: [11, 2009],
    output: true,
  },
  {
    input: [8, 2010],
    output: true,
  },
  {
    input: [5, 2011],
    output: true,
  },
  {
    input: [1, 1985],
    output: false,
  },
  {
    input: [8, 2021],
    output: true,
  },
  {
    input: [1, 2023],
    output: true,
  },
  {
    input: [10, 2023],
    output: true,
  },
];
```

### `it` function

- Then, I use the `it` function to create the tests.

```js
it('should return a boolean type', () => {
  expect(typeof includesFriday13(1, 2023)).toBe('boolean');
});

it.each(testCases)('should return $output', (testCase) => {
  expect(includesFriday13(...testCase.input)).toBe(testCase.output);
});
```

### `expect` function

- Finally, I use the `expect` function to check the output of the function.

```js
expect(typeof includesFriday13(1, 2023)).toBe('boolean');

expect(includesFriday13(...testCase.input)).toBe(testCase.output);
```
