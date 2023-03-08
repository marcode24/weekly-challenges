const getLuke = require('./solution');

const MOCK_RESPONSE = { name: 'Luke Skywalker' };

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_RESPONSE),
}));

describe('Challenge 10: La API', () => {
  let luke;

  beforeEach(async () => {
    luke = await getLuke();
  });

  it('should return an object', () => {
    expect(typeof luke).toBe('object');
  });

  it('should return Luke Skywalker', () => {
    expect(luke.name).toBe('Luke Skywalker');
  });
});
