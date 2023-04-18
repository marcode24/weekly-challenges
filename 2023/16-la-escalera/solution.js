const buildStairs = (n) => {
  let stairs = '_';
  if (n < 0) {
    Array.from({ length: Math.abs(n) }, (_, i) => i).forEach((i) => {
      stairs += `\n${' '.repeat(1 + i * 2)}|_`;
    });
    return stairs;
  }
  if (n > 0) {
    let spaces = ' '.repeat(n * 2);
    stairs = `${spaces}${stairs}`;
    Array.from({ length: n }, (_, i) => i + 1).forEach(() => {
      spaces = spaces.slice(0, -2);
      stairs += `\n${spaces}_|`;
    });
    return stairs;
  }
  return `${stairs}_`;
};

module.exports = buildStairs;
