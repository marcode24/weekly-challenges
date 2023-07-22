const { findCharInfiltrated } = require('./solution');

describe('Challenge 29: Carácter infiltrado', () => {
  const testCases = [
    {
      input: ['hola', 'hila'],
      output: ['i'],
    },
    {
      input: ['Me llamo mouredev', 'Me llemo mouredov'],
      output: ['e', 'o'],
    },
    {
      input: ['Me llamo.Brais Moure', 'Me llamo brais moure'],
      output: [' ', 'b', 'm'],
    },
    {
      input: ['hola', 'hola.'],
      output: 'Las cadenas no tienen la misma longitud',
    },
    {
      input: ['hola', 'hola'],
      output: [],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(findCharInfiltrated('hola', 'hila'))).toBe(true);
  });

  it('should return a string type if the strings have different length', () => {
    expect(typeof findCharInfiltrated('hola', 'hola.')).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(findCharInfiltrated(...testCase.input)).toEqual(testCase.output);
  });
});
