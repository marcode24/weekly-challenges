const isMathExpresion = (str) => {
  str = str.replace(/\s+/g, ' ').split(' ').join('');
  const regex = /^(\d+[\\+\-\\*\\/%]?)+\d+$/;
  return regex.test(str);
};

module.exports = {
  isMathExpresion,
};
