const findYear = require('./solution');

describe('Challenge 33: Ciclo sexagenario chino', () => {
  const testCases = [
    {
      input: 1924,
      output: { year: 1924, animal: 'Rata', element: 'Madera' },
    },
    {
      input: 1946,
      output: { year: 1946, animal: 'Perro', element: 'Fuego' },
    },
    {
      input: 1984,
      output: { year: 1984, animal: 'Rata', element: 'Madera' },
    },
    {
      input: 2022,
      output: { year: 2022, animal: 'Tigre', element: 'Agua' },
    },
    {
      input: 603,
      output: 'ciclo no válido',
    },
  ];

  it('should return an object type', () => {
    expect(typeof findYear(2022)).toBe('object');
  });

  it.each(testCases)('should return the correct animal'
  + ' and element for the year $input', ({ input, output }) => {
    expect(findYear(input)).toStrictEqual(output);
  });
});
