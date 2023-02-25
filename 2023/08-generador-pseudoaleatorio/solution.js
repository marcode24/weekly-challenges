const getNumber = () => {
  const date = new Date();
  return date.getTime() % 100;
};

const getNumber2 = () => {
  const date = new Date();
  return date.getMilliseconds() % 100;
};

module.exports = {
  getNumber,
  getNumber2,
};
