// Crea una función que tome un array de números y devuelva la suma de 
// todos sus elementos. Luego, muestra el resultado en un elemento HTML.

// Array de números

let arraySuma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Esta es la función que toma el array de números y devuelve la suma

function obtenerSuma(arraySuma) {

    let suma = 0;

    for (let i = 0; i < arraySuma.length; i++) {

        suma += arraySuma[i];
    }

    return suma;

}

// Para llamar a la función

let resultado = obtenerSuma(arraySuma)

// Aquí se muestra el resultado en un elemento HTML

let suma = obtenerSuma(array=arraySuma)

let salida = document.getElementById("resultado")

salida.innerHTML = 'El resultado de la suma es: ' + resultado