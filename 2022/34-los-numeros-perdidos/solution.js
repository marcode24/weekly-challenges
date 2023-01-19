const remainingNumbers = (numbers) => Array
  .from(
    { length: numbers[numbers.length - 1] - numbers[0] + 1 },
    (_, i) => i + numbers[0],
  )
  .reduce((acc, number) => {
    if (!numbers.includes(number)) acc.push(number);
    return acc;
  }, []);

module.exports = remainingNumbers;
