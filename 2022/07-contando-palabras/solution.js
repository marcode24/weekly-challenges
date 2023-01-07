const countWords = (str) => {
  // replace vowels with accents with their non-accented version
  str = str.replace(/[áàäâ]/g, 'a');
  str = str.replace(/[éèëê]/g, 'e');
  str = str.replace(/[íìïî]/g, 'i');
  str = str.replace(/[óòöô]/g, 'o');
  str = str.replace(/[úùüû]/g, 'u');
  str = str.replace(/[^a-zA-Z\s]/g, '').toLowerCase().match(/\S+/g);
  const words = {};
  str.forEach((char) => {
    if (char !== ' ') words[char] = words[char] ? words[char] + 1 : 1;
  });
  return words;
};

module.exports = countWords;
