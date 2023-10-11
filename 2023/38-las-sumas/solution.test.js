const { getCombinations } = require('./solution');

describe('Challenge 38: Las sumas', () => {
  const testCases = [
    {
      input: {
        values: [1, 5, 3, 2],
        target: 6,
      },
      output: [
        [1, 3, 2],
        [1, 5],
      ],
    },
    {
      input: {
        values: [1, 5, 3, 2, 4],
        target: 7,
      },
      output: [
        [3, 4],
        [5, 2],
        [1, 2, 4],
      ],
    },
    {
      input: {
        values: [1, 5, 4],
        target: 11,
      },
      output: [],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(getCombinations([1, 2, 3, 4, 5], 5))).toBe(true);
  });

  it.each(testCases)('should return an array with length $output.length', (testCase) => {
    const { input, output } = testCase;
    const { values, target } = input;
    expect(getCombinations({ values, target })).toEqual(output);
  });
});
