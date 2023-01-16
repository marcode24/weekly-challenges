const getProduct = require('./solution');

describe('Challenge 28: Maquina expendedora', () => {
  const testCases = [
    {
      input: [[], 0],
      output: 'no money inserted',
    },
    {
      input: [[20, 5], 0],
      output: 'invalid money',
    },
    {
      input: [[200, 100, 50, 10, 5], 10],
      output: 'product not found',
    },
    {
      input: [[10, 5], 0],
      output: 'not enough money',
    },
    {
      input: [[200, 100, 50, 10, 5], 0],
      output: { product: 'Coca Cola', change: [200, 50, 10, 10, 10, 5] },
    },
    {
      input: [[200, 100, 50, 10, 5], 1],
      output: { product: 'Fanta', change: [200, 10, 10, 10, 10, 5] },
    },
    {
      input: [[200], 2],
      output: { product: 'Cerveza', change: [] },
    },
  ];

  it('should return an object type', () => {
    expect(typeof getProduct([200, 100, 50, 10, 5], 0)).toBe('object');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(getProduct(...testCase.input)).toEqual(testCase.output);
  });
});
