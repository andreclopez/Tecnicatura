// Crea una función que tome un array de números y devuelva la suma de 
// todos sus elementos. Luego, muestra el resultado en un elemento HTML.

// Esta es la función que toma el array de números y devuelve la suma

function calcularSuma(arrayASumar) {
    let suma = 0;
    for (let i = 0; i < arrayASumar.length; i++) {
        suma += parseFloat(arrayASumar[i]);
    }

    return suma;
}

document.getElementById('botonSumar').addEventListener('click', () => {
    // obtenr texto
    let numeros = document.getElementById('numerosASumar').value;
    let arrayASumar = numeros.split(',');

    // mostrar array resultado
    document.getElementById("resultado").innerHTML=calcularSuma(arrayASumar)

});

