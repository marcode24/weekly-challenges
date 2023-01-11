const convert = require('./solution');

describe('Challenge 19: Conversor de tiempo', () => {
  const testCases = [
    {
      input: {
        days: 1, hours: 1, minutes: 1, seconds: 1,
      },
      output: 90061000,
    },
    {
      input: {
        days: 0, hours: 0, minutes: 0, seconds: 10,
      },
      output: 10000,
    },
    {
      input: {
        days: 2, hours: 5, minutes: -45, seconds: 10,
      },
      output: 188110000,
    },
    {
      input: {
        days: 2000000000, hours: 5, minutes: 45, seconds: 10,
      },
      output: 172800000020710000,
    },
  ];

  it('should return a number type', () => {
    expect(typeof convert({
      days: 1, hours: 1, minutes: 1, seconds: 1,
    })).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(convert(testCase.input)).toBe(testCase.output);
  });
});
