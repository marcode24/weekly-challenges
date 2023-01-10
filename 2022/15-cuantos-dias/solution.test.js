const differenceInDays = require('./solution');

describe('Challenge 15: Cuántos días', () => {
  const testCases = [
    {
      input: ['01/01/2017', '01/01/2017'],
      output: 0,
      description: 'should return 0 when 01/01/2017 and 01/01/2017 are passed',
    },
    {
      input: ['01/01/2017', '02/01/2017'],
      output: 1,
      description: 'should return 1 when 01/01/2017 and 02/01/2017 are passed',
    },
    {
      input: ['01/01/2017', '01/02/2017'],
      output: 31,
      description: 'should return 31 when 01/01/2017 and 01/02/2017 are passed',
    },
    {
      input: ['18/5/2022', '29/04/2022'],
      output: null,
      description: 'should return null when 18/5/2022 and 29/04/2022 are passed',
    },
  ];

  it('should return a number type when pass correct format', () => {
    expect(typeof differenceInDays('01/01/2017', '01/01/2017')).toBe('number');
  });

  it('should return null when pass incorrect format', () => {
    expect(differenceInDays('18/5/2022', '29/04/2022')).toBe(null);
  });

  it('should change the order of the dates when the first date is'
    + 'greater than the second', () => {
    expect(differenceInDays('01/02/2017', '01/01/2017')).toBe(31);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(differenceInDays(...testCase.input)).toBe(testCase.output);
  });
});
