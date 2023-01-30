const findGift = require('./solution');

describe('Challenge 48: Calendario de Adeviento', () => {
  const testCases = [
    {
      input: '2022-12-01T00:00:00.000-06:00',
      output: 'Regalo 1',
    },
    {
      input: '2022-12-24T23:59:59.000-06:00',
      output: 'Regalo 24',
    },
    {
      input: '2022-12-25T00:00:00.000-06:00',
      output: 'Han pasado 1 dia desde que finalizo el evento',
    },
    {
      input: '2022-12-26T00:00:00.000-06:00',
      output: 'Han pasado 2 dias desde que finalizo el evento',
    },
    {
      input: '2022-11-25T00:00:00.000-06:00',
      output: 'Faltan 6 dias para el evento',
    },
    {
      input: '2022-12-10T00:00:00.000-06:00',
      output: 'Regalo 10',
    },
  ];
  it('should return a string type', () => {
    expect(typeof findGift('2022-12-01T00:00:00.000-06:00')).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(findGift(testCase.input)).toStrictEqual(testCase.output);
  });
});
