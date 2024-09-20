export default class Usuario {

// propiedad privada
    #pin; 

// creación del onstructor
  
    constructor(nombre, edad, email, pin) {
      this.nombre = nombre;
      this.edad = edad;
      this.email = email;
      this.#pin = pin;

      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}`);
    }
  
// creación método estático 
  static crear(nombre, edad, email, pin) {
    return new Usuario(nombre, edad, email, pin);
  }
}

  

  



