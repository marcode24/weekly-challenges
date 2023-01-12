const commonElements = (arr1, arr2, common) => {
  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)];
  let result = [];
  if (common) {
    result = [...arr1.filter((item) => arr2.includes(item))];
  } else {
    result = [...arr1.filter((item) => !arr2.includes(item))];
    result = [...new Set([...result, ...arr2.filter((item) => !arr1.includes(item))])];
  }
  return result;
};

module.exports = commonElements;
