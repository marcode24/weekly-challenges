const { hexToRgb, rgbToHex } = require('./solution');

describe('Challenge 37: Colores HEX y RGB', () => {
  const testCases = [
    {
      input: '#000000',
      output: 'rgb(0, 0, 0)',
    },
    {
      input: '#ffffff',
      output: 'rgb(255, 255, 255)',
    },
    {
      input: '#ff0000',
      output: 'rgb(255, 0, 0)',
    },
    {
      input: '#00ff00',
      output: 'rgb(0, 255, 0)',
    },
    {
      input: '#0000ff',
      output: 'rgb(0, 0, 255)',
    },
    {
      input: '#c0ffee',
      output: 'rgb(192, 255, 238)',
    },
  ];
  describe('hexToRgb', () => {
    it('should return a string type', () => {
      expect(typeof hexToRgb('#000000')).toBe('string');
    });

    it.each(testCases)('should return $output when input is $input', (testCase) => {
      const { input, output } = testCase;
      expect(hexToRgb(input)).toBe(output);
    });
  });

  describe('rgbToHex', () => {
    it('should return a string type', () => {
      expect(typeof rgbToHex('rgb(0, 0, 0)')).toBe('string');
    });

    it.each(testCases)('should return $input when input is $output', (testCase) => {
      const { input, output } = testCase;
      expect(rgbToHex(output)).toBe(input);
    });
  });
});
