/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpyt()) {
      return 'La pila esta vacia';
    }
    return this.items.pop();
  }

  isEmpyt() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpyt()) {
      return 'La cola esta vacia';
    }
    return this.items.shift();
  }

  isEmpyt() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const pila = new Stack();
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila.pop()); // 3
console.log(pila.pop()); // 2

const cola = new Queue();
cola.enqueue('a');
cola.enqueue('b');
cola.enqueue('c');
console.log(cola.dequeue()); // a
console.log(cola.dequeue()); // b

class Navegador {
  constructor() {
    this.history = new Stack();
    this.future = new Stack();
    this.currentPage = null;
  }

  // navegar a una nueva pagina
  goToPage(page) {
    if (this.currentPage !== null) {
      this.history.push(this.currentPage);
    }
    this.currentPage = page;
    this.future.clear();
    console.log('Pagina actual: ', this.currentPage);
  }

  // retroceder a la pagina anterior
  goBack() {
    if (this.history.isEmpyt()) {
      console.log('No hay paginas anteriores');
      return;
    }
    this.future.push(this.currentPage);
    this.currentPage = this.history.pop();
    console.log('Pagina actual: ', this.currentPage);
  }

  // avanzar a la pagina siguiente
  goForward() {
    if (this.future.isEmpyt()) {
      console.log('No hay paginas siguientes');
      return;
    }
    this.history.push(this.currentPage);
    this.currentPage = this.future.pop();
    console.log('Pagina actual: ', this.currentPage);
  }
}

const navegador = new Navegador();
navegador.goToPage('google.com');
navegador.goToPage('facebook.com');
navegador.goToPage('twitter.com');
navegador.goBack(); // regresa a facebook.com
navegador.goBack(); // regresa a google.com
navegador.goForward(); // avanza a facebook.com
navegador.goToPage('instagram.com'); // instagram.com
navegador.goBack(); // regresa a facebook.com
navegador.goForward(); // avanza a instagram.com
