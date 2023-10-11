const getCombinations = ({ values, target }) => {
  const combinations = [];
  const find = (index, sum, combination) => {
    if (sum === target) {
      combinations.push(combination);
      return;
    }
    if (sum > target || index >= values.length) {
      return;
    }
    find(index + 1, sum, combination);
    find(index + 1, sum + values[index], [...combination, values[index]]);
  };
  find(0, 0, []);
  return combinations;
};

module.exports = {
  getCombinations,
};
