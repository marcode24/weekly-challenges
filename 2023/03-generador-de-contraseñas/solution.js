const generatePassword = ({
  length = 8, upperCase = true, numbers = true, symbols = true,
}) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const numbersString = '0123456789';
  const symbolsString = '!@#$%^&*()_+-=[]{}/<>?';
  if (length < 8 || length > 16) return 'Invalid length';
  let password = '';
  let characters = alphabet;
  if (upperCase) characters += alphabet.toUpperCase();
  if (numbers) characters += numbersString;
  if (symbols) characters += symbolsString;
  while (password.length < length) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};

module.exports = generatePassword;
