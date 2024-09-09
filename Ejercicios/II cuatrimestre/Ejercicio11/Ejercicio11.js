// CONVERTIR TEMPERATURA.
// Crea una función que convierta grados Celsius a
// Fahrenheit y viceversa. Muestra el resultado en un elemento HTML.

// Desarrollo de la función

function convertToFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheitResult').innerText = celsius + '°C es igual a ' + fahrenheit.toFixed(2) + '°F';
}

function convertToCelsius() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsiusResult').innerText = fahrenheit + '°F es igual a ' + celsius.toFixed(2) + '°C';
}
