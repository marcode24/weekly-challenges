const iteration1 = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
  }
  return arr;
};

const iteration2 = () => {
  let temp = 0;
  const arr = [];
  while (temp < 100) {
    arr.push(temp + 1);
    temp++;
  }
  return arr;
};

const iteration3 = () => {
  let temp = 0;
  const arr = [];
  do {
    arr.push(temp + 1);
    temp++;
  } while (temp < 100);
  return arr;
};

const iteration4 = () => {
  const init = 0;
  const arr = [];
  const res = (n) => {
    if (n < 100) {
      arr.push(n + 1);
      res(n + 1);
    }
  };
  res(init);
  return arr;
};

const iteration5 = () => Array.from({ length: 100 }, (_, i) => i + 1);

const iteration6 = () => [...Array(100).keys()].map((i) => i + 1);

const iteration7 = () => [...Array(100)].map((_, i) => i + 1);

module.exports = {
  iteration1,
  iteration2,
  iteration3,
  iteration4,
  iteration5,
  iteration6,
  iteration7,
};
