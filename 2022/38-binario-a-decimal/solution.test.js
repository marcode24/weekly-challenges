const convertToDecimal = require('./solution');

describe('Challenge 38: Binario a decimal', () => {
  const testCases = [
    {
      input: '101',
      output: 5,
    },
    {
      input: '1001',
      output: 9,
    },
    {
      input: '1101',
      output: 13,
    },
    {
      input: '1111',
      output: 15,
    },
    {
      input: '101011',
      output: 43,
    },
    {
      input: '1010101',
      output: 85,
    },
  ];

  it('should return a number type', () => {
    expect(typeof convertToDecimal('101')).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(convertToDecimal(input)).toBe(output);
  });
});
