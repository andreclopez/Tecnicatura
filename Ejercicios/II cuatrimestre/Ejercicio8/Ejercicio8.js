// Crea una función que tome un array de números y elimine los elementos
// duplicados. Muestra el array resultante en un elemento HTML.

function eliminarDuplicados(array){

    console.log("array original: ", array)
    
    let arrayLimpio = [];
    let existe;

    array.forEach(numero => {
        existe = arrayLimpio.find(elemento => elemento == numero);
        console.log("buscando: ", numero, "existe: ", !(existe === undefined))

        if (existe === undefined){
            arrayLimpio.push(numero);
        }
    })

    return arrayLimpio;
    
}

document.getElementById('botonDuplicados').addEventListener('click', () => {
    // obtener texto
    let numeros = document.getElementById('numerosIngresados').value;
    let array = numeros.split(',');

    // mostrar array resultado
    document.getElementById("resultado").innerHTML=eliminarDuplicados(array)

});


