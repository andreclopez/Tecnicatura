// Escribe una función llamada mayorQue que reciba dos números y retorne 
// cuál es mayor. Si son iguales, debe devolver "Son iguales".

function mayorQue() {
    // Entrada de números
    let number1 = parseFloat(prompt("Ingrese el primer número"));
    let number2 = parseFloat(prompt("Ingrese el segundo número"));

    // Uso if para comparar y continuo con else if 
    if (number1 > number2) {
        console.log("El primer número es mayor que el segundo ingresado");
    } else if (number1 < number2) { 
        console.log("El segundo número es mayor que el primer número ingresado");
    } else if (number1 === number2) {
        console.log("Ambos números son iguales");
    }
}

mayorQue();
