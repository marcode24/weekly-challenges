const printMutliplications = (num) => {
  const results = [];
  for (let index = 0; index < 10; index++) {
    const legend = `${num} x ${index + 1} = ${num * (index + 1)}`;
    results.push(legend);
  }
  return results;
};

module.exports = {
  printMutliplications,
};
