/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable max-len */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Definición de casas
const houses = {
  Frontend: 0,
  Backend: 0,
  Mobile: 0,
  Data: 0,
};

// Preguntas y respuestas
const questions = [
  {
    question: '¿Cuál es tu área de interés principal en programación?',
    options: {
      Frontend: 'Prefieres trabajar en el diseño y la interacción de la interfaz de usuario.',
      Backend: 'Te interesa desarrollar la lógica del servidor y la gestión de bases de datos.',
      Mobile: 'Te enfocas en el desarrollo de aplicaciones móviles.',
      Data: 'Trabajas con análisis de datos, big data y ciencia de datos.',
    },
  },
  {
    question: '¿Qué tipo de proyecto disfrutas más?',
    options: {
      Frontend: 'Proyectos que involucran diseño web y experiencia de usuario.',
      Backend: 'Proyectos que se centran en el desarrollo de la lógica del servidor y APIs.',
      Mobile: 'Proyectos de aplicaciones móviles en iOS o Android.',
      Data: 'Proyectos que implican análisis de datos y modelado estadístico.',
    },
  },
  {
    question: '¿Cómo prefieres interactuar con los usuarios?',
    options: {
      Frontend: 'A través de interfaces gráficas atractivas y usables.',
      Backend: 'Mediante la implementación de APIs que interactúan con el frontend.',
      Mobile: 'A través de aplicaciones móviles que brindan una experiencia de usuario fluida.',
      Data: 'A través de informes y visualizaciones basadas en datos.',
    },
  },
  {
    question: '¿Cuál es tu mayor desafío en el desarrollo?',
    options: {
      Frontend: 'Mantener la consistencia y el rendimiento en diferentes navegadores y dispositivos.',
      Backend: 'Optimizar el rendimiento y la escalabilidad del servidor.',
      Mobile: 'Manejar las diferencias entre las plataformas iOS y Android.',
      Data: 'Integrar y analizar grandes volúmenes de datos de manera eficiente.',
    },
  },
  {
    question: '¿Qué habilidades te gustaría mejorar?',
    options: {
      Frontend: 'Dominio de frameworks y herramientas de diseño.',
      Backend: 'Mejora en la gestión de bases de datos y en el diseño de APIs.',
      Mobile: 'Desarrollo para nuevas plataformas y tecnologías móviles.',
      Data: 'Técnicas avanzadas de análisis y machine learning.',
    },
  },
  {
    question: '¿Qué te motiva más al trabajar en tecnología?',
    options: {
      Frontend: 'Crear experiencias de usuario únicas y atractivas.',
      Backend: 'Resolver problemas complejos y desarrollar soluciones robustas.',
      Mobile: 'Innovar en la forma en que los usuarios interactúan con sus dispositivos móviles.',
      Data: 'Descubrir patrones y generar insights a partir de datos.',
    },
  },
  {
    question: '¿Cuál es tu enfoque preferido para resolver problemas?',
    options: {
      Frontend: 'Enfoque en el diseño y la usabilidad.',
      Backend: 'Enfoque en la eficiencia y la escalabilidad del código.',
      Mobile: 'Enfoque en la experiencia de usuario y en el rendimiento de la aplicación.',
      Data: 'Enfoque en la precisión y la interpretación de datos.',
    },
  },
  {
    question: '¿Qué tipo de tecnologías te interesa aprender más?',
    options: {
      Frontend: 'Nuevas librerías y frameworks para el desarrollo web.',
      Backend: 'Tecnologías de servidores y bases de datos avanzadas.',
      Mobile: 'Herramientas y lenguajes para desarrollo móvil.',
      Data: 'Nuevas técnicas en análisis de datos y machine learning.',
    },
  },
  {
    question: '¿Cómo te gustaría colaborar en un proyecto de equipo?',
    options: {
      Frontend: 'Trabajando estrechamente con diseñadores y desarrolladores de backend.',
      Backend: 'Coordinándote con frontend y gestionando datos y lógica de negocios.',
      Mobile: 'Colaborando con equipos de diseño y backend para crear una aplicación cohesiva.',
      Data: 'Integrando resultados de análisis en los proyectos y trabajando con diversos equipos.',
    },
  },
  {
    question: '¿Qué tipo de impacto te gustaría tener con tu trabajo?',
    options: {
      Frontend: 'Mejorar la experiencia del usuario y la accesibilidad de las aplicaciones web.',
      Backend: 'Asegurar la estabilidad y la eficiencia de los sistemas y servicios.',
      Mobile: 'Innovar en aplicaciones móviles que mejoren la vida diaria de los usuarios.',
      Data: 'Influir en decisiones estratégicas a través de análisis y visualización de datos.',
    },
  },
];

// Puntos asignados a cada respuesta
const points = {
  Frontend: 5,
  Backend: 5,
  Mobile: 5,
  Data: 5,
};

// Función para mostrar el resultado
function showResult() {
  rl.close();
  const maxPoints = Math.max(...Object.values(houses));
  const topHouses = Object.keys(houses).filter((house) => houses[house] === maxPoints);

  if (topHouses.length === 1) {
    console.log(`\n¡Felicidades! Eres parte de la casa ${topHouses[0]}.\n`);
  } else {
    const itemSelected = Math.floor(Math.random() * topHouses.length);
    console.log(`\n¡La decisión fue difícil! Eres parte de ${topHouses[itemSelected]}.\n`);
  }
}

// Función para hacer preguntas
function askQuestion(index) {
  if (index === questions.length) {
    // Finaliza el cuestionario
    showResult();
    return;
  }

  const { question, options } = questions[index];
  console.log(`\nPregunta ${index + 1}: ${question}\n`);
  const optionsArray = Object.entries(options);
  optionsArray.forEach(([, option], i) => console.log(`${i + 1}. ${option}`));

  rl.question('Elige una opción (1-4): ', (answer) => {
    const choice = parseInt(answer, 10) - 1;
    if (choice >= 0 && choice < optionsArray.length) {
      const selectedHouse = optionsArray[choice][0];
      houses[selectedHouse] += points[selectedHouse];
      askQuestion(index + 1);
    } else {
      console.log('Respuesta inválida. Por favor, elige entre 1 y 4.');
      askQuestion(index);
    }
  });
}

// Comenzar el cuestionario
rl.question('¡Bienvenido al sombrero seleccionador de Hogwarts!\nPor favor, introduce tu nombre: ', (name) => {
  console.log(`\nHola ${name}, respondamos las siguientes preguntas para determinar tu casa:`);
  askQuestion(0);
});
