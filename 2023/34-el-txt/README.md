# Reto 34: El txt

## Enunciado

Crea un programa capaz de interactuar con un fichero TXT.
IMPORTANTE: El fichero TXT NO debe subirse como parte de la corrección.

Únicamente el código.

- Si no existe, debe crear un fichero llamado "text.txt".
- Desde el programa debes ser capaz de introducir texto por consola y guardarlo en una nueva línea cada vez que se pulse el botón "Enter".
- Si el fichero existe, el programa tiene que dar la opción de seguir escribiendo a continuación o borrar su contenido y comenzar desde el principio.
- Si se selecciona continuar escribiendo, se tiene que mostrar por consola el texto que ya posee el fichero.

## My solution

```js
const fs = require('fs');
const readline = require('readline');

const FILE_PATH = 'text.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const writeContent = (text) => {
  fs.appendFile(FILE_PATH, text, (err) => {
    !err && console.log('\nCONTENIDO GUARDADO!\nContinue escribiendo...');
  });
};

const openLineEditor = () => {
  rl.on('line', (input) => {
    input === '' ? rl.close() : writeContent(`${input}\n`);
  });
};

const deleteContent = () => {
  fs.truncate(FILE_PATH, 0, (err) => {
    !err && console.log('CONTENIDO BORRADO!\nContinue escribiendo...');
  });
};

const printContent = () => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo: ', err);
      return;
    }
    console.log('CONTENIDO DEL ARCHIVO: \n');
    console.log('-------------------------');
    console.log(data.trim());
    console.log('-------------------------');
  });
};

fs.access(FILE_PATH, fs.constants.F_OK, (err) => {
  if (!err) {
    const question = 'El archivo existe, desea: \n\n'
      + '1. Continuar escribiendo\n2. Sobreescribirlo\n';
    rl.question(question, (input) => {
      switch (input) {
        case '1':
          printContent();
          openLineEditor();
          break;
        case '2':
          deleteContent('');
          openLineEditor();
          break;
        default:
          console.log('opción no válida');
          break;
      }
    });
  } else {
    fs.writeFile(FILE_PATH, '', (e) => {
      if (e) {
        console.error('Error al crear archivo: ', e);
        return;
      }
      console.log('ARCHIVO CREADO!\nIngrese su contenido');
      openLineEditor();
    });
  }
});
```

## Explanation of my solution

### `fs` module

- First, I import the `fs` module.

```js
const fs = require('fs');
```

### `readline` module

- Then, I import the `readline` module.

```js
const readline = require('readline');
```

### `FILE_PATH` constant

- Then, I declare a constant named `FILE_PATH` that will store the path of the file that will be created or modified.

```js
const FILE_PATH = 'text.txt';
```

### `readline` interface

- Then, I declare a variable named `rl` that will store the `readline` interface.

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

### `writeContent` function

- Then, I declare a function named `writeContent` that receives a parameter named `text`.

```js
const writeContent = (text) => {
  fs.appendFile(FILE_PATH, text, (err) => {
    !err && console.log('\nCONTENIDO GUARDADO!\nContinue escribiendo...');
  });
};
```

- Inside the `writeContent` function:
  - I call the `appendFile` method of the `fs` module with the following arguments:
    - The `FILE_PATH` constant.
    - The `text` parameter.
    - A callback function that receives an `err` parameter.
  - If the `err` parameter is falsy, I call the `console.log` method with the following argument:
    - The string `'\nCONTENIDO GUARDADO!\nContinue escribiendo...'`.

### `openLineEditor` function

- Then, I declare a function named `openLineEditor` that does not receive any parameter.

```js
const openLineEditor = () => {
  rl.on('line', (input) => {
    input === '' ? rl.close() : writeContent(`${input}\n`);
  });
};
```

- Inside the `openLineEditor` function:
  - I call the `on` method of the `rl` variable with the following arguments:
    - The string `'line'`.
    - A callback function that receives an `input` parameter.
  - If the `input` parameter is an empty string, I call the `close` method of the `rl` variable.
  - Otherwise, I call the `writeContent` function with the following argument:
    - The `input` parameter concatenated with the string `'\n'`.
  
### `deleteContent` function

- Then, I declare a function named `deleteContent` that does not receive any parameter.

