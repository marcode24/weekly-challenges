const isArmstrongNumber = (n) => {
  const exponent = n.toString().length;
  return [...n.toString()].reduce((acc, curr) => acc + curr ** exponent, 0) === n;
};

module.exports = isArmstrongNumber;
