const includesFriday13 = (month, year) => {
  const date = new Date(year, month - 1, 13);
  return date.getDay() === 5;
};

module.exports = includesFriday13;
