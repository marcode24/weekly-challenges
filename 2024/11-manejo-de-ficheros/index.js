/* eslint-disable no-console */
const fs = require('fs');
const readline = require('readline');

// Nombre del archivo como tu usuario de GitHub
const username = 'marcode24';
const filename = `${username}.txt`;

const age = new Date().getFullYear() - 2001;
const programingLanguage = 'JavaScript';
// Contenido del archivo
const contentFile = `Nombre: Marco Cruz
Edad: ${age}
Lenguaje de programación favorito: ${programingLanguage}`;

// Escribir en el archivo
fs.writeFileSync(filename, contentFile, 'utf8');

// Leer el archivo e imprimir el contenido
const fileContent = fs.readFileSync(filename, 'utf8');
console.log(fileContent);

// Borrar el archivo
fs.unlinkSync(filename);
console.log(`Archivo ${filename} borrado.`);

/*
----------------------------
--- Ejercicio de práctica---
----------------------------
*/

const salesFilename = 'ventas.txt';

// Función para añadir un producto
function addProduct(product, quantity, price) {
  const line = `${product}, ${quantity}, ${price}\n`;
  fs.appendFileSync(salesFilename, line, 'utf8');
}

// Función para consultar productos
function listProducts() {
  if (fs.existsSync(salesFilename)) {
    const content = fs.readFileSync(salesFilename, 'utf8');
    console.log(content);
  } else {
    console.log('No hay productos registrados.');
  }
}

// Función para actualizar un producto
function updateProduct(product, quantity, price) {
  if (!fs.existsSync(salesFilename)) return;
  const lines = fs.readFileSync(salesFilename, 'utf8').split('\n');
  const updatedLines = lines.map((line) => {
    if (line.startsWith(product)) {
      return `${product}, ${quantity}, ${price}`;
    }
    return line;
  });
  fs.writeFileSync(salesFilename, updatedLines.join('\n'), 'utf8');
}

// Función para eliminar un producto
function deleteProduct(product) {
  if (!fs.existsSync(salesFilename)) return;
  const lines = fs.readFileSync(salesFilename, 'utf8').split('\n');
  const updatedLines = lines.filter((line) => !line.startsWith(product));
  fs.writeFileSync(salesFilename, updatedLines.join('\n'), 'utf8');
}

// Función para calcular ventas totales
function calculateTotalSales() {
  if (!fs.existsSync(salesFilename)) return;
  const lines = fs.readFileSync(salesFilename, 'utf8').split('\n');
  let total = 0;
  lines.forEach((line) => {
    if (line) {
      // eslint-disable-next-line no-unused-vars
      const [product, quantity, price] = line.split(', ');
      total += parseInt(quantity, 10) * parseFloat(price);
    }
  });
  console.log(`Ventas totales: ${total}`);
}

// Función para gestionar el menú
async function menu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function question(prompt) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => rl.question(prompt, resolve));
  }

  const choices = {
    1: async () => {
      const product = await question('Nombre del producto: ');
      const quantity = await question('Cantidad vendida: ');
      const price = await question('Precio: ');
      addProduct(product, quantity, price);
    },
    2: () => listProducts(),
    3: async () => {
      const updateProductName = await question('Nombre del producto a actualizar: ');
      const updateQuantity = await question('Nueva cantidad vendida: ');
      const updatePrice = await question('Nuevo precio: ');
      updateProduct(updateProductName, updateQuantity, updatePrice);
    },
    4: async () => {
      const deleteProductName = await question('Nombre del producto a eliminar: ');
      deleteProduct(deleteProductName);
    },
    5: () => calculateTotalSales(),
    6: () => {
      rl.close();
      fs.unlinkSync(salesFilename);
      console.log(`Archivo ${salesFilename} borrado.`);
    },
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log(`
      1. Añadir producto
      2. Consultar productos
      3. Actualizar producto
      4. Eliminar producto
      5. Calcular ventas totales
      6. Salir
    `);
    // eslint-disable-next-line no-await-in-loop
    const choice = await question('Elige una opción: ');
    // eslint-disable-next-line no-await-in-loop
    await choices[choice]();
  }
}

menu();
