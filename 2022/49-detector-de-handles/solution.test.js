const findHandles = require('./solution');

describe('Challenge 49: Detector de handles', () => {
  const testCases = [
    {
      input: 'En esta actividad de @mouredev, resolvemos #retos de #programacion desde '
      + 'https://retosdeprogramacion.com/semanales2022, que @braismoure '
      + 'aloja en www.github.com',
      output: {
        user: ['@mouredev', '@braismoure'],
        hashtag: ['#retos', '#programacion'],
        url: [
          'https://retosdeprogramacion.com/semanales2022,',
          'www.github.com',
        ],
      },
    },
    {
      input: 'hola mundo',
      output: { user: [], hashtag: [], url: [] },
    },
  ];
  it('should return an object type', () => {
    expect(typeof findHandles('hola mundo')).toBe('object');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(findHandles(testCase.input)).toStrictEqual(testCase.output);
  });
});
