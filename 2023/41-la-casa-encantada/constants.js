const DIFFICULTIES = {
  facil: { rows: 4, cols: 4, ghosts: 0.1 },
  medio: { rows: 5, cols: 5, ghosts: 0.15 },
  dificil: { rows: 6, cols: 6, ghosts: 0.25 },
};

const ENIGMAS = [
  {
    question: '¿Qué criatura vuela en la noche y tiene alas negras?',
    answer: 'murcielago',
  },
  {
    question: '¿Qué ser mountruoso tiene una sola cabeza, pero tres cuerpos?',
    answer: 'cerbero',
  },
  {
    question: '¿Qué crece en la luna llena y convierte a las personas en lobos?',
    answer: 'licantropo',
  },
  {
    question: '¿Qué asusta a los vampiros?',
    answer: 'ajo',
  },
  {
    question: '¿Qué criatura chupa la sangre de sus víctimas?',
    answer: 'vampiro',
  },
  {
    question: '¿Qué ser viste una túnica y se desplaza en una escoba?',
    answer: 'bruja',
  },
  {
    question: '¿Qué criatura se levanta de su tumba en Halloween?',
    answer: 'zombie',
  },
  {
    question: '¿Qué arácnido teje telarañas y tiene ocho patas?',
    answer: 'araña',
  },
  {
    question: '¿Qué ser monstruoso es una construcción de huesos?',
    answer: 'esqueleto',
  },
  {
    question: ' ¿Qué animal negro trae mala suerte en Halloween?',
    answer: 'gato',
  },
  {
    question: '¿Qué objeto tallado con una cara aterradora se ilumina en Halloween?',
    answer: 'calabaza',
  },
  {
    question: '¿Qué palabra significa "travieso o trato" en Halloween?',
    answer: 'truco',
  },
  {
    question: '¿Qué ser peludo aúlla en la luna llena?',
    answer: 'lobo',
  },
  {
    question: '¿Qué insecto representa la transformación y la resurrección?',
    answer: 'escarabajo',
  },
  {
    question: '¿Qué bebida mágica preparan las brujas?',
    answer: 'pocima',
  },
  {
    question: '¿Qué comida se colecciona en una bolsa en Halloween?',
    answer: 'caramelos',
  },
  {
    question: '¿Qué criatura terrorífica vuela por la noche y chilla?',
    answer: 'buho',
  },
  {
    question: '¿Qué actividad espeluznante ocurre en una casa embrujada?',
    answer: 'terror',
  },
  {
    question: '¿Qué animal se asocia con la maldad y las brujas?',
    answer: 'serpiente',
  },
  {
    question: '¿Qué objeto vuela en el cielo de Halloween?',
    answer: 'escoba',
  },
  {
    question: '¿Qué ser no tiene sombra y teme la luz?',
    answer: 'fantasma',
  },
  {
    question: '¿Qué objeto lanza destellos en la noche de Halloween?',
    answer: 'luciernaga',
  },
  {
    question: '¿Qué animal negro se considera un mal presagio en Halloween?',
    answer: 'cuervo',
  },
  {
    question: '¿Qué objeto ilumina el camino en Halloween?',
    answer: 'linterna',
  },
];

module.exports = {
  ENIGMAS,
  DIFFICULTIES,
};
