const quickSort = require('./solution');

describe('Challenge 39: Quick Sort', () => {
  const testCases = [
    {
      input: [1, 2, 3],
      output: [1, 2, 3],
    },
    {
      input: [3, 2, 1],
      output: [1, 2, 3],
    },
    {
      input: [1, 3, 2, 20, 10, 5, 7, 8, 9, 4, 6],
      output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(quickSort([1, 2, 3]))).toBe(true);
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(quickSort(input)).toStrictEqual(output);
  });
});
