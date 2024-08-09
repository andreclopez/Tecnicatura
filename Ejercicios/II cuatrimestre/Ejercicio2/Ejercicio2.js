// Escribe una función que reciba un array de números y devuelva un
// nuevo array con solo los números pares. Muestra el array 
// resultante en un elemento HTML.

// Definición de array de números

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Definición de la función

function filtrarPares (array) {
    
    return array.filter(numero => numero % 2 === 0);

}

// Llamando a la función

let numerosPares = filtrarPares (arrayNum);

// Aquí muestro el resultado en un elemento HTML

let salida = document.getElementById("resultado")

salida.innerHTML = `Los siguientes son números pares: ${numerosPares}`;