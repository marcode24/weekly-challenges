const isArmstrongNumber = require('./solution');

describe('Challenge 14: Número Armstrong', () => {
  const testCases = [
    {
      input: 153,
      output: true,
    },
    {
      input: 350,
      output: false,
    },
    {
      input: 370,
      output: true,
    },
    {
      input: 371,
      output: true,
    },
    {
      input: 407,
      output: true,
    },
    {
      input: 1630,
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof isArmstrongNumber(153)).toBe('boolean');
  });

  it.each(testCases)('should return $output when $input is passed', (testCase) => {
    expect(isArmstrongNumber(testCase.input)).toBe(testCase.output);
  });
});
