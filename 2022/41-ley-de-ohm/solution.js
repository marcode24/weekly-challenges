const convert = (
  { voltage = undefined, resistance = undefined, intensity = undefined },
) => {
  if (!voltage) {
    return intensity * resistance;
  }
  if (!resistance) {
    return voltage / intensity;
  }
  if (!intensity) {
    return voltage / resistance;
  }
  return 'invalid values';
};

module.exports = convert;
