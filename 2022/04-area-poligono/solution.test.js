const getArea = require('./solution');

describe('Challenge 04: Área de polígono', () => {
  const testCases = [
    {
      input: ['triangle', 2, 3],
      output: 3,
      description: 'should return 3',
    },
    {
      input: ['square', 2],
      output: 4,
      description: 'should return 4',
    },
    {
      input: ['rectangle', 2, 3],
      output: 6,
      description: 'should return 6',
    },
    {
      input: ['triangle', 3, 4],
      output: 6,
      description: 'should return 6',
    },
    {
      input: ['square', 3],
      output: 9,
      description: 'should return 9',
    },
    {
      input: ['rectangle', 3, 4],
      output: 12,
      description: 'should return 12',
    },
  ];

  it('should return a number type', () => {
    expect(typeof getArea('triangle', 2, 3)).toBe('number');
  });

  it('should return null if the polygon is not supported', () => {
    expect(getArea('pentagon', 2, 3)).toBeNull();
  });

  it.each(testCases)('$description', (testCase) => {
    expect(getArea(...testCase.input)).toBe(testCase.output);
  });
});
