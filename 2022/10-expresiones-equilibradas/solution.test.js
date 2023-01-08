const validateExpresions = require('./solution');

describe('Challenge 10: Expresiones Equilibradas', () => {
  const testCases = [
    {
      input: '()[]{}',
      output: true,
      description: 'should return true',
    },
    {
      input: ' { [ a * ( c + d ) ] - 5 }',
      output: true,
      description: 'should return true',
    },
    {
      input: ' { a * ( c + d ) ] - 5 }',
      output: false,
      description: 'should return false',
    },
    {
      input: '{a + b [c] * (2x2)}}}}',
      output: false,
      description: 'should return false',
    },
    {
      input: '{a^4 + (((ax4)}',
      output: false,
      description: 'should return false',
    },
    {
      input: '{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }',
      output: false,
      description: 'should return false',
    },
    {
      input: '{{{{{{(}}}}}}',
      output: false,
      description: 'should return false',
    },
    {
      input: '(a',
      output: false,
      description: 'should return false',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof validateExpresions('()[]{}')).toBe('boolean');
  });

  it.each(testCases)('$description', ({ input, output }) => {
    expect(validateExpresions(input)).toBe(output);
  });
});
