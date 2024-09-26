function updateTablaUsuarios() {
    const tablaUsuarios = document.getElementById("tablaUsuarios")
    const localStorage = window.localStorage;
    
    tablaUsuarios.innerHTML = ""

    let usuarios = JSON.parse(localStorage.getItem("users"))
    
    if (usuarios === undefined || usuarios === null) {
        usuarios = []
    }

    usuarios.forEach(user => {
        tablaUsuarios.innerHTML += `
            <tr id="${user.email}">

                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td>${user.edad}</td>

                <td>
                    <button data-id="${user.email}" class="eliminar">Eliminar</button>
                    <button data-id="${user.email}" class="editar">Editar</button>
                </td>

            </tr>
        `
    });
    
}

updateTablaUsuarios()

document.getElementById("guardar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    let edad = document.getElementById("edad")

    let user = {
        nombre: nombre.value, 
        email: email.value, 
        edad: edad.value
    }

    let usuarios = JSON.parse(localStorage.getItem("users"))

    if (usuarios === null) {
        usuarios = [user]
    } else {
        usuarios.push(user)
    }

    localStorage.setItem("users", JSON.stringify(usuarios))

    updateTablaUsuarios()
})

document.getElementById("tablaUsuarios").addEventListener("click", (event) => {
    if (event.target.className === "eliminar") {
        // Identificar usuario
        let button = event.target;
        let emailUsuario = button.dataset.id;
        console.log("Usuario elegido: ", emailUsuario)

        // Actualizar localStorage
        let usuarios = JSON.parse(localStorage.getItem("users"));
        usuarios = usuarios.filter(user => user.email !== emailUsuario);
        localStorage.setItem("users", JSON.stringify(usuarios));

        // Volver a renderizar tabla
        updateTablaUsuarios();
    }
})