const { getNumber } = require('./solution');

describe('Challenge 31: El ábaco', () => {
  const testCases = [
    {
      input: [
        'O---OOOOOOOO',
        'OOO---OOOOOO',
        '---OOOOOOOOO',
        'OO---OOOOOOO',
        'OOOOOOO---OO',
        'OOOOOOOOO---',
        '---OOOOOOOOO',
      ],
      output: '1,302,790',
    },
    {
      input: [
        'O---OOOOOOOO',
        'OOO---OOOOOO',
      ],
      output: '13',
    },
    {
      input: [
        'O---OOOOOOOO',
        'OOO---OOO--OOO',
        '---OOOOOOOOO',
        'OO---OOOOOOO',
        'OOOOOOO---OO',
        'OOOOOOOOO---',
        '---OOOOOOOOO',
      ],
      output: 'Invalid abacus',
    },
    {
      input: [
        'O---OOOOOOOO',
        'OOO---OOO--OOO',
        '---OOOOOOOOO',
        'OO---OOOOOOOOO',
        'OOOOOOOOO---',
        '---OOOOOOOOO',
      ],
      output: 'Invalid abacus',
    },
    {
      input: [
        'O---OOOOOOOO',
        'O---OOOOOOOO',
        'OOO---OOOOOO',
        '---OOOOOOOOO',
        'OO---OOOOOOO',
        '---OOOOOOOOO',
        'OO---OOOOOOO',
        'OOOOOOO---OO',
        'OOOOOOOOO---',
        'OOOOOOOOO---',
        'OOOOOOO---OO',
        'OOOOOOOO---O',
        '---OOOOOOOOO',
      ],
      output: '1,130,202,799,780',
    },
  ];

  it('should return a string type', () => {
    expect(typeof getNumber(testCases[0])).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(getNumber(testCase.input)).toBe(testCase.output);
  });
});
