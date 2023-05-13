const analyzeText = require('./solution');

describe('Challenge 19: Analisis de texto', () => {
  const testCases = [
    {
      input: 'Hola mundo.',
      output: {
        totalWords: 2,
        mediumWordLength: 4.5,
        longestWord: 'mundo',
        phrases: 1,
      },
    },
    {
      input: 'Hola mundo. ¿Cómo estás?',
      output: {
        totalWords: 4,
        mediumWordLength: 4.5,
        longestWord: 'mundo',
        phrases: 2,
      },
    },
    {
      input: 'Hola mundo. ¿Cómo estás? ¿Qué tal?',
      output: {
        totalWords: 6,
        mediumWordLength: 4,
        longestWord: 'mundo',
        phrases: 2,
      },
    },
    {
      input: '',
      output: {
        totalWords: 0,
        mediumWordLength: 0,
        longestWord: '',
        phrases: 0,
      },
    },
    {
      input: 'Hola mundo. Este es un texto de prueba. ¿Qué tal?',
      output: {
        totalWords: 10,
        mediumWordLength: 3.6,
        longestWord: 'prueba',
        phrases: 3,
      },
    },
  ];

  it('should return an object', () => {
    expect(typeof analyzeText('Hola mundo')).toBe('object');
  });

  it.each(testCases)('should return the text analysis', (testCase) => {
    expect(analyzeText(testCase.input)).toStrictEqual(testCase.output);
  });
});
