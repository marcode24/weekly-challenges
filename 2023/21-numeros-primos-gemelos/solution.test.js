const getPrimeNumbersTwins = require('./solution');

describe('Challenge 21: Números primos gemelos', () => {
  const testCases = [
    {
      input: 1,
      output: [],
    },
    {
      input: 10,
      output: [[3, 5], [5, 7]],
    },
    {
      input: 14,
      output: [
        [3, 5],
        [5, 7],
        [11, 13],
      ],
    },
    {
      input: 100,
      output: [
        [3, 5],
        [5, 7],
        [11, 13],
        [17, 19],
        [29, 31],
        [41, 43],
        [59, 61],
        [71, 73],
      ],
    },
  ];

  it('should return an array', () => {
    expect(Array.isArray(getPrimeNumbersTwins(1))).toBe(true);
  });

  it.each(testCases)('should return the prime numbers twins: $input', (testCase) => {
    expect(getPrimeNumbersTwins(testCase.input)).toEqual(testCase.output);
  });
});
