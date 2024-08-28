// Escribe una función que reciba un array de números y los ordene de forma
// ascendente. Muestra el resultado en un elemento HTML.

let arrayNumeros = [1, 5, 6, 8, 12, 16, 20, 50, 60, 65, 87, 2, 26]

let arrayAuxiliar = []
let arrayAxiliar1 = []
let arrayOrdenado = []
let numeroMenor = null;

arrayAuxiliar = arrayNumeros;

for (let i = 0; i < arrayNumeros.length; i++) {

    arrayNumeros.forEach (numero => {
        if (numero < numeroMenor || numeroMenor === null) {
            numeroMenor = numero
        }
    })

    arrayOrdenado.push(numeroMenor)

    arrayAuxiliar1 = arrayAuxiliar
    arrayAuxiliar = []

    arrayAuxiliar.forEach (nuemro => {
        if(numero != numeroMenor) {
            arrayNumeros.push(numero)
        }
    })

    arrayOrdenado.push(numeroMenor)
}