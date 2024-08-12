let arrayStrings = [
    { nombre: "Andrea", apellido: "López", email: "andrea@gmail.com", edad: "18" },
    { nombre: "Valeria", apellido: "Monzón", email: "valeria@gmail.com", edad: "35"},
    { nombre: "Gabriela", apellido: "Ruiz", email: "gabriela@gmail.com", edad: "13" },
    { nombre: "Mario", apellido: "Panzavolta", email: "mario@gmail.com", edad: "36"},
    { nombre: "Cristian", apellido: "Perez", email: "cristian@gmail.com", edad: "16" }
];

// Definición de la función
function obtenerEmails(arrayStrings) {
    let emails = [];

    arrayStrings.forEach(usuario => {
        if (usuario.edad >= 18) {
            emails.push(usuario.email);
        }
    });

    return emails;
}

let listaEmails = obtenerEmails(arrayStrings);

// Salida
let salida = document.getElementById("resultado");
salida.innerHTML = `Lista de emails: ${listaEmails.join(", ")}`;