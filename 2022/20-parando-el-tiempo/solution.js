const stopTime = async ({ num1, num2, time }) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(num1 + num2);
  }, time);
});

module.exports = stopTime;
