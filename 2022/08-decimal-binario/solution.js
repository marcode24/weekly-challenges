const decimalToBinary = (decimal) => {
  if (decimal === 0) return '0';
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
};

module.exports = decimalToBinary;
