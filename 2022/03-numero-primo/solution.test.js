const primeNumbers = require('./solution');

describe('Challenge 03: Número primo', () => {
  const testCases = [
    {
      input: 0,
      output: [],
      description: 'should return an empty array',
    },
    {
      input: 1,
      output: [],
      description: 'should return an empty array',
    },
    {
      input: 3,
      output: [2, 3],
      description: 'should return an array with 2 elements',
    },
    {
      input: 10,
      output: [2, 3, 5, 7],
      description: 'should return an array with 4 elements',
    },
    {
      input: 20,
      output: [
        2, 3, 5, 7, 11,
        13, 17, 19,
      ],
      description: 'should return an array with 20 elements',
    },
    {
      input: 100,
      output: [
        2, 3, 5, 7, 11, 13, 17, 19,
        23, 29, 31, 37, 41, 43, 47, 53,
        59, 61, 67, 71, 73, 79, 83, 89,
        97,
      ],
      description: 'should return an array with 25 elements',
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(primeNumbers(1))).toBe(true);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(primeNumbers(testCase.input)).toEqual(testCase.output);
  });
});
