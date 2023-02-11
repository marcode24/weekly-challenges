const getHelloWorld = require('./solution');

describe('Challange 05: Hola Mundo', () => {
  it('should return a string type', () => {
    expect(typeof getHelloWorld()).toBe('string');
  });

  it('should return "Hello World!"', () => {
    expect(getHelloWorld()).toBe('Hello World!');
  });
});
