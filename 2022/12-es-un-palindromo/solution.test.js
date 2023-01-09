const isPalindrome = require('./solution');

describe('Challenge 12: Es un palíndromo', () => {
  const testCases = [
    {
      input: 'anita lava la tina',
      output: true,
      description: 'should return true',
    },
    {
      input: 'Ana lleva al oso la avellana',
      output: true,
      description: 'should return true',
    },
    {
      input: 'ana lleva al oso',
      output: false,
      description: 'should return false',
    },
    {
      input: 'ana',
      output: true,
      description: 'should return true',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof isPalindrome('anita lava la tina')).toBe('boolean');
  });

  it.each(testCases)('$description', ({ input, output }) => {
    expect(isPalindrome(input)).toBe(output);
  });
});
