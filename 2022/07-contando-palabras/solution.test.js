const countWords = require('./solution');

describe('Challenge 07: Contando palabras', () => {
  const testCases = [
    {
      input: 'hello',
      output: { hello: 1 },
    },
    {
      input: 'Howdy partner, sit down! How\'s it going?',
      output: {
        howdy: 1, partner: 1, sit: 1, down: 1, hows: 1, it: 1, going: 1,
      },
    },
    {
      input: 'This is a test of the emergency broadcast network.',
      output: {
        this: 1,
        is: 1,
        a: 1,
        test: 1,
        of: 1,
        the: 1,
        emergency: 1,
        broadcast: 1,
        network: 1,
      },
    },
    {
      input: 'Hello, my name is Inigo Montoya. You killed my father. Prepare to die.',
      output: {
        hello: 1,
        my: 2,
        name: 1,
        is: 1,
        inigo: 1,
        montoya: 1,
        you: 1,
        killed: 1,
        father: 1,
        prepare: 1,
        to: 1,
        die: 1,
      },
    },
    {
      input: '¡Hola! ¿Cómo estás? Bien. ¿Y tú?',
      output: {
        hola: 1,
        como: 1,
        estas: 1,
        bien: 1,
        y: 1,
        tu: 1,
      },
    },
    {
      input: '¡Hola! ¿Cómo estás? Bien. ¿Y tú? ¡Hola! ¿Cómo estás? Bien. ¿Y tú?',
      output: {
        hola: 2,
        como: 2,
        estas: 2,
        bien: 2,
        y: 2,
        tu: 2,
      },
    },
    {
      input: '¡Hola! ¿Cómo estás? Bien. como estas bien',
      output: {
        hola: 1,
        como: 2,
        estas: 2,
        bien: 2,
      },
    },
  ];

  it('should return an object type', () => {
    expect(typeof countWords('hello')).toBe('object');
  });

  it.each(testCases)('should return $output when $input is passed', (testCase) => {
    expect(countWords(testCase.input)).toEqual(testCase.output);
  });
});
