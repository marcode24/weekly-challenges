const convertToDecimal = (binary) => {
  binary = [...binary];
  let decimal = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += binary[i] * 2 ** power;
    power++;
  }

  return decimal;
};

module.exports = convertToDecimal;
