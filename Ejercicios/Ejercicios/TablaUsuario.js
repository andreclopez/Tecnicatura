let boton = document.getElementById("boton");
let tabla = document.getElementById("tablaUsuario")

boton.addEventListener("click", () =>{
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let edad = document.getElementById("edad");
    tabla.innerHTML += `<tr>
    <td>${nombre.value}</td>
    <td>${email.value}</td>
    <td>${edad.value}</td>
    </tr>`
    nombre.value=""
    email.value=""
    edad.value=""

})
    