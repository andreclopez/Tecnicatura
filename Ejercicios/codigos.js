// 41. Crea una variable llamada `nombre` y asígnale tu nombre. 
// Luego, muestra el valor de la variable en la consola.

console.log("---- EJ 41 ----")

let nombre = "Andrea";
console.log(nombre);

// 42. Define una variable llamada `edad` y asígnale tu edad. Luego, muestra 
// un mensaje que diga "Tienes X años" en la consola, reemplazando X con el 
// valor de la variable.

console.log("---- EJ 42 ----")

let edad = 39;

console.log("Tienes",edad,"años");

// 43. Crea una variable llamada `esEstudiante` y asígnale `true` 
// si eres estudiante o `false` si no lo eres. Luego, muestra un mensaje
// que diga "Eres estudiante" o "No eres estudiante" en la consola 
// según el valor de la variable.

console.log("---- EJ 43 ----")

let esEstudiante = true;

if(esEstudiante == true)
{
    console.log("Eres estudiante");
}
else{
    console.log("No eres estudiante")
}

// 44. Crea una variable llamada `fruta` y asígnale el nombre de tu fruta 
// favorita. Luego, muestra un mensaje que diga "Mi fruta favorita es 
// [nombre de la fruta]" en la consola.

console.log("---- EJ 44 ----")

let fruta = "Mandarina";

console.log("Mi fruta favorita es " + fruta);

// 45. Define una variable llamada `numero1` y otra llamada `numero2`. 
// Realiza una operación aritmética (suma, resta, multiplicación o división)
// con estas variables y muestra el resultado en la consola.

console.log("---- EJ 45 ----")

let numero1 = 25;

let numero2 = 40;

console.log("El resultado de multiplicar ambos números es", numero1 * numero2);

// 46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor 
// en grados Celsius. Convierte esta temperatura a grados Fahrenheit utilizando
// la fórmula `F = (C *9/5) + 32` y muestra el resultado en la consola.

console.log("---- EJ 46 ----")

let temperaturaCelsius = 35;

let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

console.log(temperaturaFahrenheit)

// 47. Define una variable llamada `precioProducto` y otra llamada 
// `cantidadComprada`.Calcula el costo total de la compra multiplicando 
// estas variables y muestra el resultado en la consola.

console.log("---- EJ 47 ----")

let precioProducto = 90;

let cantidadComprada = 15;

let costoTotalCompra = precioProducto * cantidadComprada;

console.log(" El costo total de tu compra es: $" + costoTotalCompra)

// 48. Crea una variable llamada `radio` y asígnale el radio de un círculo. 
// Calcula el área del círculo utilizando la fórmula `A = π * r^2` y muestra 
// el resultado en la consola.

console.log("---- EJ 48 ----")

let radio = 5;

const PI = 3.1416;

let area = (PI * radio ^ 2);

console.log(`El área del circulo con radio ${radio}, es: ${area}`)

// 49. Define una variable llamada `num1` y otra llamada `num2`. Escribe una
// expresión que verifique si `num1` es mayor que `num2` y muestra el 
// resultado (true o false) en la consola.

console.log("---- EJ 49 ----")

let num1 = 95;

let num2 = 20;

let esMayor = num1 > num2; 

console.log(esMayor)

// 50. Crea una variable llamada `cadena1` y otra llamada `cadena2`.
// Concatena estas dos cadenas utilizando el operador `+` y muestra la 
// cadena resultante en la consola.

console.log("---- EJ 50 ----")

let cadena1 = "Bienvenidos ";

let cadena2 = "estudiantes";

console.log(cadena1 + cadena2)

// 51. Crea una variable llamada `edad` y asigna un valor numérico. 
// Escribe una condición que verifique si la persona es mayor de 18 años y 
// muestra un mensaje en la consola, como "Eres mayor de edad", si se cumple
// la condición.

console.log("---- EJ 51 ----")

let edad1 = 25;

if( edad >= 18)
{
    console.log("Eres mayor de edad")
}else {
    console.log("No eres mayor de edad")
}

// 52. Define una variable llamada `puntuacion` y asigna un valor numérico 
// entre 0 y 100. Utiliza una estructura condicional `if...else` para mostrar
// un mensaje en la consola que indique si la puntuación es "Aprobada" 
// (si es mayor o igual a 60) o "Reprobada" (si es menor a 60).

