const getDamage = ({
  typeAttack, typeDefend, attack, defend,
}) => {
  const elements = {
    fire: { water: 0.5, grass: 2, electric: 1 },
    water: { fire: 2, grass: 0.5, electric: 0.5 },
    grass: { fire: 0.5, water: 2, electric: 1 },
    electric: { fire: 1, water: 2, grass: 0.5 },
  };

  return 50 * (attack / defend) * elements[typeAttack][typeDefend];
};

module.exports = getDamage;
