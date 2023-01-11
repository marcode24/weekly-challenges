const convert = ({
  days, hours, minutes, seconds,
}) => {
  let milliseconds = 0;
  milliseconds += days * 24 * 60 * 60 * 1000;
  milliseconds += hours * 60 * 60 * 1000;
  milliseconds += minutes * 60 * 1000;
  milliseconds += seconds * 1000;
  return milliseconds;
};

module.exports = convert;
