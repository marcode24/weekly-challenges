const persistence = (num) => {
  let timesMultiplied = 0;
  let numbers = num.toString().split('');
  while (numbers.length > 1) {
    let resultTemp = 1;
    numbers.forEach((item) => (resultTemp *= Number(item)));
    timesMultiplied++;
    numbers = resultTemp.toString().split('');
  }
  return timesMultiplied;
};

module.exports = persistence;
