const { decodeMorse, encodeMorse } = require('./solution');

describe('Challenge 09: Codigo Morse', () => {
  const testCasesDecode = [
    {
      input: '.... . -.--   .--- ..- -.. .',
      output: 'HEY JUDE',
    },
    {
      input: '.... --- .-.. .-   -- ..- -. -.. ---',
      output: 'HOLA MUNDO',
    },
    {
      input: '. ... - .   . ...   ..- -.   . .--- . -- .--. .-.. ---'
      + '   -.. .   -.-. --- -.. .. --. ---   -- --- .-. ... .',
      output: 'ESTE ES UN EJEMPLO DE CODIGO MORSE',
    },
  ];

  const testCasesEncode = [
    {
      input: 'HEY JUDE',
      output: '.... . -.--   .--- ..- -.. .',
    },
    {
      input: 'Hola mundo',
      output: '.... --- .-.. .-   -- ..- -. -.. ---',
    },
    {
      input: 'Este es un ejemplo de codigo morse',
      output: '. ... - .   . ...   ..- -.   . .--- . -- .--. .-.. ---'
      + '   -.. .   -.-. --- -.. .. --. ---   -- --- .-. ... .',
    },
  ];

  describe('decodeMorse function', () => {
    it('should return an string type', () => {
      expect(typeof decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('string');
    });

    it.each(testCasesDecode)('should return $output when input is $input', (testCase) => {
      expect(decodeMorse(testCase.input)).toBe(testCase.output);
    });
  });

  describe('encodeMorse function', () => {
    it('should return an string type', () => {
      expect(typeof encodeMorse('HEY JUDE')).toBe('string');
    });

    it.each(testCasesEncode)('should return $output when input is $input', (testCase) => {
      expect(encodeMorse(testCase.input)).toBe(testCase.output);
    });
  });
});
