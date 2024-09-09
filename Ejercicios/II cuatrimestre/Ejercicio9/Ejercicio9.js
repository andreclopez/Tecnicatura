function capitalizarPalabras(palabras) {
    let palabrasCapitalizadas = ""
    
    if (palabras !== undefined){
        let arrayPalabras = palabras.split(" ")

        arrayPalabras.forEach(elemento => {
            if (elemento.length > 0) {
                palabrasCapitalizadas += elemento[0].toUpperCase() + elemento.slice(1) + " ";
            }
        })

    }

    return palabrasCapitalizadas
}

document.getElementById('botonCapitalizar').addEventListener('click', () => {
    // obtener texto
    let palabrasIngresadas= document.getElementById('cadenaTexto').value;

    // mostrar resultado
    document.getElementById("resultado").innerHTML=capitalizarPalabras(palabrasIngresadas)
})