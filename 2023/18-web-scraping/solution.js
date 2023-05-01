const puppeteer = require('puppeteer');

const SITE = 'https://holamundo.day/';

const getShedule = async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  await page.goto(SITE);
  const title = await page.title();
  const content = await page.$$('article.notion-page-content-inner');
  const events = content[7]; // 7 is the index of the events section

  const quoteElements = await events.$$('blockquote.notion-quote');
  const eventInfo = await Promise.all(quoteElements.map(async (quoteElement) => {
    const spanElement = await quoteElement.$('span[data-slate-string="true"]');
    const text = await quoteElement.evaluate((el) => el.textContent, spanElement);
    return text;
  }));
  const schedule = `${title}\n\n`.concat(eventInfo
    .map((event) => event.replace(/\n/g, ' '))
    .join('\n'));
  if (browser) await browser.close();
  return schedule;
};

module.exports = getShedule;

// EXECUTION:
// getShedule().then((res) => console.log(res));

// RESULT:
// "Hola Mundo" day | 8 de mayo | La conferencia de programación de la comunidad para la comunidad

// 17:00 | Bienvenida
// 17:30 | Importa librerias de diseño a tu proyecto React David Ochando, GeeksHubs
// 18:15 | Arquitectura Hexagonal en Frontend Núria Soriano y Rafa Gómez, Codely
// 19:00 | Descanso + Sorteos
// 19:30 | Perfiles tech más demandados, salarios y profesiones emergentes Nilton Navarro, InfoJobs
// 20:15 | Management en proyectos de Web / IA / Data Sara San Luís y Ander Conal, Plain Concepts
// 21:00 | Despedida
// 16:00 | Bienvenida
// 16:30 | De Junior a Junior: cómo abrirte paso | Antonio Rodríguez
// 17:00 | El Rol del Analista Funcional en el Ciclo de Desarrollo | Luisina de Paula
// 17:30 | Taller: Git y Github para el mundo | Ehud Aguirre
// 18:00 | Mesa redonda
// 18:30 | Descanso + Sorteos
// 19:00 | Clean Code: cómo dormir más y mejor | Fran Sierra
// 19:30 | Abrazando al fracaso | Afor Digital
// 20:00 | Taller: Descubre el mundo de machine learning | Stefy Mojica
// 20:30 | Elevator pitch
// 21:00 | Invitados
// 21:30 | Mi primer año como Desarrollador a los 45 años | Gerardo Arrieta
// 22:00 | Taller: Testing, más que código | Manu Rodríguez
// 22:30 | Descanso + Sorteos
// 23:00 | Despedida
