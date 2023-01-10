const transformUpperCase = require('./solution');

describe('Challenge 16: En mayúscula', () => {
  const testCases = [
    {
      input: 'hola mundo',
      output: 'Hola Mundo',
    },
    {
      input: 'hola mundo 123',
      output: 'Hola Mundo 123',
    },
    {
      input: '¿hola qué tal estás?',
      output: '¿Hola Qué Tal Estás?',
    },
    {
      input: 'El niño ñoño',
      output: 'El Niño Ñoño',
    },
  ];

  it('should return a string type', () => {
    expect(typeof transformUpperCase('hola mundo')).toBe('string');
  });

  it.each(testCases)('should return $output when pass $input', (testCase) => {
    expect(transformUpperCase(testCase.input)).toBe(testCase.output);
  });
});
