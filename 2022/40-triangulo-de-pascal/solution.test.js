const buildPascalTriangle = require('./solution');

describe('Challenge 40: Triángulo de Pascal', () => {
  const testCases = [
    {
      input: 1,
      output: [[1]],
    },
    {
      input: 2,
      output: [[1], [1, 1]],
    },
    {
      input: 3,
      output: [[1], [1, 1], [1, 2, 1]],
    },
    {
      input: 5,
      output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(buildPascalTriangle(1))).toBe(true);
  });

  it.each(testCases)('should return the correct'
  + 'output with $input side', ({ input, output }) => {
    expect(buildPascalTriangle(input)).toStrictEqual(output);
  });
});
