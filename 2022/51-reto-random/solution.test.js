const persistence = require('./solution');

describe('Challenge 51: Reto random', () => {
  const testCases = [
    {
      input: 39,
      output: 3,
    },
    {
      input: 4,
      output: 0,
    },
    {
      input: 999,
      output: 4,
    },
    {
      input: 12380,
      output: 1,
    },
    {
      input: 9689313,
      output: 5,
    },
    {
      input: 78,
      output: 3,
    },
    {
      input: 6827174,
      output: 6,
    },
  ];

  it('should return a number type', () => {
    expect(typeof persistence(39)).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(persistence(input)).toBe(output);
  });
});
