const sortList = require('./solution');

describe('Challenge 29: Ordena la lista', () => {
  const testCases = [
    {
      input: [[1, 2, 3], true],
      output: [1, 2, 3],
    },
    {
      input: [[1, 2, 3], false],
      output: [3, 2, 1],
    },
    {
      input: [[2, 23, 1, 4, 5, 6, 7, 8, 9, 10], true],
      output: [1, 2, 4, 5, 6, 7, 8, 9, 10, 23],
    },
    {
      input: [[2, 23, 1, 4, 5, 6, 7, 8, 9, 10], false],
      output: [23, 10, 9, 8, 7, 6, 5, 4, 2, 1],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(sortList([1, 2, 3], true))).toBe(true);
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(sortList(...testCase.input)).toEqual(testCase.output);
  });
});
