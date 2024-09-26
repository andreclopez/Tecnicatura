import Usuario from "./class/Usuario.js";

// Crear un usuario 
let ingresoUsuario = Usuario.crear('Andrea', 39, 'andhy.lopez.090@gmail.com');

// Mostrar info consola
console.log(`Nombre: ${ingresoUsuario.nombre}, Edad: ${ingresoUsuario.edad}, Email: ${ingresoUsuario.email}`);

// Cambio de PIN
let cambioExitoso = ingresoUsuario.cambiarPin('2558', '2568');
console.log(cambioExitoso?'El PIN se ha cambiao exitosamente.' : 'El PIN actual es incorrecto')