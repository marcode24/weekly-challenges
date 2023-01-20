const getDamage = require('./solution');

describe('Challenge 35: Batalla Pokémon', () => {
  const testCases = [
    {
      input: {
        typeAttack: 'fire',
        typeDefend: 'water',
        attack: 100,
        defend: 100,
      },
      output: 25,
    },
    {
      input: {
        typeAttack: 'grass',
        typeDefend: 'electric',
        attack: 57,
        defend: 19,
      },
      output: 150,
    },
    {
      input: {
        typeAttack: 'electric',
        typeDefend: 'fire',
        attack: 100,
        defend: 100,
      },
      output: 50,
    },
    {
      input: {
        typeAttack: 'grass',
        typeDefend: 'water',
        attack: 40,
        defend: 40,
      },
      output: 100,
    },
    {
      input: {
        typeAttack: 'grass',
        typeDefend: 'fire',
        attack: 35,
        defend: 5,
      },
      output: 175,
    },
  ];

  it('should return a number type', () => {
    expect(typeof getDamage({
      typeAttack: 'fire',
      typeDefend: 'water',
      attack: 100,
      defend: 100,
    })).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(getDamage(input)).toBe(output);
  });
});
