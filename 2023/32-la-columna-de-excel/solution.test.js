const { columnToNumber } = require('./solution');

describe('Challenge 32: La columna de Excel', () => {
  const testCases = [
    {
      input: 'A',
      output: 1,
    },
    {
      input: 'B',
      output: 2,
    },
    {
      input: 'AA',
      output: 27,
    },
    {
      input: 'AB',
      output: 28,
    },
    {
      input: 'CA',
      output: 79,
    },
    {
      input: 'ZZ',
      output: 702,
    },
    {
      input: 'AAA',
      output: 703,
    },
  ];

  it('should return a number type', () => {
    expect(typeof columnToNumber('A')).toBe('number');
  });

  it.each(testCases)('should return $output when input is $input', (testCase) => {
    const { input, output } = testCase;
    expect(columnToNumber(input)).toBe(output);
  });
});
