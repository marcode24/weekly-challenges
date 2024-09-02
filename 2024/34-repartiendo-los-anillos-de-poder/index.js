/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
class Person {
  constructor(id, name, partner = null) {
    this.id = id;
    this.name = name;
    this.partner = partner ? partner.name : null;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof Person) {
      this.children.push(child);
    } else {
      console.log('El hijo debe ser una instancia de Person.');
    }
  }

  removeChild(childId) {
    this.children = this.children.filter((child) => child.id !== childId);
  }

  setPartner(partner) {
    if (partner instanceof Person) {
      this.partner = partner.name;
    } else {
      console.log('El socio debe ser una instancia de Person.');
    }
  }

  print(indent = 0) {
    const indentString = ' '.repeat(indent);
    console.log(`${indentString}- ${this.name} ${this.partner ? `(Pareja: ${this.partner})` : ''}`);
    this.children.forEach((child) => child.print(indent + 2));
  }
}

class FamilyTree {
  constructor() {
    this.people = new Map();
  }

  addPerson(id, name, partnerId = null) {
    if (this.people.has(id)) {
      console.log(`La persona con ID ${id} ya existe.`);
      return;
    }

    const partner = partnerId ? this.people.get(partnerId) : null;
    const person = new Person(id, name, partner);

    if (partner) {
      partner.setPartner(person);
    }

    this.people.set(id, person);
    console.log(`Persona añadida: ${name}`);
  }

  removePerson(id) {
    if (!this.people.has(id)) {
      console.log(`La persona con ID ${id} no existe.`);
      return;
    }

    const personToRemove = this.people.get(id);
    // Remove person from their partner's children list
    if (personToRemove.partner) {
      const partner = Array.from(this.people.values()).find((p) => p.partner === personToRemove.name);
      if (partner) {
        partner.removeChild(personToRemove.id);
      }
    }

    // Remove person from their children's list
    personToRemove.children.forEach((child) => {
      child.removeChild(personToRemove.id);
    });

    // Remove the person from the family tree
    this.people.delete(id);
    console.log(`Persona eliminada: ${id}`);
  }

  addChild(parentId, childId) {
    if (!this.people.has(parentId) || !this.people.has(childId)) {
      console.log('ID de padre o hijo no encontrado.');
      return;
    }

    const parent = this.people.get(parentId);
    const child = this.people.get(childId);

    parent.addChild(child);
    console.log(`Hijo añadido: ${child.name} a ${parent.name}`);
  }

  setPartner(personId, partnerId) {
    if (!this.people.has(personId) || !this.people.has(partnerId)) {
      console.log('ID de persona o pareja no encontrado.');
      return;
    }

    const person = this.people.get(personId);
    const partner = this.people.get(partnerId);

    person.setPartner(partner);
    partner.setPartner(person);
    console.log(`Pareja establecida: ${person.name} y ${partner.name}`);
  }

  printTree() {
    console.log('\nÁrbol genealógico:');
    this.people.forEach((person) => {
      // Print only the root nodes
      if (!Array.from(this.people.values()).some((p) => p.children.includes(person))) {
        person.print();
      }
    });
  }
}

// Ejemplo de uso
const familyTree = new FamilyTree();

// Añadir personas
familyTree.addPerson(1, 'Rhaenyra Targaryen');
familyTree.addPerson(2, 'Daemon Targaryen');
familyTree.addPerson(3, 'Aegon II Targaryen');
familyTree.addPerson(4, 'Helaena Targaryen');
familyTree.addPerson(5, 'Aemond Targaryen');
familyTree.addPerson(6, 'Daeron Targaryen');

// Establecer parejas
familyTree.setPartner(1, 2);
familyTree.setPartner(3, 4);

// Añadir hijos
familyTree.addChild(1, 3);
familyTree.addChild(2, 4);
familyTree.addChild(2, 5);
familyTree.addChild(2, 6);

// Imprimir el árbol genealógico en formato textual estructurado
familyTree.printTree();