```js
const deleteContent = () => {
  fs.truncate(FILE_PATH, 0, (err) => {
    !err && console.log('CONTENIDO BORRADO!\nContinue escribiendo...');
  });
};
```

- Inside the `deleteContent` function:
  - I call the `truncate` method of the `fs` module with the following arguments:
    - The `FILE_PATH` constant.
    - The number `0`.
    - A callback function that receives an `err` parameter.
  - If the `err` parameter is falsy, I call the `console.log` method with the following argument:
    - The string `'CONTENIDO BORRADO!\nContinue escribiendo...'`.

### `printContent` function

- Then, I declare a function named `printContent` that does not receive any parameter.

```js
const printContent = () => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo: ', err);
      return;
    }
    console.log('CONTENIDO DEL ARCHIVO: \n');
    console.log('-------------------------');
    console.log(data.trim());
    console.log('-------------------------');
  });
};
```

- Inside the `printContent` function:
  - I call the `readFile` method of the `fs` module with the following arguments:
    - The `FILE_PATH` constant.
    - The string `'utf8'`.
    - A callback function that receives two parameters: `err` and `data`.
  - If the `err` parameter is truthy, I call the `console.error` method with the following arguments:
    - The string `'Error al leer el archivo: '`.
    - The `err` parameter.
    - A comma.
    - The string `'Error al leer el archivo: '`.
  - Otherwise, I call the `console.log` method with the following argument:
    - The string `'CONTENIDO DEL ARCHIVO: \n'`.
  - Then, I call the `console.log` method with the following argument:
    - The string `'-------------------------'`.
  - Then, I call the `console.log` method with the following argument:
    - The `data` parameter trimmed.
  - Finally, I call the `console.log` method with the following argument:
    - The string `'-------------------------'`.

### `fs.access` method

- Then, I call the `access` method of the `fs` module with the following arguments:
  - The `FILE_PATH` constant.
  - The `fs.constants.F_OK` constant.
  - A callback function that receives an `err` parameter.

```js
fs.access(FILE_PATH, fs.constants.F_OK, (err) => {
  if (!err) {
    const question = 'El archivo existe, desea: \n\n'
      + '1. Continuar escribiendo\n2. Sobreescribirlo\n';
    rl.question(question, (input) => {
      switch (input) {
        case '1':
          printContent();
          openLineEditor();
          break;
        case '2':
          deleteContent('');
          openLineEditor();
          break;
        default:
          console.log('opción no válida');
          break;
      }
    });
  } else {
    fs.writeFile(FILE_PATH, '', (e) => {
      if (e) {
        console.error('Error al crear archivo: ', e);
        return;
      }
      console.log('ARCHIVO CREADO!\nIngrese su contenido');
      openLineEditor();
    });
  }
});
```

- Inside the callback function:
  - If the `err` parameter is falsy:
    - I declare a constant named `question` that will store the string `'El archivo existe, desea: \n\n1. Continuar escribiendo\n2. Sobreescribirlo\n'`.
    - I call the `question` method of the `rl` variable with the following arguments:
      - The `question` constant.
      - A callback function that receives an `input` parameter.
    - I call the `switch` statement with the following argument:
      - The `input` parameter.
    - Inside the `switch` statement:
      - If the `input` parameter is equal to the string `'1'`:
        - I call the `printContent` function.
        - I call the `openLineEditor` function.
      - If the `input` parameter is equal to the string `'2'`:
        - I call the `deleteContent` function.
        - I call the `openLineEditor` function.
      - Otherwise:
        - I call the `console.log` method with the following argument:
          - The string `'opción no válida'`.
  - Otherwise:
    - I call the `writeFile` method of the `fs` module with the following arguments:
      - The `FILE_PATH` constant.
      - The string `''`.
      - A callback function that receives an `e` parameter.
    - If the `e` parameter is truthy, I call the `console.error` method with the following arguments:
      - The string `'Error al crear archivo: '`.
      - The `e` parameter.
      - A comma.
      - The string `'Error al crear archivo: '`.
    - Otherwise, I call the `console.log` method with the following argument:
      - The string `'ARCHIVO CREADO!\nIngrese su contenido'`.
    - Finally, I call the `openLineEditor` function.

