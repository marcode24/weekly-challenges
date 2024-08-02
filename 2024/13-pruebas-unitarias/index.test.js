const { data, suma } = require('./index');

describe('Challenge 13 - 2024: Pruebas Unitarias', () => {
  describe('Function: suma', () => {
    const testCases = [
      {
        input: [1, 2],
        output: 3,
        description: 'should return 3',
      },
      {
        input: [-1, 1],
        output: 0,
        description: 'should return 0',
      },
      {
        input: [0, 0],
        output: 0,
        description: 'should return 0',
      },
      {
        input: [1, 1],
        output: 2,
        description: 'should return 2',
      },
      {
        input: [2, 2],
        output: 4,
        description: 'should return 4',
      },
      {
        input: [0, 1],
        output: 1,
        description: 'should return 1',
      },
      {
        input: [0, -1],
        output: -1,
        description: 'should return -1',
      },
    ];

    it.each(testCases)('$description', (testCase) => {
      expect(suma(...testCase.input)).toBe(testCase.output);
    });
  });

  describe('Object: data', () => {
    describe('Property: name', () => {
      it('should have the property name', () => {
        expect(data).toHaveProperty('name');
      });

      it('should have the property name with the correct value', () => {
        expect(data.name).toBe('Marco Cruz');
      });
    });

    describe('Property: age', () => {
      it('should have the property age', () => {
        expect(data).toHaveProperty('age');
      });

      it('should have the property age with the correct value', () => {
        expect(data.age).toBe(new Date().getFullYear() - 2001);
      });
    });

    describe('Property: birth_date', () => {
      it('should have the property birth_date', () => {
        expect(data).toHaveProperty('birth_date');
      });

      it('should have the property birth_date with the correct value', () => {
        expect(data.birth_date).toBe('2001-08-24');
      });
    });

    describe('Property: programming_languages', () => {
      it('should have the property programming_languages', () => {
        expect(data).toHaveProperty('programming_languages');
      });

      it('should have the property programming_languages with the correct value', () => {
        expect(data.programming_languages).toEqual([
          'JavaScript',
          'TypeScript',
          'C#',
          'PHP',
        ]);
      });
    });
  });
});
