const { getPermutations } = require('./solution');

describe('Challenge 36: Permutaciones', () => {
  const testCases = [
    {
      input: 'sol',
      output: ['sol', 'slo', 'osl', 'ols', 'lso', 'los'],
    },
    {
      input: 'luna',
      output: [
        'luna', 'luan', 'lnua',
        'lnau', 'laun', 'lanu',
        'ulna', 'ulan', 'unla',
        'unal', 'ualn', 'uanl',
        'nlua', 'nlau', 'nula',
        'nual', 'nalu', 'naul',
        'alun', 'alnu', 'auln',
        'aunl', 'anlu', 'anul',
      ],
    },
    {
      input: 'lo',
      output: ['lo', 'ol'],
    },
    {
      input: '',
      output: [''],
    },
    {
      input: 'a',
      output: ['a'],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(getPermutations('sol'))).toBe(true);
  });

  // eslint-disable-next-line max-len
  it.each(testCases)('should an array with length $output.length when input is $input', (testCase) => {
    const { input, output } = testCase;
    expect(getPermutations(input)).toEqual(output);
  });
});
