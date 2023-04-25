const solution = require('./solution');
const generateCommits = require('./mock-commits');

const MOCK_RESPONSE = generateCommits(10);

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_RESPONSE),
}));

describe('Challenge 17: Git & GitHub', () => {
  let commits;

  beforeEach(async () => {
    commits = await solution({
      user: 'mouredev',
      repo: 'retos-programacion-2023',
    });
  });

  it('should return an array', () => {
    expect(Array.isArray(commits)).toBe(true);
  });

  it('should return 10 commits', () => {
    expect(commits.length).toBe(10);
  });

  it('should return the commits', () => {
    const realResponse = MOCK_RESPONSE.map((commit, i) => {
      const { author } = commit.commit;
      const message = commit.commit.message.replace(/\n/g, '');
      const { name, date } = author;
      const sha = commit.sha.slice(0, 7);
      const newDate = new Date(date).toLocaleString();
      return `Commit ${i + 1} | ${sha} | ${name} | ${message} | ${newDate}`;
    });
    expect(commits).toStrictEqual(realResponse);
  });

  it('should return an error', async () => {
    const error = jest.fn(() => Promise.reject(new Error('')));
    global.fetch = error;
    const commitsError = await solution({
      user: 'mouredev',
      repo: 'retos-programacion-2023',
    });
    expect(commitsError).toBe('Error: Error');
  });
});
