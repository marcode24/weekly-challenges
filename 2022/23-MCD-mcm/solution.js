const MCD = (a, b) => {
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const mcm = (a, b) => (a * b) / MCD(a, b);

module.exports = { MCD, mcm };
