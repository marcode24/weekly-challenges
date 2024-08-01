/* eslint-disable no-console */
const fs = require('fs');

// Clase personalizada para manejar los datos
class Person {
  constructor(name, age, birthDate, programmingLanguages) {
    this.name = name;
    this.age = age;
    this.birthDate = birthDate;
    this.programmingLanguages = programmingLanguages;
  }

  static fromJSON(jsonFileName) {
    const jsonData = JSON.parse(fs.readFileSync(jsonFileName, 'utf8'));
    return new Person(
      jsonData.name,
      jsonData.age,
      jsonData.birthDate,
      jsonData.programmingLanguages,
    );
  }

  static fromXML(xmlFileName) {
    const xmlData = fs.readFileSync(xmlFileName, 'utf8');
    const name = xmlData.match(/<name>(.*?)<\/name>/)[1];
    const age = parseInt(xmlData.match(/<age>(.*?)<\/age>/)[1], 10);
    const birthDate = xmlData.match(/<birthDate>(.*?)<\/birthDate>/)[1];
    const programmingLanguages = xmlData
      .match(/<language>(.*?)<\/language>/g)
      .map((lang) => lang.replace(/<\/?language>/g, ''));
    return new Person(name, age, birthDate, programmingLanguages);
  }

  display() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Edad: ${this.age}`);
    console.log(`Fecha de Nacimiento: ${this.birthDate}`);
    console.log(`Lenguajes de Programación: ${this.programmingLanguages.join(', ')}`);
  }
}

// Datos a almacenar
const data = {
  name: 'Marco Cruz',
  age: new Date().getFullYear() - 2001,
  birthDate: '2001-08-24',
  programmingLanguages: ['JavaScript', 'TypeScript', 'C#', 'PHP'],
};

// Crear archivo JSON
const jsonFileName = 'data.json';
const jsonContent = JSON.stringify(data, null, 2);
fs.writeFileSync(jsonFileName, jsonContent, 'utf8');
console.log(`Archivo JSON creado: ${jsonFileName}`);

// Crear archivo XML
const xmlFileName = 'data.xml';
let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
xmlContent += '<person>\n';
xmlContent += `  <name>${data.name}</name>\n`;
xmlContent += `  <age>${data.age}</age>\n`;
xmlContent += `  <birthDate>${data.birthDate}</birthDate>\n`;
xmlContent += '  <programmingLanguages>\n';
data.programmingLanguages.forEach((lang) => {
  xmlContent += `    <language>${lang}</language>\n`;
});
xmlContent += '  </programmingLanguages>\n';
xmlContent += '</person>';

fs.writeFileSync(xmlFileName, xmlContent, 'utf8');
console.log(`Archivo XML creado: ${xmlFileName}`);

console.log('\nContenido del archivo JSON:');
console.log(jsonContent);

console.log('\nContenido del archivo XML:');
console.log(xmlContent);

const personFromJson = Person.fromJSON(jsonFileName);
console.log('\nDatos desde JSON:');
personFromJson.display();

const personFromXml = Person.fromXML(xmlFileName);
console.log('\nDatos desde XML:');
personFromXml.display();

fs.unlinkSync(jsonFileName);
fs.unlinkSync(xmlFileName);
console.log('\nArchivos borrados.');
