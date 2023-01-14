const makeFigure = (size, figure) => {
  const result = [];
  const figures = {
    square: () => {
      Array.from({ length: size }, () => result.push('*'.repeat(size)));
    },
    triangle: () => {
      Array.from({ length: size }, (_, i) => result.push('*'.repeat(i + 1)));
    },
    diamond: () => {
      for (let i = 0; i < size; i++) {
        result.push(' '.repeat(size - i - 1) + '*'.repeat(i * 2 + 1));
      }
      for (let i = size - 2; i >= 0; i--) {
        result.push(' '.repeat(size - i - 1) + '*'.repeat(i * 2 + 1));
      }
    },
  };
  figures[figure]();
  return result.join('\n');
};

module.exports = makeFigure;
