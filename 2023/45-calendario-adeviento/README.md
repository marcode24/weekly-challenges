# Reto 45: Calendario de adviento 2023

## Enunciado

¿Conoces el calendario de aDEViento de la comunidad (https://adviento.dev)?
24 días, 24 regalos sorpresa relacionados con desarrollo de software.

Desde el 1 al 24 de diciembre.

Crea un programa que simule el mecanismo de participación:
- Mediante la terminal, el programa te preguntará si quieres añadir y borrar participantes, mostrarlos, lanzar el sorteo o salir.
- Si seleccionas añadir un participante, podrás escribir su nombre y pulsar enter.
- Si seleccionas añadir un participante, y este ya existe, avisarás de ello. (Y no lo duplicarás)
- Si seleccionas mostrar los participantes, se listarán todos.
- Si seleccionas eliminar un participante, podrás escribir su nombre y pulsar enter. (Avisando de si lo has eliminado o el nombre no existe)
- Si seleccionas realizar el sorteo, elegirás una persona al azar y se eliminará del listado.
- Si seleccionas salir, el programa finalizará.

## My solution

```js
const readline = require('readline');

const participants = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log('\nSelecciona una opción:');
  console.log('1. Añadir participante');
  console.log('2. Mostrar participantes');
  console.log('3. Eliminar participante');
  console.log('4. Realizar sorteo');
  console.log('5. Salir');

  // eslint-disable-next-line no-use-before-define
  askOption();
};

const addParticipant = () => {
  rl.question('\nIntroduce el nombre del participante: ', (name) => {
    if (participants.includes(name)) {
      console.log('Este participante ya existe.');
    } else {
      participants.push(name);
      console.log('Participante añadido con éxito.');
    }
    showMenu();
  });
};

const showParticipants = () => {
  console.log('\nLista de participantes:');
  participants.forEach((participant, index) => {
    console.log(`${index + 1}. ${participant}`);
  });
  showMenu();
};

const removeParticipant = () => {
  rl.question('\nIntroduce el nombre del participante a eliminar: ', (name) => {
    const index = participants.indexOf(name);
    if (index !== -1) {
      participants.splice(index, 1);
      console.log('Participante eliminado con éxito.');
    } else {
      console.log('Este participante no existe.');
    }
    showMenu();
  });
};

const drawWinner = () => {
  if (participants.length === 0) {
    console.log('\nNo hay participantes para realizar el sorteo.');
  } else {
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];
    console.log(`\n¡El ganador es: ${winner}!`);
    participants.splice(winnerIndex, 1);
  }
  showMenu();
};

const askOption = () => {
  const menuOptions = {
    1: addParticipant,
    2: showParticipants,
    3: removeParticipant,
    4: drawWinner,
    5: () => rl.close(),
  };

  rl.question('Opción: ', (option) => (menuOptions[option] || (() => {
    console.log('\nOpción no válida. Inténtalo de nuevo.');
    showMenu();
  }))());
};

showMenu();

```

## Explanation of my solution

- I create an array to store the participants.

```js
const participants = [];
```

- I create a function to show the menu with the different options.

```js
const showMenu = () => {
  console.log('\nSelecciona una opción:');
  console.log('1. Añadir participante');
  console.log('2. Mostrar participantes');
  console.log('3. Eliminar participante');
  console.log('4. Realizar sorteo');
  console.log('5. Salir');

  // eslint-disable-next-line no-use-before-define
  askOption();
};
```

- I create a function to add a participant. It will ask the user for the name of the participant and add it to the array. If the participant already exists, it will show a message to the user.

```js
const addParticipant = () => {
  rl.question('\nIntroduce el nombre del participante: ', (name) => {
    if (participants.includes(name)) {
      console.log('Este participante ya existe.');
    } else {
      participants.push(name);
      console.log('Participante añadido con éxito.');
    }
    showMenu();
  });
};
```

- I create a function to show the list of participants.

```js
const showParticipants = () => {
  console.log('\nLista de participantes:');
  participants.forEach((participant, index) => {
    console.log(`${index + 1}. ${participant}`);
  });
  showMenu();
};
```

- I create a function to remove a participant. It will ask the user for the name of the participant and remove it from the array. If the participant doesn't exist, it will show a message to the user.

```js
const removeParticipant = () => {
  rl.question('\nIntroduce el nombre del participante a eliminar: ', (name) => {
    const index = participants.indexOf(name);
    if (index !== -1) {
      participants.splice(index, 1);
      console.log('Participante eliminado con éxito.');
    } else {
      console.log('Este participante no existe.');
    }
    showMenu();
  });
};
```

- I create a function to draw a winner. It will select a random participant from the array and remove it from the array. If there are no participants, it will show a message to the user.

```js
const drawWinner = () => {
  if (participants.length === 0) {
    console.log('\nNo hay participantes para realizar el sorteo.');
  } else {
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];
    console.log(`\n¡El ganador es: ${winner}!`);
    participants.splice(winnerIndex, 1);
  }
  showMenu();
};
```

- I create a function to ask the user for an option and execute the corresponding function.

```js
const askOption = () => {
  const menuOptions = {
    1: addParticipant,
    2: showParticipants,
    3: removeParticipant,
    4: drawWinner,
    5: () => rl.close(),
  };

  rl.question('Opción: ', (option) => (menuOptions[option] || (() => {
    console.log('\nOpción no válida. Inténtalo de nuevo.');
    showMenu();
  }))());
};
```

- I call the function to show the menu.

```js
showMenu();
```
