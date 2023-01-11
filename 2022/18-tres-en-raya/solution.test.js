const result = require('./solution');

describe('Challenge 18: Tres en raya', () => {
  const testCases = [
    {
      input: [
        ['X', 'X', 'X'],
        ['O', 'O', 'X'],
        ['X', 'O', 'O'],
      ],
      output: 'X',
    },
    {
      input: [
        ['X', 'O', 'X'],
        ['O', 'O', 'X'],
        ['X', 'O', 'O'],
      ],
      output: 'O',
    },
    {
      input: [
        ['X', 'O', 'X'],
        ['O', 'X', 'X'],
        ['X', 'O', 'O'],
      ],
      output: 'X',
    },
    {
      input: [
        ['O', 'X', 'O'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
      ],
      output: 'Draw',
    },
    {
      input: [
        ['X', 'O', 'X'],
        ['O', '', ''],
        ['X', 'O', ''],
      ],
      output: null,
    },
  ];
  it('should return a string type', () => {
    expect(typeof result(testCases[0].input)).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(result(testCase.input)).toBe(testCase.output);
  });
});
