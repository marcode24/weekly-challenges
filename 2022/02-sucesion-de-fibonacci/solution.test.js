const fibonacci = require('./solution');

describe('Challenge 02: Sucesión de Fibonacci', () => {
  const testCases = [
    {
      input: 0,
      output: [],
      description: 'should return an empty array',
    },
    {
      input: 1,
      output: [0],
      description: 'should return an array with 1 element',
    },
    {
      input: 3,
      output: [0, 1, 1],
      description: 'should return an array with 3 elements',
    },
    {
      input: 10,
      output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
      description: 'should return an array with 10 elements',
    },
    {
      input: 20,
      output: [
        0, 1, 1, 2, 3,
        5, 8, 13, 21, 34,
        55, 89, 144, 233, 377,
        610, 987, 1597, 2584, 4181,
      ],
      description: 'should return an array with 20 elements',
    },
    {
      input: 50,
      output: [
        0, 1, 1, 2, 3,
        5, 8, 13, 21, 34,
        55, 89, 144, 233, 377,
        610, 987, 1597, 2584, 4181,
        6765, 10946, 17711, 28657, 46368,
        75025, 121393, 196418, 317811, 514229,
        832040, 1346269, 2178309, 3524578, 5702887,
        9227465, 14930352, 24157817, 39088169, 63245986,
        102334155, 165580141, 267914296, 433494437, 701408733,
        1134903170, 1836311903, 2971215073, 4807526976, 7778742049,
      ],
      description: 'should return an array with 50 elements',
    },
  ];

  it('shoud return an array type', () => {
    expect(Array.isArray(fibonacci(1))).toBe(true);
  });

  it.each(testCases)('$description', (testCase) => {
    const result = fibonacci(testCase.input);
    expect(result).toEqual(testCase.output);
    expect(result.length).toBe(testCase.input);
  });
});
