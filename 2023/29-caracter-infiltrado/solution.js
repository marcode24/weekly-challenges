const findCharInfiltrated = (str1, str2) => {
  if (str1.length !== str2.length) {
    return 'Las cadenas no tienen la misma longitud';
  }

  const charInfiltrated = [];
  str1.split('').forEach((char, index) => {
    if (char !== str2[index]) {
      charInfiltrated.push(str2[index]);
    }
  });

  return charInfiltrated;
};

module.exports = {
  findCharInfiltrated,
};
