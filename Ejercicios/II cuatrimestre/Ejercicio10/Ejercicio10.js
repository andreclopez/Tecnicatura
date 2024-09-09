function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiouAEIOU";
    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

document.getElementById('botonContar').addEventListener('click', () => {
    // obtener texto
    let texto = document.getElementById('textoIngresado').value;
    let numeroDeVocales = contarVocales(texto);

    // mostrar resultado
    document.getElementById("resultado").innerHTML = `Número de vocales: ${numeroDeVocales}`;
});
