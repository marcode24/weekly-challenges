const findHandles = (str) => {
  const regex = /(?<=^|(?<=[^a-zA-Z0-9-_.]))@([A-Za-z]+[A-Za-z0-9_]+)/g;
  const regex2 = /(?<=^|(?<=[^a-zA-Z0-9-_.]))#([A-Za-z]+[A-Za-z0-9_]+)/g;
  const regex3 = /(?<=^|(?<=[^a-zA-Z0-9-_.]))(https?:\/\/[^\s]+)|(www.?[^\s]+)/g;
  const user = str.match(regex);
  const hashtag = str.match(regex2);
  const url = str.match(regex3);
  return { user: user ?? [], hashtag: hashtag ?? [], url: url ?? [] };
};

module.exports = findHandles;
