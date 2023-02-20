const { getNumber, getNumber2 } = require('./solution');

describe('Challenge 08: Generador aleatorio', () => {
  describe('getNumber function', () => {
    it('should return a number', () => {
      expect(typeof getNumber()).toBe('number');
    });

    it('should return a number between 0 and 100', () => {
      expect(getNumber()).toBeGreaterThanOrEqual(0);
      expect(getNumber()).toBeLessThan(101);
    });
  });

  describe('getNumber2 function', () => {
    it('should return a number', () => {
      expect(typeof getNumber2()).toBe('number');
    });

    it('should return a number between 0 and 100', () => {
      expect(getNumber2()).toBeGreaterThanOrEqual(0);
      expect(getNumber2()).toBeLessThan(101);
    });
  });
});
