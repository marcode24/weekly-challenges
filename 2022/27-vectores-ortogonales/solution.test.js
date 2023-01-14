const orthogonalVectors = require('./solution');

describe('Challenge 27: Vectores ortogonales', () => {
  const testCases = [
    {
      input: [[1, 2], [2, 1]],
      output: false,
    },
    {
      input: [[2, 1], [-1, 2]],
      output: true,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof orthogonalVectors([1, 2], [2, 1])).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(orthogonalVectors(...testCase.input)).toBe(testCase.output);
  });
});
