const drawSpiral = require('./solution');

describe('Challenge 22: La espiral', () => {
  const testCases = [
    {
      input: 1,
      output: '╗',
    },
    {
      input: 2,
      output: '═╗\n╚╝',
    },
    {
      input: 3,
      output: '══╗\n╔╗║\n╚═╝',
    },
    {
      input: 4,
      output: '═══╗\n╔═╗║\n║╚╝║\n╚══╝',
    },
    {
      input: 5,
      output: '════╗\n╔══╗║\n║╔╗║║\n║╚═╝║\n╚═══╝',
    },
  ];

  it('should return a string', () => {
    expect(typeof drawSpiral(1)).toBe('string');
  });

  it.each(testCases)('should return the correct spiral for $input', (testCase) => {
    expect(drawSpiral(testCase.input)).toBe(testCase.output);
  });
});
