# Reto #8: El generador pseudoaleatorio

## Enunciado

Crea un generador de números pseudoaleatorios entre 0 y 100.

- No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.

Es más complicado de lo que parece...

## My solution

```js
const getNumber = () => {
  const date = new Date();
  return date.getTime() % 100;
};
```

## Explanation of my solution

- First, I create a new Date object to get the current date and time.

```js
const date = new Date();
```

- Then, I get the time in milliseconds since 1970/01/01 and return the remainder of the division by 100.

```js
return date.getTime() % 100;
```
