/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable max-len */
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function distributeRings(totalRings) {
  // Sauron siempre recibe uno
  const sauronsRings = 1;
  totalRings -= sauronsRings;

  // Intentar encontrar una combinación válida
  for (let elfosRings = 1; elfosRings <= totalRings; elfosRings += 2) { // Impares para Elfos
    if (totalRings - elfosRings < 2) continue; // Necesitamos al menos 2 anillos para los Hombres y los Enanos

    for (let hombresRings = 2; hombresRings <= totalRings - elfosRings; hombresRings += 2) { // Pares para Hombres
      const remainingRings = totalRings - elfosRings - hombresRings;

      if (remainingRings > 0 && isPrime(remainingRings)) {
        return {
          elfos: elfosRings,
          hombres: hombresRings,
          enanos: remainingRings,
          sauron: sauronsRings,
        };
      }
    }
  }

  return 'No se pudo encontrar una distribución válida.';
}

const totalRings = Math.floor(Math.random() * 1000) + 1; // Número total de anillos
const distribution = distributeRings(totalRings);

console.log(`Total de anillos: ${totalRings}`);
console.log(`Distribución: ${JSON.stringify(distribution)}`);
