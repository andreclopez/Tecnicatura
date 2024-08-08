 // Función que toma un array y devuelve la suma de sus elementos
 function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// Ejemplo de uso de la función
let numeros = [1, 2, 3, 4, 5];
let resultadoSuma = sumarArray(numeros);
console.log(resultadoSuma)


// Mostrar el resultado en el elemento HTML con id 'resultado'
document.getElementById("resultado").textContent = "La suma de los elementos es: " + resultadoSuma;
