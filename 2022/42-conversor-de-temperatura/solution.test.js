const convert = require('./solution');

describe('Challenge 42: Conversor de temperatura', () => {
  const testCases = [
    {
      input: '0°C',
      output: '32°F',
    },
    {
      input: '32°F',
      output: '0°C',
    },
    {
      input: '100°C',
      output: '212°F',
    },
    {
      input: '212°F',
      output: '100°C',
    },
    {
      input: '- 100 °C ',
      output: '-148°F',
    },
    {
      input: '- 100 °F ',
      output: '-73.33333333333333°C',
    },
    {
      input: '100A°C',
      output: 'invalid value',
    },
    {
      input: '100A°F',
      output: 'invalid value',
    },
    {
      input: '°C',
      output: 'invalid value',
    },
    {
      input: '°F',
      output: 'invalid value',
    },
    {
      input: '100',
      output: 'invalid value',
    },
    {
      input: '0°I',
      output: 'invalid value',
    },
  ];

  it('should return a string type', () => {
    expect(typeof convert('0°C')).toBe('string');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(convert(input)).toBe(output);
  });
});
