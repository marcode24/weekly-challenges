const commonElements = require('./solution');

describe('Challenge 22: Conjuntos', () => {
  const testCases = [
    {
      input: [['a', 'b', 'c'], ['a', 'c', 'x'], true],
      output: ['a', 'c'],
    },
    {
      input: [['a', 'b', 'c'], ['a', 'c', 'x'], false],
      output: ['b', 'x'],
    },
    {
      input: [[1, 2], [1, 2], true],
      output: [1, 2],
    },
    {
      input: [[1, 2], [1, 2], false],
      output: [],
    },

  ];
  it('should return an array type', () => {
    const result = commonElements(['a', 'b', 'c'], ['a', 'c', 'x'], true);
    expect(Array.isArray(result)).toBe(true);
  });

  it.each(testCases)('should return $output', (testCase) => {
    const result = commonElements(...testCase.input);
    expect(result).toStrictEqual(testCase.output);
  });
});
