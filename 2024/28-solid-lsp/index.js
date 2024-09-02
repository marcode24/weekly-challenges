/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
// Clase base
class Vehiculo {
  acelerar() {
    console.log('El vehículo acelera.');
  }

  frenar() {
    console.log('El vehículo frena.');
  }
}

// Subclase que cumple con LSP
class Coche extends Vehiculo {
  acelerar() {
    console.log('El coche acelera.');
  }

  frenar() {
    console.log('El coche frena.');
  }
}

// Subclase que no cumple con LSP
class Bicicleta extends Vehiculo {
  acelerar() {
    throw new Error('Las bicicletas no pueden acelerar automáticamente.');
  }

  frenar() {
    console.log('La bicicleta frena.');
  }
}

// Ejemplo de código que falla con LSP
function testLSP(vehiculo) {
  vehiculo.acelerar();
  vehiculo.frenar();
}

const coche = new Coche();
const bicicleta = new Bicicleta();

testLSP(coche); // Funciona correctamente
testLSP(bicicleta); // Error: Las bicicletas no pueden acelerar automáticamente

// Subclase que cumple con LSP
class Bicicleta2 extends Vehiculo {
  acelerar() {
    console.log('La bicicleta se mueve más rápido.');
  }

  frenar() {
    console.log('La bicicleta frena.');
  }
}

// Subclase que cumple con LSP
class Motocicleta extends Vehiculo {
  acelerar() {
    console.log('La motocicleta acelera rápidamente.');
  }

  frenar() {
    console.log('La motocicleta frena.');
  }
}

const coche1 = new Coche();
const bicicleta1 = new Bicicleta2();
const motocicleta = new Motocicleta();

testLSP(coche1); // "El coche acelera.", "El coche frena."
testLSP(bicicleta1); // "La bicicleta se mueve más rápido.", "La bicicleta frena."
testLSP(motocicleta); // "La motocicleta acelera rápidamente.", "La motocicleta frena."
