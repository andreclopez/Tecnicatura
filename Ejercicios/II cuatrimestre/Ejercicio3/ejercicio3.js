let arrayStrings = ['remera', 'camisa', 'bermuda', 'remera', 'jeans', 'camisa', 'jeans', 'remera', 'jeans', 'remera', 'jeans', 'remera', 'jeans', 'pantalon']

let buscar = 'camisa'


function obtenerOcurrencias(array, clave) {
    let ocurrencias = 0;

    array.forEach(item => {

        if (item === clave) {

            ocurrencias++;

        }

    })

    return ocurrencias;
}
let ocurrencias = obtenerOcurrencias(array=arrayStrings, clave=buscar)

let salida = document.getElementById("resultado")

salida.innerHTML = `Palabra buscada: ${buscar}, Ocurrencias: ${ocurrencias}`