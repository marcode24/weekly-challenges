const transform = require('./solution');

describe('Challange 01: Lenguaje Hacker', () => {
  const testCases = [
    {
      input: 'Hola Mundo',
      output: '#014 /\\/\\(_)^/)0',
      description: 'should return #014 /\\/\\(_)^/)0',
    },
    {
      input: '!"!.Hola Mundo!',
      output: '#014 /\\/\\(_)^/)0',
      description: 'should return #014 /\\/\\(_)^/)0',
    },
    {
      input: 'Random Test',
      output: 'I24^/)0/\\/\\ 7357',
      description: 'should return I24^/)0/\\/\\ 7357',
    },
    {
      input: 'Random Test 123 456',
      output: 'I24^/)0/\\/\\ 7357 LRE ASb',
      description: 'should return I24^/)0/\\/\\ 7357 LRE ASb',
    },
    {
      input: 'Un texto 90 largo para pruebas 123',
      output: '(_)^/ 73><70 go 14I2&0 *4I24 *I2(_)3I345 LRE',
      description: 'should return (_)^/ 73><70 go 14I2&0 *4I24 *I2(_)3I345 LRE',
    },
    {
      input: 'abcdefghijklmnopqrstuvwxyz 1234567890',
      output: '4I3[)3|=&#1,_|>|1/\\/\\^/0*(_,)I257(_)\\/\\/\\/><j2 LREASbTBgo',
      description: 'should return '
        + '4I3[)3|=&#1,_|>|1/\\/\\^/0*(_,)I257(_)\\/\\/\\/><j2 LREASbTBgo',
    },
  ];

  it('should return a string type', () => {
    expect(typeof transform('Hola Mundo')).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(transform(testCase.input)).toBe(testCase.output);
  });
});