console.log("---- EJ 52 ----")

let puntuacion = 66

if ( puntuacion >= 60)
{
    console.log("Aprobado")
}else {
    console.log("Reprobado")
}

// 53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día 
// de la semana. Utiliza una declaración `switch` para mostrar un mensaje que 
// indique si es un "Día laboral" o "Fin de semana" en función del valor de 
// `diaSemana`.

console.log("---- EJ 53 ----")

let diaSemana = "martes"

switch( diaSemana )
{
    case "lunes":

    case "martes":
    
    case "miércoles":

    case "jueves":

    case "viernes":
        console.log("Día laboral")
        break;

    case "sábado":
    
    case "domingo":
        console.log("Fin de semana")
        break;

    default:
        console.log("Ingrese un día de la semana válido")    
}

// 54. Define dos variables, `numero1` y `numero2`, y realiza una comparación
// para determinar cuál de los dos números es mayor. Luego, muestra el número 
// mayor en la consola.

console.log("---- EJ 54 ----")

let number1 = 50;

let number2 = 20;

if( number1 > number2){

    console.log(number1)

}else{

    if(number1 < number2);

    console.log(number2)
    
} if(number1 == number2){

    console.log("Ambos números son iguales")
}

// 55. Crea una variable llamada `color` y asígnale el nombre de un color. 
// Utiliza una serie de declaraciones `if...else if` para determinar si el 
// color es "Rojo," "Verde," o "Azul," y muestra un mensaje correspondiente 
// en la consola.

console.log("---- EJ 55 ----")

let color = "Azul";

if( color == "Rojo"){

    console.log("El color es rojo")
    
}else{
    
} if(color == "Verde"){

        console.log("El color es verde")

}
if(color == "Azul"){

    console.log("El color es azul")
}

// 56. Crea una variable llamada `calificacion` y asígnale un valor numérico
// entre 0 y 100. Utiliza una estructura condicional `if...else if...else` 
// para mostrar en la consola si la calificación es "Excelente," "Aprobado," o 
// "Reprobado" según un rango de calificaciones.

console.log("---- EJ 56 ----")

let calificacion = 65;


if(calificacion == 100){

    console.log("Excelente")

}else{

}if(calificacion => 60){

    console.log("Aprobado")

}if(calificacion <= 59){

    console.log("Reprobado")
}

// 57. Define una variable `numero` y verifica si es positivo, negativo o 
// igual a cero utilizando una declaración `if` y muestra el resultado en la 
// consola.

console.log("---- EJ 57 ----")

let numero_ = 40;

if(numero_ == 0){

    console.log("El número es 0")

}else{

}if(numero_ > 0){

    console.log("Positivo")

}if(numero_ < 0){

    console.log("Negativo")
}

// 58. Escribe una función llamada `esPar` que tome un número como 
// argumento y retorne `true` si es par o `false` si es impar. Luego,
// muestra el resultado en la consola.

console.log("---- EJ 58 ----")

function esPar(numero) {
    
    let resto = numero % 2;

    return resto == 0;

}

let entrada = prompt("Indica el número")

console.log('El numero', (entrada), 'es par?', (esPar(entrada)))

// 59. Crea una variable `hora` y asígnale una hora en formato de 24 
// horas. Escribe una estructura condicional para mostrar "Buenos días",
// "Buenas tardes" o "Buenas noches" en función de la hora.

console.log("---- EJ 59 ----")

let hora = prompt("Ingrese hora")

if(hora >= 0 && hora < 13 ){

    console.log("Buen día")
}else if(hora >= 13 && hora < 19){

    console.log("Buenas tardes")
}else if(hora >= 19 && hora <= 24){

    console.log("Buenas noches")
}else {

    console.log("No es una hora válida")
}


// 60. Define tres variables `lado1`, `lado2` y `lado3` que representen
// las longitudes de los lados de un triángulo. Escribe una estructura 
// condicional para determinar si el triángulo es equilátero (todos los 
// lados iguales), isósceles (dos lados iguales), o escaleno (ningún 
// lado igual).

// console.log("---- EJ 60 ----")


// Enunciado: mostrar num pares e impares del 1 al 10

// for (let i = 1 ; i ≤ 10 : i = i +1 ){

//  console.log("El numero " + i + "es par");
    
//  console.log("El numero " + i + "es impar");
//  }
    


