const { getParams, getParamsAPI } = require('./solution');

describe('Challenge 11: URL Params', () => {
  const testCases = [
    {
      input: 'https://www.google.com/search?q=javascript',
      output: ['javascript'],
    },
    {
      input: 'https://www.google.com/search?q=javascript&hl=es',
      output: ['javascript', 'es'],
    },
    {
      input: 'https://www.google.com/search?q=javascript&hl=es&source=hp',
      output: ['javascript', 'es', 'hp'],
    },
    {
      input: ' https://retosdeprogramacion.com?year=2023&challenge=0',
      output: ['2023', '0'],
    },
    {
      input: 'https://retosdeprogramacion.com?year=2023&challenge=0&level=1',
      output: ['2023', '0', '1'],
    },
    {
      input: 'https://retosdeprogramacion.com',
      output: [],
    },
    {
      input: 'https://retosdeprogramacion.com?',
      output: [],
    },
  ];

  it('should return an array type', () => {
    const { input } = testCases[0];
    expect(Array.isArray(getParams(input))).toBe(true);
    expect(Array.isArray(getParamsAPI(input))).toBe(true);
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(getParams(testCase.input)).toStrictEqual(testCase.output);
    expect(getParamsAPI(testCase.input)).toStrictEqual(testCase.output);
  });
});
