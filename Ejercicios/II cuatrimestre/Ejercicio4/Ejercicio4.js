let arrayStrings = [
    { nombre: "Andrea", apellido: "López", email: "andrea@gmail.com", edad: "18" },
    { nombre: "Valeria", apellido: "Monzón", email: "valeria@gmail.com", edad: "35"},
    { nombre: "Gabriela", apellido: "Ruiz", email: "gabriela@gmail.com", edad: "13" },
    { nombre: "Mario", apellido: "Panzavolta", email: "mario@gmail.com", edad: "36"},
    { nombre: "Cristian", apellido: "Perez", email: "cristian@gmail.com", edad: "16" }
];

// Definición de la función emails
function obtenerEmails(arrayStrings) {
    let emails = [];

    arrayStrings.forEach(usuario => {
        if (usuario.edad >= 18) {
            emails.push(usuario.email);
        }
    });

    return emails;
}

// Definición de la función usuarios
function obtenerUsuarios(arrayStrings) {
    let usuarios = [];

    arrayStrings.forEach(usuario => {
        if (usuario.edad >= 18) {
            usuarios.push(`${usuario.nombre} ${usuario.apellido}`);
        }
        
    });

    return usuarios;
}

let listaUsuarios = obtenerUsuarios(arrayStrings);
let listaEmails = obtenerEmails(arrayStrings);

// Salida para mostrar emails
let salidaEmails = document.getElementById("resultadoEmails");
salidaEmails.innerHTML = `Lista de emails: ${listaEmails.join(", ")}`;

// Salida para mostrar usuarios
let salidaUsuarios = document.getElementById("resultadoUsuarios");
salidaUsuarios.innerHTML = `Lista de usuarios: ${listaUsuarios.join(", ")}`;
