// Escribe una función que reciba un array de números y devuelva un
// nuevo array con solo los números pares. Muestra el array 
// resultante en un elemento HTML.

// Definición de array de números 

// let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] (Actualizado)

// Definición de la función

function filtrarPares (array) {
    
    return array.filter(numero => numero % 2 === 0);

}

// Llamando a la función (Actualizado)

// let numerosPares = filtrarPares (arrayNum); (Actualizado)

// Aquí muestro el resultado en un elemento HTML (Actualizado)

// let salida = document.getElementById("resultado") (Actualizado)

// salida.innerHTML = `Los siguientes son números pares: ${numerosPares}`; (Actualizado)

document.getElementById('botonFiltrar').addEventListener('click', () => {
    // obtenr texto
    let numerosPares = document.getElementById('filtrarNumeros').value;
    let array = numerosPares.split(',');

    // mostrar array resultado
    document.getElementById("resultado").innerHTML=filtrarPares(array)

});