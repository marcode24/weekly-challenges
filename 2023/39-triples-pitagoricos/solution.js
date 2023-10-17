const pythagoreanTriple = (n) => {
  const triples = [];

  for (let a = 1; a <= n; a++) {
    const aSquared = a * a;

    for (let b = a + 1; b <= n; b++) {
      const bSquared = b * b;
      const cSquared = aSquared + bSquared;
      const c = Math.sqrt(cSquared);

      if (c <= n && c === Math.floor(c)) {
        triples.push([a, b, c]);
      }
    }
  }

  return triples;
};

module.exports = {
  pythagoreanTriple,
};
