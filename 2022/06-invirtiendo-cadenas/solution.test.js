const reverseString = require('./solution');

describe('Challenge 06: Invertir cadenas', () => {
  const testCases = [
    {
      input: 'hello',
      output: 'olleh',
      description: 'should return olleh',
    },
    {
      input: 'Howdy',
      output: 'ydwoH',
      description: 'should return ydwoH',
    },
    {
      input: 'Greetings from Earth',
      output: 'htraE morf sgniteerG',
      description: 'should return htraE morf sgniteerG',
    },
    {
      input: 'hello world',
      output: 'dlrow olleh',
      description: 'should return dlrow olleh',
    },
  ];

  it('should return a string type', () => {
    expect(typeof reverseString('hello')).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(reverseString(testCase.input)).toBe(testCase.output);
  });
});
