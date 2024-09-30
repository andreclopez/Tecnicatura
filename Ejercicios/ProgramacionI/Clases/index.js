import Usuario from "./class/Usuario.js";

// Crear un usuario 
let ingresoUsuario = Usuario.crear('Andrea', 39, 'andhy.lopez.090@gmail.com');

document.getElementById("cambioPin").addEventListener("submit", function(event) {
    let pinActual = document.getElementById('pinActual').value;
    let nuevoPin = document.getElementById('nuevoPin').value;
    let nuevoPin1 = document.getElementById('nuevoPin1').value;

    if (nuevoPin !== nuevoPin1) {
        alert('Ambos PINS deben ser iguales. Por favor, verifique la información.')
    }

    let cambioSolicitado = ingresoUsuario.cambiarPin(pinActual, nuevoPin);
    if (cambioSolicitado) {
        alert('El PIN ha sido modificado de forma exitosa.');
    } else {
        alert('El PIN actual es incorrecto. Por favor, verifique la información.');
    }

});