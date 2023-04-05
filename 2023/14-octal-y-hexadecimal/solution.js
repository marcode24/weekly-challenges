const convertToOctal = (number) => {
  let octal = '';
  while (number > 0) {
    const rest = number % 8;
    octal = rest + octal;
    number = Math.floor(number / 8);
  }

  return octal;
};

const convertToHexadecimal = (number) => {
  let hexadecimal = '';
  while (number > 0) {
    const remainder = number % 16;
    const char = remainder < 10 ? remainder : String.fromCharCode(remainder + 55);
    hexadecimal = char + hexadecimal;
    number = Math.floor(number / 16);
  }
  return hexadecimal;
};

const convertToHexadecimalAndOctal = (number) => ({
  octal: convertToOctal(number),
  hexadecimal: convertToHexadecimal(number),
});

module.exports = convertToHexadecimalAndOctal;
