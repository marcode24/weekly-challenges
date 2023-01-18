const remainingNumbers = require('./solution');

describe('Challenge 34: Los números perdidos', () => {
  const testCases = [
    {
      input: [1, 2, 3, 4, 6, 7, 10],
      output: [5, 8, 9],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 20],
      output: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      output: [],
    },
  ];
  it('should return an array type', () => {
    expect(Array.isArray(remainingNumbers([1, 2, 3, 4, 6, 7, 10]))).toBe(true);
  });

  it.each(testCases)('should return the correct array'
  + ' for the input $input', ({ input, output }) => {
    expect(remainingNumbers(input)).toStrictEqual(output);
  });
});
