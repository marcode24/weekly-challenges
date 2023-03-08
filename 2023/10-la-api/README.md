# Reto #10: La API

## Enunciado

Llamar a una API es una de las tareas más comunes en programación.

Implementa una llamada HTTP a una API (la que tú quieras) y muestra su resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...

Aquí tienes un listado de posibles APIs:
https://github.com/public-apis/public-apis

## My solution

```js
const fetch = require("node-fetch");

const URL_API = 'https://swapi.dev/api/people/1/';

const getLuke = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};
```

## Explanation of my solution

- First, I import the fetch module from node-fetch to make the HTTP request.

```js
const fetch = require("node-fetch");
```

- Then, I define the URL of the API in this case the Star Wars API.

```js
const URL_API = 'https://swapi.dev/api/people/1/';
```

- I create an async function to make the request and return the data.

```js
const getLuke = async () => {
  ...
}
```

- I use the await keyword to wait for the response and then I convert it to JSON.

```js
const getLuke = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};
```

