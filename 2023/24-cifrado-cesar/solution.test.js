const cesarEncrypt = require('./solution');

describe('Challenge 24: Cifrado César', () => {
  const testCases = [
    {
      input: ['Retos de programacion', 1],
      output: 'Sfupt ef qsphsbnbdjpñ',
    },
    {
      input: ['Retos de programacion', 2],
      output: 'Tgvqu fg rtqitcñcekqo',
    },
    {
      input: ['Retos de programacion', 3],
      output: 'Uhwrv gh surjudodflrp',
    },
    {
      input: ['Retos de programacion', 10],
      output: 'Bñdyc nñ zbypbkvkmryw',
    },
    {
      input: ['   E Ste es una   prueba de texto   ', 10],
      output: 'Ñ Cdñ ñc ewk zbeñlk nñ dñhdy',
    },
  ];

  it('should return a string', () => {
    expect(typeof cesarEncrypt('Retos de programacion', 1)).toBe('string');
  });

  it.each(testCases)('should return the correct encrypted string', (testCase) => {
    expect(cesarEncrypt(...testCase.input)).toBe(testCase.output);
  });
});
