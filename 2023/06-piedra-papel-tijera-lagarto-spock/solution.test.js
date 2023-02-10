const getWinner = require('./solution');

describe('Challange 06: Piedra Papel Tijera Lagarto Spock', () => {
  const testCases = [
    {
      input: [
        ['🗿', '✂️'],
        ['✂️', '🗿'],
        ['📄', '✂️'],
      ],
      output: 'PLAYER 2',
    },
    {
      input: [
        ['🦎', '✂️'],
        ['🖖', '🗿'],
        ['📄', '🖖'],
      ],
      output: 'PLAYER 1',
    },
    {
      input: [
        ['📄', '🖖'],
        ['🦎', '✂️'],
        ['🖖', '🗿'],
        ['📄', '🖖'],
      ],
      output: 'PLAYER 1',
    },
    {
      input: [
        ['🦎', '✂️'],
        ['🖖', '🗿'],
      ],
      output: 'TIE',
    },
    {
      input: [
        ['🗿', '✂️'],
        ['✂️', '🗿'],
        ['📄', '✂️'],
        ['🖖', '🗿'],
        ['📄', '🖖'],
      ],
      output: 'PLAYER 1',
    },
    {
      input: [
        ['🗿', '🗿'],
        ['✂️', '✂️'],
        ['📄', '📄'],
      ],
      output: 'TIE',
    },
  ];

  it('should return a string', () => {
    expect(typeof getWinner([['🗿', '✂️']])).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(getWinner(testCase.input)).toBe(testCase.output);
  });
});
