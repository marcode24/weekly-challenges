const analyzeText = (text) => {
  if (text.trim().length === 0) {
    return {
      totalWords: 0,
      mediumWordLength: 0,
      longestWord: '',
      phrases: 0,
    };
  }
  const words = text
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  let longestWord = '';
  let mediumWordLength = 0;
  text = text.split(' ');
  let phrases = 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
    mediumWordLength += words[i].length;
    if (text[i].includes('.') && text[i + 1] !== undefined) phrases++;
  }
  mediumWordLength /= words.length;
  return {
    totalWords: words.length,
    mediumWordLength,
    longestWord,
    phrases,
  };
};

module.exports = analyzeText;
