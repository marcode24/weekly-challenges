const mostVowel = require('./solution');

describe('Challenge 47: Vocal más común', () => {
  const testCases = [
    {
      input: 'hola mundo',
      output: { o: 2 },
    },
    {
      input: 'este es',
      output: { e: 3 },
    },
    {
      input: 'est es un uno',
      output: { e: 2, u: 2 },
    },
    {
      input: 'sgfdhgfdhgf',
      output: {},
    },
    {
      input: '',
      output: {},
    },
    {
      input: 'aeiou',
      output: {
        a: 1, e: 1, i: 1, o: 1, u: 1,
      },
    },
  ];

  it('should return an object type', () => {
    expect(typeof mostVowel('hola mundo')).toBe('object');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(mostVowel(testCase.input)).toStrictEqual(testCase.output);
  });
});
