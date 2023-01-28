const findBoomerangs = require('./solution');

describe('Challenge 44: Bumeranes', () => {
  const testCases = [
    {
      input: [2, 1, 2, 3, 3, 4, 2, 4],
      output: 2,
    },
    {
      input: [9, 5, 9, 5, 1, 1, 1],
      output: 3,
    },
    {
      input: [5, 6, 6, 7, 6, 3, 9],
      output: 1,
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(findBoomerangs([9, 5, 9, 5, 1, 1, 1]))).toBeTruthy();
  });

  it.each(testCases)('should return  an array with $output items', (testCase) => {
    expect(findBoomerangs(testCase.input).length).toBe(testCase.output);
  });
});
