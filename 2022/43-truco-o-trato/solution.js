const trickOrTreat = (type, people) => {
  const scares = ['🎃', '👻', '💀', '🕷', '🕸', '🦇'];

  const candies = ['🍰', '🍬', '🍡', '🍭', '🍪', '🍫', '🧁', '🍩'];

  const trickStatements = {
    letters: () => Math.floor(people
      .reduce((acc, person) => acc + person.name.length, 0) / 2),
    age: () => people.filter((person) => person.age % 2 === 0).length * 2,
    height: () => Math.floor(people
      .reduce((acc, person) => acc + person.height, 0) / 100) * 3,
  };

  const treatStatements = {
    letters: () => people.reduce((acc, person) => acc + person.name.length, 0),
    age: () => people.reduce(
      (acc, person) => (
        acc += person.age > 10
          ? 3
          : Math.floor(person.age / 3)),
      0,
    ),
    height: () => people.reduce(
      (acc, person) => (
        acc += person.height > 150
          ? 2
          : Math.floor(person.height / 50)),
      0,
    ),
  };

  if (type === 'trick') {
    const totalCandies = trickStatements.letters()
      + trickStatements.age() + trickStatements.height();
    return Array
      .from({ length: totalCandies }, (_, i) => i)
      .map(() => candies[Math.floor(Math.random() * candies.length)]);
  }
  if (type === 'treat') {
    const totalScares = treatStatements.letters()
      + treatStatements.age() + treatStatements.height();
    return Array
      .from({ length: totalScares }, (_, i) => i)
      .map(() => scares[Math.floor(Math.random() * scares.length)]);
  }
  return [];
};

module.exports = trickOrTreat;
