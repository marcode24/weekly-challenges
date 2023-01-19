const findYear = (year) => {
  const animals = [
    'Rata',
    'Buey',
    'Tigre',
    'Conejo',
    'Dragón',
    'Serpiente',
    'Caballo',
    'Cabra',
    'Mono',
    'Gallo',
    'Perro',
    'Cerdo',
  ];
  const elements = [
    'Madera',
    'Fuego',
    'Tierra',
    'Metal',
    'Agua',
  ];

  if (year < 604) return 'ciclo no válido';

  const sexenaryYear = (year - 4) % 60;
  const element = elements[(sexenaryYear % 10) / 2];
  const animal = animals[sexenaryYear % 12];

  return { year, animal, element };
};

module.exports = findYear;
