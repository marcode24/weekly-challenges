const overcomesObstacles = require('./solution');

describe('Challenge 17: Carrera de obstáculos', () => {
  const testCases = [
    {
      input: {
        actions: ['run', 'run', 'run'],
        track: '___',
      },
      output: {
        completed: true,
        result: '___',
      },
    },
    {
      input: {
        actions: ['run', 'run', 'run'],
        track: '_|_',
      },
      output: {
        completed: false,
        result: '_/_',
      },
    },
    {
      input: {
        actions: ['run', 'run', 'jump', 'run'],
        track: '__|_',
      },
      output: {
        completed: true,
        result: '__|_',
      },
    },
  ];

  it('should return an object type', () => {
    expect(typeof overcomesObstacles(['run', 'run', 'run'], '___')).toBe('object');
  });

  it('should return false when actions length is different to track length', () => {
    const result = overcomesObstacles(['run', 'run'], '___');
    expect(result).toEqual({ completed: false, result: '___' });
  });

  it('should return false when actions or track is not valid', () => {
    const result = overcomesObstacles(['run', 'run', 'error'], '_a_');
    expect(result).toEqual({ completed: false, result: '_ax' });
  });

  it.each(testCases)('should return $output.completed', (testCase) => {
    const { actions, track } = testCase.input;
    expect(overcomesObstacles(actions, track)).toEqual(testCase.output);
  });
});
