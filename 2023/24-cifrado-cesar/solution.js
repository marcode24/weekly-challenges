const cesarEncrypt = (str, offset) => {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  const alphabetLength = alphabet.length;
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => word.split('').reduce((acc, letter) => {
      const isUpperCase = letter === letter.toUpperCase();

      if (isUpperCase) letter = letter.toLowerCase();

      const index = alphabet.indexOf(letter);
      let newIndex = index + offset;

      if (newIndex >= alphabetLength) newIndex -= alphabetLength;
      const newLetter = alphabet[newIndex];

      return acc + (isUpperCase ? newLetter.toUpperCase() : newLetter);
    }, ''))
    .join(' ');
};

module.exports = cesarEncrypt;
