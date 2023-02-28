const { isIsogram, isPangram, isHeterogram } = require('./solution');

describe('Challenge 09: Heterograma, isograma y pangrama', () => {
  const testCases = [
    {
      input: 'halcon',
      output: true,
    },
    {
      input: 'hola',
      output: true,
    },
    {
      input: 'buzon',
      output: true,
    },
    {
      input: 'culto',
      output: true,
    },
    {
      input: 'guitarra',
      output: false,
    },
    {
      input: 'kiosco',
      output: false,
    },
    {
      input: 'banana',
      output: false,
    },
    {
      input: 'luz',
      output: true,
    },
    {
      input: 'higado',
      output: true,
    },
    {
      input: 'jardin',
      output: true,
    },
  ];
  describe('isHeterogram function', () => {
    it('should return a boolean', () => {
      expect(typeof isHeterogram('hola')).toBe('boolean');
    });

    it.each(testCases)('should return $output', (testCase) => {
      expect(isHeterogram(testCase.input)).toBe(testCase.output);
    });
  });

  describe('isIsogram function', () => {
    it('should return a boolean', () => {
      expect(typeof isIsogram('hola')).toBe('boolean');
    });

    it.each(testCases)('should return $output', (testCase) => {
      expect(isIsogram(testCase.input)).toBe(testCase.output);
    });
  });

  describe('isPangram function', () => {
    const testCasesPangram = [
      {
        input: 'El veloz murciélago hindú comía feliz cardillo y kiwi. '
        + 'La cigüeña tocaba el saxofón detrás del palenque de paja',
        output: true,
      },
      {
        input: 'Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!',
        output: true,
      },
      {
        input: 'Jovencillo emponzoñado de hisk, ¡qué figurota exhibe!',
        output: false,
      },
      {
        input: 'El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia '
        + 'y frío, añoraba a su querido cachorro',
        output: true,
      },
      {
        input: 'El pingüino enceslao hizo kilómetros bajo exhaustiva lluvia '
        + 'y frío, añoraba a su querido cachorro',
        output: false,
      },
    ];

    it('should return a boolean', () => {
      expect(typeof isPangram('hola')).toBe('boolean');
    });

    it.each(testCasesPangram)('should return $output', (testCase) => {
      expect(isPangram(testCase.input)).toBe(testCase.output);
    });
  });
});
