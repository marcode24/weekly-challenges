const isPalindrome = (str) => {
  str = str.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  const strReverse = str.split('')
    .reverse()
    .join('');
  return str === strReverse;
};

module.exports = isPalindrome;
