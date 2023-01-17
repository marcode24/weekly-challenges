const getLeapYears = (start) => Array
  .from({ length: 30 }, (_, i) => start + i)
  .filter((year) => year % 4 === 0);

module.exports = getLeapYears;
