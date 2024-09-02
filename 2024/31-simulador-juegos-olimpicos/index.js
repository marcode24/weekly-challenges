/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const events = [];
const participants = [];
const eventResults = [];
const medalCount = { Gold: 0, Silver: 0, Bronze: 0 };
const countryMedals = {};

// Helper functions
const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const registerEvent = () => {
  rl.question('Ingrese el nombre del evento: ', (eventName) => {
    events.push(eventName);
    console.log(`\nEvento "${eventName}" registrado.`);
    menu();
  });
};

const registerParticipant = () => {
  rl.question('Ingrese el nombre del participante: ', (name) => {
    rl.question('Ingrese el país del participante: ', (country) => {
      participants.push({ name, country });
      if (!countryMedals[country]) {
        countryMedals[country] = { Gold: 0, Silver: 0, Bronze: 0 };
      }
      console.log(`\nParticipante "${name}" de "${country}" registrado.`);
      menu();
    });
  });
};

const simulateEvent = () => {
  if (events.length === 0 || participants.length < 3) {
    console.log('\nAsegúrese de registrar al menos 3 participantes y un evento.');
    menu();
    return;
  }

  events.forEach((event) => {
    const shuffledParticipants = [...participants];
    for (let i = shuffledParticipants.length - 1; i > 0; i--) {
      const j = randomIndex(shuffledParticipants);
      [shuffledParticipants[i], shuffledParticipants[j]] = [shuffledParticipants[j], shuffledParticipants[i]];
    }

    const winners = shuffledParticipants.slice(0, 3);
    eventResults.push({ event, winners });

    winners.forEach((winner, index) => {
      const medal = index === 0 ? 'Gold' : index === 1 ? 'Silver' : 'Bronze';
      medalCount[medal]++;
      countryMedals[winner.country][medal]++;
    });
  });

  console.log('\nEventos simulados.');
  menu();
};

const showReport = () => {
  console.log('\nInforme de resultados:');
  eventResults.forEach((result) => {
    console.log(`Evento: ${result.event}`);
    result.winners.forEach((winner, index) => {
      const medal = index === 0 ? 'Oro' : index === 1 ? 'Plata' : 'Bronce';
      console.log(`  ${medal}: ${winner.name} (${winner.country})`);
    });
  });

  console.log('\nRanking de países:');
  for (const [country, medals] of Object.entries(countryMedals)) {
    console.log(`${country}: ${medals.Gold} Oro, ${medals.Silver} Plata, ${medals.Bronze} Bronce`);
  }

  console.log('\nTotal de medallas:');
  console.log(`Oro: ${medalCount.Gold}`);
  console.log(`Plata: ${medalCount.Silver}`);
  console.log(`Bronce: ${medalCount.Bronze}`);

  menu();
};

const menu = () => {
  console.log('\nMenú:');
  console.log('1. Registrar evento');
  console.log('2. Registrar participante');
  console.log('3. Simular eventos');
  console.log('4. Mostrar informe');
  console.log('5. Salir');

  const options = {
    1: () => registerEvent(),
    2: () => registerParticipant(),
    3: () => simulateEvent(),
    4: () => showReport(),
    5: () => rl.close(),
  };

  rl.question('Seleccione una opción: ', (option) => {
    options[Number(option)] ? options[Number(option)]() : (console.log('\nOpción inválida. Inténtelo de nuevo.'), menu());
  });
};

menu();
