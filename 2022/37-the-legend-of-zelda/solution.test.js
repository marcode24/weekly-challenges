const getDifference = require('./solution');

describe('Challenge 37: The Legend of Zelda', () => {
  const testCases = [
    {
      input: ['THE_LEGEND_OF_ZELDA', 'TEARS_OF_THE_KINGDOM'],
      output: { years: 37, days: 91 },
    },
    {
      input: ['THE_LEGEND_OF_ZELDA', 'THE_ADVENTURE_OF_LINK'],
      output: { years: 0, days: 330 },
    },
    {
      input: ['ORACLE_OF_SEASONS', 'ORACLE_OF_AGES'],
      output: { years: 0, days: 0 },
    },
  ];

  it('should return an object type', () => {
    expect(typeof getDifference(
      'THE_LEGEND_OF_ZELDA',
      'TEARS_OF_THE_KINGDOM',
    )).toBe('object');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(getDifference(...input)).toStrictEqual(output);
  });
});
