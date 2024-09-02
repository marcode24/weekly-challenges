/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-constructor-return */
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Inicializa los atributos del Singleton aquí
    this.value = Math.ceil(Math.random() * 1000);
    Singleton.instance = this;
  }

  getValue() {
    return this.value;
  }
}

// Prueba del Singleton
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1.getValue()); // Imprime el valor del primer Singleton
console.log(singleton2.getValue()); // Imprime el mismo valor, ya que singleton1 y singleton2 son la misma instancia
console.log(singleton1 === singleton2); // true, ambas variables referencian a la misma instancia

class UserSession {
  constructor() {
    if (UserSession.instance) {
      return UserSession.instance;
    }

    this.user = null; // Usuario no asignado inicialmente
    UserSession.instance = this;
  }

  // Asigna un usuario a la sesión
  setUser(id, username, name, email) {
    this.user = {
      id, username, name, email,
    };
  }

  // Recupera los datos del usuario
  getUser() {
    return this.user;
  }

  // Borra los datos de la sesión
  clearUser() {
    this.user = null;
  }
}

// Prueba del Singleton en la gestión de sesiones
const session1 = new UserSession();
session1.setUser(1, 'marcode24', 'Marco Cruz', 'emailTest@gmail.com');

console.log(session1.getUser()); // Imprime el usuario asignado

const session2 = new UserSession();
console.log(session2.getUser()); // También imprime el usuario asignado, ya que session1 y session2 son la misma instancia

session2.clearUser();
console.log(session1.getUser()); // null, ya que el usuario ha sido borrado en la misma instancia
