const drawSpiral = (size) => {
  const up = Math.ceil(size / 2);
  let result = `${'═'.repeat(size - 1)}╗\n`;
  for (let row = 1; row < up; row++) {
    // eslint-disable-next-line max-len
    result += `${'║'.repeat(row - 1)}╔${'═'.repeat(size - (2 * row) - 1)}╗${'║'.repeat(row)}\n`;
  }
  for (let row = up; row < size; row++) {
    // eslint-disable-next-line max-len
    result += `${'║'.repeat(size - row - 1)}╚${'═'.repeat((2 * row) - size)}╝${'║'.repeat(size - row - 1)}\n`;
  }
  return result.slice(0, -1);
};

module.exports = drawSpiral;
