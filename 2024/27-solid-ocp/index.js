/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
class Calculator1 {
  calculate(operation, a, b) {
    switch (operation) {
      case 'sum':
        return a + b;
      case 'sub':
        return a - b;
      case 'mul':
        return a * b;
      case 'div':
        return a / b;
      default:
        throw new Error('Operación no soportada');
    }
  }
}

const calculator1 = new Calculator1();
console.log(calculator1.calculate('sum', 5, 3)); // 8
console.log(calculator1.calculate('div', 10, 2)); // 5

// Para agregar una nueva operación, por ejemplo, potencia, tendríamos que modificar la clase Calculator:
// console.log(calculator1.calculate('pow', 2, 3)); // Error: Operación no soportada

// Dificultad extra

class Operation {
  calculate() {
    throw new Error('El método calculate debe ser implementado');
  }
}

// Implementaciones específicas para cada operación
class SumOperation extends Operation {
  calculate(a, b) {
    return a + b;
  }
}

class SubOperation extends Operation {
  calculate(a, b) {
    return a - b;
  }
}

class MulOperation extends Operation {
  calculate(a, b) {
    return a * b;
  }
}

class DivOperation extends Operation {
  calculate(a, b) {
    if (b === 0) throw new Error('No se puede dividir por 0');

    return a / b;
  }
}

// Sistema principal que gestiona las operaciones
class Calculator {
  constructor() {
    this.operations = {};
  }

  addOperation(name, operation) {
    this.operations[name] = operation;
  }

  calculate(name, a, b) {
    const operation = this.operations[name];
    if (!operation) throw new Error('Operación no soportada');

    return operation.calculate(a, b);
  }
}

// Uso de la calculadora con el principio OCP
const calculator = new Calculator();
calculator.addOperation('sum', new SumOperation());
calculator.addOperation('sub', new SubOperation());
calculator.addOperation('mul', new MulOperation());
calculator.addOperation('div', new DivOperation());

console.log(calculator.calculate('sum', 5, 3)); // 8
console.log(calculator.calculate('div', 10, 2)); // 5

// Agregando una nueva operación (potencia) sin modificar el código existente
class PowOperation extends Operation {
  calculate(a, b) {
    return a ** b;
  }
}

calculator.addOperation('pow', new PowOperation());
console.log(calculator.calculate('pow', 2, 3)); // 8
