const fs = require('fs');

const calculate = (fileName) => {
  const filePath = `./2022/21-calculadora-txt/files/${fileName}.txt`;
  const file = fs.readFileSync(filePath, 'utf-8')
    .replaceAll('\r', ' ')
    .replaceAll('\n', '');
  const lines = file.split(' ');

  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const areAlternated = lines.reduce((acc, line, index) => {
    if (index === 0) return true;
    if (acc && operators[line] && operators[lines[index - 1]]) return false;
    return acc;
  }, true);
  if (!areAlternated) return 'Error: operators are not alternated';

  return lines.reduce((acc, line, index) => {
    if (operators[line]) {
      const result = operators[line](Number(acc), Number(lines[index + 1]));
      lines.splice(index + 1, 1);
      return result;
    }
    return Number(line);
  }, 0);
};

module.exports = calculate;
