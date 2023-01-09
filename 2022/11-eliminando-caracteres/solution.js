const deleteChars = (str1, str2) => {
  const str1Array = str1.split('');
  const str2Array = str2.split('');
  return [
    str1Array.filter((char) => !str2Array.includes(char)).join(''),
    str2Array.filter((char) => !str1Array.includes(char)).join(''),
  ];
};

module.exports = deleteChars;
