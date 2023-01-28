const whereIsTheRobot = require('./solution');

describe('Challenge 46: Donde está el robot', () => {
  const testCases = [
    {
      input: [1, 2, 3],
      output: { x: -2, y: -2 },
    },
    {
      input: [10, 5, -2],
      output: { x: -5, y: 12 },
    },
    {
      input: [0, 0, 0],
      output: { x: 0, y: 0 },
    },
    {
      input: [],
      output: { x: 0, y: 0 },
    },
    {
      input: [-10, -5, 2],
      output: { x: 5, y: -12 },
    },
    {
      input: [-10, -5, 2, 4, -8],
      output: { x: 9, y: -20 },
    },
  ];

  it('should return an object type', () => {
    expect(typeof whereIsTheRobot([1, 2, 3])).toBe('object');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(whereIsTheRobot(testCase.input)).toStrictEqual(testCase.output);
  });
});
