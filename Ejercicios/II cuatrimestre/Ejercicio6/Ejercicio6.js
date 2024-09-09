// Crea una función que verifique si una palabra es un palíndromo (se lee igual de
// adelante hacia atrás). Muestra el resultado en un elemento HTML.

// Realizamos una función para verificar el palíndromo

function checkPalindrome() {
    const palabra = document.getElementById('wordInput').value;
    const cleanedWord = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    const esPalindromo = cleanedWord === reversedWord;

    document.getElementById('resultado').textContent = esPalindromo ? 'Es un palíndromo' : 'No es un palíndromo';
}
