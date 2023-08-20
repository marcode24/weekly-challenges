const getNumber = (abacus) => {
  let number = 0;
  const abacusLength = abacus.length;

  for (let rowIndex = 0; rowIndex < abacusLength; rowIndex++) {
    const row = abacus[rowIndex];
    if (!/^[^-]*-{3}[^-]*$/.test(row) || row.length !== 12) {
      number = 'Invalid abacus';
      break;
    }
    number += row.split('---')[0].length * (10 ** (abacusLength - rowIndex - 1));
  }
  return number.toLocaleString('en-US');
};

module.exports = {
  getNumber,
};
