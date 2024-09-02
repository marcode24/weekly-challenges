/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
// Interfaz grande que no cumple con ISP
class Impresora {
  imprimir() {}

  escanear() {}

  enviarFax() {}
}

// Implementación incorrecta: Impresora Blanco y Negro
class ImpresoraBlancoNegro extends Impresora {
  imprimir() {
    console.log('Imprimiendo en blanco y negro...');
  }

  escanear() {
    throw new Error('Esta impresora no puede escanear.');
  }

  enviarFax() {
    throw new Error('Esta impresora no puede enviar fax.');
  }
}

// Implementación incorrecta: Impresora Color
class ImpresoraColor extends Impresora {
  imprimir() {
    console.log('Imprimiendo a color...');
  }

  escanear() {
    throw new Error('Esta impresora no puede escanear.');
  }

  enviarFax() {
    throw new Error('Esta impresora no puede enviar fax.');
  }
}

// Uso incorrecto
const impresoraBN = new ImpresoraBlancoNegro();
impresoraBN.imprimir(); // Funciona correctamente
impresoraBN.escanear(); // Error: Esta impresora no puede escanear.

// Dificultad extra
// Interfaces pequeñas que cumplen con ISP
class Imprimible {
  imprimir() {}
}

class Escaneable {
  escanear() {}
}

class Faxeable {
  enviarFax() {}
}

// Implementación correcta: Impresora Blanco y Negro
class ImpresoraBlancoNegro2 extends Imprimible {
  imprimir() {
    console.log('Imprimiendo en blanco y negro...');
  }
}

// Implementación correcta: Impresora Color
class ImpresoraColor2 extends Imprimible {
  imprimir() {
    console.log('Imprimiendo a color...');
  }
}

// Implementación correcta: Impresora Multifunción
class ImpresoraMultifuncion extends Imprimible {
  imprimir() {
    console.log('Imprimiendo en blanco y negro o a color...');
  }
}

// Implementa interfaces adicionales para funciones de escaneo y fax
class ImpresoraMultifuncion2 extends Imprimible {
  imprimir() {
    console.log('Imprimiendo en blanco y negro o a color...');
  }
}

class ImpresoraMultifuncionEscanear extends ImpresoraMultifuncion {
  escanear() {
    console.log('Escaneando documento...');
  }
}

class ImpresoraMultifuncionFax extends ImpresoraMultifuncion {
  enviarFax() {
    console.log('Enviando fax...');
  }
}

// Uso correcto
const impresoraBN2 = new ImpresoraBlancoNegro2();
impresoraBN2.imprimir(); // Funciona correctamente

const impresoraColor = new ImpresoraColor2();
impresoraColor.imprimir(); // Funciona correctamente

const impresoraMulti = new ImpresoraMultifuncion2();
impresoraMulti.imprimir(); // Funciona correctamente

const impresoraMultiEscanear = new ImpresoraMultifuncionEscanear();
impresoraMultiEscanear.imprimir(); // Funciona correctamente
impresoraMultiEscanear.escanear(); // Funciona correctamente

const impresoraMultiFax = new ImpresoraMultifuncionFax();
impresoraMultiFax.imprimir(); // Funciona correctamente
impresoraMultiFax.enviarFax(); // Funciona correctamente
