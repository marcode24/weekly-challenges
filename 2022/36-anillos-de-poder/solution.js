const getResult = (kindBreeds, evilRaces) => {
  const kindBreedsValues = {
    pelosos: 1,
    sureñosB: 2,
    enanos: 3,
    numeroneanos: 4,
    elfos: 5,
  };

  const evilRacesValues = {
    sureñosM: 2,
    orcos: 2,
    goblins: 2,
    huargos: 2,
    trolls: 5,
  };

  const kindBreedsTotal = Object.keys(kindBreeds).reduce((acc, breed) => {
    acc += kindBreeds[breed] * kindBreedsValues[breed];
    return acc;
  }, 0);

  const evilRacesTotal = Object.keys(evilRaces).reduce((acc, evil) => {
    acc += evilRaces[evil] * evilRacesValues[evil];
    return acc;
  }, 0);

  if (kindBreedsTotal > evilRacesTotal) return 'Kind wins';
  if (kindBreedsTotal < evilRacesTotal) return 'Evil wins';
  return 'Tie';
};

module.exports = getResult;
