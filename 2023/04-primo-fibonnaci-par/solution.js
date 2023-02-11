const isPrimeFibonnaciEven = (n) => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const isFibonnaci = (num) => {
    const fibonnaci = [0, 1];
    let i = 2;
    while (fibonnaci[i - 1] < num) {
      fibonnaci.push(fibonnaci[i - 1] + fibonnaci[i - 2]);
      i += 1;
    }
    return fibonnaci.includes(num);
  };

  const isEven = (num) => num % 2 === 0;

  return {
    prime: isPrime(n),
    fibonnaci: isFibonnaci(n),
    even: isEven(n),
  };
};

module.exports = isPrimeFibonnaciEven;
