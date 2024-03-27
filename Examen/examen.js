// Crear una función que reciba como parámetro una nota y retorne 
// una de estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en 
// dependencia de: Nota es menor a 4 - LIBRE, Nota es menor a 7 y no es 
// LIBRE - REGULAR Nota mayor que 6  - PROMOCIONADO.

console.log("Ejercicio simulacro")

let nota = parseInt(prompt("Ingrese nota"))

if (nota <= 4) {

    console.log("Condición LIBRE")

} else if (nota > 4 && nota <= 7) {

    console.log("Condición REGULAR")

} else if (nota > 7 && nota <= 10) {

    console.log("Condición PROMOCIONADO")

} if(nota < 1 && nota > 10) {

    console.log("Ingrese una nota válida entre 0 y 10")
}
