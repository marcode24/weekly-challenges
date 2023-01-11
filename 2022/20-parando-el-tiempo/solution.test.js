const stopTime = require('./solution');

describe('Challenge 20: Parando el tiempo', () => {
  const testCases = [
    {
      input: {
        num1: 1, num2: 2, time: 500,
      },
      output: 3,
    },
    {
      input: {
        num1: 1, num2: 32, time: 1000,
      },
      output: 33,
    },
  ];

  it('should return a promise type', () => {
    expect(stopTime(testCases[0])).toBeInstanceOf(Promise);
  });

  it.each(testCases)('should return $output after $input.time ms', async (testCase) => {
    const result = await stopTime(testCase.input);
    expect(result).toBe(testCase.output);
  });
});
