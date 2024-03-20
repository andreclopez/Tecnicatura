// Crea una variable llamada `nombre` y asígnale tu nombre. 
// Luego, muestra el valor de la variable en la consola.

let nombre = "Andrea";
console.log(nombre);

// Crea una variable llamada `temperaturaCelsius` y asígnale un valor en 
// grados Celsius. Convierte esta temperatura a grados Fahrenheit utilizando 
// la fórmula `F = (C *  9/5) + 32` y muestra el resultado en la consola.

let temperaturaCelsius = 25;

let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

console.log(temperaturaFahrenheit)

// Define una variable llamada `num1` y otra llamada `num2`. 
// Escribe una expresión que verifique si `num1` es mayor que `num2`
// y muestra el resultado (true o false) en la consola.

let num1 = 14;
let num2 = 1215;

let condicion = num1 > num2;

console.log("condicion:",condicion)

if (condicion) [
    console.log('Se cumple la condicion')
] else {
    console.log('No cumple la condicion')
}