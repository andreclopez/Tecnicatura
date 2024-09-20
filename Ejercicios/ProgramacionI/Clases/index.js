import Usuario from "./class/Usuario.js";

// Crear un usuario 
let ingresoUsuario = Usuario.crear('Andrea', 39, 'andhy.lopez.090@gmail.com', '1234');

// Mostrar info consola
console.log(`Nombre: ${ingresoUsuario.nombre}, Edad: ${ingresoUsuario.edad}, Email: ${ingresoUsuario.email}`);