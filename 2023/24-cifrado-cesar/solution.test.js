const { cesarEncrypt, cesarDecrypt } = require('./solution');

describe('Challenge 24: Cifrado César', () => {
  const testCases = [
    {
      input: 'Retos de programacion',
      output: 'Sfupt ef qsphsbnbdjpñ',
      offset: 1,
    },
    {
      input: 'Retos de programacion',
      output: 'Tgvqu fg rtqitcñcekqo',
      offset: 2,
    },
    {
      input: 'Retos de programacion',
      output: 'Uhwrv gh surjudodflrp',
      offset: 3,
    },
    {
      input: 'Retos de programacion',
      output: 'Bñdyc nñ zbypbkvkmryw',
      offset: 10,
    },
    {
      input: '   E Ste es una   prueba de texto   ',
      output: 'Ñ Cdñ ñc ewk zbeñlk nñ dñhdy',
      offset: 10,
    },
  ];

  describe('cesarEncrypt', () => {
    it('should return a string', () => {
      expect(typeof cesarEncrypt('Retos de programacion', 1)).toBe('string');
    });

    it.each(testCases)('should return the correct encrypted string', (testCase) => {
      const { offset, input, output } = testCase;
      expect(cesarEncrypt(input, offset)).toBe(output);
    });
  });

  describe('cesarDecrypt', () => {
    it('should return a string', () => {
      expect(typeof cesarDecrypt('Sfupt ef qsphsbnbdjpñ', 1)).toBe('string');
    });

    it.each(testCases)('should return the correct decrypted string', (testCase) => {
      const { offset, input, output } = testCase;
      expect(cesarDecrypt(output, offset)).toBe(input.trim().replace(/\s+/g, ' '));
    });
  });
});
