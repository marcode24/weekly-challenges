const transformUpperCase = (str) => {
  const punctuationMarks = ['.', ',', '!', '?', '¿', '¡'];
  return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (punctuationMarks.includes(word[0])) {
        return word[0] + word[1].toUpperCase() + word.slice(2);
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
};

module.exports = transformUpperCase;
