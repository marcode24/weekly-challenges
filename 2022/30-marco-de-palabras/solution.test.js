const wrapSentence = require('./solution');

describe('Challenge 30: Marco de palabras', () => {
  const testCases = [
    {
      input: 'Hola mundo',
      output: [
        '*********\n'
        + '* Hola  *\n'
        + '* mundo *\n'
        + '*********',
      ],
    },
    {
      input: 'Hola soy un texto de prueba',
      output: [
        '**********\n'
        + '* Hola   *\n'
        + '* soy    *\n'
        + '* un     *\n'
        + '* texto  *\n'
        + '* de     *\n'
        + '* prueba *\n'
        + '**********',
      ],
    },
  ];
  it('should return an array type', () => {
    expect(Array.isArray(wrapSentence('Hola mundo'))).toBe(true);
  });

  it.each(testCases)('should return "$input" wrapped', (testCase) => {
    expect(wrapSentence(testCase.input)).toEqual(testCase.output);
  });
});
