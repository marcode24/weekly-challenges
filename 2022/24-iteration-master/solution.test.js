const {
  iteration1,
  iteration2,
  iteration3,
  iteration4,
  iteration5,
  iteration6,
  iteration7,
} = require('./solution');

describe('Challenge 24: Iteration Master', () => {
  it('should return an array type', () => {
    expect(Array.isArray(iteration1())).toBe(true);
    expect(Array.isArray(iteration2())).toBe(true);
    expect(Array.isArray(iteration3())).toBe(true);
    expect(Array.isArray(iteration4())).toBe(true);
    expect(Array.isArray(iteration5())).toBe(true);
    expect(Array.isArray(iteration6())).toBe(true);
    expect(Array.isArray(iteration7())).toBe(true);
  });

  it('should return an array with 100 elements', () => {
    expect(iteration1().length).toBe(100);
    expect(iteration2().length).toBe(100);
    expect(iteration3().length).toBe(100);
    expect(iteration4().length).toBe(100);
    expect(iteration5().length).toBe(100);
    expect(iteration6().length).toBe(100);
    expect(iteration7().length).toBe(100);
  });

  it('should return an array with numbers from 1 to 100', () => {
    const expected = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(iteration1()).toStrictEqual(expected);
    expect(iteration2()).toStrictEqual(expected);
    expect(iteration3()).toStrictEqual(expected);
    expect(iteration4()).toStrictEqual(expected);
    expect(iteration5()).toStrictEqual(expected);
    expect(iteration6()).toStrictEqual(expected);
    expect(iteration7()).toStrictEqual(expected);
  });
});
