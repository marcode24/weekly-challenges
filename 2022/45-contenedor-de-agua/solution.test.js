const howManyWater = require('./solution');

describe('Challenge 45: Contenedor de agua', () => {
  const testCases = [
    {
      input: [4, 0, 3, 6, 1, 3],
      output: 7,
    },
    {
      input: [4, 0, 3, 6],
      output: 5,
    },
    {
      input: [5, 4, 3, 2, 1, 0],
      output: 0,
    },
    {
      input: [0, 1, 2, 3, 4, 5],
      output: 0,
    },
    {
      input: [4, 0, 3, 6, 1, 3, 0, 1, 6],
      output: 24,
    },
  ];
  it('should return a number type', () => {
    expect(typeof howManyWater([1, 2, 3, 4, 5])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(howManyWater(testCase.input)).toBe(testCase.output);
  });
});
