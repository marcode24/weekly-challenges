const convert = (degrees) => {
  if (!degrees.includes('°')) return 'invalid value';
  // eslint-disable-next-line prefer-const
  let [number, type] = degrees.trim().split('°');
  if (number === '') return 'invalid value';
  number = Number(number.replace(/\s/g, ''));
  if (Number.isNaN(number)) return 'invalid value';
  if (type === 'C') return `${number * 1.8 + 32}°F`;
  if (type === 'F') return `${(number - 32) / 1.8}°C`;
  return 'invalid value';
};

module.exports = convert;
