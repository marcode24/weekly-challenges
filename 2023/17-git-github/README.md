# Reto #17: Git y GitHub

## Enunciado


¡Estoy de celebración! He publicado mi primer libro:
"Git y GitHub desde cero"

- Papel: mouredev.com/libro-git
- eBook: mouredev.com/ebook-git

¿Sabías que puedes leer información de Git y GitHub desde la gran mayoría de lenguajes de programación?

Crea un programa que lea los últimos 10 commits de este repositorio y muestre:

- Hash
- Autor
- Mensaje
- Fecha y hora

Ejemplo de salida:
Commit 1 (el más reciente) | 12345A | MoureDev | Este es un commit | 24/04/2023 21:00

Se permite utilizar librerías que nos faciliten esta tarea.

# My solution

```js
const getCommits = ({ user, repo, limit = 10 }) => {
  const url = `https://api.github.com/repos/${user}/${repo}/commits?per_page=${limit}`;
  return fetch(url)
    .then((res) => res.json())
    .then((commits) => commits.map((commit, i) => {
      const { author } = commit.commit;
      const message = commit.commit.message.replace(/\n/g, '');
      const { name, date } = author;
      const sha = commit.sha.slice(0, 7);
      const newDate = new Date(date).toLocaleString();
      return `Commit ${i + 1} | ${sha} | ${name} | ${message} | ${newDate}`;
    }))
    .catch((err) => `Error: ${err}`);
};
```

## Explanation of my solution

### `getCommits` function

- First, I create a function that receives an object with the user, the repo and the limit of commits to show and returns a promise that resolves to an array of strings with the commits.

```js
const getCommits = ({ user, repo, limit = 10 }) => {
  // ...
};
```

- I create the url to fetch the commits from GitHub API.

```js
const url = `https://api.github.com/repos/${user}/${repo}/commits?per_page=${limit}`;
```

- I fetch the commits and I return a promise that resolves to an array of strings with the commits.

```js
return fetch(url)
  .then((res) => res.json())
  .then((commits) => commits.map((commit, i) => {
    // ...
  }))
  .catch((err) => `Error: ${err}`);
```

- I map the commits to an array of strings with the information I want to show.

```js
return commits.map((commit, i) => {
  // ...
});
```

- I destructure the commit object to get the author, the message and the date.

```js
const { author } = commit.commit;
const message = commit.commit.message.replace(/\n/g, '');
const { name, date } = author;
```

- I get the sha of the commit and I format the date.

```js
const sha = commit.sha.slice(0, 7);
const newDate = new Date(date).toLocaleString();
```

- I return a string with the information of the commit.

```js
return `Commit ${i + 1} | ${sha} | ${name} | ${message} | ${newDate}`;
```
