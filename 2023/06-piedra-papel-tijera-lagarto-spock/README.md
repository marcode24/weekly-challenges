# Reto #6: Piedra, papel, tijera, lagarto, Spock

## Enunciado

Crea un programa que calcule quien gana mΓ‘s partidas al piedra,
papel, tijera, lagarto, spock.

- El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
- La funciΓ³n recibe un listado que contiene pares, representando cada jugada.
- El par puede contener combinaciones de "πΏ" (piedra), "π" (papel), "βοΈ" (tijera), "π¦" (lagarto) o "π" (spock).
- Ejemplo. Entrada: [("πΏ","βοΈ"), ("βοΈ","πΏ"), ("π","βοΈ")]. Resultado: "Player 2".
- Debes buscar informaciΓ³n sobre cΓ³mo se juega con estas 5 posibilidades.

## My solution

```js
const getWinner = (combinations) => {
  const options = {
    "πΏ": ["βοΈ", "π¦"],
    "π": ["πΏ", "π"],
    "βοΈ": ["π", "π¦"],
    "π¦": ["π", "π"],
    "π": ["πΏ", "βοΈ"],
  };

  const results = combinations.reduce(
    (acc, [player1, player2]) => {
      if (options[player1].includes(player2)) {
        acc.player1++;
      } else if (options[player2].includes(player1)) {
        acc.player2++;
      }
      return acc;
    },
    { player1: 0, player2: 0 }
  );

  if (results.player1 > results.player2) {
    return "PLAYER 1";
  }

  if (results.player2 > results.player1) {
    return "PLAYER 2";
  }

  return "TIE";
};
```

## Explanation of my solution

- First, I create an object with the options and the combinations that win against each one.

```js
const options = {
  "πΏ": ["βοΈ", "π¦"],
  "π": ["πΏ", "π"],
  "βοΈ": ["π", "π¦"],
  "π¦": ["π", "π"],
  "π": ["πΏ", "βοΈ"],
};
```

- Then, I use the `reduce` method to iterate over the combinations and calculate the results for each player (player1 and player2) and return the final results. If the player1 option is included in the player2 options, then player1 wins, if the player2 option is included in the player1 options, then player2 wins and if none of the options are included, then it's a tie.

```js
const results = combinations.reduce(
  (acc, [player1, player2]) => {
    if (options[player1].includes(player2)) {
      acc.player1++;
    } else if (options[player2].includes(player1)) {
      acc.player2++;
    }
    return acc;
  },
  { player1: 0, player2: 0 }
);
```

- Finally, I check the results and return the winner.

```js
if (results.player1 > results.player2) {
  return "PLAYER 1";
}

if (results.player2 > results.player1) {
  return "PLAYER 2";
}

return "TIE";
```
