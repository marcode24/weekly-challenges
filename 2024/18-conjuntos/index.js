/* eslint-disable no-console */
let dataSet = [1, 2, 3, 4, 5];

// Añadir un elemento al final
dataSet.push(6);
console.log('Añadir un elemento al final:', dataSet);

// Añadir un elemento al principio
dataSet.unshift(0);
console.log('Añadir un elemento al principio:', dataSet);

// Añadir varios elementos en bloque al final
dataSet.push(7, 8, 9);
console.log('Añadir varios elementos al final:', dataSet);

// Añadir varios elementos en bloque en una posición concreta
dataSet.splice(3, 0, 'a', 'b', 'c');
console.log('Añadir varios elementos en una posición concreta:', dataSet);

// Eliminar un elemento en una posición concreta
dataSet.splice(4, 1); // Elimina el elemento en la posición 4
console.log('Eliminar un elemento en una posición concreta:', dataSet);

// Actualizar el valor de un elemento en una posición concreta
dataSet[4] = 'updated';
console.log('Actualizar el valor de un elemento en una posición concreta:', dataSet);

// Comprobar si un elemento está en el conjunto
const exists = dataSet.includes('updated');
console.log('Comprobar si un elemento está en el conjunto:', exists);

// Eliminar todo el contenido del conjunto
dataSet = [];
console.log('Eliminar todo el contenido del conjunto:', dataSet);

// Ejemplos con conjuntos (Sets)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Unión
const union = new Set([...setA, ...setB]);
console.log('Unión:', union);

// Intersección
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log('Intersección:', intersection);

// Diferencia
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log('Diferencia:', difference);

// Diferencia simétrica
const symmetricDifference = new Set(
  [...setA].filter((x) => !setB.has(x)).concat([...setB].filter((x) => !setA.has(x))),
);
console.log('Diferencia simétrica:', symmetricDifference);
