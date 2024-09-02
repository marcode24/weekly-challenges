/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
class Library {
  constructor() {
    this.books = [];
    this.users = [];
    this.loans = [];
  }

  addBook(title, author, copies) {
    this.books.push({ title, author, copies });
  }

  addUser(name, id, email) {
    this.users.push({ name, id, email });
  }

  loanBook(userId, bookTitle) {
    const user = this.users.find((u) => u.id === userId);
    const book = this.books.find((b) => b.title === bookTitle);

    if (user && book && book.copies > 0) {
      this.loans.push({ userId, bookTitle, date: new Date() });
      book.copies -= 1;
    } else {
      console.log('No se puede procesar el préstamo.');
    }
  }

  returnBook(userId, bookTitle) {
    const loanIndex = this.loans.findIndex(
      (loan) => loan.userId === userId && loan.bookTitle === bookTitle,
    );

    if (loanIndex > -1) {
      this.loans.splice(loanIndex, 1);
      const book = this.books.find((b) => b.title === bookTitle);
      book.copies += 1;
    } else {
      console.log('No se puede procesar la devolución.');
    }
  }
}

// Dificultad extra
// Clase para gestionar libros
class Book {
  constructor(title, author, copies) {
    this.title = title;
    this.author = author;
    this.copies = copies;
  }
}

class BookManager {
  constructor() {
    this.books = [];
  }

  addBook(title, author, copies) {
    this.books.push(new Book(title, author, copies));
  }

  findBook(title) {
    return this.books.find((book) => book.title === title);
  }
}

// Clase para gestionar usuarios
class User {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(name, id, email) {
    this.users.push(new User(name, id, email));
  }

  findUser(id) {
    return this.users.find((user) => user.id === id);
  }
}

// Clase para gestionar préstamos
class LoanManager {
  constructor() {
    this.loans = [];
  }

  loanBook(userManager, bookManager, userId, bookTitle) {
    const user = userManager.findUser(userId);
    const book = bookManager.findBook(bookTitle);

    if (user && book && book.copies > 0) {
      this.loans.push({ userId, bookTitle, date: new Date() });
      book.copies -= 1;
      console.log(`Préstamo procesado: ${bookTitle} para ${user.name}`);
    } else {
      console.log('No se puede procesar el préstamo.');
    }
  }

  returnBook(userManager, bookManager, userId, bookTitle) {
    const loanIndex = this.loans.findIndex(
      (loan) => loan.userId === userId && loan.bookTitle === bookTitle,
    );

    if (loanIndex > -1) {
      this.loans.splice(loanIndex, 1);
      const book = bookManager.findBook(bookTitle);
      book.copies += 1;
      console.log(`Devolución procesada: ${bookTitle} de ${userId}`);
    } else {
      console.log('No se puede procesar la devolución.');
    }
  }
}

// Uso del sistema refactorizado
const bookManager = new BookManager();
const userManager = new UserManager();
const loanManager = new LoanManager();

bookManager.addBook('El Quijote', 'Miguel de Cervantes', 3);
userManager.addUser('Juan Pérez', 1, 'juan.perez@example.com');

loanManager.loanBook(userManager, bookManager, 1, 'El Quijote');
loanManager.returnBook(userManager, bookManager, 1, 'El Quijote');
