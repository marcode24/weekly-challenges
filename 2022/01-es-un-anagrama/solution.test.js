const isAnagram = require('./solution');

describe('Challenge 01: Es un anagrama', () => {
  const testCases = [
    {
      input: ['anagrama', 'anagrama'],
      output: false,
      description: 'should return false if the strings are the same',
    },
    {
      input: ['anagrama', 'nagarama'],
      output: true,
      description: 'should return true',
    },
    {
      input: ['rosa', 'rosa'],
      output: false,
      description: 'should return false if the strings are the same',
    },
    {
      input: ['keep', 'peek'],
      output: true,
      description: 'should return true',
    },
    {
      input: ['Mother In Law', 'Hit Ler Woma'],
      output: false,
      description: 'should return false',
    },
    {
      input: ['Mother In Law', 'Hit Ler Woman'],
      output: true,
      description: 'should return true',
    },
  ];

  it('shoud return a boolean', () => {
    expect(typeof isAnagram('anagrama', 'nagarama')).toBe('boolean');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(isAnagram(...testCase.input)).toBe(testCase.output);
  });
});
