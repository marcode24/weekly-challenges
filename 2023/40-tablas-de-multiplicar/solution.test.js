const { printMutliplications } = require('./solution');

describe('Challenge 40: Tablas de multiplicar', () => {
  const testCases = [
    {
      input: 0,
      output: [
        '0 x 1 = 0',
        '0 x 2 = 0',
        '0 x 3 = 0',
        '0 x 4 = 0',
        '0 x 5 = 0',
        '0 x 6 = 0',
        '0 x 7 = 0',
        '0 x 8 = 0',
        '0 x 9 = 0',
        '0 x 10 = 0',
      ],
    },
    {
      input: 4,
      output: [
        '4 x 1 = 4',
        '4 x 2 = 8',
        '4 x 3 = 12',
        '4 x 4 = 16',
        '4 x 5 = 20',
        '4 x 6 = 24',
        '4 x 7 = 28',
        '4 x 8 = 32',
        '4 x 9 = 36',
        '4 x 10 = 40',
      ],
    },
    {
      input: 7,
      output: [
        '7 x 1 = 7',
        '7 x 2 = 14',
        '7 x 3 = 21',
        '7 x 4 = 28',
        '7 x 5 = 35',
        '7 x 6 = 42',
        '7 x 7 = 49',
        '7 x 8 = 56',
        '7 x 9 = 63',
        '7 x 10 = 70',
      ],
    },
    {
      input: 35,
      output: [
        '35 x 1 = 35',
        '35 x 2 = 70',
        '35 x 3 = 105',
        '35 x 4 = 140',
        '35 x 5 = 175',
        '35 x 6 = 210',
        '35 x 7 = 245',
        '35 x 8 = 280',
        '35 x 9 = 315',
        '35 x 10 = 350',
      ],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(printMutliplications(0))).toBe(true);
  });

  it.each(testCases)('should return an array with length $output.length', (testCase) => {
    const { input, output } = testCase;
    expect(printMutliplications(input)).toEqual(output);
  });
});
