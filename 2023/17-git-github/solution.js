const getCommits = ({ user, repo, limit = 10 }) => {
  const url = `https://api.github.com/repos/${user}/${repo}/commits?per_page=${limit}`;
  return fetch(url)
    .then((res) => res.json())
    .then((commits) => commits.map((commit, i) => {
      const { author } = commit.commit;
      const message = commit.commit.message.replace(/\n/g, '');
      const { name, date } = author;
      const sha = commit.sha.slice(0, 7);
      const newDate = new Date(date).toLocaleString();
      return `Commit ${i + 1} | ${sha} | ${name} | ${message} | ${newDate}`;
    }))
    .catch((err) => `Error: ${err}`);
};

module.exports = getCommits;
