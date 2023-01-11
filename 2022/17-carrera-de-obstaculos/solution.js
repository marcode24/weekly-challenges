const overcomesObstacles = (actions, track) => {
  track = [...track];
  if (track.length !== actions.length) {
    return { completed: false, result: track.join('') };
  }
  const results = track.map((section, index) => {
    if (section === '_' && actions[index] === 'run') return section;
    if (section === '_' && actions[index] !== 'run') return 'x';
    if (section === '|' && actions[index] === 'jump') return section;
    if (section === '|' && actions[index] !== 'jump') return '/';
    return section;
  });

  return {
    completed: results.join('') === track.join(''),
    result: results.join(''),
  };
};

module.exports = overcomesObstacles;
