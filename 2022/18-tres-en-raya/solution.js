const result = (positions) => {
  const [row1, row2, row3] = positions;
  const [col1, col2, col3] = [
    [row1[0], row2[0], row3[0]],
    [row1[1], row2[1], row3[1]],
    [row1[2], row2[2], row3[2]],
  ];
  const [diag1, diag2] = [
    [row1[0], row2[1], row3[2]],
    [row1[2], row2[1], row3[0]],
  ];
  const cols = [col1, col2, col3];
  const diags = [diag1, diag2];
  const allPositions = [...positions, ...cols, ...diags];
  const winner = allPositions.find((line) => {
    const [a, b, c] = line;
    return a === b && b === c && a !== '';
  });
  if (winner) return winner[0];
  const isDraw = allPositions.every((line) => line.every((cell) => cell !== ''));
  if (isDraw) return 'Draw';
  return null;
};

module.exports = result;
