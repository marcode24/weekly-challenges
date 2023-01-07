// without using functions
const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// using functions
// const reverseString = (str) => str.split('').reverse().join('');
// const reverseString = (str) => [...str].reverse().join('');

module.exports = reverseString;
