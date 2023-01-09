const deleteChars = require('./solution');

describe('Challenge 11: Eliminando caracteres', () => {
  const testCases = [
    {
      input: ['ejemplo1', 'ejemplo2'],
      output: ['1', '2'],
    },
    {
      input: ['ejemplo1', 'ejemplo1'],
      output: ['', ''],
    },
    {
      input: ['Me gusta Java', 'Me gusta Kotlin'],
      output: ['Jv', 'Kolin'],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(deleteChars('ejemplo1', 'ejemplo2'))).toBe(true);
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(deleteChars(...input)).toEqual(output);
  });
});
