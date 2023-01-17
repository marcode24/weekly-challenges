const getLeapYears = require('./solution');

describe('Challenge 31: Años bisiestos', () => {
  const testCases = [
    {
      input: 1990,
      output: [1992, 1996, 2000, 2004, 2008, 2012, 2016],
    },
    {
      input: 1992,
      output: [1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020],
    },
    {
      input: 2020,
      output: [2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048],
    },
    {
      input: 1910,
      output: [1912, 1916, 1920, 1924, 1928, 1932, 1936],
    },
  ];

  it('should return an array type', () => {
    expect(getLeapYears(1990)).toBeInstanceOf(Array);
  });

  it.each(testCases)('should return an array with the correct values', (testCase) => {
    expect(getLeapYears(testCase.input)).toEqual(testCase.output);
  });
});
