const getResult = require('./solution');

describe('Challenge 36: Anillos de poder', () => {
  const testCases = [
    {
      input: [{ elfos: 1 }, { trolls: 1 }],
      output: 'Tie',
    },
    {
      input: [{ elfos: 1, enanos: 1 }, { trolls: 1 }],
      output: 'Kind wins',
    },
    {
      input: [{ elfos: 1, enanos: 1 }, { trolls: 1, orcos: 1 }],
      output: 'Kind wins',
    },
    {
      input: [{ elfos: 1, enanos: 1 }, { trolls: 1, orcos: 3 }],
      output: 'Evil wins',
    },
    {
      input: [{ elfos: 1, enanos: 1 }, { trolls: 1, orcos: 2 }],
      output: 'Evil wins',
    },
    {
      input: [{ pelosos: 2 }, { sureñosM: 1 }],
      output: 'Tie',
    },
  ];

  it('should return a string type', () => {
    expect(typeof getResult({ elfos: 1 }, { trolls: 1 })).toBe('string');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(getResult(...input)).toBe(output);
  });
});
