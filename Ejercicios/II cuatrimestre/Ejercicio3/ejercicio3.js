// Crea una función que tome un array de strings y un string de 
// búsqueda, y devuelva el número de veces que el string de búsqueda
// aparece en el array. Muestra el resultado en un elemento HTML.

// Definición del array

let arrayString = ["agua con gas", "agua sin gas", "agua saborizada", "gaseosa cola", "gaseosa lima", "agua con gas", "gaseosa cola", "agua saborizada", "agua con gas", "gaseosa lima", "agua sin gas", "gaseosa cola", "agua saborizada", "agua sin gas"]

let buscar = "agua con gas"

// Definición de la función 

function contarOcurrencias(array, buscar) {

    let contador = 0;

    for (let i = 0; i < array.length; i++) {

       if (array[i] === buscar) {

        contador++;

       }
        
    }

    return contador
}

// Aquí llamo a la función 

let ocurrencias = contarOcurrencias(arrayString, buscar);

// Para mostrar el resultado en un elemento HTML

let salida = document.getElementById("resultado")

salida.innerHTML=`<b> Palabra buscada: </b> ${buscar}, <b> Ocurrencia: </b> ${ocurrencias}`
