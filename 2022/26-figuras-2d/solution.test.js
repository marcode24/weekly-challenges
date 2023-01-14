const makeFigure = require('./solution');

describe('Challenge 26: Figuras 2D', () => {
  const testCases = [
    {
      input: [3, 'square'],
      output: [
        '***',
        '***',
        '***',
      ].join('\n'),
      description: 'should return a square',
    },
    {
      input: [3, 'triangle'],
      output: [
        '*',
        '**',
        '***',
      ].join('\n'),
      description: 'should return a triangle',
    },
    {
      input: [3, 'diamond'],
      output: [
        '  *',
        ' ***',
        '*****',
        ' ***',
        '  *',
      ].join('\n'),
      description: 'should return a diamond',
    },
  ];

  it('should return a string type', () => {
    expect(typeof makeFigure(3, 'square')).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(makeFigure(...testCase.input)).toBe(testCase.output);
  });
});
