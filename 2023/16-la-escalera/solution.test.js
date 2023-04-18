const buildStairs = require('./solution');

describe('Challenge 16: La escalera', () => {
  const testCases = [
    {
      input: 5,
      output: '          _\n        _|\n      _|\n    _|\n  _|\n_|',
    },
    {
      input: 4,
      output: '        _\n      _|\n    _|\n  _|\n_|',
    },
    {
      input: 3,
      output: '      _\n    _|\n  _|\n_|',
    },
    {
      input: 2,
      output: '    _\n  _|\n_|',
    },
    {
      input: 1,
      output: '  _\n_|',
    },
    {
      input: 0,
      output: '__',
    },
    {
      input: -1,
      output: '_\n |_',
    },
    {
      input: -2,
      output: '_\n |_\n   |_',
    },
    {
      input: -3,
      output: '_\n |_\n   |_\n     |_',
    },
    {
      input: -4,
      output: '_\n |_\n   |_\n     |_\n       |_',
    },
    {
      input: -5,
      output: '_\n |_\n   |_\n     |_\n       |_\n         |_',
    },
  ];

  it('should return a string type', () => {
    expect(typeof buildStairs(4)).toBe('string');
  });

  it.each(testCases)('should return the stairs $input', (testCase) => {
    expect(buildStairs(testCase.input)).toStrictEqual(testCase.output);
  });
});
