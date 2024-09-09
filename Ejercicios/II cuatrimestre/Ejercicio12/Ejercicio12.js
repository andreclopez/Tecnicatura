function elementoMasRepetido(array) {
    let frecuencia = {};
    let maxFrecuencia = 0;
    let elementoMasComun = null;

    for (const elemento of array) {
        frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
        if (frecuencia[elemento] > maxFrecuencia) {
            maxFrecuencia = frecuencia[elemento];
            elementoMasComun = elemento;
        }
    }

    return elementoMasComun;
}

document.getElementById('botonElementoRepetido').addEventListener('click', () => {
    // Obtener texto 
    let array = document.getElementById('elementoIngresado').value.split(','); // Convertir el texto en un array
    let resultado = elementoMasRepetido(array);

    // Mostrar resultado
    document.getElementById('resultado').innerText = `El elemento que más se repite es: ${resultado}`;
});
