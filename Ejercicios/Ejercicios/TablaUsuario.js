function updateTablaUsuarios() {
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    const localStorage = window.localStorage;
    
    tablaUsuarios.innerHTML = "";

    let usuarios = JSON.parse(localStorage.getItem("users"));
    
    if (usuarios === undefined || usuarios === null) {
        usuarios = [];
    }

    usuarios.forEach(user => {
        tablaUsuarios.innerHTML += `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td>${user.edad}</td>
                <td><button type="button" id="Eliminar">Eliminar</button></td>
            </tr>
        `;
    });
}

updateTablaUsuarios();

document.getElementById("guardar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;

    let user = {
        nombre: nombre, 
        email: email, 
        edad: edad
    };

    let usuarios = JSON.parse(localStorage.getItem("users"));

    if (usuarios === null) {
        usuarios = [user];
    } else {
        usuarios.push(user);
    }

    localStorage.setItem("users", JSON.stringify(usuarios));

    updateTablaUsuarios();

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("edad").value = "";
});

document.querySelector(".Eliminar").addEventListener("click",() =>{
    console.log("click")
})