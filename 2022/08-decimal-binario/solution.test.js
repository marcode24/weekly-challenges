const decimalToBinary = require('./solution');

describe('Challenge 08: Decimal Binario', () => {
  const testCases = [
    {
      input: 0,
      output: '0',
      description: 'should return 0 when input is 0',
    },
    {
      input: 1,
      output: '1',
      description: 'should return 1 when input is 1',
    },
    {
      input: 10,
      output: '1010',
      description: 'should return 1010 when input is 10',
    },
    {
      input: 100,
      output: '1100100',
      description: 'should return 1100100 when input is 100',
    },
    {
      input: 1000,
      output: '1111101000',
      description: 'should return 1111101000 when input is 1000',
    },
    {
      input: 10000,
      output: '10011100010000',
      description: 'should return 10011100010000 when input is 10000',
    },
  ];

  it('should return an string type', () => {
    expect(typeof decimalToBinary(10)).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(decimalToBinary(testCase.input)).toBe(testCase.output);
  });
});
