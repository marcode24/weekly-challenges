const readline = require('readline');

const letterAValue = 'a'.charCodeAt(0);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getResume = (word) => [...word]
  .map((letter) => `${letter} = ${letter.charCodeAt(0) - letterAValue + 1}\n`)
  .join('');

function calculatePoints(word) {
  let points = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter >= 'a' && letter <= 'z') {
      points += letter.charCodeAt(0) - letterAValue + 1;
    }
  }
  return points;
}

function jugar() {
  rl.question('Introduce una palabra: ', (word) => {
    const points = calculatePoints(word.toLowerCase());
    console.log(`\nPuntos de "${word}": ${points}`);
    console.log(`${getResume(word)}`);

    if (points === 100) {
      console.log('¡Felicidades! Has alcanzado 100 puntos.');
      rl.close();
    } else {
      jugar();
    }
  });
}

jugar();
