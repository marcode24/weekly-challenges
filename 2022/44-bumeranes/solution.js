const findBoomerangs = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length - 2; i += 1) {
    if (arr[i] === arr[i + 2]) {
      result.push([arr[i], arr[i + 1], arr[i + 2]]);
    }
  }
  return result;
};

module.exports = findBoomerangs;
