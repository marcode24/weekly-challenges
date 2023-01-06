const fibonacci = (n) => {
  const numbers = [];
  Array.from({ length: n }).forEach((_, index) => {
    numbers.push(index < 2 ? index : numbers[index - 1] + numbers[index - 2]);
  });
  return numbers;
};

module.exports = fibonacci;
