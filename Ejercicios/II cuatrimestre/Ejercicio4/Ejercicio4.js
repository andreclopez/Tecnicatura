const usuarios = [
    { nombre: "Andrea", apellido: "López", email: "andrea@gmail.com", edad: "18" },
    { nombre: "Valeria", apellido: "Monzón", email: "valeria@gmail.com", edad: "35"},
    { nombre: "Gabriela", apellido: "Ruiz", email: "gabriela@gmail.com", edad: "13" },
    { nombre: "Mario", apellido: "Panzavolta", email: "mario@gmail.com", edad: "36"},
    { nombre: "Cristian", apellido: "Perez", email: "cristian@gmail.com", edad: "16" }
];

const tablaUsuarios = document.getElementById("tablaUsuarios")
// let htmlString = ""

usuarios.forEach(usuario => {
    if (usuario.edad >= 18)
    tablaUsuarios.innerHTML += `
    <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.email}</td>
    <tr>
    `
})

// tablaUsuarios.innerHTML = htmlString