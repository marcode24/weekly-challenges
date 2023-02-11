const generatePassword = require('./solution');

describe('Challange 03: Generador de contraseñas', () => {
  const testCases = [
    {
      input: { length: 8 },
      output: 8,
    },
    {
      input: { length: 16 },
      output: 16,
    },
    {
      input: { length: 10 },
      output: 10,
    },
  ];
  it('should return a string', () => {
    expect(typeof generatePassword({ length: 8 })).toBe('string');
  });

  it('should return a string with default length', () => {
    expect(generatePassword({}).length).toBe(8);
  });

  it.each(testCases)('should return a string with the length specified', (testCase) => {
    expect(generatePassword(testCase.input).length).toBe(testCase.output);
  });

  it('should return "Invalid length" if the length is less than 8', () => {
    expect(generatePassword({ length: 7 })).toBe('Invalid length');
  });

  it('should return "Invalid length" if the length is greater than 16', () => {
    expect(generatePassword({ length: 17 })).toBe('Invalid length');
  });

  it('should return a string without uppercase letters if upperCase is false', () => {
    const password = generatePassword({ length: 8, upperCase: false });
    expect(password).not.toMatch(/[A-Z]+$/);
  });

  it('should return a string without numbers if numbers is false', () => {
    const password = generatePassword({ length: 8, numbers: false });
    expect(password).not.toMatch(/[0-9]+$/);
  });

  it('should return a string without symbols if symbols is false', () => {
    const password = generatePassword({ length: 8, symbols: false });
    expect(password).not.toMatch(/[!@#$%^&*()_+-=[]{}\/<>?]+$/);
  });

  it('should return a string with only lowercase letters', () => {
    const password = generatePassword({
      length: 8, upperCase: false, numbers: false, symbols: false,
    });
    expect(password).toMatch(/[a-z]+$/);
  });
});
