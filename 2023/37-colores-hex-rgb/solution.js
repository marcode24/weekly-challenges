const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.slice(4, -1).split(', ');
  const hex = [r, g, b]
    .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
};

module.exports = {
  hexToRgb,
  rgbToHex,
};
