const { getKeyboardT9Text } = require('./solution');

describe('Challenge 30: Teclado T9', () => {
  const testCases = [
    {
      input: '6-666-88-777-33-3-33-888',
      output: 'MOUREDEV',
    },
    {
      input: '44-33-555-555-666',
      output: 'HELLO',
    },
    {
      input: '999-33-2-2-2-2-44',
      output: 'YEAAAAH',
    },
    {
      input: '777-33-8-666-7777-0-3-33-0-7-777-666-4-777-2-6-2-222-444-666-66',
      output: 'RETOS DE PROGRAMACION',
    },
  ];

  it('should return a string type', () => {
    expect(typeof getKeyboardT9Text('6-666-88-777-33-3-33-888')).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(getKeyboardT9Text(testCase.input)).toBe(testCase.output);
  });
});
