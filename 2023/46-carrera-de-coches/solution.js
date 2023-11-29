let TRACK1 = [];
let TRACK2 = [];
const FLAG = '🏁';
const TREE = '🌲';
const CAR_1 = '🚙';
const CAR_2 = '🚗';
const EXPLOSION = '💥';
const EMPTY = '_';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateTrack = (car, length) => {
  const track = [];
  const trees = getRandomInt(1, 3);
  const trackLength = length || getRandomInt(10, 20);

  for (let i = 0; i < trackLength; i++) {
    if (i === 0) {
      track.push(FLAG);
    } else if (i === trackLength - 1) {
      track.push(car);
    } else {
      track.push(EMPTY);
    }
  }
  for (let i = 0; i < trees; i++) {
    const position = getRandomInt(1, trackLength - 2);
    track[position] = TREE;
  }
  return track;
};

const moveCar = (car, track, movements) => {
  const currentPosition = track.indexOf(car);
  const newPosition = currentPosition - movements;
  if (track[newPosition] === TREE) {
    track[newPosition] = EXPLOSION;
  } else {
    track[newPosition] = car;
  }
  track[currentPosition] = EMPTY;

  if (newPosition <= 0) {
    track[0] = car;
  }

  return track;
};

const printTrack = (track) => {
  console.log(track.join(''));
};

const hasExplosion = (track) => track.indexOf(EXPLOSION) !== -1;

const cleanTrack = (track, car) => track.map((item) => {
  if (item === EXPLOSION) {
    item = car;
  }
  return item;
});

const simulateRace = () => {
  const cars = [CAR_1, CAR_2];
  const trackLength = getRandomInt(10, 15);
  TRACK1 = generateTrack(cars[0], trackLength);
  TRACK2 = generateTrack(cars[1], trackLength);

  console.log('\n');
  printTrack(TRACK1);
  printTrack(TRACK2);
  console.log('Empieza la carrera\n');

  const realizarTurno = () => {
    const movements1 = getRandomInt(1, 3);
    const movements2 = getRandomInt(1, 3);
    TRACK1 = moveCar(cars[0], TRACK1, movements1);
    TRACK2 = moveCar(cars[1], TRACK2, movements2);

    printTrack(TRACK1);
    printTrack(TRACK2);
    console.log('\n');

    if (hasExplosion(TRACK1)) {
      if (hasExplosion(TRACK2)) {
        TRACK2 = cleanTrack(TRACK2, CAR_2);
      }
      TRACK2 = moveCar(cars[1], TRACK2, getRandomInt(1, 3));
      printTrack(TRACK1);
      printTrack(TRACK2);
      console.log('\n');
      TRACK1 = cleanTrack(TRACK1, CAR_1);
    } else if (hasExplosion(TRACK2)) {
      if (hasExplosion(TRACK1)) {
        TRACK1 = cleanTrack(TRACK1, CAR_1);
      }
      TRACK1 = moveCar(cars[0], TRACK1, getRandomInt(1, 3));
      printTrack(TRACK1);
      printTrack(TRACK2);
      console.log('\n');
      TRACK2 = cleanTrack(TRACK2, CAR_2);
    }

    if (TRACK1.indexOf(CAR_1) === 0 && TRACK2.indexOf(CAR_2) === 0) {
      console.log('Empate');
      return;
    }

    if (TRACK1.indexOf(CAR_1) === 0) {
      console.log(`Gana el coche ${CAR_1}`);
      return;
    }

    if (TRACK2.indexOf(CAR_2) === 0) {
      console.log(`Gana el coche ${CAR_2}`);
      return;
    }

    setTimeout(realizarTurno, 1000);
  };
  realizarTurno();
};

simulateRace();
