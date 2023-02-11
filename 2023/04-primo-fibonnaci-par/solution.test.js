const isPrimeFibonnaciEven = require('./solution');

describe('Challange 04: Primo Fibonnaci Par', () => {
  const testCases = [
    {
      input: 1,
      output: { prime: false, fibonnaci: true, even: false },
    },
    {
      input: 2,
      output: { prime: true, fibonnaci: true, even: true },
    },
    {
      input: 7,
      output: { prime: true, fibonnaci: false, even: false },
    },
    {
      input: 10,
      output: { prime: false, fibonnaci: false, even: true },
    },
    {
      input: 0,
      output: { prime: false, fibonnaci: true, even: true },
    },
    {
      input: -2,
      output: { prime: false, fibonnaci: false, even: true },
    },
  ];

  it('should return an object', () => {
    expect(typeof isPrimeFibonnaciEven(1)).toBe('object');
  });

  it.each(testCases)('should return the correct object for $input', (testCase) => {
    expect(isPrimeFibonnaciEven(testCase.input)).toStrictEqual(testCase.output);
  });
});
