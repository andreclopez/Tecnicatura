import { usuarios } from "../Usuarios/usuarios.js";

// ------- Obtener los usuarios activos ---------
// Crear una función que devuelva todos los usuarios que estén activos (`activo: true`).
// Solucion con filter 
console.log("Ejercicio 1, Usuarios activos");

function filtrarUsuariosActivos(usuarios) {
    return usuarios.filter(usuarios => usuarios.activo);
}

console.log("Usuarios activos:", filtrarUsuariosActivos(usuarios));

console.log("Ejercicio 2, Listado de usuarios: nombre/ciudad")
// Crear una función que devuelva un array con strings del tipo: "Nombre - Ciudad".
// Solucion con reduce

function listadoUsuarios(usuarios) {
    return usuarios.reduce((listado, usuarios) => {
        listado.push(`${usuarios.nombre} - ${usuarios.domicilio.ciudad}`);
        return listado;
    }, []);

}

console.log(listadoUsuarios(usuarios))

console.log("Ejercicio 3, Agrupar usuarios por ciudad");
// --------- Agrupar usuarios por ciudad --------
// Crear una función que agrupe los usuarios por ciudad. El resultado debe ser un objeto cuyas claves sean las ciudades y los valores arrays con los nombres de los usuarios que viven allí.
// solucion con reduce e if 

function agruparPorCiudad(array) {
    return array.reduce((resultado, usuarios) => {
        const { nombre, domicilio } = usuarios;
        const ciudad = domicilio.ciudad;

        if (!resultado[ciudad]) {
            resultado[ciudad] = [];
        }
        resultado[ciudad].push(nombre); 
        return resultado;
    }, {});
}

console.log(agruparPorCiudad(usuarios))

console.log("Ejercicio 4, Promedio de edades")
// --- Calcular el promedio de edad de los usuarios activos ---
// Crear una función que calcule el promedio de edad de los usuarios que están activos.
// Solucion con reduce 

function promedioEdadUsuarios (usuarios) { 
        let sumaEdades = usuarios.reduce((edades, usuarios) => edades + usuarios.edad, 0);
        return sumaEdades / usuarios.length;

}

console.log(promedioEdadUsuarios(usuarios))