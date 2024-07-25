/* eslint-disable no-console */
import * as fs from 'fs';
import * as readline from 'readline';

// Nombre del archivo como tu usuario de GitHub
const username: string = 'marcode24';
const filename: string = `${username}.txt`;

const age: number = new Date().getFullYear() - 2001;
const programingLanguage: string = 'JavaScript';
// Contenido del archivo
const contentFile: string = `Nombre: Marco Cruz
Edad: ${age}
Lenguaje de programación favorito: ${programingLanguage}`;

// Escribir en el archivo
fs.writeFileSync(filename, contentFile, 'utf8');

// Leer el archivo e imprimir el contenido
const fileContent: string = fs.readFileSync(filename, 'utf8');
console.log(fileContent);

// Borrar el archivo
fs.unlinkSync(filename);
console.log(`Archivo ${filename} borrado.`);

/*
----------------------------
--- Ejercicio de práctica---
----------------------------
*/

const salesFilename: string = 'ventas.txt';

// Función para añadir un producto
function addProduct(product: string, quantity: string, price: string): void {
  const line: string = `${product}, ${quantity}, ${price}\n`;
  fs.appendFileSync(salesFilename, line, 'utf8');
}

// Función para consultar productos
function listProducts(): void {
  if (fs.existsSync(salesFilename)) {
    const content: string = fs.readFileSync(salesFilename, 'utf8');
    console.log(content);
  } else {
    console.log('No hay productos registrados.');
  }
}

// Función para actualizar un producto
function updateProduct(product: string, quantity: string, price: string): void {
  if (!fs.existsSync(salesFilename)) return;
  const lines: string[] = fs.readFileSync(salesFilename, 'utf8').split('\n');
  const updatedLines: string[] = lines.map((line) => {
    if (line.startsWith(product)) {
      return `${product}, ${quantity}, ${price}`;
    }
    return line;
  });
  fs.writeFileSync(salesFilename, updatedLines.join('\n'), 'utf8');
}

// Función para eliminar un producto
function deleteProduct(product: string): void {
  if (!fs.existsSync(salesFilename)) return;
  const lines: string[] = fs.readFileSync(salesFilename, 'utf8').split('\n');
  const updatedLines: string[] = lines.filter((line) => !line.startsWith(product));
  fs.writeFileSync(salesFilename, updatedLines.join('\n'), 'utf8');
}

// Función para calcular ventas totales
function calculateTotalSales(): void {
  if (!fs.existsSync(salesFilename)) return;
  const lines: string[] = fs.readFileSync(salesFilename, 'utf8').split('\n');
  let total: number = 0;
  lines.forEach((line) => {
    if (line) {
      const [product, quantity, price] = line.split(', ');
      total += parseInt(quantity, 10) * parseFloat(price);
    }
  });
  console.log(`Ventas totales: ${total}`);
}

// Función para gestionar el menú
async function menu(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function question(prompt: string): Promise<string> {
    return new Promise((resolve) => rl.question(prompt, resolve));
  }

  const choices: { [key: string]: () => void | Promise<void> } = {
    '1': async () => {
      const product: string = await question('Nombre del producto: ');
      const quantity: string = await question('Cantidad vendida: ');
      const price: string = await question('Precio: ');
      addProduct(product, quantity, price);
    },
    '2': () => listProducts(),
    '3': async () => {
      const updateProductName: string = await question('Nombre del producto a actualizar: ');
      const updateQuantity: string = await question('Nueva cantidad vendida: ');
      const updatePrice: string = await question('Nuevo precio: ');
      updateProduct(updateProductName, updateQuantity, updatePrice);
    },
    '4': async () => {
      const deleteProductName: string = await question('Nombre del producto a eliminar: ');
      deleteProduct(deleteProductName);
    },
    '5': () => calculateTotalSales(),
    '6': () => {
      rl.close();
      fs.unlinkSync(salesFilename);
      console.log(`Archivo ${salesFilename} borrado.`);
    },
  };

  while (true) {
    console.log(`
      1. Añadir producto
      2. Consultar productos
      3. Actualizar producto
      4. Eliminar producto
      5. Calcular ventas totales
      6. Salir
    `);
    const choice: string = await question('Elige una opción: ');
    await choices[choice]();
  }
}

menu();
