const getPermutations = (str) => {
  if (str.length <= 1) return [str];
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = getPermutations(remaining);
    for (let j = 0; j < remainingPermutations.length; j++) {
      const permutation = char + remainingPermutations[j];
      permutations.push(permutation);
    }
  }
  return permutations;
};

module.exports = {
  getPermutations,
};
