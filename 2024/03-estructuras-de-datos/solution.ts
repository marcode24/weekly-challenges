// Ejemplos de estructuras de datos

// Arrays
const arrayEjemplo: number[] = [1, 2, 3, 4, 5];
console.log("Array original:", arrayEjemplo);

// Inserción
arrayEjemplo.push(6);
console.log("Array después de la inserción:", arrayEjemplo);

// Borrado
arrayEjemplo.pop();
console.log("Array después del borrado:", arrayEjemplo);

// Actualización
arrayEjemplo[0] = 10;
console.log("Array después de la actualización:", arrayEjemplo);

// Ordenación
const arrayOrdenado: number[] = [...arrayEjemplo].sort();
console.log("Array ordenado:", arrayOrdenado);

// Objetos
interface ObjetoEjemplo {
  nombre: string;
  edad: number;
  ciudad: string;
}

const objetoEjemplo: ObjetoEjemplo = { nombre: "Juan", edad: 25, ciudad: "Barcelona" };
console.log("Objeto original:", objetoEjemplo);

// Inserción/Actualización
objetoEjemplo.profesion = "Ingeniero";
console.log("Objeto después de la inserción/actualización:", objetoEjemplo);

// Borrado
delete objetoEjemplo.edad;
console.log("Objeto después del borrado:", objetoEjemplo);
