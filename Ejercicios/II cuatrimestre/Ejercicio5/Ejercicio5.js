// Crea una función que tome un array de números y devuelva el promedio de estos.
// Muestra el resultado en un elemento HTML.

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Definición de la función

function CalculoPromedio (arrayNumbers) {
    if (arrayNumbers.length === 0) return 0;
    let suma = 0;

    arrayNumbers.forEach(numero => {

        suma += numero;
        
    });

    return suma / arrayNumbers.length;
}

// Aquí llamo a la función 

let promedio = CalculoPromedio(arrayNumbers)

// Aquí muestro el resultado en un elemento html

let salida = document.getElementById("resultado")
salida.innerHTML = `El promedio es igual a: ${promedio}`