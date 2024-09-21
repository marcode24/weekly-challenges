/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-constructor-return */

class Singleton {
  private static instance: Singleton;
  private value: number;

  private constructor() {
    // Inicializa los atributos del Singleton aquí
    this.value = Math.ceil(Math.random() * 1000);
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getValue(): number {
    return this.value;
  }
}

// Prueba del Singleton
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1.getValue()); // Imprime el valor del primer Singleton
console.log(singleton2.getValue()); // Imprime el mismo valor, ya que singleton1 y singleton2 son la misma instancia
console.log(singleton1 === singleton2); // true, ambas variables referencian a la misma instancia

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}

class UserSession {
  private static instance: UserSession;
  private user: User | null = null; // Usuario no asignado inicialmente

  private constructor() {}

  static getInstance(): UserSession {
    if (!UserSession.instance) {
      UserSession.instance = new UserSession();
    }
    return UserSession.instance;
  }

  // Asigna un usuario a la sesión
  setUser(id: number, username: string, name: string, email: string): void {
    this.user = {
      id,
      username,
      name,
      email,
    };
  }

  // Recupera los datos del usuario
  getUser(): User | null {
    return this.user;
  }

  // Borra los datos de la sesión
  clearUser(): void {
    this.user = null;
  }
}

// Prueba del Singleton en la gestión de sesiones
const session1 = UserSession.getInstance();
session1.setUser(1, "marcode24", "Marco Cruz", "emailTest@gmail.com");

console.log(session1.getUser()); // Imprime el usuario asignado

const session2 = UserSession.getInstance();
console.log(session2.getUser()); // También imprime el usuario asignado, ya que session1 y session2 son la misma instancia

session2.clearUser();
console.log(session1.getUser()); // null, ya que el usuario ha sido borrado en la misma instancia
