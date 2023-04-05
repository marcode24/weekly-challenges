const convertToHexadecimalAndOctal = require('./solution');

describe('Challenge 14: Octal y hexadecimal', () => {
  const testCases = [
    {
      input: 10,
      output: {
        octal: '12',
        hexadecimal: 'A',
      },
    },
    {
      input: 15,
      output: {
        octal: '17',
        hexadecimal: 'F',
      },
    },
    {
      input: 90,
      output: {
        octal: '132',
        hexadecimal: '5A',
      },
    },
    {
      input: 100,
      output: {
        octal: '144',
        hexadecimal: '64',
      },
    },
    {
      input: 255,
      output: {
        octal: '377',
        hexadecimal: 'FF',
      },
    },
    {
      input: 1024,
      output: {
        octal: '2000',
        hexadecimal: '400',
      },
    },
  ];

  it('should return an object type', () => {
    expect(typeof convertToHexadecimalAndOctal(10)).toBe('object');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(convertToHexadecimalAndOctal(testCase.input)).toEqual(testCase.output);
  });
});
