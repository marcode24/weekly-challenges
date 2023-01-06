const getArea = (polygon, ...sides) => {
  const formulas = {
    triangle: (base, height) => (base * height) / 2,
    square: (side) => side * side,
    rectangle: (base, height) => base * height,
  };
  if (!formulas[polygon]) return null;
  return formulas[polygon](...sides);
};

module.exports = getArea;
