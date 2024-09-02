/* eslint-disable max-len */
/* eslint-disable no-console */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const maze = [
  ['⬜️', '⬜️', '⬛️', '⬜️', '⬛️', '⬜️'],
  ['⬜️', '⬛️', '⬛️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬛️', '⬛️'],
  ['⬜️', '⬛️', '⬜️', '⬛️', '⬜️', '🚪'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬛️'],
  ['⬜️', '⬛️', '⬛️', '⬜️', '⬛️', '⬜️'],
];

const start = { x: 0, y: 0 }; // Posición inicial de Mickey

// Coloca a Mickey en la posición inicial
maze[start.x][start.y] = '🐭';

// Función para mostrar el laberinto
const printMaze = () => {
  console.log(`\n${maze.map((row) => row.join(' ')).join('\n')}`);
};

// Función para mover a Mickey
const moveMickey = (direction) => {
  const newPos = { ...start };

  const options = {
    arriba: () => newPos.x--,
    abajo: () => newPos.x++,
    izquierda: () => newPos.y--,
    derecha: () => newPos.y++,
  };

  options[direction]
    ? options[direction]()
    : console.log('Dirección inválida. Usa: arriba, abajo, izquierda, derecha.');

  // Validar movimiento
  if (newPos.x < 0 || newPos.x >= 6 || newPos.y < 0 || newPos.y >= 6) {
    console.log('Movimiento inválido. Fuera del laberinto.');
    return;
  }

  if (maze[newPos.x][newPos.y] === '⬛️') {
    console.log('Movimiento inválido. Obstáculo en la celda.');
    return;
  }

  // Mueve a Mickey
  maze[start.x][start.y] = '⬜️'; // Borra la posición anterior de Mickey
  start.x = newPos.x;
  start.y = newPos.y;

  if (maze[start.x][start.y] === '🚪') {
    printMaze();
    console.log('¡Felicidades! Mickey ha encontrado la salida.');
    rl.close();
    return;
  }

  maze[start.x][start.y] = '🐭'; // Coloca a Mickey en la nueva posición
  printMaze();
};

// Inicio del juego
printMaze();
rl.question('¿Hacia dónde quieres mover a Mickey? (arriba, abajo, izquierda, derecha): ', (direction) => {
  moveMickey(direction.trim().toLowerCase());
  rl.on('line', (input) => {
    moveMickey(input.trim().toLowerCase());
  });
});
