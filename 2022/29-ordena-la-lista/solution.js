const sortList = (list, asc) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if ((asc && list[i] < list[j]) || (!asc && list[i] > list[j])) {
        const aux = list[i];
        list[i] = list[j];
        list[j] = aux;
      }
    }
  }
  return list;
};

// const sortList = (list, asc) => list.sort((a, b) => (asc ? a - b : b - a));

module.exports = sortList;
