const isHeterogram = (str) => {
  const strArr = [...str.trim().toLowerCase().replace(/\s/g, '')];
  const strSet = new Set(strArr);
  return strArr.length === strSet.size;
};

const isIsogram = (str) => isHeterogram(str);

const isPangram = (str) => {
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  str = str.replace(/[\d\W]/g, '').trim();
  const strArr = [...str.trim().toLowerCase().replace(/\s/g, '')];
  const strSet = new Set(strArr);
  return strSet.size === 26;
};

module.exports = {
  isHeterogram,
  isIsogram,
  isPangram,
};
