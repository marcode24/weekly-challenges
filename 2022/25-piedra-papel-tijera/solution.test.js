const evaluateRounds = require('./solution');

describe('Challenge 25: Piedra, papel o tijera', () => {
  const testCases = [

    {
      input: [
        ['ROCK', 'SCISSORS'],
        ['SCISSORS', 'ROCK'],
        ['PAPER', 'SCISSORS'],
      ],
      output: 'PLAYER 2',
    },
    {
      input: [
        ['ROCK', 'SCISSORS'],
        ['SCISSORS', 'ROCK'],
        ['PAPER', 'SCISSORS'],
        ['PAPER', 'ROCK'],
      ],
      output: 'TIE',
    },
    {
      input: [
        ['ROCK', 'SCISSORS'],
        ['SCISSORS', 'ROCK'],
        ['PAPER', 'SCISSORS'],
        ['PAPER', 'ROCK'],
        ['PAPER', 'ROCK'],
      ],
      output: 'PLAYER 1',
    },
  ];

  it('should return a string type', () => {
    expect(typeof evaluateRounds([
      ['ROCK', 'SCISSORS'],
      ['SCISSORS', 'ROCK'],
      ['PAPER', 'SCISSORS'],
    ])).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(evaluateRounds(testCase.input)).toBe(testCase.output);
  });
});
