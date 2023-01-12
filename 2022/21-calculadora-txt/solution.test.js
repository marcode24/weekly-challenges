const calculate = require('./solution');

xdescribe('Challenge 21: Calculadora TXT', () => {
  const testCases = [
    {
      input: 'file-01',
      output: 18.5,
      description: 'should return 18.5',
    },
    {
      input: 'file-02',
      output: 8334.5,
      description: 'should return 8334.5',
    },
    {
      input: 'file-error',
      output: 'Error: operators are not alternated',
      description: 'should return "Error: operators are not alternated"',
    },
  ];

  it('should return a number type if data is correct', () => {
    expect(typeof calculate('file-01')).toBe('number');
  });

  it('should return a string type if data is incorrect', () => {
    expect(typeof calculate('file-error')).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(calculate(testCase.input)).toBe(testCase.output);
  });
});
