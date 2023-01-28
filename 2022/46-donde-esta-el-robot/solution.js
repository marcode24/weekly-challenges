function whereIsTheRobot(steps) {
  let x = 0;
  let y = 0;
  let direction = 'N';

  const cardinalPointsEquivalents = {
    N: 'W',
    E: 'N',
    S: 'E',
    W: 'S',
  };

  const directionSteps = {
    N: (step) => y += step,
    E: (step) => x += step,
    S: (step) => y -= step,
    W: (step) => x -= step,
  };

  steps.forEach((step) => {
    directionSteps[direction](step);
    direction = cardinalPointsEquivalents[direction];
  });

  return { x, y };
}

module.exports = whereIsTheRobot;
