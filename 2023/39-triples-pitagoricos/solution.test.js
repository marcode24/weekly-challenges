const { pythagoreanTriple } = require('./solution');

describe('Challenge 39: Triples pitagóricos', () => {
  const testCases = [
    {
      input: 2,
      output: [],
    },
    {
      input: 5,
      output: [[3, 4, 5]],
    },
    {
      input: 20,
      output: [
        [3, 4, 5],
        [5, 12, 13],
        [6, 8, 10],
        [8, 15, 17],
        [9, 12, 15],
        [12, 16, 20],
      ],
    },
    {
      input: 30,
      output: [
        [3, 4, 5],
        [5, 12, 13],
        [6, 8, 10],
        [7, 24, 25],
        [8, 15, 17],
        [9, 12, 15],
        [10, 24, 26],
        [12, 16, 20],
        [15, 20, 25],
        [18, 24, 30],
        [20, 21, 29],
      ],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(pythagoreanTriple(2))).toBe(true);
  });

  it.each(testCases)('should return an array with length $output.length', (testCase) => {
    const { input, output } = testCase;
    expect(pythagoreanTriple(input)).toEqual(output);
  });
});
