/* eslint-disable max-len */
/* eslint-disable no-console */
// Crear una variable con la fecha actual
const fechaActual = new Date();

// Crear una variable con tu fecha de nacimiento (puedes modificar esta fecha)
const fechaNacimiento = new Date('2001-08-24T19:30:00');

// Calcular la diferencia en milisegundos
const diferenciaTiempo = fechaActual - fechaNacimiento;

// Convertir la diferencia en milisegundos a años
const milisegundosPorAño = 1000 * 60 * 60 * 24 * 365.25; // Considerando años bisiestos
const añosTranscurridos = Math.floor(diferenciaTiempo / milisegundosPorAño);

console.log(`Han transcurrido ${añosTranscurridos} años desde tu nacimiento.`);

// Formatear y mostrar la fecha de nacimiento de 10 maneras diferentes
console.log(
  `1. Día, mes y año: ${fechaNacimiento.getDate()}/${
    fechaNacimiento.getMonth() + 1
  }/${fechaNacimiento.getFullYear()}`,
);
console.log(
  `2. Hora, minuto y segundo: ${fechaNacimiento.getHours()}:${fechaNacimiento.getMinutes()}:${fechaNacimiento.getSeconds()}`,
);
console.log(
  `3. Día del año: ${Math.ceil(
    (fechaNacimiento - new Date(fechaNacimiento.getFullYear(), 0, 1))
      / (1000 * 60 * 60 * 24),
  )}`,
);
console.log(
  `4. Día de la semana: ${fechaNacimiento.toLocaleString('es-ES', {
    weekday: 'long',
  })}`,
);
console.log(
  `5. Nombre del mes: ${fechaNacimiento.toLocaleString('es-ES', {
    month: 'long',
  })}`,
);
console.log(`6. Año completo: ${fechaNacimiento.getFullYear()}`);
console.log(`7. Mes (número): ${fechaNacimiento.getMonth() + 1}`);
console.log(`8. Día (número): ${fechaNacimiento.getDate()}`);
console.log(`9. Fecha ISO: ${fechaNacimiento.toISOString()}`);
console.log(`10. Fecha local: ${fechaNacimiento.toLocaleDateString('es-ES')}`);
