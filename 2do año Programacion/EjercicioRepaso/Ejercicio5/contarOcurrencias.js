// Crea una función llamada contarOcurrencias que reciba un array y un valor,
// y retorne cuántas veces aparece ese valor en el array.

function contarOcurrencias(array, buscar) {

    let ocurrencias = 0;

    array.forEach(item => {
        if (item === buscar) {

            ocurrencias++;

        }
        
    });
    return ocurrencias;
}
const array1 = [1, 2, 3, 1, 4, 1];
const array2 = ["a", "b", "a", "c", "a"];
const buscar = "a";
console.log(contarOcurrencias(array1, buscar)); // 3
console.log(contarOcurrencias(array2, buscar)); // 3

// function contarOcurrencias(arrayValores, valor) {
// arrayValores.filter(val => val === valor).length
//}

// Con reduce:
// return arrayValores.reduce((ocurrencias, val) +> ) {
// if ( val === valor) {
//    ocurrencias ++
// }
// return ocurrencias
// }, 0)
