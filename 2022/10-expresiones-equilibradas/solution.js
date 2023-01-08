const validateExpresions = (str) => {
  const stack = [];
  const open = ['(', '{', '['];
  const close = [')', ']', '}'];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = validateExpresions;
