const mostVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.replace(/\s/g, '').toLowerCase().split('');
  const results = {};
  str.forEach((element) => {
    if (vowels.includes(element)) {
      results[element] = results[element] ? results[element] + 1 : 1;
    }
  });
  if (Object.keys(results).length === 0) return {};
  const max = Math.max(...Object.values(results));
  return Object.keys(results).reduce((acc, key) => {
    if (results[key] === max) acc[key] = results[key];
    return acc;
  }, {});
};

module.exports = mostVowel;
