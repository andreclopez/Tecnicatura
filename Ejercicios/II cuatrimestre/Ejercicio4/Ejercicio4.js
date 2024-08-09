let arrayStrings = [
    { nombre: "Andrea", apellido: "López", email: "andrea@gmail.com", edad: "18" },
    { nombre: "Valeria", apellido: "Monzón", email: "valeria@gmail.com", edad: "35"},
    { nombre: "Gabriela", apellido: "Ruiz", email: "gabriela@gmail.com", edad: "13" },
    { nombre: "Mario", apellido: "Panzavolta", email: "mario@gmail.com", edad: "36"},
    { nombre: "Cristian", apellido: "Perez", email: "cristian@gmail.com", edad: "16" },
];

let buscar = 'email'

// Procesamiento
function obtenerLista(array, clave) {
    let email = 0;

    array.forEach(item => {

        if (item === clave) {

            email++;

        }

    })

    return email;
}

let email = obtenerLista(array=arrayStrings, clave=buscar)

// Salida
let salida = document.getElementById("resultado")

salida.innerHTML = `Lista de emails: ${buscar}, Cantidad: ${email}`