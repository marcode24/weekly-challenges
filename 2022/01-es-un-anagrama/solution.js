const isAnagram = (str1, str2) => {
  if (str1 === str2) return false;
  str1 = [...str1.trim().toLowerCase().replace(/\s/g, '')].sort().join('');
  str2 = [...str2.trim().toLowerCase().replace(/\s/g, '')].sort().join('');
  return str1 === str2;
};

module.exports = isAnagram;
