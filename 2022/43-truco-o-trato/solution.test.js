const trickOrTreat = require('./solution');

describe('Challenge 43: Truco o trato', () => {
  const testCases = [
    {
      input: [
        'trick', [
          { name: 'Juan', age: 10, height: 100 },
          { name: 'Pedro', age: 12, height: 120 },
        ],
      ],
      output: 14,
    },
    {
      input: [
        'treat', [
          { name: 'Juan', age: 10, height: 100 },
          { name: 'Pedro', age: 12, height: 120 },
        ],
      ],
      output: 19,
    },
    {
      input: [
        'trick', [
          { name: 'Juan', age: 10, height: 150 },
          { name: 'Pedro', age: 12, height: 160 },
          { name: 'Pablo', age: 14, height: 170 },
        ],
      ],
      output: 25,
    },
    {
      input: [
        'treat', [
          { name: 'Juan', age: 10, height: 150 },
          { name: 'Pedro', age: 12, height: 160 },
          { name: 'Pablo', age: 14, height: 170 },
        ],
      ],
      output: 30,
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(trickOrTreat('trick', [
      { name: 'Juan', age: 10, height: 100 },
      { name: 'Pedro', age: 12, height: 120 },
    ]))).toBe(true);
  });

  it('should return an empty array when type arg is not valid', () => {
    expect(trickOrTreat('other', [])).toEqual([]);
  });

  it.each(testCases)('should return an array with $output items', (testCase) => {
    expect(trickOrTreat(...testCase.input)).toHaveLength(testCase.output);
  });
});
