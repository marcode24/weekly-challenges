const { MCD, mcm } = require('./solution');

describe('Challenge 23: MCD y mcm', () => {
  const testCases = [
    {
      input: [12, 18],
      outputMCD: 6,
      outputMcm: 36,
    },
    {
      input: [6, 9],
      outputMCD: 3,
      outputMcm: 18,
    },
    {
      input: [3, 9],
      outputMCD: 3,
      outputMcm: 9,
    },
    {
      input: [3, 6],
      outputMCD: 3,
      outputMcm: 6,
    },
    {
      input: [3, 3],
      outputMCD: 3,
      outputMcm: 3,
    },
    {
      input: [32, 24],
      outputMCD: 8,
      outputMcm: 96,
    },
  ];

  describe('MCD Function', () => {
    it('should return a number', () => {
      const result = MCD(12, 18);
      expect(typeof result).toBe('number');
    });

    it.each(testCases)('should return $outputMCD', (testCase) => {
      const result = MCD(...testCase.input);
      expect(result).toBe(testCase.outputMCD);
    });
  });

  describe('mcm Function', () => {
    it('should return a number', () => {
      const result = mcm(12, 18);
      expect(typeof result).toBe('number');
    });

    it.each(testCases)('should return $outputMcm', (testCase) => {
      const result = mcm(...testCase.input);
      expect(result).toBe(testCase.outputMcm);
    });
  });
});
