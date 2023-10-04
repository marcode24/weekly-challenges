// Hola, mundo!
console.log("Hola, mundo!");

// Creación de variables de diferentes tipos
let stringVariable: string = "Esto es una cadena de texto";
let numericIntegerVariable: number = 10;
let numericDecimalVariable: number = 3.14;
let booleanVariable: boolean = true;

// Creación de una constante
const PI: number = 3.14159;

// Uso de if, else if y else
let number: number = 15;
if (number > 10) {
  console.log("El número es mayor que 10");
} else if (number === 10) {
  console.log("El número es igual a 10");
} else {
  console.log("El número es menor que 10");
}

// Creación de estructuras de datos
let array: number[] = [1, 2, 3, 4, 5]; // Array
let list: number[] = [10, 20, 30]; // Lista (representada como un array en TypeScript)
let tuple: [number, string, boolean] = [1, "hola", true]; // Tupla
let set: Set<number> = new Set([1, 2, 3]); // Set
let dictionary: { [key: string]: string } = { "clave1": "valor1", "clave2": "valor2" }; // Diccionario

// Uso de bucles: for, forEach y while
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

list.forEach(item => {
  console.log(item);
});

let count: number = 0;
while (count < 5) {
  console.log("Contador: " + count);
  count++;
}

// Creación de funciones
function suma(a: number, b: number): number {
  return a + b;
}

function greets(name: string): void {
  console.log("Hola, " + name + "!");
}

// Creación de una función sin retorno
function printMessages(message: string): void {
  console.log(message);
}

// Creación de una función sin parámetros
function sayHellos(): void {
  console.log("¡Hola!");
}

// Creación de una clase
class Persona {
  constructor(private nombre: string, private edad: number) {}

  presentarse(): void {
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
  }
}

// Control de excepciones
try {
  // Intentamos ejecutar un bloque de código que puede generar un error
  let resultado: number = 10 / 0;
  console.log("El resultado es: " + resultado);
} catch (error) {
  // Capturamos y manejamos el error
  console.error("Se produjo un error: " + error.message);
}
