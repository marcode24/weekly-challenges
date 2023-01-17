const getSecondBiggest = require('./solution');

describe('Challenge 32: El segundo', () => {
  it('should return a number type', () => {
    expect(typeof getSecondBiggest([1, 2, 3])).toBe('number');
  });

  it('should return the second biggest number', () => {
    expect(getSecondBiggest([1, 2, 3])).toBe(2);
    expect(getSecondBiggest([1, 2, 3, 4, 5])).toBe(4);
    expect(getSecondBiggest([1, 2, 3, 4, 5, 6, 7])).toBe(6);
    expect(getSecondBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(8);
    expect(getSecondBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(9);
  });

  it('should return the second biggest number even if the array is not sorted', () => {
    expect(getSecondBiggest([3, 2, 1])).toBe(2);
    expect(getSecondBiggest([5, 4, 3, 2, 1])).toBe(4);
    expect(getSecondBiggest([7, 6, 5, 4, 3, 2, 1])).toBe(6);
    expect(getSecondBiggest([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(8);
    expect(getSecondBiggest([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(9);
  });

  it('should return the second biggest number '
  + 'even if the array has negative numbers', () => {
    expect(getSecondBiggest([-1, -2, -3])).toBe(-2);
    expect(getSecondBiggest([-1, -7, -3, -4, -5])).toBe(-3);
    expect(getSecondBiggest([-1, -2, -3, -4, -5, -6, -7])).toBe(-2);
    expect(getSecondBiggest([-1, -3, -4, -5, -6, -7, -8, -9])).toBe(-3);
    expect(getSecondBiggest([-1, -5, -6, -7, -8, -9, -10])).toBe(-5);
  });
});
