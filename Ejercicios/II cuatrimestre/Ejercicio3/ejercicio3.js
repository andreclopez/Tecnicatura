// Crea una función que tome un array de strings y un string de 
// búsqueda, y devuelva el número de veces que el string de búsqueda
// aparece en el array. Muestra el resultado en un elemento HTML.

// Definición del array (Actualizado)

// let arrayString = ["agua con gas", "agua sin gas", "agua saborizada", "gaseosa cola", "gaseosa lima", "agua con gas", "gaseosa cola", "agua saborizada", "agua con gas", "gaseosa lima", "agua sin gas", "gaseosa cola", "agua saborizada", "agua sin gas"]

// let buscar = "agua con gas"

// Definición de la función 

function contarOcurrencias(array, buscar) {

    let ocurrencias = 0;

    array.forEach(item => {
        if (item === buscar) {

            ocurrencias++;

        }
        
    });
    return ocurrencias;
}


// Aquí llamo a la función (Actualizado)

// let ocurrencias = contarOcurrencias(arrayString, buscar);

// Para mostrar el resultado en un elemento HTML (Actualizado)

// let salida = document.getElementById("resultado")

// salida.innerHTML=`<b> Palabra buscada: </b> ${buscar}, <b> Ocurrencia: </b> ${ocurrencias}`

document.getElementById('botonContarOcurrencias').addEventListener('click', () => {
    // obtener texto
    let palabras = document.getElementById('contarOcurrencias').value;
    let arrayPalabras = palabras.split(',');

    let buscar = document.getElementById('buscar').value;

    console.log(arrayPalabras);
    console.log(buscar);

    // mostrar resultado
    document.getElementById("resultado").innerHTML=contarOcurrencias(arrayPalabras, buscar)

})