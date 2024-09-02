/* eslint-disable no-shadow */
const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp, label, printf,
} = format;

// Definir el formato del log
const myFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

// Crear el logger
const logger = createLogger({
  level: 'silly', // Nivel más bajo para capturar todos los niveles
  format: combine(
    label({ label: 'Gestión de Tareas' }),
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: '2024/25-logs/app.log' }),
  ],
});

// Ejemplo de mensajes en diferentes niveles de severidad
logger.error('Este es un mensaje de nivel ERROR');
logger.warn('Este es un mensaje de nivel WARN');
logger.info('Este es un mensaje de nivel INFO');
logger.http('Este es un mensaje de nivel HTTP');
logger.verbose('Este es un mensaje de nivel VERBOSE');
logger.debug('Este es un mensaje de nivel DEBUG');
logger.silly('Este es un mensaje de nivel SILLY');

// Dificultad extra
const tasks = [];

function addTask(name, description) {
  logger.info(`Añadiendo tarea: ${name}`);
  const startTime = Date.now();
  tasks.push({ name, description });
  const endTime = Date.now();
  logger.debug(`Tarea añadida en ${endTime - startTime}ms`);
}

function removeTask(name) {
  logger.info(`Eliminando tarea: ${name}`);
  const startTime = Date.now();
  const index = tasks.findIndex((task) => task.name === name);
  if (index !== -1) {
    tasks.splice(index, 1);
    logger.info(`Tarea "${name}" eliminada.`);
  } else {
    logger.warn(`Tarea "${name}" no encontrada.`);
  }
  const endTime = Date.now();
  logger.debug(`Tarea eliminada en ${endTime - startTime}ms`);
}

function listTasks() {
  logger.info('Listando todas las tareas');
  tasks.forEach(
    (task) => logger.verbose(`Tarea: ${task.name}, Descripción: ${task.description}`),
  );
}

// Uso del programa de gestión de tareas
addTask('Tarea 1', 'Descripción de la tarea 1');
addTask('Tarea 2', 'Descripción de la tarea 2');
listTasks();
removeTask('Tarea 1');
listTasks();
