const columnToNumber = (column) => {
  let number = 0;
  for (let i = 0; i < column.length; i++) {
    number = number * 26 + column.charCodeAt(i) - 64;
  }
  return number;
};

module.exports = {
  columnToNumber,
};
