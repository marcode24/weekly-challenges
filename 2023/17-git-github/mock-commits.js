// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

const generateCommits = (n) => {
  const commits = [];
  for (let i = 0; i < n; i += 1) {
    const data = {
      commit: {
        author: {
          name: faker.name.fullName(),
          date: faker.date.past(),
        },
        message: faker.git.commitMessage(),
      },
      sha: faker.git.commitSha(),
    };
    commits.push(data);
  }
  return commits;
};

module.exports = generateCommits;
