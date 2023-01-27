const convert = require('./solution');

describe('Challenge 41: Ley de Ohm', () => {
  const testCases = [
    {
      input: { voltage: 230, resistance: 10 },
      output: 23,
    },
    {
      input: { voltage: 230, intensity: 100 },
      output: 2.3,
    },
    {
      input: { resistance: 10, intensity: 10 },
      output: 100,
    },
    {
      input: { voltage: 230, resistance: 10, intensity: 10 },
      output: 'invalid values',
    },
  ];

  it('should return a number type', () => {
    expect(typeof convert({ voltage: 230, resistance: 10 })).toBe('number');
  });

  it('should return a string type if values are incorrect', () => {
    expect(typeof convert(
      { voltage: 230, resistance: 10, intensity: 10 },
    )).toBe('string');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(convert(input)).toBe(output);
  });
});
