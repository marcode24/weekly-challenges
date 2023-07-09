const countBack = (start, interval) => {
  if (start <= 0 || interval <= 0 || !Number.isInteger(start)
    || !Number.isInteger(interval)) {
    return;
  }
  const counter = setInterval(() => {
    console.log(start);
    start--;
    if (start <= 0) {
      clearInterval(counter);
      console.log('Termino!!!');
    }
  }, interval);
};

module.exports = countBack;
