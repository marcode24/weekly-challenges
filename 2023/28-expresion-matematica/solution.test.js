const { isMathExpresion } = require('./solution');

describe('Challenge 28: Expresión matemática', () => {
  const testCases = [
    {
      input: '2 + 3 * 5',
      output: true,
    },
    {
      input: '2+3*5+',
      output: false,
    },
    {
      input: '2+3/5/89-0a',
      output: false,
    },
    {
      input: '2+3*5+6*3%43',
      output: true,
    },
    {
      input: '2 + 3   *5 + 6    *3   % 43',
      output: true,
    },
    {
      input: '2 + 3  _D *5 + 6  ___  *3   % 43 +',
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof isMathExpresion('2 + 3 * 5')).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(isMathExpresion(testCase.input)).toBe(testCase.output);
  });
});
