const buildTreeForce = require('./solution');

describe('Challenge 20: La Trifuerza', () => {
  const testCases = [
    {
      input: 1,
      output: ' * \n***',
    },
    {
      input: 2,
      output: '   *   \n  ***  \n *   * \n*** ***',
    },
    {
      input: 3,
      output: '     *     \n    ***    \n   *   *   '
        + '\n  *** ***  \n *   *   * \n*** *** ***',
    },
    {
      input: 4,
      output: '       *       \n      ***      \n     *   *     '
        + '\n    *** ***    \n   *   *   *   \n  *** *** ***  '
        + '\n *   *   *   * \n*** *** *** ***',
    },
    {
      input: 10,
      output: '                   *                   \n'
        + '                  ***                  \n'
        + '                 *   *                 \n'
        + '                *** ***                \n'
        + '               *   *   *               \n'
        + '              *** *** ***              \n'
        + '             *   *   *   *             \n'
        + '            *** *** *** ***            \n'
        + '           *   *   *   *   *           \n'
        + '          *** *** *** *** ***          \n'
        + '         *   *   *   *   *   *         \n'
        + '        *** *** *** *** *** ***        \n'
        + '       *   *   *   *   *   *   *       \n'
        + '      *** *** *** *** *** *** ***      \n'
        + '     *   *   *   *   *   *   *   *     \n'
        + '    *** *** *** *** *** *** *** ***    \n'
        + '   *   *   *   *   *   *   *   *   *   \n'
        + '  *** *** *** *** *** *** *** *** ***  \n'
        + ' *   *   *   *   *   *   *   *   *   * \n'
        + '*** *** *** *** *** *** *** *** *** ***',
    },
  ];

  it('should return a string', () => {
    expect(typeof buildTreeForce(1)).toBe('string');
  });

  it.each(testCases)('should return the triforce: $input', (testCase) => {
    expect(buildTreeForce(testCase.input)).toBe(testCase.output);
  });
});
