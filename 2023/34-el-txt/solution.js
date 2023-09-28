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
