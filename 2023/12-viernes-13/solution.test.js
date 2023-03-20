const includesFriday13 = require('./solution');

describe('Challenge 12: Viernes 13', () => {
  const testCases = [
    {
      input: [2, 2016],
      output: false,
    },
    {
      input: [4, 1990],
      output: true,
    },
    {
      input: [7, 1990],
      output: true,
    },
    {
      input: [11, 2009],
      output: true,
    },
    {
      input: [8, 2010],
      output: true,
    },
    {
      input: [5, 2011],
      output: true,
    },
    {
      input: [1, 1985],
      output: false,
    },
    {
      input: [8, 2021],
      output: true,
    },
    {
      input: [1, 2023],
      output: true,
    },
    {
      input: [10, 2023],
      output: true,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof includesFriday13(1, 2023)).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(includesFriday13(...testCase.input)).toBe(testCase.output);
  });
});
