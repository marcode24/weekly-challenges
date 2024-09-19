/* eslint-disable no-console */

// Definición de tipos
type Student = {
  name: string;
  birthDate: string;
  grades: number[];
};

// Función que acepta una función como argumento y aplica esa función a una lista de números
function applyToList(numbers: number[], operation: (num: number) => number): number[] {
  return numbers.map(operation);
}

// Función para duplicar un número
function double(number: number): number {
  return number * 2;
}

// Usando la función applyToList con la función double
const numbers: number[] = [1, 2, 3, 4];
const doubledNumbers: number[] = applyToList(numbers, double);

console.log(doubledNumbers); // [2, 4, 6, 8]

// Lista de estudiantes
const students: Student[] = [
  { name: 'Alice', birthDate: '1998-06-15', grades: [9.5, 8.7, 9.1] },
  { name: 'Bob', birthDate: '2000-01-22', grades: [6.5, 7.0, 8.2] },
  { name: 'Charlie', birthDate: '1999-11-30', grades: [9.2, 9.8, 10.0] },
  { name: 'Diana', birthDate: '2001-04-10', grades: [8.5, 9.0, 9.3] },
];

// 1. Promedio de calificaciones
const averageGrades = students.map((student) => {
  const average = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
  return { name: student.name, average };
});

// 2. Mejores estudiantes (con promedio >= 9)
const bestStudents = averageGrades
  .filter((student) => student.average >= 9)
  .map((student) => student.name);

// 3. Estudiantes ordenados por fecha de nacimiento (más jóvenes primero)
const sortedByBirthDate = students
  .slice()
  .sort((a, b) => new Date(b.birthDate).getTime() - new Date(a.birthDate).getTime());

// 4. Mayor calificación
const highestGrade = Math.max(...students.flatMap((student) => student.grades));

// Mostrar resultados
console.log('Promedio de Calificaciones:', averageGrades);
console.log('Mejores Estudiantes:', bestStudents);
console.log(
  'Estudiantes Ordenados por Fecha de Nacimiento:',
  sortedByBirthDate.map((student) => student.name),
);
console.log('Mayor Calificación:', highestGrade);
