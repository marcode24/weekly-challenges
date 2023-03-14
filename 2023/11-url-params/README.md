# Reto #11: URL Params

## Enunciado

Dada una URL con parámetros, crea una función que obtenga sus valores. No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.

Ejemplo: En la url <https://retosdeprogramacion.com?year=2023&challenge=0> los parámetros serían ["2023", "0"]

## My solution

```js
const getParams = (url) => {
  const params = url.split('?')[1]?.split('&');
  return params && params.every((param) => param.length > 0)
    ? params.map((param) => param.split('=')[1])
    : [];
};
```

## Explanation of my solution

- First, I split the url by the question mark to get the parameters.

```js
const params = url.split('?')[1]?.split('&');
```

- Then, I check if the params exist and if they are not empty.

```js
return params && params.every((param) => param.length > 0)
```

- If they exist and are not empty, I split them by the equal sign to get the values.

```js
? params.map((param) => param.split('=')[1])
```

- If they don't exist or are empty, I return an empty array.

```js
: [];
```
