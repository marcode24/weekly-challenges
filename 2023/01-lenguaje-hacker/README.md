# Reto #1: El Lenguaje Hacker

## Enunciado

```text
Escribe un programa que reciba un texto y transforme lenguaje natural a "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje  se caracteriza por sustituir caracteres alfanuméricos.

- Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) con el alfabeto y los números en "leet".

(Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
```

## My solution

```js
const transform = (str) => {
  const alphabet = {
    a: "4",
    b: "I3",
    c: "[",
    d: ")",
    e: "3",
    f: "|=",
    g: "&",
    h: "#",
    i: "1",
    j: ",_|",
    k: ">|",
    l: "1",
    m: "/\\/\\",
    n: "^/",
    o: "0",
    p: "*",
    q: "(_,)",
    r: "I2",
    s: "5",
    t: "7",
    u: "(_)",
    v: "\\/",
    w: "\\/\\/",
    x: "><",
    y: "j",
    z: "2",
    1: "L",
    2: "R",
    3: "E",
    4: "A",
    5: "S",
    6: "b",
    7: "T",
    8: "B",
    9: "g",
    0: "o",
  };
  str = str.replace(/[^a-zA-Z0-9\s]/g, "");
  return str
    .trim()
    .split(" ")
    .map((word) =>
      [...word.toLowerCase()].reduce((acc, char) => acc + alphabet[char], "")
    )
    .join(" ");
};
```

## Explanation of my solution

- First, I create an object with the alphabet and the numbers in "leet".

```js
const alphabet = {
  a: "4",
  b: "I3",
  c: "[",
  d: ")",
  e: "3",
  f: "|=",
  g: "&",
  h: "#",
  i: "1",
  j: ",_|",
  k: ">|",
  l: "1",
  m: "/\\/\\",
  n: "^/",
  o: "0",
  p: "*",
  q: "(_,)",
  r: "I2",
  s: "5",
  t: "7",
  u: "(_)",
  v: "\\/",
  w: "\\/\\/",
  x: "><",
  y: "j",
  z: "2",
  1: "L",
  2: "R",
  3: "E",
  4: "A",
  5: "S",
  6: "b",
  7: "T",
  8: "B",
  9: "g",
  0: "o",
};
```

- Then, I remove all the characters that are not letters or numbers.

```js
str = str.replace(/[^a-zA-Z0-9\s]/g, "");
```

- Finally, I split the string into an array of words, transform each word into an array of characters, and then I reduce the array of characters into a string with the "leet" characters.

```js
return str
  .trim()
  .split(" ")
  .map((word) =>
    [...word.toLowerCase()].reduce((acc, char) => acc + alphabet[char], "")
  )
  .join(" ");
```
