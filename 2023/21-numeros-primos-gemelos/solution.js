const getPrimeNumbersTwins = (max) => {
  const primeNumbers = [];
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) primeNumbers.push(i);
  }
  const primeNumbersTwins = [];
  for (let i = 0; i < primeNumbers.length; i++) {
    if (primeNumbers[i + 1] - primeNumbers[i] === 2) {
      primeNumbersTwins.push([primeNumbers[i], primeNumbers[i + 1]]);
    }
  }
  return primeNumbersTwins;
};

module.exports = getPrimeNumbersTwins;
