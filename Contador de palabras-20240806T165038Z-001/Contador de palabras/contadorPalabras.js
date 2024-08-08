// Función que toma un array de strings y un string de búsqueda, y devuelve el número de ocurrencias
function contarOcurrencias(array, busqueda) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === busqueda) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso de la función
let palabras = ["manzana", "banana", "manzana", "pera", "manzana", "naranja"];
let palabraBusqueda = "manzana";
let ocurrencias = contarOcurrencias(palabras, palabraBusqueda);


let resultHTML=document.getElementById("resultado");
resultHTML.innerHTML= ocurrencias;



// Mostrar el resultado en el elemento HTML con id 'resultado'
//document.getElementById("resultado").textContent = "La palabra '" + palabraBusqueda + "' aparece " + ocurrencias + " veces en el array.";

