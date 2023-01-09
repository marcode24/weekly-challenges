const factorial = require('./solution');

describe('Challenge 13: Factorial recursivo', () => {
  const testCases = [
    {
      input: 5,
      output: 120,
    },
    {
      input: 6,
      output: 720,
    },
    {
      input: 15,
      output: 1307674368000,
    },
    {
      input: 2,
      output: 2,
    },
    {
      input: 20,
      output: 2432902008176640000,
    },
    {
      input: 0,
      output: 1,
    },
    {
      input: 1,
      output: 1,
    },
  ];

  it('should return a number type', () => {
    expect(typeof factorial(5)).toBe('number');
  });

  it.each(testCases)('should return $output when $input is passed', (testCase) => {
    expect(factorial(testCase.input)).toBe(testCase.output);
  });
});
