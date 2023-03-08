const fetch = require('node-fetch');

// API de Star Wars
const URL_API = 'https://swapi.dev/api/people/1/';

const getLuke = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

module.exports = getLuke;
