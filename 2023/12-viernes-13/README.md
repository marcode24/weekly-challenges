# Reto #12: Viernes 13

## Enunciado

Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.

- La función recibirá el mes y el año y retornará verdadero o falso.

## My solution

```js
const isFriday13 = (month, year) => {
  const date = new Date(year, month - 1, 13);
  return date.getDay() === 5;
};
```

## Explanation of my solution

- First, I create a new date with the month and year passed as parameters and the day 13.

```js
const date = new Date(year, month - 1, 13);
```

- Then, I check if the day of the week is Friday.

```js
return date.getDay() === 5;
```
