const getWinner = (combinations) => {
  const options = {
    '🗿': ['✂️', '🦎'],
    '📄': ['🗿', '🖖'],
    '✂️': ['📄', '🦎'],
    '🦎': ['📄', '🖖'],
    '🖖': ['🗿', '✂️'],
  };

  const results = combinations.reduce((acc, [player1, player2]) => {
    if (options[player1].includes(player2)) {
      acc.player1++;
    } else if (options[player2].includes(player1)) {
      acc.player2++;
    }
    return acc;
  }, { player1: 0, player2: 0 });

  if (results.player1 > results.player2) {
    return 'PLAYER 1';
  }

  if (results.player2 > results.player1) {
    return 'PLAYER 2';
  }

  return 'TIE';
};

module.exports = getWinner;
