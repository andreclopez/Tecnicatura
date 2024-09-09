// Escribe una función que reciba un array de números y los ordene de forma
// ascendente. Muestra el resultado en un elemento HTML.

// Primera opcion de solucion

// let arrayNumeros = [1, 5, 6, 8, 12, 16, 20, 50, 60, 65, 87, 2, 26] 

// let arrayAuxiliar = []
// let arrayAxiliar1 = []
// let arrayOrdenado = []
// let numeroMenor = null;

// arrayAuxiliar = arrayNumeros;

// for (let i = 0; i < arrayNumeros.length; i++) {

//    arrayNumeros.forEach (numero => {
//        if (numero < numeroMenor || numeroMenor === null) {
//            numeroMenor = numero
//        }
//    })

//    arrayOrdenado.push(numeroMenor)

//    arrayAuxiliar1 = arrayAuxiliar
//    arrayAuxiliar = []

//    arrayAuxiliar.forEach (numero => {
//        if(numero != numeroMenor) {
//           arrayNumeros.push(numero)
//        }
//    })

//    arrayOrdenado.push(numeroMenor)
// }

// Segunda opcion

function ordenarAscendente(arrayDesordenado) {
    return arrayDesordenado.sort((a, b) => a - b);
}

document.getElementById('botonOrdenarCadena').addEventListener('click', () => {
    // obtener resultado
    let numerosDesordenados = document.getElementById('cadenaDesordenada').value;
    let arrayDesordenado = numerosDesordenados.split(';').map(Number); // Convertir a números

    // mostrar resultado
    document.getElementById("resultado").innerHTML = ordenarAscendente(arrayDesordenado).join(';'); // Convertir de nuevo a cadena
});