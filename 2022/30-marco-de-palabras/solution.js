const wrapSentence = (sentence) => {
  const words = sentence.split(' ');
  const maxLineLength = Math.max(...words.map((word) => word.length));
  const line = '*'.repeat(maxLineLength + 4);
  const wrappedSentence = words.reduce((acc, word) => {
    const spaces = ' '.repeat(maxLineLength - word.length);
    return `${acc}* ${word}${spaces} *\n`;
  }, `${line}\n`);
  return [`${wrappedSentence}${line}`];
};

module.exports = wrapSentence;
