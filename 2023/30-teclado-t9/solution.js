const getKeyboardT9Text = (numbers) => {
  const KEYBOARD = {
    0: ' ',
    1: ',.?!',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
  };
  return numbers
    .split('-')
    .reduce((acc, number) => acc + KEYBOARD[number[0]][number.length - 1], '');
};

module.exports = {
  getKeyboardT9Text,
};
