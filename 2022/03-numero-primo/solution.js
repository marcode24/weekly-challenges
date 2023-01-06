const primeNumbers = (n) => Array
  .from({ length: n }, (_, i) => i + 1)
  .map((currentNumber) => {
    const restNumbers = Array.from({ length: currentNumber }, (_, i) => i + 1);
    const rest = restNumbers.filter((number) => currentNumber % number === 0);
    return rest.length === 2 ? currentNumber : null;
  }).filter((number) => number !== null);

module.exports = primeNumbers;
