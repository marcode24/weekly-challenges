const buildTreeForce = (n) => {
  let tree = '';
  const width = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    const upSpaces = ' '.repeat(width + 2 - i * 2);
    const upAsterisks = `${upSpaces}${'*   '.repeat(i - 1)}*${upSpaces}`;
    const downSpaces = ' '.repeat(2 * n - i * 2);
    const downAsterisks = `${`${'*'.repeat(3)} `.repeat(i - 1)}${'*'.repeat(3)}`;
    const downAsterisksCompleted = downSpaces + downAsterisks + downSpaces;
    tree += `${upAsterisks}\n${downAsterisksCompleted}\n`;
  }
  return tree.slice(0, -1);
};

module.exports = buildTreeForce;
