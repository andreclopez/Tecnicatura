// Crear una función que reciba como parámetro una nota y retorne 
// una de estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en 
// dependencia de: Nota es menor a 4 - LIBRE, Nota es menor a 7 y no es 
// LIBRE - REGULAR Nota mayor que 6  - PROMOCIONADO.

console.log("Ejercicio simulacro")

function condicionAlumno(nota){

    if(nota < 4) {
        return "LIBRE"
    } else if (nota < 7) {
        return "REGULAR"
    } else if (nota > 6) {
        return "PROMOCIONADO"
}
}

let nota = parseInt(prompt("Ingrese nota"))

console.log(condicionAlumno(nota))

// Sin funcion 

console.log("Alternativa sin función")

let calificacion = nota;

if(nota > 1 && nota < 4){

    console.log("LIBRE")
}

if(nota > 4 && nota < 7){

    console.log("REGULAR")
}

if(nota <= 10 && nota > 6){

    console.log("PROMOCIONADO")
}

if(nota > 10){

    console.log("Ingrese una nota válida")
}

if(nota < 1){

    console.log("Ingrese uan nota válida")
}