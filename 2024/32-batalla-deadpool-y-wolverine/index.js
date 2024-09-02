/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-promise-executor-return */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Funciones para calcular el daño y evasión
const getRandomDamage = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const chance = (percentage) => Math.random() * 100 < percentage;

const battleTurn = async (attacker, defender, maxDamage, evasionChance) => {
  const damage = getRandomDamage(attacker.minDamage, attacker.maxDamage);
  console.log(`\n${attacker.name} ataca con ${damage} de daño.`);

  if (chance(evasionChance)) {
    console.log(`${defender.name} esquiva el ataque!`);
  } else {
    defender.hp -= damage;
    console.log(`${defender.name} recibe ${damage} de daño. Vida restante: ${defender.hp}`);
    if (damage === maxDamage) {
      console.log(`${defender.name} se está regenerando y no atacará en el siguiente turno.`);
      return true;
    }
  }

  return false;
};

const startBattle = async (deadpoolHP, wolverineHP) => {
  const deadpool = {
    name: 'Deadpool', hp: deadpoolHP, minDamage: 10, maxDamage: 100,
  };
  const wolverine = {
    name: 'Wolverine', hp: wolverineHP, minDamage: 10, maxDamage: 120,
  };

  let turn = 1;
  const skipTurn = { deadpool: false, wolverine: false };

  while (deadpool.hp > 0 && wolverine.hp > 0) {
    console.log(`\n--- Turno ${turn} ---`);
    await sleep(1000);

    if (!skipTurn.deadpool) {
      skipTurn.wolverine = await battleTurn(deadpool, wolverine, deadpool.maxDamage, 20);
    } else {
      skipTurn.deadpool = false;
    }

    if (wolverine.hp <= 0) break;

    if (!skipTurn.wolverine) {
      skipTurn.deadpool = await battleTurn(wolverine, deadpool, wolverine.maxDamage, 25);
    } else {
      skipTurn.wolverine = false;
    }

    if (deadpool.hp <= 0) break;

    turn++;
  }

  console.log('\n--- Fin de la batalla ---');
  if (deadpool.hp > 0) {
    console.log('Deadpool es el ganador!');
  } else {
    console.log('Wolverine es el ganador!');
  }

  rl.close();
};

rl.question('Ingrese la vida inicial de Deadpool: ', (dpHP) => {
  rl.question('Ingrese la vida inicial de Wolverine: ', (wlHP) => {
    startBattle(parseInt(dpHP, 10), parseInt(wlHP, 10));
  });
});
