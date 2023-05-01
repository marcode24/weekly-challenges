# Reto #18: Web Scraping

## Enunciado

El día 128 del año celebramos en la comunidad el "Hola Mundo day"

Vamos a hacer "web scraping" sobre su sitio web: https://holamundo.day

Crea un programa que se conecte a la web del evento e imprima únicamente la agenda de eventos del día 8. Mostrando hora e información de cada uno.

Ejemplo: "16:00 | Bienvenida"

Se permite utilizar librerías que nos faciliten esta tarea.

## Solución

```js
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
```

## Explanation of my solution

### `getShedule` function

- First, I create a function that returns a promise that resolves to a string with the schedule of the event.

```js
const getShedule = async () => {
  // ...
};
```

- I launch a new browser instance with puppeteer.

```js
const browser = await puppeteer.launch({
  headless: 'new',
});
```

- I create a new page.

```js
const page = await browser.newPage();
```

- I go to the event site.

```js
await page.goto(SITE);
```

- I get the title of the page.

```js
const title = await page.title();
```

- I get the content of the page.

```js
const content = await page.$$('article.notion-page-content-inner');
```

- I get the events section.

```js
const events = content[7]; // 7 is the index of the events section
```

- I get the quotes of the events section.

```js
const quoteElements = await events.$$('blockquote.notion-quote');
```

- I get the text of each quote.

```js
const eventInfo = await Promise.all(quoteElements.map(async (quoteElement) => {
  const spanElement = await quoteElement.$('span[data-slate-string="true"]');
  const text = await quoteElement.evaluate((el) => el.textContent, spanElement);
  return text;
}));
```

- I create a string with the title of the page and the text of each quote.

```js
const schedule = `${title}\n\n`.concat(eventInfo
  .map((event) => event.replace(/\n/g, ' '))
  .join('\n'));
```

- I close the browser.

```js
if (browser) await browser.close();
```

- I return the schedule.

```js
return schedule;
```
