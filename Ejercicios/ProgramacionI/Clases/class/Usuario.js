export default class Usuario {

  // propiedad privada
      #pin = '1234'; 
  
  // creación del constructor
    
      constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
  
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}`);
      }
    
  // creación método estático 
    static crear(nombre, edad, email) {
      return new Usuario(nombre, edad, email);
    }

  // creación del método cambiar PIN
    cambiarPin(pinActual, pinNuevo) {
      if (this.#pin === pinActual) {
        this.#pin = pinNuevo;
        return true;
      } else {
        return false;
      }
    }
  }
  